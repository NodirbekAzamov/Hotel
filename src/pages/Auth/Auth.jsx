import React, { useState } from 'react'
import "./Auth.scss";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import useAuthStore from '../../store/auth/AuthStore';
const Auth = () => {
  const { login } = useAuthStore()
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [passowrd, setPassword] = useState("")
  const [roles, setRoles] = useState("")
  const [type, setType] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({
      firstname: firstname,
      lastname: lastname,
      passowrd: +passowrd,
      phoneNumber: +phoneNumber,
      email: email,
      roles: roles,
    })
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='firstname' onChange={(e) => setFirstname(e.target.value)} />
        <input type="text" placeholder='lastname' onChange={(e) => setLastname(e.target.value)} />
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <div className='auth_password'>
          <input
            type="password"
            // type={type ? "text" : "password"}
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
        <input type="number" placeholder='PhoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} />
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <select name="" id="" onChange={(e) => setRoles(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="SuperAdmin">Super Admin</option>
        </select>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Auth