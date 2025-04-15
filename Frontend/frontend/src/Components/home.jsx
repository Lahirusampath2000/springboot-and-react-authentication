import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="container-fluid" style={{ backgroundColor: '#f8f9fa', height: '100vh' }}>
            <div className="row">
            <div className="col-12 text-center" style={{ padding: '2rem' }}>
                <h1>Welcome to the Home Page!</h1>
            </div>
            </div>
        </div>  
    </div>
  );
};

export default Home;
