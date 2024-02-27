import React from 'react'
import "./Auth.scss";
const Auth = () => {
  return (
    <div className='auth'>
      <h1 className='auth__title'>Log in</h1>
      <form className='auth__form'>
        <input type="text" />
        <input type="password" />
        <button className='auth__btn'></button>
      </form>
    </div>
  )
}

export default Auth