import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay antar gambar
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

function Komposisi() {
  const images = [
    "/assets/images/calcium-01.png",
    "/assets/images/vitamind3-01.png",
    "/assets/images/vitamink2-01.png",
    "/assets/images/zinc-01.png",
  ];

  return (
    <motion.div
      className="komposisi-section container"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // once: true = animasi hanya sekali
    >
      <div className="row">
        <div className="col-12 text-center">
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt="komposisi"
              className="komposisi-component mx-2"
              variants={itemVariant}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Komposisi;
