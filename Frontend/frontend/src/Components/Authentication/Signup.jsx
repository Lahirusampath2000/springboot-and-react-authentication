import React, { useState } from "react";
import './Assets/Authentication.css';

const loadExternalCSS = (href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};

const Authentication = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
    agreed: false
  });

  React.useEffect(() => {
    loadExternalCSS("https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css");
    loadExternalCSS("https://unpkg.com/bs-brain@2.0.4/components/registrations/registration-3/assets/css/registration-3.css");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agreed) {
      alert('Please agree to the terms and conditions');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/req/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });
      const responseData = await response.json();
      if (response.ok) {
        
        alert('Registration successful!');
        // You can redirect to login page here
         window.location.href = '/login';
      } else {
        if (response.status === 409) {
          alert(`Registration failed: ${responseData.message}`);
      } else {
          alert(`Registration failed: ${responseData.message || 'Unknown error'}`);
      }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="authentication-container">
      <section className="p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row">
            {/* Left Side - Image */}
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

            {/* Right Side - Form */}
            <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
              <div className="p-3 p-md-4 p-xl-5">
                <div className="mb-5">
                  <h2 className="h3">Registration</h2>
                  <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="name" className="form-label">Full Name <span className="text-danger">*</span></label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Your Name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                   
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="name@example.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        required 
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="role" className="form-label">Role <span className="text-danger">*</span></label>
                      <select 
                        className="form-select" 
                        id="role" 
                        required 
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="agreed" 
                          required 
                          checked={formData.agreed}
                          onChange={handleChange}
                        />
                        <label className="form-check-label text-secondary" htmlFor="agreed">
                          I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                      </div>
                    </div>
                  </div>
                </form>

                <hr className="mt-5 mb-4 border-secondary-subtle" />
                <p className="m-0 text-secondary text-end">Already have an account? <a href="/login" className="link-primary text-decoration-none">Sign in</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Authentication;