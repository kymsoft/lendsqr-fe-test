"use client";

import React, { useState } from "react";
import Image from "next/image";
import SearchForm from "./ui/search-form";
import Link from "next/link";
import { images } from "@/constants";
import { IoNotificationsOutline, IoSearch } from "react-icons/io5";
import { MdArrowDropDown} from "react-icons/md";

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState(false)
  const onClick =()=>{
    setShowNavBar(prev => !prev)
  }
  const onSearch = () => {};
  return (
    <>
    <nav className="navbar">
      <div className="navbar-items">
        <Image src={images.logo} alt="logo" width={144.8} height={30} />

        <SearchForm onSearch={onSearch} />
      </div>
      <div className="navbar-details">
        <Link href="/docs" className="docs-link">
          Docs
        </Link>
        <IoNotificationsOutline
          className="notification"
        />
        <button className="toggle-nav" onClick={onClick}>
        <IoSearch />
        </button>
        <Image
          className="avatar"
          src={images.avatar}
          alt="avatar"
          width={48}
          height={48}
        />
        <div className="profile">
          <p className="profile-name">Adedeji</p>
          <MdArrowDropDown className="profile-dropdown" />
        </div>
        
      </div>
      
    </nav>
    {
        showNavBar && (
          <div className="mobile-nav">
            <SearchForm onSearch={onSearch} />
          </div>
        )
      }
    </>
  );
};

export default Navbar;
