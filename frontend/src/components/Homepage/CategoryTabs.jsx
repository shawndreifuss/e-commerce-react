"use client";
import React from "react";

import {
  Button,
  Typography,
  Input,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = React.useState("trending");
  return (
    <Tabs
      value={activeTab}
      className="mx-auto max-w-7xl w-full mb-4 mt-4 sm:hidden md:block "
    >
      <div className="w-full flex mb-8 flex-col items-center">
        <TabsHeader className="h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90">
          <Tab value="trending">Trending</Tab>
          <Tab value="dining">Dining</Tab>
          <Tab value="living">Living</Tab>
          <Tab value="bedroom">Bedroom</Tab>
          <Tab value="outside">Outside</Tab>
          <Tab value="bathroom">Bathroom</Tab>
        </TabsHeader>
      </div>
    </Tabs>
  );
};

export default CategoryTabs;
