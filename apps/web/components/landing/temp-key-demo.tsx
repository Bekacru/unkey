"use client";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Skeleton } from "../ui/skeleton";
import { Switch } from "../ui/switch";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDateRangePicker } from "../ui/date-picker";
import useIntersectionObserver from "@/hooks/use-intersection-observer";

export const TemporaryKeyDemo = () => {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0,
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
        className="hidden lg:block rounded-xl shadow-md hover:shadow-lg"
        id="container"
        ref={ref}
      >
        <div className=" p-4 flex items-center gap-2">
          <Switch
            onCheckedChange={(checked) => setEnabled(checked)}
            checked={enabled}
          />
          <p className=" font-medium text-sm">Enable Expiration</p>
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
              <CalendarDateRangePicker className=" z-50" />
              <Label className=" text-gray-500 mt-4">
                This api key will automatically be revoked after the given date.
              </Label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
