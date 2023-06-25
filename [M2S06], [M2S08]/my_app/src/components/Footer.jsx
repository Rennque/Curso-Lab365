import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-heading">Contato</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <span className="footer-text">+1 234 567 890</span>
            </li>
            <li className="footer-item">
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              <span className="footer-text">contato@mycompany.com</span>
            </li>
            <li className="footer-item">
              <FontAwesomeIcon icon={faMapMarker} className="footer-icon" />
              <span className="footer-text">1234 Main St, City, Country</span>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Redes Sociais</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-link">
                <FontAwesomeIcon icon={['fab', 'facebook']} className="footer-icon" />
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                <FontAwesomeIcon icon={['fab', 'twitter']} className="footer-icon" />
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">formulario
                <FontAwesomeIcon icon={['fab', 'instagram']} className="footer-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-text">© 2023 MyCompany. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;