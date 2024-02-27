import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        <input type="text" className='navbar__search'/>
        <div>
            <button>Holatlar</button>
            <button>Hammasi</button>
            <button>Bo'sh</button>
            <button>Bron</button>
            <button>Band</button>
            <button>Tozalanmoqda</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
