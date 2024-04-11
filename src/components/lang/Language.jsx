import React from "react";
import "./Language.css";
const Language = () => {
  return (
    <div className="lang">
      {" "}
      <div class="bg"></div>
      <div class="nft">
        <div class="main">
          <h2>Urdu</h2>
          <p class="description">
            <strong>Effciency:</strong>Bilingual
          </p>
        </div>
      </div>
      <div class="bg"></div>
      <div class="nft">
        <div class="main">
          <h2>English</h2>
          <p class="description">
            <strong>Effciency:</strong>Basic
          </p>
        </div>
      </div>
    </div>
  );
};

export default Language;
