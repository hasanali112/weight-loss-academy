import React from "react";
import logo from '../assets/image/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-white">
        <div>
        <div className="flex items-center md:px-2   bg-white rounded">
          <img   src={logo} alt="" className="md:w-20 md:h-16 w-10 h-10" />
         <div>
            <p className="normal-case  text-black tracking-tighter  md:text-xl">Weight Loss</p>
            <p className="text-base md:font-semibold  text-black tracking-tighter md:tracking-widest uppercase">Academy</p>
          </div>
        </div>
          <p>
            Weight Loss Acadamy 
            <br />
            Providing reliable tech since 2010
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <a className="link link-hover">15205 North Kierland Blvd. Suite 100</a>
          <a className="link link-hover">Scottsdale, AZ 85254</a>
          <a className="link link-hover">Phone:+1 480-607-3388</a>
          <a className="link link-hover">Email:weight@loss.com</a>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-red-500 border-0 text-white btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
