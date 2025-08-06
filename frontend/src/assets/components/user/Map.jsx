import React from "react";

function Map() {
  return (
    <div>
      {" "}
      <h1
        style={{
          display: "block",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#333",
        }}
      >
        Location
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5644.076885736382!2d80.60523804524121!3d7.405795320799903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3436995411d65%3A0xfeba77a4cff7c6bf!2sAlawatugoda!5e0!3m2!1sen!2slk!4v1718371852069!5m2!1sen!2slk"
        width="1500"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
