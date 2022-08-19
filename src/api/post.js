const url="https://strangers-things.herokuapp.com/2206-FTB-ET-WEB-FT-B"

export const fetchAllPosts = async () => {
    const response = await fetch(`${url}/allposts`);
    const result = await response.json();
    return result;
  };
  
  export const fetchPostById = async (id) => {
    const response = await fetch(`${url}/posts/${id}`);
    const result = await response.json();
    return result;
  };
  export const newPost = async (token, postObj) => {
    const response = await fetch(`${url}/addposts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ post: postObj }),
    });
    const result = await response.json();
    return result;
  };
  export const deletePost = async (id, token) => {
    const response = await fetch(`${url}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  };
  export const editPost = async (token, postObj, postId) => {
    const response = await fetch(`${url}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ post: postObj }),
    });
    const result = await response.json();
    return result;
  };
  export const sendMessage = async (postId, token, content) => {
    const response = await fetch(`${url}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message: { content: content } }),
    });
  
    const result = await response.json();
    return result;
  };