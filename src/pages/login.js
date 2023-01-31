import React, { useState } from "react";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginScreen, RootLayout } from "../styles/styled-components";

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const logginUser = (e) => {
    e.preventDefault();

    if (data.email && data.password) {
      const loginData = {email: data.email, password: data.password};

      try {
        axios.post(`${process.env.REACT_APP_LOGIN_ENDPOINT}`, loginData)
          .then((res) => {
            if (res.data.access_token) {
              toast.success(`Welcome ${data.email}!`)
              setTimeout(() => {
                window.location.href = "/dashboard";
              }, 3000);
            };
          });
      } catch (err) {
        if (err.message === "Request failed with status code 400" || err.message === "Request failed with status code 401") {
          toast.error("Incorrect username or password, please try again");
        }
      }
    }
    else if (!!data.email) {
      console.log("please enter your email address");
    }
    else if (!!data.password) {
      console.log("Please enter your password");
    }
  }

  return (
    <>
      <RootLayout>
        <LoginScreen onSubmit={logginUser}>
          <div>
            <h3>Sign In</h3>
            <p>Enter your credentials to sign in!.</p>
          </div>
          <div>
            <label>Email</label>
            <input type="text" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} placeholder="Email"/>
          </div>
          <div>
            <label>Password</label>
            <input type="text" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} placeholder="Password"/>
          </div>
          <button type="submit"> Sign In</button>
        </LoginScreen>
      </RootLayout>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Login;
