"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Label } from "../ui/label";
import useIntersectionObserver from "@/hooks/use-intersection-observer";
import { useEffect, useRef, useState } from "react";

const variants = {
  initial: { width: 0 },
  animate: { width: "100%" },
};

export function UsageDemo() {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [isVisible]);
  return (
    <div ref={ref}>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="hidden lg:block rounded-xl shadow-md hover:shadow-lg"
              id="container"
            >
              <div className=" flex flex-col items-center gap-3">
                <div className=" p-4 w-full">
                  <Label className=" text-sm">
                    <span className="text-gray-500 font-medium">Key</span> Usage
                  </Label>
                  <motion.div
                    className="bg-gray-200 w-full h-5 p-[1px] rounded-full mt-2"
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 2 }}
                  >
                    <motion.div
                      className="bg-gray-900 h-[18px] w-full rounded-full"
                      variants={variants}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 2 }}
                    ></motion.div>
                  </motion.div>
                </div>
                <svg
                  viewBox="0 0 800 600"
                  height={400}
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter
                      id="glow"
                      x="-100%"
                      y="-100%"
                      width="350%"
                      height="350%"
                      color-interpolation-filters="sRGB"
                    >
                      <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                      <feOffset dx="0" dy="20" result="offsetblur"></feOffset>
                      <feFlood
                        id="glowAlpha"
                        flood-color="#000"
                        flood-opacity="0.123"
                      ></feFlood>
                      <feComposite in2="offsetblur" operator="in"></feComposite>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                    </filter>
                  </defs>

                  <g id="graphTextGroup" opacity="0.5">
                    <text
                      transform="translate(48.33 473.71)"
                      font-size="18"
                      fill="#fff"
                      font-weight="700"
                    >
                      400 Requests
                    </text>
                    <text
                      transform="translate(48.33 301.71)"
                      font-size="18"
                      className=" fill-black dark:fill-white stroke-black dark:stroke-white"
                    >
                      600 Requests
                    </text>

                    <text
                      transform="translate(48.33 101.71)"
                      font-size="18"
                      className=" fill-black dark:fill-white stroke-black dark:stroke-white"
                    >
                      1200 Requests
                    </text>
                  </g>
                  <g
                    id="horizontalLinesGroup"
                    fill="none"
                    stroke="#FFF"
                    stroke-miterlimit="10"
                  >
                    <motion.line
                      x1="780"
                      y1="481.7"
                      opacity="0.1"
                      x2="30"
                      y2="481.7"
                      className=" fill-black dark:fill-white stroke-black dark:stroke-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />

                    <motion.line
                      x1="780"
                      y1="381.7"
                      opacity="0.1"
                      x2="30"
                      y2="381.7"
                      className=" fill-black dark:fill-white stroke-black dark:stroke-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />

                    <motion.line
                      x1="780"
                      y1="281.7"
                      opacity="0.1"
                      x2="30"
                      y2="281.7"
                      className=" fill-black dark:fill-white stroke-black dark:stroke-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    />

                    <motion.line
                      x1="780"
                      y1="181.7"
                      opacity="0.1"
                      x2="30"
                      className=" fill-black dark:fill-white stroke-black dark:stroke-white"
                      y2="181.7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />

                    <motion.line
                      x1="780"
                      y1="81.7"
                      opacity="0.1"
                      x2="30"
                      y2="81.7"
                      className=" fill-black dark:fill-white stroke-black dark:stroke-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    />
                  </g>
                  <g id="uiGroup" filter="url(#glow)">
                    <motion.path
                      id="graphLine"
                      fill="none"
                      strokeLinecap="round"
                      stroke="#000"
                      strokeWidth="4"
                      strokeMiterlimit="10"
                      d="M94.6,405.1
  c62.9-95,109.2-111.7,142.4-103.8c44.6,10.6,74.8,67.9,143.4,63.8c35-2.1,32.7-17.4,73.9-21.7c77.7-8.2,105.9,44,136.3,13.6
  c30.6-30.5,10.8-91.7,44.9-127.5c29.1-30.6,56.7,0,94.1-33.9c20.6-18.6,32.6-46.2,39.6-66.5"
                      initial={{ pathLength: 0, pathOffset: 1, opacity: 0 }}
                      animate={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                    />
                    <motion.g id="connectorGroup">
                      <motion.line
                        id="connector"
                        x1="92"
                        x2="92"
                        y1="0"
                        y2="0"
                        className=" stroke-black dark:stroke-white"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.g>
                    <motion.g>
                      <motion.text
                        x="40"
                        y="28"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      ></motion.text>
                    </motion.g>
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
