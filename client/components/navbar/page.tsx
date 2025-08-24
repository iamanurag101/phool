"use client";

import Image from "next/image";
import Link from "next/link";

import Navlink from "../common/nav-link/page";
import "./styles.scss";

export default function Navbar() {
  return (
      <nav>
        <div className="left">
          <div>
            <Link href="/">
              <Image
                src="/phool_logo.svg"
                alt="Logo"
                className="logo"
                height={500}
                width={500}
              />
            </Link>
          </div>
        </div>

        <div className="center">
            <Navlink href="/catalogue">Catalogue</Navlink>
            <Navlink href="/about">About Us</Navlink>
        </div>

        <div className="right"></div>

        <div className="nav-buttons">
          {/* <button
            ref={musicButton}
            className={`secondary-button`}
            onClick={handleMusicToggle}
            aria-label="Toggle Music"
          >
            <canvas ref={canvasRef} className="wave"></canvas>
          </button> */}

          {/* <button
            ref={menuButton}
            className={`menu-button ${isActive ? "active visible" : ""}`}
            onClick={() => setIsActive((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={isActive}
            aria-controls="menu"
          >
            <span></span>
            <span></span>
          </button> */}
        </div>
      </nav>
  );
}