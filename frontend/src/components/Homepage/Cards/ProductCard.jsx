import React, { useState } from "react";
import Image from "next/image";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import { HeartButton, ShareButton, AddToCartBtn } from "../Buttons/CardButtons";

export function ProductCard({ img, category, title, desc, price, offPrice }) {
  return (
    <Card
      color="transparent"
      className="p-3 m-auto rounded-xl md:w-66 lg:w-72 h-full border-2"
      shadow={true}
    >
      <CardHeader color="gray" floated={false} className="mx-0 mt-0 mb-6">
        <Image
          width={500}
          height={500}
          src={img}
          alt={title}
          className="h-96 w-80  scale-[1.1] object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <div className="flex ml-auto mt-0 ">
          <a href="#" className="w-2/3 h-16 flex flex-wrap">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-3 font-bolder normal-case xl:w-64"
            >
              Lorem ipsum dolor sit
            </Typography>
          </a>

          <Typography
            className="text-center w-1/3 text-center pt-1"
            variant="h5"
            color="blue-gray"
            // Line through price
            // className={offPrice ? "line-through" : ""}
          >
            {price}
          </Typography>
        </div>
        <div className="flex gap-6">
          <HeartButton />
          <ShareButton />
          <AddToCartBtn />
          <div className="ml-auto">
            <Button color="blue">More</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
export default ProductCard;
