import React from "react";

function Text({ numberofpost }) {
  return (
    <>
      <div className=" flex p-4 text-white">
        <div className="m-6">Denger</div>
        <div className="m-6 text-blue-700 cursor-pointer">edit Profile</div>
        <div className="my-6 mx-4">
          <img
            className=" md:w-10 md:h-10 w-5 h-5 md:rounded-full rounded-lg  "
            src="https://images.pexels.com/photos/270700/pexels-photo-270700.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
      <div className="flex p-4 text-white items-center">
        <div className="m-6">
          <span className=" text-lg">{numberofpost}</span> Post
        </div>
        <div className="m-6">
          <span className=" text-lg">111</span> followers
        </div>
        <div>
          <span className=" text-lg">129</span> following
        </div>
      </div>
      <div className="p-3 text-white">
        <h1 className="mx-8 my-3">cats</h1>
        <p className="mx-8 my-2">IIT (ISM) Dhanbad </p>
      </div>
    </>
  );
}

export default Text;
