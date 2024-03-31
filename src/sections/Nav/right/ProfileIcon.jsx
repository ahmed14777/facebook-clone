import { motion } from "framer-motion";

export default function ProfileIcon({ img }) {
  return (
    <>
      <motion.li
        animate={{
          rotate: [360, 60, 180, -270, 120, -30, 0],
          x: [-20, -30, 10, -12, 0],
        }}
        transition={{ duration: 1.5, delay: 1.1 }}
        className="profile-image  "
      >
        <img className=" inline-block " src={img} alt="profile" />
      </motion.li>
    </>
  );
}
