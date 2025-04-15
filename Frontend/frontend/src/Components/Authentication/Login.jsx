import React from "react";
import './Assets/Authentication.css';


const loadExternalCSS = (href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};

const Authentication = () => {
  // Load external styles on component mount
  React.useEffect(() => {
    loadExternalCSS("https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css");
    loadExternalCSS("https://unpkg.com/bs-brain@2.0.4/components/registrations/registration-3/assets/css/registration-3.css");
  }, []);

  return (
    <div className="authentication-container">
      {/* Registration 3 - Bootstrap Brain Component */}
      <section className="p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-12 col-md-6 bsb-tpl-bg-platinum">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                    <img  style={{ 
                        width: '660px',
                        height: '550px',
                        objectFit: 'cover',
                        display: 'block'
                        }}
                        loading="lazy"
                        src="/images/auth image.jpg"
                        
                        />
                
                </div>
            </div>

            {/* Right Side */}
            <div className="col-12 col-md-6 bsb-tpl-bg-lotion" >
              <div className="p-3 p-md-4 p-xl-5">
                <div className="mb-5">
                  <h2 className="h3">Login</h2>
                  <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to Login</h3>
                </div>

                <form>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
        
                   
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                      <input type="password" className="form-control" id="password" required />
                    </div>
                    
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                      </div>
                    </div>
                  </div>
                </form>

                <hr className="mt-5 mb-4 border-secondary-subtle" />
                <p className="m-0 text-secondary text-end">Don't have an Account? <a href="/signup" className="link-primary text-decoration-none">Sign up</a></p>

        
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Authentication;
