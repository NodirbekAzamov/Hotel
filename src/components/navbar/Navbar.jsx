import React, { useState } from "react";
import "./Navbar.scss";
import { VscListFilter } from "react-icons/vsc";
import { MdBorderColor } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
const Navbar = () => {
    const [navbarPosition, setNavbarPosition] = useState(false)
    const [navbarCategory, setNavbarCategory] = useState(false)
    const [filterList, setFilterList] = useState(false)
    const url = window.location.href.split("/").pop()

  return (
    <nav className={`navbar ${url === "" ? "hidden" : "navbar" }`}>
      <div className="navbar__item">
        <input type="text" className="navbar__search" placeholder="Search..." />
        <div className="navbar__right">
          <button className="navbar__order">
            Zakaz berish <MdBorderColor />
          </button>
          <button className="navbar__filter-btn" onClick={()=>setFilterList(prev=> !prev)}>
            Filter <VscListFilter />
          </button>
          <div className={`navbar__filter ${filterList ? "right-0" : "right-[-300px]"}`}>
            <button className="filter__list-btn" onClick={()=>setNavbarPosition(prev=> !prev)}>
              Holatlar <IoIosArrowForward className={navbarPosition ? " rotate-[90deg] transition-all" : "transition-all"} />
            </button>
            <ul className={`navbar__position ${navbarPosition ? "h-[100%] transition-all" : "h-0 transition-all"}`}>
              <li className="filter__list-item">Hammasi</li>
              <li className="filter__list-item">Bo'sh</li>
              <li className="filter__list-item">Bron</li>
              <li className="filter__list-item">Band</li>
              <li className="filter__list-item">Tozalanmoqda</li>
            </ul>
            <button className="filter__list-btn" onClick={()=>setNavbarCategory(prev=> !prev)}>
              Kategoriyalar <IoIosArrowForward className={navbarCategory ? " rotate-[90deg] transition-all" : "transition-all"} />
            </button>
            <ul className={`navbar__category ${navbarCategory ? "h-[100%] transition-all" : "h-0 transition-all"}`}>
              <li className="filter__list-item">Oddiy</li>
              <li className="filter__list-item">Polu-Lyuks</li>
              <li className="filter__list-item">Lyuks</li>
              <li className="filter__list-item">3 kishilik</li>
              <li className="filter__list-item">2 kishilik</li>
              <li className="filter__list-item">1 kishilik</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
