import React, { useState } from 'react';
import { newPost } from '../api/post';

function NewPost({ token }) {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [location, setLocation] = useState('');

return(
  <div>
    <form
      onSubmit={async (e) => {
        e.preventDefault();
          const result = await newPost(token, {
            title, description, price, location,
          });
        console.log(result);
      }}>
        <input placeholder='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
        <input placeholder='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
    <input placeholder='price'
        value={price}
        onChange={(e) => setPrice(e.target.value)} />
        <input placeholder='location'
        value={location}
        onChange={(e) => setLocation(e.target.value)} />

<button type='submit'>submit product </button>
    </form>
  </div>
  )
}

export default NewPost;