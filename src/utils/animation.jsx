import { motion } from "framer-motion";


function Animated(props){
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: "center", padding: "2rem 0" }}
    >
        {props.things}
    </motion.div>
  );
};

export default Animated