import Lottie from "lottie-react";
import successAnimation from "../assets/lottie/done.json";

const DoneAnim = ({ className = "" }) => {
  return (
    <div className={`mx-auto ${className}`}>
      <Lottie 
        animationData={successAnimation} 
        loop={false} 
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default DoneAnim;
