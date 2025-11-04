import React, { useState } from "react";
import { use } from "react";

function PostCard(props) {
  const { name, email, street, city, ...rest } = props;
  const [clicked, setClicked] = useState(false);
  // Fungsi handler
  //function handleClick() {
  //setClicked(true);
  console.log(Object.entries(rest));

  return (
    <div
      className={`p-4 rounded-lg shadow-md border transition-transform duration-200 h-full
      ${clicked ? "bg-pink-100 scale-105" : "bg-white"}
      hover:scale-105`}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span>
        {street},{city}
      </p>

      {/* Menampilkan data tambahan dari rest */}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}

      <button
        className={`${
          clicked ? "bg-special-red2" : "bg-gray-01"
        } text-white p-2 rounded-md`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default Usecard;
