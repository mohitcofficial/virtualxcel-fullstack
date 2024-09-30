"use client";
//hello
import React, { useState } from "react";
import classes from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import TransparentLogo from "../../../public/images/TransparentLogo4.png";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header({ dark = false }) {
  const router = useRouter();
  const path = usePathname();
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");
  const [navbarBg, setNavbarBg] = useState("rgba(22, 22, 23, .75)");
  const [navBorder, setNavBorder] = useState(false);
  const [dropDownActive, setDropDownActive] = useState(false);
  const [dropDownActive2, setDropDownActive2] = useState(false);

  useEffect(() => {
    const parts = path.split("/").filter((part) => part !== "");
    const lastElement = parts[parts.length - 1];
    if (!lastElement) {
      setActiveNavItem("home");
    } else if (lastElement === "virtual-offices") {
      setActiveNavItem("virtual-offices");
    } else if (lastElement === "coworking-spaces") {
      setActiveNavItem("coworking-spaces");
    } else if (lastElement === "partnership") {
      setActiveNavItem("partnership");
    } else if (lastElement == "contact-us") {
      setActiveNavItem("contact");
    } else if (lastElement == "business-registration") {
      setActiveNavItem("business-registration");
    } else if (lastElement == "gst-registration") {
      setActiveNavItem("gst-registration");
    } else if (lastElement == "mailing-address") {
      setActiveNavItem("mailing-address");
    } else if (lastElement == "desk") {
      setActiveNavItem("desk");
    } else if (lastElement == "cabins") {
      setActiveNavItem("cabins");
    } else if (lastElement == "day-pass") {
      setActiveNavItem("day-pass");
    } else {
      setActiveNavItem("");
    }
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && window.scrollY <= 40) {
        setNavbarBg("rgba(22, 22, 23, .75)");
        setNavBorder(true);
      } else if (window.scrollY > 40 && window.scrollY < 250) {
        setNavbarBg("rgba(22, 22, 23, .75)");
        setNavBorder(true);
      } else if (window.scrollY >= 250) {
        setNavbarBg("rgba(22, 22, 23, .75)");
        setNavBorder(true);
      } else {
        setNavBorder(false);
        setNavbarBg("rgba(22, 22, 23, .75)");
        setNavbarBg("transparent");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropDownClick = (event) => {
    event.stopPropagation();
  };

  return (
    <nav
      className={classes.navbar}
      style={{
        backgroundColor: dark ? navbarBg : navbarBg,
        borderBottom: "1px solid rgb(145, 145, 145)",
        backdropFilter: navBorder && "saturate(180%) blur(20px)",
      }}
    >
      <div className={classes.navContainer}>
        <Link style={{ textDecoration: "none", color: "inherit" }} href="/">
          <div className={classes.logo}>
            {/* <div className={`${classes.firstPart}`}>COWORK</div>
          <div className={classes.secondPart}>TOWN</div> */}
            <div className={classes.imageContainer}>
              <Image
                className={classes.image}
                src={TransparentLogo}
                alt="Image"
                fill={true}
                placeholder="blur"
                priority={true}
                quality={true}
              />
            </div>
          </div>
        </Link>

        <ul className={classes.navlist}>
          <li
            onClick={() => {
              setActiveNavItem("home");
            }}
            className={`${classes.listItem}
              ${activeNavItem === "home" ? classes.active : ""}`}
          >
            <Link
              className={classes.aTag}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              href="/"
            >
              Home
            </Link>
          </li>
          <li
            className={`${classes.listItem} ${
              activeNavItem === "virtual-offices" ? classes.active : ""
            } ${classes.listItemwithDropdown}`}
            onClick={() => {
              setActiveNavItem("virtual-offices");
            }}
            onMouseEnter={() => setDropDownActive(true)}
            onMouseLeave={() => setDropDownActive(false)}
          >
            <Link
              className={classes.aTag}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/virtual-offices"
            >
              Virtual Offices
              {/* <ArrowDropDownIcon /> */}
              {dropDownActive && (
                <ul className={classes.hoveredDropdown}>
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("business-registration");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "business-registration"
                        ? classes.active
                        : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        padding: "6px",
                      }}
                      href="/business-registration"
                    >
                      Business Registration
                    </Link>
                  </li>
                  <hr className={classes.line} />
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("gst-registration");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "gst-registration" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        padding: "6px",
                      }}
                      href="/gst-registration"
                    >
                      GST Registration
                    </Link>
                  </li>
                  <hr className={classes.line} />
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("mailing-address");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "mailing-address" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        padding: "6px",
                      }}
                      href="/mailing-address"
                    >
                      Mailing Address
                    </Link>
                  </li>
                </ul>
              )}
            </Link>
          </li>
          <li
            className={`${classes.listItem} ${
              activeNavItem === "coworking-spaces" ? classes.active : ""
            } ${classes.listItemwithDropdown2}`}
            onClick={() => {
              setActiveNavItem("coworking-spaces");
            }}
            onMouseEnter={() => setDropDownActive2(true)}
            onMouseLeave={() => setDropDownActive2(false)}
          >
            <Link
              className={classes.aTag}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/coworking-spaces"
            >
              Coworking Spaces
              {/* <ArrowDropDownIcon /> */}
              {dropDownActive2 && (
                <ul className={classes.hoveredDropdown2}>
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("day-pass");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "day-pass" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                        height: "100%",
                        display: "block",
                        padding: "6px",
                      }}
                      href="/day-pass"
                    >
                      Day Pass
                    </Link>
                  </li>
                  <hr className={classes.line} />
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("cabins");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "cabins" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        padding: "6px",
                      }}
                      href="/cabins"
                    >
                      Cabins
                    </Link>
                  </li>
                  <hr className={classes.line} />
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("desk");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "desk" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        padding: "6px",
                      }}
                      href="/desk"
                    >
                      Desk
                    </Link>
                  </li>
                </ul>
              )}
            </Link>
          </li>
          <li
            onClick={() => {
              setActiveNavItem("partnership");
            }}
            className={`${classes.listItem} ${
              activeNavItem === "partnership" ? classes.active : ""
            }`}
          >
            <Link
              className={classes.aTag}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/partnership"
            >
              Partnership
            </Link>
          </li>
        </ul>
        <li
          onClick={() => {
            setActiveNavItem("contact");
          }}
          className={`${classes.listItem} ${classes.contactusButton} ${
            activeNavItem === "contact" ? classes.active : ""
          }`}
        >
          <Link
            className={classes.aTag}
            style={{ textDecoration: "none", color: "inherit" }}
            href="/contact-us"
          >
            Contact Us
          </Link>
        </li>
        <div
          onClick={() => setHamMenuOpen((prev) => !prev)}
          className={classes.hamMenu}
        >
          {hamMenuOpen ? (
            <CloseIcon
              sx={{
                fontSize: "44px",
                padding: "0 2px",
                color: "white",
              }}
            />
          ) : (
            <MenuIcon
              sx={{
                fontSize: "44px",
                color: "white",
                padding: "0 2px",
              }}
            />
          )}
        </div>
      </div>
      <ul
        className={`${classes.mobileNavMenu} ${
          hamMenuOpen ? classes.active : ""
        }`}
      >
        <li
          onClick={() => {
            setActiveNavItem("home");
            setHamMenuOpen(false);
          }}
          className={`${classes.mobileListItem}
              ${activeNavItem === "home" ? classes.active : ""}`}
        >
          <Link
            className={classes.aTag2}
            style={{ textDecoration: "none", color: "inherit" }}
            href="/"
          >
            Home
          </Link>
        </li>
        <li
          className={`${classes.mobileListItem} ${
            activeNavItem === "virtual-offices" ? classes.active : ""
          }`}
          onClick={() => {
            setActiveNavItem("virtual-offices");
            setHamMenuOpen(false);
          }}
          style={{ borderBottom: "none" }}
        >
          <Link
            className={classes.aTag2}
            style={{ textDecoration: "none", color: "inherit" }}
            href="/virtual-offices"
          >
            Virtual Offices
          </Link>
        </li>
        <ul className={classes.dropMobileList}>
          <li
            onClick={(event) => {
              handleDropDownClick(event);
              setActiveNavItem("business-registration");
              setHamMenuOpen(false);
            }}
            className={`${classes.mobileDropListItem} ${
              activeNavItem === "business-registration" ? classes.active : ""
            }`}
          >
            <Link
              className={classes.aTag3}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/business-registration"
            >
              Business Registration
            </Link>
          </li>
          <li
            onClick={(event) => {
              handleDropDownClick(event);
              setActiveNavItem("gst-registration");
              setHamMenuOpen(false);
            }}
            className={`${classes.mobileDropListItem} ${
              activeNavItem === "gst-registration" ? classes.active : ""
            }`}
          >
            <Link
              className={classes.aTag3}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/gst-registration"
            >
              GST Registration
            </Link>
          </li>
          <li
            onClick={(event) => {
              handleDropDownClick(event);
              setActiveNavItem("mailing-address");
              router.push("mailing-address");
              setHamMenuOpen(false);
            }}
            className={`${classes.mobileDropListItem} ${
              activeNavItem === "mailing-address" ? classes.active : ""
            }`}
          >
            <Link
              className={classes.aTag3}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/mailing-address"
            >
              Mailing Address
            </Link>
          </li>
        </ul>

        <li
          className={`${classes.mobileListItem} ${
            activeNavItem === "coworking-spaces" ? classes.active : ""
          }`}
          onClick={() => {
            setHamMenuOpen(false);
            setActiveNavItem("coworking-spaces");
          }}
        >
          <Link
            className={classes.aTag2}
            style={{ textDecoration: "none", color: "inherit" }}
            href="/coworking-spaces"
          >
            Coworking Spaces
          </Link>
        </li>
        <ul className={classes.dropMobileList}>
          <li
            onClick={(event) => {
              handleDropDownClick(event);
              setActiveNavItem("day-pass");
              setHamMenuOpen(false);
            }}
            className={`${classes.mobileDropListItem} ${
              activeNavItem === "day-pass" ? classes.active : ""
            }`}
          >
            <Link
              className={classes.aTag3}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/day-pass"
            >
              Day Pass
            </Link>
          </li>
          <li
            onClick={(event) => {
              handleDropDownClick(event);
              setActiveNavItem("cabins");
              setHamMenuOpen(false);
            }}
            className={`${classes.mobileDropListItem} ${
              activeNavItem === "cabins" ? classes.active : ""
            }`}
          >
            <Link
              className={classes.aTag3}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/cabins"
            >
              Cabins
            </Link>
          </li>
          <li
            onClick={(event) => {
              handleDropDownClick(event);
              setActiveNavItem("desk");
              setHamMenuOpen(false);
            }}
            className={`${classes.mobileDropListItem} ${
              activeNavItem === "desk" ? classes.active : ""
            }`}
          >
            <Link
              className={classes.aTag3}
              style={{ textDecoration: "none", color: "inherit" }}
              href="/desk"
            >
              Desk
            </Link>
          </li>
        </ul>
        <li
          className={`${classes.mobileListItem} ${
            activeNavItem === "partnership" ? classes.active : ""
          }`}
          onClick={() => {
            setActiveNavItem("partnership");
            setHamMenuOpen(false);
          }}
        >
          <Link
            className={classes.aTag2}
            style={{ textDecoration: "none", color: "inherit" }}
            href="/partnership"
          >
            Partnership
          </Link>
        </li>
        <li
          onClick={() => {
            setActiveNavItem("contact");
            setHamMenuOpen(false);
          }}
          className={`${classes.mobileListItem} ${
            activeNavItem === "contact" ? classes.active : ""
          }`}
        >
          <Link
            className={classes.aTag2}
            style={{ textDecoration: "none", color: "inherit" }}
            href="/contact-us"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
