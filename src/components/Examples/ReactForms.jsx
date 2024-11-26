// GOAL: To learn about html forms in react which require state management
import React from "react";

function ReactForms() {
  // anytime in your component you have dynamic values, you need to initialize them using state management, aka the useState hook

  // initialize the state of the data structute ans put the initial values
  const [formData, setformData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isRegistered: false,
    employmentStatus: "",
    favSeason: "",
  });

  // event listener function that willbe calledwhen event happens
  function handleChange() {
    // destructure the event target object aka e.target
    const { name, value, type, checked } = e.target;
    // what do you do  when the user gives you  the value
    setformData((prevstate) => {
      return {
        ...prevstate,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    // this prevents  the formgromgetting  reset immidiately
    e.preventDafault();
    // send the dat to the server  if you have it
    // in the  meantime we will console log it
    console.log(formData);
  }

  return (
    <form>
      <label htmlFor="firstName">Enter first name</label>
      <input
        className="textInput"
        type="text"
        name="firstName"
        id="firstName"
        placeholder="enter your first name"
        value={formData.firstName} //controlled input
        onChange={handleChange}
      />
      <label htmlFor="lastName">Enter last name</label>
      <input
        className="textInput"
        type="text"
        name="lastName"
        id="lastName"
        placeholder="enter your last name"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label htmlFor="email">Enter email</label>
      <input
        className="textInput"
        type="text"
        name="emailInput"
        id="emailInput"
        placeholder="enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      {/* {comments dield ffrom web form} */}
      <textarea
        value={formData.comments}
        placeholder="enter comments"
        onChange={handleChange}
        name="comments"
      />

      {/* implementation of react checkboxes */}
      <input
        type="checkbox"
        id="isRegistered"
        checked={formData.isRegistered}
        onChange={handleChange}
        name="isRegistered"
      />

      <label htmlFor="isRegistered">Are you a registered user</label>

      {/* radio buttons in react - employment status*/}
      <fieldset>
        <legend>What isyouremployment status:</legend>
        <input
          type="radio"
          id="unemployed"
          name="employmentStatus"
          value="unemployed"
          onChange={handleChange}
        />
        <label htmlFor="unemployed">unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time"
          name="employmentStatus"
          value="part-time"
          onChange={handleChange}
        />
        <label htmlFor="part-time">part-time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="employmentStatus"
          value="full-time"
          onChange={handleChange}
        />
        <label htmlFor="full-time">full-time</label>
      </fieldset>
      {/* favorite season input fields */}
      <select
        name="favSeason"
        id="favSeason"
        value={formData.favSeason}
        onChange={handleChange}
      >
        <option value="">choose your favorite option</option>
        <option value="summer">summer</option>
        <option value="spring">spring</option>
        <option value="fall">fall</option>
        <option value="winter">winter</option>
      </select>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default ReactForms;
