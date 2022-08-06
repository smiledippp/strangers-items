import React from "react";
import reactDOM from 'react-router-dom';
import { useState } from "react";

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

      
}