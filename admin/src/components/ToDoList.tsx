"use client";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";

const TodoList = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="test-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flext items-center gap-4">
              <Checkbox id="item1" />{" "}
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                {" "}
                Lorem ipsum dolor
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
