import React from 'react'
import {
    Button,
    Typography,
    Input,
  } from "@material-tailwind/react";

const Searchbar = () => {
  return (
    <div className="grid place-items-start justify-center gap-2 flex flex-col">
    <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
      <div className="w-80">
        <Input label="Explore" />
      </div>
      <Button size="md" className="lg:w-max shrink-0" fullWidth color="gray">
        Get started
      </Button>
    </div>
    <div className="flex items-center gap-1">
    </div>
  </div>
  )
}

export default Searchbar