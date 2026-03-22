// ============================================================
//  TOPIC 3: PROTOTYPES & CLASSES
//  Every JS object has a hidden [[Prototype]] link.
//  Classes are modern syntax over the same prototype system.
// ============================================================

// --- Example 1: Prototype chain basics ---
const animal = {
  breathe() {
    console.log(`${this.name} is breathing`);
  },
};

const dog = Object.create(animal); // dog's prototype IS animal
dog.name = "Rex";
dog.breathe(); // → "Rex is breathing"  (inherited from animal)

console.log(Object.getPrototypeOf(dog) === animal); // → true
console.log(dog.hasOwnProperty("breathe"));          // → false (inherited)
console.log(dog.hasOwnProperty("name"));             // → true  (own prop)


// --- Example 2: Constructor functions (pre-ES6 style) ---
function Vehicle(make, model, year) {
  this.make  = make;
  this.model = model;
  this.year  = year;
}

// Methods live on the prototype — shared across all instances
Vehicle.prototype.describe = function () {
  return `${this.year} ${this.make} ${this.model}`;
};

const car = new Vehicle("Toyota", "Camry", 2022);
console.log(car.describe()); // → "2022 Toyota Camry"


// --- Example 3: ES6 Class syntax (recommended) ---
class Animal {
  // Private field (ES2022) — not accessible outside the class
  #sound;

  constructor(name, sound) {
    this.name  = name;
    this.#sound = sound;
  }

  speak() {
    console.log(`${this.name} says "${this.#sound}!"`);
  }

  // Static method — called on the class, not an instance
  static kingdom() {
    return "Animalia";
  }

  // Getter
  get info() {
    return `[Animal: ${this.name}]`;
  }
}

class Dog extends Animal {
  #tricks = [];

  constructor(name) {
    super(name, "Woof"); // must call super before using 'this'
  }

  learn(trick) {
    this.#tricks.push(trick);
    console.log(`${this.name} learned "${trick}"!`);
  }

  showTricks() {
    console.log(`${this.name}'s tricks:`, this.#tricks.join(", ") || "none yet");
  }

  // Override parent method
  speak() {
    super.speak();                        // call parent version too
    console.log(`(tail is wagging)`);
  }
}

const rex = new Dog("Rex");
rex.speak();
rex.learn("sit");
rex.learn("shake");
rex.showTricks();
console.log(rex.info);                // getter
console.log(Animal.kingdom());        // static method
console.log(rex instanceof Dog);      // → true
console.log(rex instanceof Animal);   // → true


// --- Example 4: Mixins — compose behaviour without deep inheritance ---
const Serializable = (Base) => class extends Base {
  toJSON() {
    return JSON.stringify(this);
  }

  static fromJSON(json) {
    return Object.assign(new this(), JSON.parse(json));
  }
};

const Timestamped = (Base) => class extends Base {
  constructor(...args) {
    super(...args);
    this.createdAt = new Date().toISOString();
  }
};

class User extends Timestamped(Serializable(Animal)) {
  constructor(name) {
    super(name, "Hello");
    this.role = "user";
  }
}

const u = new User("Alice");
console.log(u.toJSON());    // serialized
console.log(u.createdAt);   // timestamp injected by mixin


// ============================================================
//  KEY TAKEAWAYS
//  • Every object has [[Prototype]]; property look-up walks
//    the chain until found or null is reached.
//  • 'class' is syntactic sugar — the prototype chain still
//    powers inheritance under the hood.
//  • Use private fields (#field) for true encapsulation.
//  • Mixins let you compose behaviour without single-ancestor
//    limitation.
// ============================================================
