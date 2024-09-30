import Image from "next/image";
import StickerContainer2 from "../items/StickerContainer2";
import classes from "./CoworkingBanner.module.css";
import CoworkingBannerImage from "../../../public/images/Background7.jpg";

import LPContactForm from "../form/LPContactForm";
import ContactForm3 from "../form/ContactForm3";

function CoworkingBanner() {
  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage}>
        <Image
          className={classes.image}
          src={CoworkingBannerImage}
          fill={true}
          alt=""
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className={classes.container2}>
        <div className={classes.leftContainer}>
          <div className={classes.heading}>
            <span className={classes.heading1}>
              Premier Destination for Dynamic
              <span className={`${classes.gradientText} ${classes.heading2}`}>
                Coworking Spaces
              </span>
            </span>
          </div>
          <div className={classes.subHeading}>
            Explore dynamic coworking spaces, private desks, and inspiring
            cabins. Join a vibrant community of innovators and entrepreneurs.
            Elevate your productivity with premium amenities and flexible terms.
            Unleash your potential in our collaborative ecosystem. Discover
            opportunity at Virtualxcel. Join us today!
          </div>
        </div>
        <div className={classes.rightContainer}>
          <ContactForm3 />
        </div>
      </div>
    </div>
  );
}

export default CoworkingBanner;
