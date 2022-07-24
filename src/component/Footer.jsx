import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../index.css';

export default function Footer() {
  return (
    <>
      <footer className="d-flex py-4 px-5 bg-dark mt-5">
        <p className="text-center">
          <span className='fw-bold text-danger'>&copy; 2022 Fund Fair. All Right Reserved</span>
          <br/>
          <span className="fw-bold text-success fst-italic">FOLLOW US</span>
          
          <ul className="d-flex mt-2">
            <li className="bg-seconday bg-opacity-50 bg-gradient rounded-pill p-1">
              <a href="#"><FaFacebookF /></a>
            </li>
            <br/>
            <li className="bg-seconday bg-opacity-50 bg-gradient rounded-pill p-1">
              <a href="#"><FaTwitter /></a>
            </li>
            <br/>
            <li className="bg-seconday bg-opacity-50 bg-gradient rounded-pill p-1">
              <a href="#"><FaLinkedinIn /></a>
            </li>
            <br/>
            <li className="bg-seconday bg-opacity-50 bg-gradient rounded-pill p-1">
              <a href="#"><FaInstagram /></a>
            </li>
          </ul>
        </p>
        
        <p className="mx-auto text-center">
          <span className='fw-bold text-danger'>OVERVIEW</span>
          <br/>
          <span className="fst-italic">
            <a href="#" className="text-white text-decoration-none">Blogs</a>
          </span>
          <br/>
          <span className="fst-italic">
            <a href="#" className="text-white text-decoration-none">Services</a>
          </span>
          <br/>
          <span className="fst-italic">
            <a href="#" className="text-white text-decoration-none">Terms of Use</a>
          </span>
          <br/>
          <span className="fst-italic">
            <a href="#" className="text-white text-decoration-none">Privacy Notice</a>
          </span>
        </p>

        <p className="ms-auto text-center">
          <span className='fw-bold text-danger'>CONNECT</span>
          <br/>
          <span className="fst-italic">
            Email <br/> <span className="text-success">test@test.com</span>
          </span>
          <br/>
          <span className="fst-italic">
            Phone & WhatsApp <br/> <span className="text-success">+233-000-123-456</span>
          </span>
        </p>
      </footer>
    </>
  );
};