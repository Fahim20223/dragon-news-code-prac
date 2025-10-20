import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="space-y-4 mb-4">
      <h2 className="font-bold mb-5">Login With</h2>
      <button className="w-full btn btn-secondary btn-outline">
        <FcGoogle size={21} /> Login With Google
      </button>
      <button className="w-full btn btn-primary btn-outline">
        <FaGithub size={20} /> Login With Github
      </button>
    </div>
  );
};

export default SocialLogin;
