import React from "react";

function Hog({ hog, handleClick, appear }) {
  const { name, specialty, greased, weight, image } = hog;
  console.log(greased);
  return (
    <div>
      <div className="card" onClick={handleClick}>
        <img src={image} className="card-img-top" alt="Abdo" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p classNameName="card-text" style={{ display: appear }}>
            {specialty}
          </p>
          <p style={{ display: appear }}>
            {greased ? "greased" : "Not greased"}
          </p>
          <p style={{ display: appear }}>{weight}</p>
        </div>
      </div>
    </div>
  );
}

export default Hog;
