import React from "react";

function Post() {
  return (
    <div className=" md:flex text-white bg-slate-950">
      <div className=" flex-col w-1/3 justify-center overflow-hidden place-items-baseline">
        Post
        <div className="m-3">
          <img src="https://images.pexels.com/photos/8647264/pexels-photo-8647264.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400&h=250&fit=crop&crop=focalpoint" />
        </div>
        <div className="m-3">
          <img src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>
      <div className="w-1/3">
        Save
        <div className="m-3">
          <div>
            <img src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
        </div>
      </div>
      <div className="w-1/3">Tags</div>
    </div>
  );
}

export default Post;
