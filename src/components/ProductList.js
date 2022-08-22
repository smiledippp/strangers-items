import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { NewPost } from "./NewPost";

const ProductsList = (props) => {
    const history = useNavigate();
    const { posts, setPosts, token, userName, setPostId, postId } = props;
    useEffect(() => {
     
  async function fetchAllPosts() {
    try {
      const data = await fetch.json();
      setPosts(data.data.posts);
      return data;
    } catch (error) {
      console.error(error);
    }
    
  } 
  fetchAllPosts();
    }, []);
    
    useEffect(() => {
      console.log(postId);
    }, [postId, setPostId])
  return (
      <div>
        <div className="search-posts">
                  <h1>Posts</h1>
                  <form action="">
                      <label htmlFor="">Search Posts</label>
                      <input type="text" />
                  </form>
                  
              </div>
        {Object.values(posts).map((post, index) => {
          return (
          <div className='posts'>    
              <div key={index} className='post'>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p><b>Price:</b> {post.price}</p>
                  <p><b>Seller:</b> {post.author.username}</p>
                  <p><b>Location:</b> {post.location}</p>
                  {post.author.username !== userName ? <button>Send Message</button> :
                  <a onClick={ async () => {
                    await setPostId(post._id);
                    history.push('/mypost')
                    }}>
                    <button>View Post</button>
                  </a>
                  }
              </div>
          </div>
          );
        })}
      </div>
    );
  };

export default ProductsList;