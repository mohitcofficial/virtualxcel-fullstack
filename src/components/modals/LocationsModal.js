"use client";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import React from "react";
import classes from "./LocationsModal.module.css";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const premiumLocationsMap = [
  {
    name: "Delhi",
    url: "/virtual-offices/delhi",
  },
  {
    name: "Gurgaon",
    url: "/virtual-offices/gurgaon",
  },
  {
    name: "Noida",
    url: "/virtual-offices/noida",
  },
  {
    name: "Bangalore",
    url: "/virtual-offices/bangalore",
  },
  {
    name: "Mumbai",
    url: "/virtual-offices/mumbai",
  },
  {
    name: "Chandigarh",
    url: "/virtual-offices/chandigarh",
  },
  {
    name: "Chennai",
    url: "/virtual-offices/chennai",
  },
];
const otherLocationsMap = [
  {
    name: "Hyderabad",
    url: "/virtual-offices/hyderabad",
  },
  {
    name: "Kolkata",
    url: "/virtual-offices/kolkata",
  },
  {
    name: "Pune",
    url: "/virtual-offices/pune",
  },
  {
    name: "Kochi",
    url: "/virtual-offices/kochi",
  },
  {
    name: "Kerela",
    url: "/virtual-offices/kerela",
  },
  {
    name: "Punjab",
    url: "/virtual-offices/punjab",
  },
  {
    name: "Punjab",
    url: "/virtual-offices/punjab",
  },
  {
    name: "Agra",
    url: "/virtual-offices/",
  },
  {
    name: "Coimbatore",
    url: "/virtual-offices/",
  },
  {
    name: "Dehradun",
    url: "/virtual-offices/",
  },
  {
    name: "Goa",
    url: "/virtual-offices/",
  },
  {
    name: "Ghaziabad",
    url: "/virtual-offices/",
  },
  {
    name: "Indore",
    url: "/virtual-offices/",
  },
  {
    name: "Jalandhar",
    url: "/virtual-offices/",
  },
  {
    name: "Jamshedpur",
    url: "/virtual-offices/",
  },
  {
    name: "Kanpur",
    url: "/virtual-offices/",
  },
  {
    name: "Lucknow",
    url: "/virtual-offices/",
  },
  {
    name: "Nagpur",
    url: "/virtual-offices/",
  },
  {
    name: "Patna",
    url: "/virtual-offices/",
  },
  {
    name: "Raipur",
    url: "/virtual-offices/",
  },
  {
    name: "Ranchi",
    url: "/virtual-offices/",
  },
  {
    name: "Vishakhapatnam",
    url: "/virtual-offices/",
  },
  {
    name: "Zirakpur",
    url: "/virtual-offices/",
  },
];

export default function LocationsModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const fontSize = { xs: 26, sm: 28, md: 30, lg: 32 };

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes.modalInnerContainer}>
          <div className={classes.buttonContainer}>
            <CloseIcon
              sx={{ fontSize: fontSize }}
              className={classes.closeButton}
              onClick={handleClose}
            />
          </div>
          <h2 className={classes.heading}>Premium Locations</h2>
          <div className={classes.content}>
            {premiumLocationsMap.map((item, index) => (
              <a key={index} className={classes.button} href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
          <h2 className={classes.heading}>Other Locations</h2>
          <div className={classes.content}>
            {otherLocationsMap.map((item, index) => (
              <a key={index} className={classes.button2} href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
