import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="card w-30 m-auto oc-lightgreen">
      <p className="card-title txt-dark-overconsulting txt-dashed txt-line-height-xl ">Welcome to our OverConsulting library. Get started exploring our library or download it now to simplify your web development projects. Simplify and elevate your web development with our trusted OverConsulting library.</p>
      <div className="card-body">
        <div className='row'>
          <Link to="/get_started" className="btn btn-outlined btn-success">Get Started</Link>
          <Link to="/get_started" className="btn btn-outlined btn-success">Download</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
