import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <img src="" alt="image" />
          </div>
          <div>
            <h1>Shraddha</h1>
            <p>web Developer</p>
          </div>
        </div>
        <div>
          <ul className="flex gap-6 items-center font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
