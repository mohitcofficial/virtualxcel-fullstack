"use client";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import Banner0 from "../../../public/images/Test2.jpg";
import Banner1 from "../../../public/images/Banner1.jpeg";
import Banner2 from "../../../public/images/Banner2.jpeg";
import Banner3 from "../../../public/images/Banner3.jpeg";
import Banner4 from "../../../public/images/Banner4.jpeg";
import LocationsModal from "../modals/LocationsModal";
import classes from "./Banner.module.css";

const cities = [
  "Delhi",
  "Gurgaon",
  "Noida",
  "Bangalore",
  "Mumbai",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Chennai",
  "Goa",
  "Kochi",
  "Kerala",
  "Chandigarh",
  "Punjab",
];

function Banner() {
  const router = useRouter();
  const [found, setFound] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.insetShadow}></div>
      <div className={classes.banner}>
        <div className={classes.backgroundImage}>
          {/* <Image className={classes.image} src={Banner0} alt="Image" /> */}
        </div>
        {/* <div className={classes.backgroundImage}>
          <Image className={classes.image} src={Banner2} alt="Image" />
        </div>
        <div className={classes.backgroundImage}>
          <Image className={classes.image} src={Banner1} alt="Image" />
        </div>
        <div className={classes.backgroundImage}>
          <Image className={classes.image} src={Banner4} alt="Image" />
        </div>
        <div className={classes.backgroundImage}>
          <Image className={classes.image} src={Banner3} alt="Image" />
        </div> */}
        <div className={classes.textContent}>
          <h1 className={classes.heading}>
            <div className={classes.heading1}>Unlock Your</div>
            <div className={classes.heading2}>
              <span className={`${classes.bold} ${classes.orange}`}>
                Productivity
              </span>
              <span className={`${classes.bold}`}>Potential</span>
            </div>
          </h1>
          <div className={`${classes.typewriter}`}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 34,
                deleteSpeed: 32,
                strings: [
                  "Your Vision, Our Space",
                  "Inspire. Collaborate. Succeed.",
                  "Your Desk, Your Way, Your Success",
                  "Unleash Your Potential in a Shared Space",
                ],
                pauseFor: 1000,
              }}
            />
          </div>
          <div className={classes.browseContainer}>
            <div className={classes.searchField}>
              <div className={classes.locationIcon}>
                <LocationOnIcon
                  className={classes.icon}
                  sx={{
                    fontSize: { xs: 26, sm: 28, md: 30, lg: 32 },
                  }}
                />
              </div>
              <select
                className={classes.customSelect}
                id="cities"
                name="cities"
                // size="5"
              >
                {cities.map((item, index) => (
                  <option
                    key={index}
                    className={classes.customOption}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ display: "flex" }}>
              <LocationsModal>
                <button className={classes.viewLocationsButton}>
                  View All Locations
                </button>
              </LocationsModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
