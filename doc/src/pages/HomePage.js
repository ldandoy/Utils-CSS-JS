import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="">
      <div className='flex-ai-center'> 
      <p className="home-text txt-center card-title card w-30 txt-white-100 txt-dashed txt-line-height-xl ">Welcome to our OverConsulting library. Get started exploring our library or download it now to simplify your web development projects. Simplify and elevate your web development with our trusted OverConsulting library.</p>
      <div className="home-buttons card-body grid gap-1 d-flex justify-center align-center">
        <Link to="/get_started" className="home-button btn btn-outlined btn-success card w-30">Get Started</Link>
        <Link to="/get_started" className="home-button btn btn-outlined btn-success card w-30">Download</Link>
      </div>
      </div>
    </div>
  );
}

export default HomePage;
