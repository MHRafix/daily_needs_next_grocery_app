import Image from "next/image";
import React from "react";
import Middlebanner from "../../../images/banners/middle_banner.webp";
import Middlebanner2 from "../../../images/banners/middle_banner2.webp";

export default function MiddleBanner() {
  return (
    <div className="middle_banner_wrapper">
      <Image src={Middlebanner} alt="middle banner" />
      <Image src={Middlebanner2} alt="middle banner" />
    </div>
  );
}
