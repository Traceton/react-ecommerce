import axios from "axios";

const API = "http://localhost:3001";

export let sendSignInCredentialsToServer = async (email, password) => {
  try {
    axios
      .post(`${API}/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        alert(`response from server -> ${response}`);
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    return false;
  }
};
// what server sends on correct login attempt
// res.json({
//     success: true,
//     token: "Bearer " + token,
//     user: {
//       id: user.id,
//       first_name: user.first_name,
//       last_name: user.last_name,
//       email: user.email,
//     },
//   }

export let sendSignOutCredentialsToServer = async (email) => {
  try {
    alert("signed out");
  } catch (error) {
    return false;
  }
};
