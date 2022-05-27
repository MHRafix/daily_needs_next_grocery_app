import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function animation() {
  // AOS animation initialization here
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
    });
  });
}
