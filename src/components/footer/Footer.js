import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";
import classes from "./Footer.module.css";
import Image from "next/image";
import TransparentLogo from "../../../public/images/TransparentLogo2.png";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div className={`${classes.box1} ${classes.box3}`}>
          <div className={classes.logo}>
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
          <div className={classes.slogan}>Collaborate. Create. Cowork.</div>
          <div className={classes.handlesLink}>
            <a
              href="https://www.facebook.com/profile.php?id=61562676830223"
              target="_blank"
              className={classes.icon}
            >
              <FacebookIcon sx={{ fontSize: 22 }} />
            </a>
            <a
              href="https://www.instagram.com/virtualxcel?igsh=MThmaWdyZHI1emtvOA=="
              target="_blank"
              className={classes.icon}
            >
              <InstagramIcon sx={{ fontSize: 22 }} />
            </a>
            <a
              href="https://www.linkedin.com/company/virtualxcel-solutions"
              target="_blank"
              className={classes.icon}
            >
              <LinkedInIcon sx={{ fontSize: 22 }} />
            </a>
            <a
              href="https://x.com/virtualxcel"
              target="_blank"
              className={classes.icon}
            >
              <XIcon sx={{ fontSize: 18 }} />
            </a>
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.heading}>Services</div>
          <div className={classes.content}>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/gst-registration"
              >
                GST Registration
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/virtual-offices"
              >
                Virtual Office
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/business-registration"
              >
                Business Registration
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/mailing-address"
              >
                Mailing Address
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/coworking-spaces"
              >
                Coworking Spaces
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.heading}>Pages</div>
          <div className={classes.content}>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/"
              >
                Home
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/about-us"
              >
                About Us
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/contact-us"
              >
                Contact Us
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/partnership"
              >
                Partner With Us
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://blog.virtualxcel.in/"
              >
                Blog
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.heading}>Others</div>
          <div className={classes.content}>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/terms-and-conditions"
              >
                Terms & Conditions
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/refund-policy"
              >
                Refund Policy
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/cookies-policy"
              >
                Cookies Policy
              </Link>
            </p>
          </div>
        </div>
        <div className={`${classes.box2} ${classes.box1}`}>
          <div className={classes.heading}>Connect with us</div>

          <div className={classes.option}>
            <a className={classes.aTag} href="Tel:09871001079">
              <CallIcon
                sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
              />
              <p className={classes.text}>+91 9871001079</p>
            </a>
          </div>
          <div className={classes.option}>
            <a href="Mailto:sales@virtualxcel.in" className={classes.aTag}>
              <EmailIcon
                sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
              />
              <p className={classes.text}>sales@virtualxcel.in</p>
            </a>
          </div>
          <div className={classes.option2}>
            <div className={classes.text2} style={{ alignItems: "center" }}>
              <LocationOnIcon
                sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
              />
              <p>Lower Ground Floor, Saket Salcon Rasvilas,</p>
            </div>
            <p className={classes.text2} style={{ margin: "0 0 4px 32px" }}>
              Saket District Centre, Sector 6, Pushp Vihar,
            </p>
            <p className={classes.text2} style={{ margin: "0 0 4px 32px" }}>
              Next to Select City Walk Mall, Delhi 110017
            </p>
          </div>
        </div>
      </div>
      <div className={classes.container2}>
        <div className={classes.bottomLeft}>
          Copyright © 2024, Virtualxcel. All Rights Reserved
        </div>
        <div className={classes.bottomRight}>Virtualxcel Solutions Pvt Ltd</div>
      </div>
    </div>
  );
}

export default Footer;
