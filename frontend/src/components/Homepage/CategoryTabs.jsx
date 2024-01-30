"use client";
import React from "react";
import { useState } from "react";

import {
  Button,
  Typography,
  Input,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const [ category , setCategory ] = useState("trending");

  const handleClick = (category) => {
    setCategory(category);
    
  }

  return (
    <Tabs
      value={activeTab}
      className="mx-auto max-w-7xl w-full mb-4 mt-4 sm:hidden md:block "
    >
      <div className="w-full flex mb-8 flex-col items-center">
        <TabsHeader className="h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90">
          <Tab onClick={() => handleClick("trending")} value="trending">Trending</Tab>
          <Tab onClick={() => handleClick("dining")} value="dining">Dining</Tab>
          <Tab onClick={() => handleClick("living")} value="living">Living</Tab>
          <Tab onClick={() => handleClick("bedroom")} value="bedroom">Bedroom</Tab>
          <Tab onClick={() => handleClick("outside")} value="outside">Outside</Tab>
          <Tab onClick={() => handleClick("bathroom")} value="bathroom">Bathroom</Tab>
        </TabsHeader>
      </div>
    </Tabs>
  );
};

export default CategoryTabs;
