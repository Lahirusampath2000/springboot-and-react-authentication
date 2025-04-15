import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/req/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const message = await response.text();

      if (!response.ok) {
        throw new Error(message || "Login failed");
      }

      alert(message);
      handleLogin();
      navigate("/");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="authentication-container">
      <section className="p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 bsb-tpl-bg-platinum">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                    <img  style={{ 
                        width: '660px',
                        height: '690px',
                        objectFit: 'cover',
                        display: 'block'
                        }}
                        loading="lazy"
                        src="/images/auth image.jpg"
                        
                        />
                
                </div>
            </div>

            <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
              <div className="p-3 p-md-4 p-xl-5">
                <div className="mb-5">
                  <h2 className="h3">Login</h2>
                  <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to Login</h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="name@example.com" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn bsb-btn-xl btn-primary" type="submit">Login</button>
                      </div>
                    </div>
                  </div>
                </form>

                <hr className="mt-5 mb-4 border-secondary-subtle" />
                <p className="m-0 text-secondary text-end">
                  Don't have an Account?{" "}
                  <Link to="/signup" className="link-primary text-decoration-none">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;