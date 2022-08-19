import React from "react";

const Login = (props) => {
    const {
        setLoggedIn,
        setUserName,
        userName,
        setPassword,
        password,
        setToken,
        token
      } = props;
  
       
      const checkLogin = (e) => {
        e.preventDefault();
        try {
          Login(userName, password, setToken, setLoggedIn);
    
        } catch (error) {
          console.error(error);
        }
      };
      console.log(userName);
      console.log(password);
   
      return (
     <> 
       <div className="log-in-container">
        <h1 className="page-title">Log In</h1>
        <form action="" className="form" onSubmit={e=> checkLogin(e)}>
            <input
            type="text"
            onChange={function(event) {
                setUserName(event.target.value);
                window.localStorage.setItem('username', event.target.value);
            }}
            name="username"
            id="usernameInput"
            required
            />
            <input
            type="text"
            onChange={function(event) {
                setPassword(event.target.value);
                window.localStorage.setItem('password', event.target.value);
            }}
            name="password"
            id="passwordInput"
            required
            />
            <button>Log In</button>
            <p>
            <a href="/register">create new account</a>
            </p>
        </form>
        </div>
            
        
    </> 
  );
};
export default Login;