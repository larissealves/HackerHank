import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const [listPosts, setListPosts] = useState([])

  const [isFormValid, setformIsValid] = useState(false);

  const checkFormIsValid = () => {
    if (inputTitle.trim() !== "" && inputDescription.trim() !== "") {
      setformIsValid(true);
      return true;
    }
    setformIsValid(false);
    return false;
  }

  const clearForm = () => {
    setInputTitle("");
    setInputDescription("");
    setformIsValid(false);
  };

  const addPosts = () => {
    const thisFormValid = checkFormIsValid();
    if (!thisFormValid) return;

    setListPosts([
      ...listPosts, {
        title: inputTitle,
        description: inputDescription,
      },
    ]);
    clearForm();

  };

  const handleForm = (event) => {
    if (event.target.name === "title") {
      setInputTitle(event.target.value)
      return;
    }
    setInputDescription(event.target.value);
    return;
  };

  const onDelete = (index) => {
    //const listPostDeleteItem = [...listPosts];
    //listPostDeleteItem.splice(index,1);
    setListPosts((prevPosts) =>
      prevPosts.filter((_, i) => i !== index)
    );
    //setListPosts(listPostDeleteItem);
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input
          onChangeInputs={handleForm}
          inputTitle={inputTitle}
          inputDescription={inputDescription}
        />
        <button data-testid="create-button" className="mt-10"
          onClick={addPosts}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay postDisplay={listPosts} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default Home;


=========================

import React from "react";

function PostDisplay({ postDisplay = [], onDelete }) {
  console.log("LISTA DE POST ==> ", postDisplay);
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {postDisplay.map((item, index) => (
        <div className="post-box" key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button
          onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;


=========================================
  
import React from "react";

function Input({onChangeInputs, inputTitle, inputDescription}) {
  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" placeholder="Enter Title" 
      name="title"
      value={inputTitle} data-testid="title-input"
      onChange={(e) => onChangeInputs(e)} />

      <textarea className="mt-10 w-100" placeholder="Enter Description" 
      value={inputDescription} data-testid="description-input" 
      name="description"
      onChange={(e) => onChangeInputs(e)}/>
    </div>
  );
}

export default Input;

  





  
