import React from "react";

const Modal = ({ time }) => {
  return (
    <div className="fixed inset-0 z-10 rounded overflow-hidden flex flex-col justify-center items-center bg-black bg-opacity-50">
      <h1 className="text-center p-2 text-2xl bg-red-600 text-white shadow w-[20rem] rounded-t">
        You Won!
      </h1>
      <div className="p-4 bg-white flex flex-col w-[20rem] rounded-b">
        <label htmlFor="name" className="mb-2 text-lg">
          What is your name?
        </label>
        <input
          id="name"
          type="text"
          className="bg-slate-50 border-2 border-slate-400 rounded mb-4 px-2 py-1 focus:outline-none  focus:border-blue-600"
        />
        <p className="mb-4 text-lg">Time: {time}</p>
        <button
          type="button"
          className="px-8 py-4 m-2 text-xl rounded-lg shadow-md text-white border bg-red-600 hover:bg-red-500 border-red-600 active:bg-white active:text-red-600 "
        >
          Submit to Leaderboard
        </button>
      </div>
    </div>
  );
};

export default Modal;
