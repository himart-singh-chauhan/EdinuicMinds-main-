import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-2xl border border-neutral-200 shadow-lg shadow-primary-dark/10 max-w-xs w-full bg-white hover:shadow-xl transition-all duration-300" key={i}>
                  <div className="text-neutral-700 leading-relaxed mb-6">{text}</div>
                  <div className="flex items-center gap-3">
                    <img
                      width={48}
                      height={48}
                      src={image.replace('auto=format', 'auto=format&fm=webp')}
                      alt={name}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-12 rounded-full object-cover border-2 border-accent-teal/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-primary-dark tracking-tight leading-5">{name}</div>
                      <div className="text-sm text-accent-teal font-medium tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
