import React, { useState } from "react";
import "./Auth.scss";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import useAuthStore from "../../store/auth/AuthStore";
import {  MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate()
  const { login } = useAuthStore()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [type, setType] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({
      email: email,
      password: password,
    });
    const status = +sessionStorage.getItem("status")
    if (status === 200) {
      navigate("/main")
      window.location.reload();

    }
  };

  return (
    <div className="auth__container">
      <div className="auth">
        <form onSubmit={handleSubmit} className="auth__form" id="auth">
          <div className="auth__email">
            <MdMail className="auth__input-icon" />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="email"
            />
          </div>
          <div className="auth_password">
            <FaLock className="auth__input-icon" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={type ? "text" : "password"}
              className=" passwords"
              placeholder="Password"
            />
            <FaRegEyeSlash
              className={`auth__icons cursor-pointer ${
                type ? "hidden" : "block"
              }`}
              onClick={() => setType((prev) => !prev)}
            />
            <FaRegEye
              className={`auth__icons cursor-pointer ${
                type ? "block" : "hidden"
              }`}
              onClick={() => setType((prev) => !prev)}
            />
          </div>
          <button form="auth" className="auth__btn bg-white" type="submit">
            LOG IN NOW
            <IoIosArrowForward size={24}/>
          </button>
        </form>
        <div className="auth__square"></div>
      </div>
    </div>
  );
};

export default Auth;
