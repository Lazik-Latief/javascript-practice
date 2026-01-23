// Array of color names
let colors = ['black', 'grey', 'blue', 'green', 'yellow', 'brown', 'pink'];

// Selecting the ordered list from HTML
let list = document.getElementById('colorList');

// Loop through each color
for (let i = 0; i < colors.length; i++) {

  // Create a new list item
  let li = document.createElement('li');

  // Set text inside li
  li.innerText = colors[i];

  // Set background color same as color name
  li.style.backgroundColor = colors[i].toLowerCase();

  // Set text color
  li.style.color = "white";

  // Click event: change body background color
  li.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[i].toLowerCase();
  });

  // Add li to the list
  list.appendChild(li);
}
