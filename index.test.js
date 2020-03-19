// This function simulates adding li to the DOM
function addListItemToDom(list) {
  list.forEach(inputValueInList => {
    toDoInput.value = inputValueInList;
    submit.click();
    toDoInput.value = "";
  })  
}

// Test suite 1 - Check the input values render correctly on the webpage
test("Check that input value correctly renders on the webpage", t => {
  checkArrayValue(['Cheese', 'Ham', 'Fish', 'Potatoes'], 2, 'Fish', t);
  checkArrayValue(['Cheese', 'Ham', 'Fish', 'Potatoes', 'Cheese', 'Ham', 'Fish', 'Potatoes'], 1, 'Fish', t);
});

function checkArrayValue (array, index, expectedValue, test) {
  addListItemToDom(array);  
  const newList = document.querySelectorAll('.listContainer__list-item');
  const arrayResult = Array.from(newList);  
  result = arrayResult[index].firstElementChild.nextElementSibling.textContent;  
  const expected = expectedValue;
  test.equal(result, expected, `List item at index ${index} expected to be ${expected} and it was ${result}`);
  let liNodes = document.querySelectorAll('li'); // This selects all of the li on the webpage
  liNodes.forEach(node => node.remove()); // This deletes all of the li on the webpage
}

// Test suite 2 - Check the to do list length renders correctly on the webpage
test("Check that multiple user inputs correctly render on the webpage", t => {
  checkArrayLength(['Cheese', 'Ham', 'Fish', 'Potatoes'], 4, t);
  checkArrayLength(['Cheese', 'Ham', 'Fish', 'Potatoes', 'Fish', 'Potatoes', 'Steak'], 5, t);
});

function checkArrayLength (array, expectedLength, test) {
  addListItemToDom(array);
  let liNodes = document.querySelectorAll('li');
  const result = liNodes.length;
  const expected = expectedLength;
  test.equal(result, expected, `List length expected to be ${expected} and it was ${result}`);
  liNodes.forEach(node => node.remove());
}














// This test can only check one value in one array each time
// test("Check that input value correctly renders on the webpage", t => {
//   addListItemToDom(['Walk my cat']);
//   const firstListItemText = document.querySelector('.itemCheckboxLabel').textContent;
//   t.equal(firstListItemText, "Walk my cat");
//   toDoInput.value = "";
//   const firstListItem = document.querySelector('.listContainer__list-item')
//   firstListItem.remove();
// });

// This test can only check one array.length in one array each time
// test("Check that multiple user inputs correctly render on the webpage", t => {
//   addListItemToDom(['Cheese', 'Ham', 'Fish', 'Potatoes']);
//   let liNodes = document.querySelectorAll('li');
//   const result = document.querySelectorAll('li').length;
//   const expected = 4;
//   t.equal(result, expected, `List length expected to be ${expected} and it was ${result}`);
//   liNodes.forEach(node => node.remove());
// });













// Old test function that was limited to only testing one array at a time.
// test("Check that multiple user inputs correctly render on the webpage", t => {
//   addListItemToDom(['Cheese', 'Ham', 'Fish', 'Potatoes']);
//   const liNodes = document.querySelectorAll('li');
//   const result = liNodes.length;
//   const expected = 4;
//   t.equal(result, expected, `List length expected to be ${expected} and it was ${result}`);
//   liNodes.forEach(node => node.remove());
// });
















// function checkLengthArr()

// test("Submitting a new task adds it to the list", t => {
  // User writes something in input
  // User clicks submit button
  // JS takes the input value
  // JS creates a template with a li, span, input, button
  // DOM manipulation li is appended to ul parent
// });   

<<<<<<< HEAD
// // Integration test for calculator 
||||||| a700bae
// // Integration test for calculator
=======
// Integration test for calculator
>>>>>>> master
// test("Uppercase feature correctly changes the user's input and updates the page", t => {
//   const input = document.querySelector("input"); // step 1
//   input.value = "hello world"; // step 2
//   const submitButton = document.querySelector("button[type='submit']");
//   submitButton.click(); // step 3
//   const result = document.querySelector("#result");
//   t.equal(result.textContent, "HELLO WORLD"); // step 4
//   result.textContent = ""; // reset so it doesn't affect the page/other tests
// });


