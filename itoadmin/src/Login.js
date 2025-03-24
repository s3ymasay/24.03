import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username || !password) {
      setError("Kullanıcı adı ve şifre boş bırakılamaz!");
      return;
    }

    try {
      const response = await axios.post("https://www.mockachino.com/1b9b9eca-13b9-41/login", {
        UserName: username,
        Password: password,
      });

      if (response.data.result === "success") {
        localStorage.setItem("userName", username);
        navigate("/ListCargo"); // Başarılı giriş sonrası yönlendirme
      } else {
        setError("Hatalı kullanıcı adı veya şifre.");
      }
    } catch (error) {
      setError("Sunucu hatası! Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="page-md login">
      {/* class yazdım buraya css düzelsin diye ve indexteki diğer login sayfasının cssini sildim o yüzden çakışıyormuş */}

      {/* BEGIN SIDEBAR TOGGLER BUTTON */}
      <div className="menu-toggler sidebar-toggler"></div>
      {/* END SIDEBAR TOGGLER BUTTON */}
      {/* BEGIN LOGO */}
      {/* <div className="logo">
        <a href="/ListCargo">
          <img
            src="./assets/admin/layout3/img/logo-big-white.png"
            style={{ height: "17px" }}
            alt=""
          />
        </a>
      </div> */}
      {/* END LOGO */}
      {/* BEGIN LOGIN */}
      <div className="content">
        {/* BEGIN LOGIN FORM */}
        <form className="login-form" onSubmit={handleLogin}>
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
              onChange={(e) => setUsername(e.target.value)}
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
              onClick={handleLogin} // ✅ Doğru fonksiyon
              type="submit"
              className="btn btn-primary btn-block uppercase"
            >
              Login
            </button>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        {/* END LOGIN FORM */}
      </div>
    </div>
  );
}
export default Login;
