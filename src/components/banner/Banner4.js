import React from "react";
import classes from "./Banner4.module.css";
import DelhiImage from "../../../public/images/Delhi.jpg";
import GurgaonImage from "../../../public/images/Gurgaon/Gurgaon.jpg";
import NoidaImage from "../../../public/images/Noida/Noida.jpg";
import MumbaiImage from "../../../public/images/Mumbai/Mumbai.jpg";
import HyderabadImage from "../../../public/images/Hyderabad/Hyderabad.jpg";
import KolkataImage from "../../../public/images/Kolkata/Kolkata.jpg";
import PuneImage from "../../../public/images/Pune/Pune.jpg";
import ChennaiImage from "../../../public/images/Chennai/Chennai.jpg";
import GoaImage from "../../../public/images/Goa/Goa.jpg";
import KochiImage from "../../../public/images/Kochi/Kochi.jpg";
import KeralaImage from "../../../public/images/Kerala/Kerala.jpg";
import ChandigarhImage from "../../../public/images/Chandigarh/Chandigarh.jpg";
import PunjabImage from "../../../public/images/Punjab/Punjab2.jpeg";
import Image from "next/image";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "next/link";

function Banner4({ place = "Delhi" }) {
  const placeMap = {
    Delhi: DelhiImage,
    Gurgaon: GurgaonImage,
    Noida: NoidaImage,
    Bangalore: DelhiImage,
    Mumbai: MumbaiImage,
    Goa: GoaImage,
    Hyderabad: HyderabadImage,
    Kolkata: KolkataImage,
    Pune: PuneImage,
    Punjab: PunjabImage,
    Chennai: ChennaiImage,
    Kochi: KochiImage,
    Kerala: KeralaImage,
    Chandigarh: ChandigarhImage,
  };
  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage}>
        <Image
          className={classes.image}
          src={placeMap[place]}
          fill={true}
          alt=""
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className={classes.textContainer}>
        <div className={classes.heading}>
          <p>Virtual Office in</p>
          <p className={classes.gradientText}>{place}</p>
        </div>
        <div className={classes.location}>
          <Link style={{ color: "transparent" }} href="/virtual-offices">
            <p className={classes.bannerLink}>Virtual Office</p>
          </Link>
          <KeyboardDoubleArrowRightIcon />
          {place}
        </div>
      </div>
    </div>
  );
}

export default Banner4;
