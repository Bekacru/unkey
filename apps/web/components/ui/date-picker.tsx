"use client";
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export function CalendarDateRangePicker({ className }: { className?: string }) {
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  const [date, setDate] = useState(nextMonth);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            size="sm"
            className={cn(
              "w-max justify-start text-left font-normal",
              !date && " text-slate-800"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "LLL dd, y") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto " align="start">
          <Calendar
            initialFocus
            mode="single"
            defaultMonth={nextMonth}
            selected={date}
            onSelect={(date) => date && setDate(date)}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
