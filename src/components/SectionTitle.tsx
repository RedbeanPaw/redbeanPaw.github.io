import { useState, useCallback, useEffect, FC, useRef } from "react";
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from "@/constants/motion";

export const SectionTitle: FC<any> = ({ main, sub, description }) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p variants={itemVariants} className="text-gray-400 font-semibold">{sub}</motion.p>
      <motion.h2 variants={itemVariants} className="text-gray-900 text-3xl mb-3">{main}</motion.h2>
      <motion.p variants={itemVariants}>{description}</motion.p>
    </motion.section>
  );
};
