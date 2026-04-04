import React from "react";
import Confetti from "react-confetti";

const ConfettiLogo = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div style={{ position: "relative" }}>
      <h1
        style={{ cursor: "pointer" }}
        onClick={() => setShow(true)}
      >
        MyLogo
      </h1>
      {show && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}
    </div>
  );
};

export default ConfettiLogo;