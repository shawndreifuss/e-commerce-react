import React from "react"
import { Link } from "react-router-dom"
import {
  Typography,
  Card,
  CardBody,
  CardHeader
} from "@material-tailwind/react"


export function HomeProductCard({ img, category, title, desc, price, offPrice }) {
  return (
    <Link to={`/products/${title}`}>
    <Card color="transparent" shadow={false}>
      <CardHeader color="gray" floated={false} className="mx-0 mt-0 mb-6">
        <img
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full scale-[1.1] object-cover object-center"
        />
      </CardHeader>
      <CardBody className="p-0">
        <Typography color="blue" className="mb-2 text-xs !font-semibold">
          {category}
        </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-3 font-bold normal-case xl:w-64"
          >
            {title}
          </Typography>
        <Typography className="mb-4 font-normal !text-gray-500">
          {desc}
        </Typography>
        <div className="flex gap-2">
          <Typography
            variant="h5"
            color="blue-gray"
            className={offPrice ? "line-through" : ""}
          >
            {price}
          </Typography>
          <Typography variant="h5" color="red">
            {offPrice}
          </Typography>
        </div>
      </CardBody>
    </Card>
    </Link>
  )
}
export default HomeProductCard
