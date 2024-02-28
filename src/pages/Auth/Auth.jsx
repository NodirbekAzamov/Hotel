import React, { useState } from 'react'
import "./Auth.scss";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import useAuthStore from '../../store/auth/AuthStore';
const Auth = () => {
  const { login } = useAuthStore()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [type, setType] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({
      password: password,
      email: email,
    })
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <div className='auth_password'>
          <input
            type={type ? "text" : "password"}
            className=" passwords"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaRegEyeSlash
            className={` cursor-pointer ${type ? "hidden" : "block"}`}
            onClick={() => setType((prev) => !prev)}
          />
          <FaRegEye
            className={` cursor-pointer ${type ? "block" : "hidden"}`}
            onClick={() => setType((prev) => !prev)}
          />
        </div>

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Auth