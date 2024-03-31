import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [searchIconShow, setSearchIconShow] = useState("block");
  return (
    <motion.div
      animate={{ x: [-30, 60, 0] }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: easeInOut,
      }}
      className="flex"
    >
      <IoSearch
        size={"20px"}
        className={` relative left-7  top-2 ${searchIconShow}`}
      />
      <input
        onFocus={() => setSearchIconShow("hidden")}
        onBlur={() => setSearchIconShow("block")}
        className=" h-fit py-[6px]  pr-5 pl-8  rounded-2xl bg-slate-100 "
        type="text"
        placeholder="Search Facebook"
      />
    </motion.div>
  );
};

export default Search;
