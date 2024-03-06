const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });

  // Function for sorting by name
  const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };
  // Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // Select the `nameSorter` link
  //const nameSorter = document.querySelector("#name-sorter");
  
  // Add an event listener
  //nameSorter.addEventListener("click", nameSorterClickHandler);

  //console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");

const submitHandler = (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const errors = validateForm(formData);

  // Clear all previous errors
  const errorElements = document.querySelectorAll(".error");
  for (let element of errorElements) {
    element.style.display = "none";
  }

  // Display any new errors
  Object.keys(errors).forEach((key) => {
    // Find the specific error element
    const errorElement = document.querySelector(`#${key}-form .error`);
    errorElement.innerHTML = errors[key];
    errorElement.style.display = "block";
  });
};
const main = () => {
  // Get the form element
  const form = document.querySelector("#park-form");

  // Attach the submit handler
  form.addEventListener("submit", submitHandler);
};
window.addEventListener("DOMContentLoaded", main);

function validateExists(value) {
  return value && value.trim();
}

function validateForm(formData) {
  const errors = {};

  // Check if name was entered
  if (!validateExists(formData.get("name"))) {
    errors.name = "Please enter a name";
  }

  // Check if rating was entered
  if (!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating";
  }

  // Check if description was entered
  if (!validateExists(formData.get("description"))) {
    errors.description = "Please enter short description";
  }

  // Check if established date was entered
  if (!validateExists(formData.get("established"))) {
    errors.established = "Please enter date";
  }

  // Check if area was entered
  if (!validateExists(formData.get("area"))) {
    errors.area = "Please enter the area of the park";
  }

  // Check if location date was entered
  if (!validateExists(formData.get("location"))) {
    errors.location = "Please enter the location of the park";
  }

  return errors;
}
