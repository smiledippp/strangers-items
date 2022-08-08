import React from "react";
import styled from 'styled-components';

const postContainer = styled.div`
    background color: black;
    border: 1px solid;
    border-radius: 3%
    box-shadow: 0 3px 5px -2px lavender;
`;

const postTitle = styled.div `
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space between;
    align-items: center;
    border-radius: 3px 3px 0 0;
`;

const postContent = styled.div`
    padding: 10px
`;

PostMessage = styled.div`
background: grey;
border-radius: 0 0 2px 2px;
padding: 5px
`;

function onePost(){
    const {
        posts: {title, description, price, location, delivery},
     } = props;

    return(
        <PostContainer>
        <PostTitle>
          <h3>{title}</h3>
          {author.username === localStorage.getItem("name")}
        </PostTitle>
        <PostContent>
          <div>
            <strong>location:</strong> {location}
          </div>
          <div>
            <strong>item description:</strong> {description}
          </div>
          <div>
            <strong>price:</strong> {price}
          </div>
          <div>
            <strong>from:</strong> {author.username}
          </div>
          <div>
            <strong>include delivery? :</strong> {delivery ? "Yes" : "No"}
          </div>
        </PostContent>
      </PostContainer>
    );
}
export default onePost;