import Image from "next/image";
import LP4 from "../../../public/images/LP4.jpg";
import LPContactForm from "../form/LPContactForm";
import classes from "./LPBanner.module.css";

function LPBanner() {
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
              Transform Your Business: The Benefits of a Pan India
              <span className={`${classes.gradientText} ${classes.heading2}`}>
                Virtual Office
              </span>
              Presence
            </span>
          </div>
          <div className={classes.subHeading}>
            Set up a virtual office with Virtualxcel at prime locations across
            Pan India. Enjoy premium services, including professional addresses,
            mail handling, and meeting rooms, all without the costs of a
            physical office.
          </div>
        </div>
        <div className={classes.rightContainer}>
          <LPContactForm />
        </div>
      </div>
    </div>
  );
}

export default LPBanner;
