import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div>
      <h2 className="font-bold mb-4">Find Us On</h2>

      <div className="join join-vertical w-full btn-outline">
        <button className="btn join-item bg-base-100 justify-start">
          <FaFacebook size={22}></FaFacebook> Facebook
        </button>
        <button className="btn   join-item bg-base-100 justify-start">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn   join-item bg-base-100 justify-start">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;
