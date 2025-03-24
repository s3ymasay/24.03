import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [result, setResult] = useState();
  const navigate = useNavigate();

  const myButtonClick = async () => {
    if (!name || !password) {
      setResult("Kullanıcı adı ve şifre boş bırakılamaz!");
      return;
    }
  
    try {
      let requestBody = {
        service_val_name: name,
        service_val_password: password,
      };
  
      const response = await axios.post(
        "https://www.mockachino.com/1b9b9eca-13b9-41/login",
        requestBody
      );
  
      if (response.data.result === "success") {
        localStorage.setItem("userName", name);
        navigate("/ListCargo");
      } else {
        setResult("Hatalı kullanıcı adı veya şifre");
      }
    } catch (error) {
      console.error("Login request failed:", error);
      setResult("Sunucu hatası! Lütfen tekrar deneyin.");
    }
  };

  
  return (
    <div class="page-md login"> 
    {/* class yazdım buraya css düzelsin diye ve indexteki diğer login sayfasının cssini sildim o yüzden çakışıyormuş */}
  
      {/* BEGIN SIDEBAR TOGGLER BUTTON */}
      <div className="menu-toggler sidebar-toggler"></div>
      {/* END SIDEBAR TOGGLER BUTTON */}
      {/* BEGIN LOGO */}
      <div className="logo">
        <a href="/ListCargo">
          <img
            src="../../assets/admin/layout3/img/logo-big-white.png"
            style={{ height: "17px" }}
            alt=""
          />
        </a>
      </div>
      {/* END LOGO */}
      {/* BEGIN LOGIN */}
      <div className="content">
        {/* BEGIN LOGIN FORM */}
        <form className="login-form" action="/ListCargo" method="post">
          <div className="form-title">
            <span className="form-title">Welcome.</span>
            <span className="form-subtitle">Please login.</span>
          </div>
          <div className="alert alert-danger display-hide">
            <button className="close" data-close="alert" />
            <span>Enter any username and password. </span>
          </div>
          <div className="form-group">
            {/*ie8, ie9 does not support html5 placeholder, so we just show field title for that*/}
            <label className="control-label visible-ie8 visible-ie9">
              Username
            </label>
            <input
              className="form-control form-control-solid placeholder-no-fix"
              type="text"
              autoComplete="off"
              placeholder="Username"
              name="userName"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="control-label visible-ie8 visible-ie9">
              Password
            </label>
            <input
              className="form-control form-control-solid placeholder-no-fix"
              type="password"
              autoComplete="off"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-actions">
            <button
              onClick={(e) => {
                e.preventDefault(); // Sayfanın yenilenmesini engeller
                myButtonClick();
              }}
              type="submit"
              className="btn btn-primary btn-block uppercase"
            >
              Login
            </button>
          </div>
          <div className="create-account">
        <p>
          <a href="/FormStudent">Create an account</a>
        </p>
      </div>
          {result}
        </form>
        {/* END LOGIN FORM */}
      </div>
    </div>
  );
}
export default Login;
