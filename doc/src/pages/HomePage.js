import React from 'react';
import { Link } from 'react-router-dom';
import '../waves.css'; // Importez le fichier CSS des vagues

const HomePage = () => {
  return (
    <div className="mlr-20">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <Link className="navbar-link" to="/">
          <img src="icon_overconsulting.png" alt="logo" style={{ width: '300px', height: 'auto' }} />
        </Link>
        
        <span style={{ fontFamily: 'Brush Script MT', fontSize: '32px', color: '#9ACD32', fontWeight: 'bold' }}>Overconsulting</span>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Overconsulting library is a lightweight and modular front-end framework for developing fast and powerful web interfaces.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Link to="/get_started">
          <button className="btn btn-success btn-rounded">Get Started</button>
        </Link>
        <a className="btn btn-success btn-rounded" href="https://github.com/ldandoy/Utils-CSS-JS" target="_blank" rel="noopener noreferrer">Our GitHub</a>
      </div>

      {/* Ajoutez les vagues et le contenu */}
      
      <div className="waves-container">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 20" preserveAspectRatio="none">
  <path fill="#9ACD32" d="M0 15 Q 20 25, 40 15 T 80 15 T 1000 15 V 100 H 0 Z" />
  <path fill="#9ACD32" d="M0 10 Q 30 20, 60 10 T 100 10 V 1000 H 0 Z" />
  <path fill="#9ACD32" d="M0 5 Q 40 15, 80 5 T 100 5 V 1000 H 0 Z" />
</svg>

        <div className="waves-content">
        <span style={{ fontFamily: 'Brush Script MT', fontSize: '32px', color: '#9ACD32', fontWeight: 'bold' }}>About us</span>
       


          <section class="mb-100">
            <div class="container">
                <div class="row row-half">
                    <div class="col col-half flex flex-jc-center">
                         <p>
  Overconsulting library was created by <strong>Loïc DANDOY</strong> and some other contributors. Loïc DANDOY, the primary author, envisioned a lightweight and modular front-end framework that empowers developers to build fast and powerful web interfaces. The project has received valuable contributions from numerous individuals, and their GitHub profiles can be found below:
  <ul>
    <li><a href="https://github.com/aahhhkji" target="_blank" rel="noopener noreferrer">Fatima zahra MARZAQUI</a></li>
    <li><a href="https://github.com/ridsougou" target="_blank" rel="noopener noreferrer">REDOUANE</a></li>
    
  </ul>
</p>
                    </div>
                    <div class="col col-half">
                        <div class="txt-center">
                            <img alt="" src="icon_overconsulting.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  
        </div>
      </div>
     
        
    </div>
  );
}

export default HomePage;
