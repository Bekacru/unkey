"use client";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Skeleton } from "../ui/skeleton";
import { Switch } from "../ui/switch";
import { AnimatePresence, motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/use-intersection-observer";

export const RateLimitDemo = () => {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 1,
  });
  const isVisible = !!entry?.isIntersecting;

  // useEffect(() => {
  //   if (isVisible) {
  //     setEnabled(true);
  //   } else {
  //     setEnabled(false);
  //   }
  // }, [isVisible]);
  return (
    <div>
      <div
        ref={ref}
        className="hidden lg:block rounded-xl shadow-md hover:shadow-lg"
        id="container"
      >
        <div className=" p-4 flex items-center gap-2">
          <Switch
            onCheckedChange={(checked) => setEnabled(checked)}
            checked={enabled}
          />
          <p className=" font-medium text-sm">Enable Ratelimiting</p>
        </div>
        <AnimatePresence mode="wait">
          {enabled && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.1, type: "tween", ease: "anticipate" }}
              className=" p-4"
            >
              <Label>Limit</Label>
              <Input className="" />
              <Label className=" text-gray-500 mt-2">
                The maximum number of requests possible during a burst.
              </Label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
