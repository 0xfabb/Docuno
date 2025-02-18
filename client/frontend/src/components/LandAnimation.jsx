import "react";
import Lottie from "react-lottie-player";
import lottieJson from "../assets/DoctorAniamtion.json";

const LottieAnimation = () => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 550, height: 550 }}
    />
  );
};

export default LottieAnimation;
