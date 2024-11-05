"use client";

import { BusinessLinks, CustomersLinks, SettingsLinks } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { images } from "@/constants";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdLogout, MdOutlineDehaze } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { redirect } from "next/navigation";
import { Divider } from "@mui/material";

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const onClick = () => {
    setShowSideBar((prev) => !prev);
  };

  const logout = () => {
    //logout UserId
    redirect("/log-in");
  };
  return (
    <div>
      <button onClick={onClick} className="sidebar-toggle">
        <MdOutlineDehaze />
      </button>
      <div className="sidebar">
        <div className="sidebar-content">
          <ul className="sidebar-list">
            <div className="switch-organization">
              <Image
                src={images.briefcase}
                alt="Organization Icon"
                width={16}
                height={16}
                className="org-icon"
              />
              <p>Switch Organization</p>
              <RiArrowDropDownLine className="arrowdown-icon" />
            </div>
            <li>
              <Link href="/dashboard" className="sidebar-link">
                <Image
                  src={images.dashboard}
                  alt="home icon"
                  width={16}
                  height={14.22}
                  className="link-icon"
                />
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <p className="sidebar-header">CUSTOMERS</p>
              {CustomersLinks.map((link, index) => (
                <Link href={link.href} className="sidebar-link" key={index}>
                  <Image
                    src={images[link.icon]}
                    alt="link icon"
                    width={18}
                    height={16}
                    className="link-icon"
                  />
                  <p>{link.title}</p>
                </Link>
              ))}
            </li>
            <li>
              <p className="sidebar-header">BUSINESSES</p>
              {BusinessLinks.map((link, index) => (
                <Link href={link.href} className="sidebar-link" key={index}>
                  <Image
                    src={images[link.icon]}
                    alt="link icon"
                    width={18}
                    height={16}
                    className="link-icon"
                  />
                  <p>{link.title}</p>
                </Link>
              ))}
            </li>
            <li>
              <p className="sidebar-header">SETTINGS</p>
              {SettingsLinks.map((link, index) => (
                <Link href={link.href} className="sidebar-link" key={index}>
                  <Image
                    src={images[link.icon]}
                    alt="link icon"
                    width={18}
                    height={16}
                    className="link-icon"
                  />
                  <p>{link.title}</p>
                </Link>
              ))}
            </li>
          </ul>
          <Divider />
          <div className="logout">
            <button onClick={logout} className="logout-btn">
              <MdLogout className="logout-icon" /> Logout
            </button>
          </div>
          <p className="version">v1.2.0</p>
        </div>
      </div>
      {showSideBar && (
        <div className="sidebar-mobile">
          <div className="sidebar-content">
            <div className="sidebar-close">
              <button className="close-btn" onClick={onClick}>
                <IoClose />
              </button>
            </div>

            <ul className="sidebar-list">
              <div className="switch-organization">
                <Image
                  src={images.briefcase}
                  alt="Organization Icon"
                  width={16}
                  height={16}
                  className="org-icon"
                />
                <p>Switch Organization</p>
                <RiArrowDropDownLine className="arrowdown-icon" />
              </div>
              <li>
                <Link href="/dashboard" className="sidebar-link">
                  <Image
                    src={images.dashboard}
                    alt="home icon"
                    width={16}
                    height={14.22}
                    className="link-icon"
                  />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <p className="sidebar-header">CUSTOMERS</p>
                {CustomersLinks.map((link, index) => (
                  <Link href={link.href} className="sidebar-link" key={index}>
                    <Image
                      src={images[link.icon]}
                      alt="link icon"
                      width={18}
                      height={16}
                      className="link-icon"
                    />
                    <p>{link.title}</p>
                  </Link>
                ))}
              </li>
              <li>
                <p className="sidebar-header">BUSINESSES</p>
                {BusinessLinks.map((link, index) => (
                  <Link href={link.href} className="sidebar-link" key={index}>
                    <Image
                      src={images[link.icon]}
                      alt="link icon"
                      width={18}
                      height={16}
                      className="link-icon"
                    />
                    <p>{link.title}</p>
                  </Link>
                ))}
              </li>
              <li>
                <p className="sidebar-header">SETTINGS</p>
                {SettingsLinks.map((link, index) => (
                  <Link href={link.href} className="sidebar-link" key={index}>
                    <Image
                      src={images[link.icon]}
                      alt="link icon"
                      width={18}
                      height={16}
                      className="link-icon"
                    />
                    <p>{link.title}</p>
                  </Link>
                ))}
              </li>
            </ul>
            <Divider />
            <div className="logout">
              <button onClick={logout} className="logout-btn">
                <MdLogout className="logout-icon" /> Logout
              </button>
            </div>
            <p className="version">v1.2.0</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
