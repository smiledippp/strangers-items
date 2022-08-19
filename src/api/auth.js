import SignUp from '../components/SignUp';
const url="https://strangers-things.herokuapp.com/2206-FTB-ET-WEB-FT-B"
export const registerUser = async (username, password) => {
    console.log(username, password);
    const response = await fetch(`${url}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result;
  };
  export const loginUser = async (username, password) => {
    const response = await fetch(`${url}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
  
    const result = await response.json();
    console.log(result);
    return result;
};

export const myUser = async (token) => {
  const response = await fetch(`${url}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};