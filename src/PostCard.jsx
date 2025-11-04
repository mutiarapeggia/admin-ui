import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-between text-center p-4 rounded-lg shadow-md transition-all duration-300 transform h-full min-h-[150px]
      bg-white border border-transparent hover:border-black hover:bg-pink-100 hover:scale-105`}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4 flex-grow text-sm leading-relaxed">
        {body}
      </p>
      <div className="flex justify-end">
        <button
          className={`${
            clicked ? "bg-special-red2 hover:bg-red-500" : "bg-gray-01"
          } text-white p-2 rounded-md`}
          onClick={() => setClicked(true)}
        >
          {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
        </button>
      </div>
    </div>
  );
}

export default PostCard;
