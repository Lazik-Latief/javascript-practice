// ============================================================
//  TOPIC 5: HIGHER-ORDER FUNCTIONS
//  Functions that take other functions as arguments OR return
//  functions. The backbone of functional-style JavaScript.
// ============================================================

const products = [
  { id: 1, name: "Laptop",   price: 75000, category: "Electronics", inStock: true  },
  { id: 2, name: "Phone",    price: 30000, category: "Electronics", inStock: true  },
  { id: 3, name: "Desk",     price: 12000, category: "Furniture",   inStock: false },
  { id: 4, name: "Chair",    price: 8000,  category: "Furniture",   inStock: true  },
  { id: 5, name: "Headset",  price: 5000,  category: "Electronics", inStock: true  },
  { id: 6, name: "Monitor",  price: 22000, category: "Electronics", inStock: false },
];


// ─────────────────────────────────────────
//  .map() — transform every element
// ─────────────────────────────────────────

// Add a 'discountedPrice' field (10% off)
const withDiscount = products.map((p) => ({
  ...p,
  discountedPrice: Math.round(p.price * 0.9),
}));
console.log("Discounted:", withDiscount.map((p) => `${p.name}: ₹${p.discountedPrice}`));

// Extract just the names
const names = products.map((p) => p.name);
console.log("Names:", names);


// ─────────────────────────────────────────
//  .filter() — keep elements matching a condition
// ─────────────────────────────────────────

const inStock       = products.filter((p) => p.inStock);
const electronics   = products.filter((p) => p.category === "Electronics");
const affordable    = products.filter((p) => p.price < 20000);

console.log("In stock:", inStock.map((p) => p.name));
console.log("Electronics:", electronics.map((p) => p.name));
console.log("Under ₹20k:", affordable.map((p) => p.name));


// ─────────────────────────────────────────
//  .reduce() — boil an array down to a single value
// ─────────────────────────────────────────

// Total value of all in-stock items
const totalValue = products
  .filter((p) => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);
console.log("Total in-stock value: ₹" + totalValue.toLocaleString("en-IN"));

// Group products by category
const byCategory = products.reduce((groups, p) => {
  const key = p.category;
  groups[key] = groups[key] || [];
  groups[key].push(p.name);
  return groups;
}, {});
console.log("By category:", byCategory);

// Build a lookup map by id
const productMap = products.reduce((map, p) => {
  map[p.id] = p;
  return map;
}, {});
console.log("Product #3:", productMap[3].name); // → Desk


// ─────────────────────────────────────────
//  .find() & .findIndex()
// ─────────────────────────────────────────

const laptop      = products.find((p) => p.name === "Laptop");
const laptopIndex = products.findIndex((p) => p.name === "Laptop");
console.log("Found:", laptop?.name, "at index", laptopIndex);


// ─────────────────────────────────────────
//  .some() & .every()
// ─────────────────────────────────────────

const anyOutOfStock = products.some((p)  => !p.inStock);   // at least one
const allAffordable = products.every((p) => p.price < 100000); // all

console.log("Any out of stock?", anyOutOfStock); // → true
console.log("All under ₹1L?",   allAffordable);  // → true


// ─────────────────────────────────────────
//  .sort() — sort in place (use spread to avoid mutation)
// ─────────────────────────────────────────

const byPrice = [...products].sort((a, b) => a.price - b.price); // ascending
const byName  = [...products].sort((a, b) => a.name.localeCompare(b.name));

console.log("Cheapest first:", byPrice.map((p) => `${p.name}(₹${p.price})`));
console.log("Alphabetical:", byName.map((p) => p.name));


// ─────────────────────────────────────────
//  .flatMap() — map then flatten one level
// ─────────────────────────────────────────

const orders = [
  { orderId: 1, items: ["Laptop", "Headset"] },
  { orderId: 2, items: ["Chair"] },
  { orderId: 3, items: ["Phone", "Monitor", "Desk"] },
];

const allItems = orders.flatMap((o) => o.items);
console.log("All ordered items:", allItems);
// → ['Laptop', 'Headset', 'Chair', 'Phone', 'Monitor', 'Desk']


// ─────────────────────────────────────────
//  CUSTOM higher-order functions
// ─────────────────────────────────────────

// --- pipe: compose functions left-to-right ---
const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);

const processProducts = pipe(
  (arr) => arr.filter((p) => p.inStock),
  (arr) => arr.sort((a, b) => a.price - b.price),
  (arr) => arr.map((p) => `${p.name} — ₹${p.price.toLocaleString("en-IN")}`),
);

console.log("Processed:", processProducts(products));


// --- curry: partially apply arguments ---
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...more) => curried(...args, ...more);
  };
}

const multiply  = curry((a, b) => a * b);
const double    = multiply(2);   // partially applied
const triple    = multiply(3);

console.log(double(5));  // → 10
console.log(triple(5));  // → 15
console.log([1,2,3,4].map(double)); // → [2, 4, 6, 8]


// ─────────────────────────────────────────
//  CHAINING everything together
// ─────────────────────────────────────────
const report = products
  .filter((p) => p.inStock && p.category === "Electronics")
  .sort((a, b) => b.price - a.price)
  .map(({ name, price }) => ({ name, price, formatted: `₹${price.toLocaleString("en-IN")}` }));

console.log("Electronics in-stock report:", report);


// ============================================================
//  KEY TAKEAWAYS
//  • map    — transform items → new array, same length
//  • filter — select items → new array, shorter or equal
//  • reduce — accumulate items → any single value
//  • find   — first match | findIndex — its position
//  • some / every — boolean checks across the array
//  • flatMap — map + flatten (one level)
//  • Compose HOFs with pipe/curry for reusable logic
// ============================================================
