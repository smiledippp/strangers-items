import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";

const newPost = (info) => {
    const {setuserPost, setuserList, userPost, userList} = info;
    //setting all the info required to make a post
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [delivery, setDelivery] = useState('');

    // function clearForm() {
    //     setTitle("");
    //     setDescription("");
    //     setPrice("");
    //     setLocation("");
    //     setDelivery(false);
    //   }

    return (
        <div>
              <div key={idx} style={{border: "2px solid black"}}>
                <p>Name: {newProduct.title} </p>
                <p>Description: {newProduct.description}</p>
                <p>Price: {newProduct.price}</p>
                <button onClick={<Route path='/allposts'></Route>}>Click Me</button>
              </div>
        </div>
    )      
};

export default newPost;