// Shape class
class Shape {
	constructor(name, color) {
	  this._name = name;
	  this._color = color;
	}
  
	get name() {
	  return this._name;
	}
  
	get color() {
	  return this._color;
	}
  
	getInfo() {
	  return `Name: ${this._name}, Color: ${this._color}`;
	}
  }
  
  // Array to store created shapes
  let shapes = [];
  
  // Function to create and append a new shape to the grid container
  function createShape() {
	// Check if the limit of shapes has been reached
	if (shapes.length >= 20) {
		document.getElementById('grid-container').innerHTML ="Cannot create more than 20 shapes! Restart the page to continue!";
	  return;
	}
  
	// Get selected shape and color
	let shapeSelect = document.getElementById("shape-select");
	let shape = shapeSelect.value;
	let colorSelect = document.getElementById("color-select");
	let color = colorSelect.value;
  
	// Create new Shape object and add to array
	let newShape = new Shape(shape, color);
	shapes.push(newShape);
  
	// Create new shape div and append to grid container
	let shapeDiv = document.createElement("div");
	shapeDiv.classList.add(shape);
	shapeDiv.style.backgroundColor = color;
	shapeDiv.addEventListener("click", function () {
	  alert(newShape.getInfo());
	});
	let gridContainer = document.getElementById("grid-container");
	gridContainer.appendChild(shapeDiv);
  }
  
  // Add event listener to Create button
  let createBtn = document.getElementById("create-btn");
  createBtn.addEventListener("click", createShape);
  