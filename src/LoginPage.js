import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      const response = await fetch(
        "https://private-6cf67-mertefekarakose.apiary-mock.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ UserName: username, Password: password }),
        }
      );

      const data = await response.json();

      if (response.status === 201 && data.Result === "İşlem Başarılı" && username === "mertefe" && password === "1234") {
        navigate("/formCustomer"); // Başarılı giriş sonrası yönlendirme
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src="../public/assets/admin/layout3/img/logo-big.png" alt="" />
      </div>
      <div className="content">
        <form className="login-form" onSubmit={handleLogin}>
          <h3 className="form-title">Login to your account</h3>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group button-container">
            <button type="submit" className="btn blue">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
