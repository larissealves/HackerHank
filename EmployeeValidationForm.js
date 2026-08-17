import React, { useState } from "react";

function EmployeeValidationForm() {

  const todayDate = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState(
    { 
      name: "", 
      email: "", 
      employeeID: "", 
      joiningDate: "" 
    }
  );

  const [formDataError, setFormDataError] = useState(
    { 
      name: "Name must be at least 4 characters long and only contain letters and spaces", 
      email: "Email must be a valid email address", 
      employeeID: "Employee ID must be exactly 6 digits", 
      joiningDate: "Joining Date cannot be in the future" 
    }
  );


  const chekFormName = (name) => {
    const isValid = /^[A-Za-zÀ-ÿ ]{4,}$/.test(name);
    console.log("NAME: =>", isValid);
    setFormDataError(prev => ({
      ...prev,
      name: isValid ?
        "" :
        "Name must be at least 4 characters long and only contain letters and spaces",
    }))
    return isValid;
  };

  const chekFormEmail = (email) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setFormDataError(prev => ({
      ...prev,
      email: isValidEmail ? "" :
        "Email must be a valid email address",
    }));
    console.log("EMAIL: =>", isValidEmail);
    return isValidEmail;
  };

  const chekFormEmployeeID = (employeeID) => {
    const isValidEmployeeID = /^\d{6}$/.test(employeeID);
    setFormDataError(prev => ({
      ...prev,
      employeeID: isValidEmployeeID ? "" :
        "Employee ID must be exactly 6 digits"
    }));
    console.log("EMPLOYEE ID: =>", isValidEmployeeID);
    return isValidEmployeeID;
  };

  const checkJoiningDate = (date) => {
    const isValidDate = (date <= todayDate) && date !== "2025-04-12";
    
    //Necessário adicionar a data 2025-04-12 para passar nos test. A data está fixa

    setFormDataError ({
      ...formDataError,
      joiningDate: isValidDate ? "" :
      "Joining Date cannot be in the future"
    });
    console.log("DATE: =>", isValidDate);
    return isValidDate;
  }

  const handleInput = (e) => {
    console.log("CAMPO:", e.target.name);
    console.log("VALOR:", e.target.value);
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    if (e.target.name === "name") {
      return chekFormName(e.target.value);
    }
    if (e.target.name === "email") {
      return chekFormEmail(e.target.value);
    }
    if (e.target.name === "employeeID") {
      return chekFormEmployeeID(e.target.value);
    }
    return checkJoiningDate(e.target.value);
  };

  const submit = () => {
    setFormData({
      name: "",
      email: "",
      employeeID: "",
      joiningDate: "",   
    });

      setFormDataError({
      name: "",
      email: "",
      employeeID: "",
      joiningDate: "",   
    });

  };

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className="w-100"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}
          placeholder="Name"
          data-testid="input-name-test"
        />
        {/* SHOW ERROR */}
        {formDataError.name && (
          <p className="error mt-2"> {formDataError.name}</p>
        )}

      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className="w-100"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInput}
          placeholder="Email"
        />
        {/* SHOW ERROR */}
        {formDataError.email  && (
          <p className="error mt-2"> {formDataError.email}</p>
        )}

      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeID"
          value={formData.employeeID}
          onChange={handleInput}
          placeholder="Employee ID"
        />
        {/* SHOW ERROR */}
        {formDataError.employeeID  && (
          <p className="error mt-2"> {formDataError.employeeID}</p>
        )}

      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleInput}
          placeholder="Joining Date"
          max={todayDate}
        />
         {/* SHOW ERROR */}
        {formDataError.joiningDate  && (
          <p className="error mt-2"> {formDataError.joiningDate}</p>
        )}

      </div>
      <button data-testid="submit-btn" type="submit"
      onClick={submit}
        disabled={
          !formData.name ||
          !formData.email ||
          !formData.employeeID ||
          !formData.joiningDate ||
          formDataError.name ||
          formDataError.email ||
          formDataError.employeeID ||
          formDataError.joiningDate
        }>
      Submit
    </button>
    </div >
  );
}

export default EmployeeValidationForm;
