import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const loadExternalCSS = (href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    loadExternalCSS("https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css");
    loadExternalCSS("https://unpkg.com/bs-brain@2.0.4/components/registrations/registration-3/assets/css/registration-3.css");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/req/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const message = await response.text(); // ← not .json() anymore
  
      if (!response.ok) {
        throw new Error(message || "Login failed");
      }
  
      alert(message); // or toast(message);
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
            {/* Left Side Image */}
            <div className="col-12 col-md-6 bsb-tpl-bg-platinum">
              {/* ... existing image code ... */}
            </div>

            {/* Right Side Form */}
            <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
              <div className="p-3 p-md-4 p-xl-5">
                <div className="mb-5">
                  <h2 className="h3">Login</h2>
                  <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to Login</h3>
                </div>

                <form onSubmit={handleLogin}>
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
                  Don't have an Account? <a href="/signup" className="link-primary text-decoration-none">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Authentication;