"use client";
import React from "react";
import { motion } from "framer-motion";

export const Timeline = ({ data }: { data: any[] }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <div className="flex flex-col items-start justify-start gap-12">
        {data.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-neutral-950 dark:text-neutral-50"
            >
              {item.title}
            </motion.h3>
            <div className="relative border-l-4 border-neutral-700 dark:border-neutral-300 ml-3 py-4 pl-8">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="absolute left-0 top-0 h-full w-1 bg-neutral-700 dark:bg-neutral-300"
                style={{ transformOrigin: "top" }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 + 0.2 }}
                viewport={{ once: true }}
              >
                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
