import React from "react";

import { useEffect, useState } from "react";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const changeBgColor = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBgColor);

    return () => {
      window.removeEventListener("scroll", changeBgColor);
    };
  }, [show]);

  return (
    <div
      className={`fixed top-0 left-0 w-full ${
        show && "bg-black opacity-80 transition-colors duration-300 ease-in-out"
      } `}
    >
      <div className=" flex justify-between items-center">
        <img
          className=" h-[80px] object-contain cursor-pointer select-none ml-5 -mt-5 w-20"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI"
          alt="logo"
        />

        <img
          className=" mr-4 h-[30px] object-contain cursor-pointer select-non -mt-3 "
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Navigation;
