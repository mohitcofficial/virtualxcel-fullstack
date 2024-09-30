import Image from "next/image";
import LP4 from "../../../public/images/DelhiHD.jpg";
import LPContactForm from "../form/LPContactForm";
import classes from "./LPBannerCities.module.css";

function LPBannerCities({ name = "Delhi" }) {
  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage}>
        <Image
          className={classes.image}
          src={LP4}
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
              Elevate Your Business: The Advantages of a Prime
              <span className={`${classes.gradientText} ${classes.heading2}`}>
                Virtual Office in Delhi
              </span>
            </span>
          </div>
          <div className={classes.subHeading}>
            Establish your virtual office with Virtualxcel at prestigious
            locations in Delhi. Benefit from top-tier services, including a
            professional business address, mail handling, and access to meeting
            rooms, all while avoiding the overheads of a physical office.
          </div>
        </div>
        <div className={classes.rightContainer}>
          <LPContactForm />
        </div>
      </div>
      <div className={classes.priceBox}>
        <div className={classes.box}>
          Plans Starting just @
          <span className={classes.bold}>&#8377;799/-</span>
          month
        </div>
      </div>
    </div>
  );
}

export default LPBannerCities;
