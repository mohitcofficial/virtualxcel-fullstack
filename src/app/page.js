import Image from "next/image";
import classes from "./page.module.css";
import Header from "@/components/header/Header";
import Banner from "@/components/banner/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Banner />
        <div style={{ height: "300vh", width: "100%" }}></div>
      </div>
    </>
  );
}
