import React from "react";

function ReactStateTutorial() {
  // declare all your state management stuff. NOTE:  for every type of value that will change in the app, you can create a state for it. 5 variables, 5 states
  // array -- initial state, meaning it has an initial value
  // when i add new items to the array, i should be  able to see/render the updated state of the array

  // step 1. declare the state. It is sourced from the main react library
  // think if thr itrm label as the getter and the setItem as the setter
  // the  label refers to the most up to date  variable inside the data structure, the other acts like a setter (it is used to update the value).
  // the  paramater if  useState is  considered the initial state, which is just the preexisting data in the data structure
  // the data structure is specified in the  initial state is  the same  data structure that will be saved in the item deconstructing
  const [items, setItems] = React.useState(["ArrItem 1", "ArrItem 2"]);

  const [num, setNum] = React.useState(10);

  function addNum() {
    console.log(num);
    const newNum = num + 1;
    setNum((prevstate) => [...prevstate, newNum]);
  }

  //   public member function - addItem() - this function will append the new item to the end of the previous  state, which in this case is an array.
  function addItem() {
    const newItem = `ArrItem ${items.length + 1}`;
    // the prevstate  is passwed to the logic in the body of the function which  is in brackets.
    setItems((prevState) => [...prevState, newItem]);
  }

  //  when using a .map higher order method, you must use the key
  const newItemsElements = items.map((item) => <p key={item}>{item}</p>);
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {/* {update state of the array } */}
      {newItemsElements}
      <button onClick={addNum}>add num</button>
    </div>
  );
}

export default ReactStateTutorial;
