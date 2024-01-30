

import React from "react";
import TopCategoryCard from "../../components/Homepage/Cards/TopCategoryCard";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import BedIcon from "@mui/icons-material/Bed";
import DnsIcon from "@mui/icons-material/Dns";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import HouseIcon from "@mui/icons-material/House";

const CATEGORIES = [
  {
    img: "https://media.istockphoto.com/id/1467126728/photo/modern-scandinavian-and-japandi-style-bedroom-interior-design-with-bed-white-color-wooden.webp?b=1&s=170667a&w=0&k=20&c=gPCpCv93qEQmXuOy__B4h3qTNR-WCJWn0wribNREeFU=",
    icon: BedIcon,
    title: "Bedsets",
    desc: "up to 40% OFF",
    category: 'living'
  },
  {
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    icon: TableRestaurantIcon,
    title: "Dining Tables",
    desc: "up to 40% OFF",
    category: 'bedroom'
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683141318297-75a3d8e86476?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RHJlc3NlcnxlbnwwfHwwfHx8MA%3D%3D",
    icon: DnsIcon,
    title: "Dressers",
    desc: "up to 40% OFF",
    category: 'trending'
  },
  {
    img: "https://images.unsplash.com/photo-1617806265182-7b3f847f0b75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
    icon: HouseIcon,
    title: "Home Decor",
    desc: "up to 40% OFF",
    category: 'outside'
  },
];

export function TopCategories() {
  return (
    <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-40">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Best Sellers
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          Explore our diverse range of inventory and embark on a journey that
          suits your mood, passion, or curiosity.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
        <a href="">
          {" "}
          <Card className="relative grid h-full w-full place-items-center overflow-hidden text-center bg-cover bg-no-repeat  bg-[url('https://media.istockphoto.com/id/1432859958/photo/cozy-luxury-and-modern-living-room-with-sofa-windows-and-decoration-a-close-up-on-the-sofa.webp?b=1&s=170667a&w=0&k=20&c=97koD0slUrWPCEMYsGFqxCqQzNmBmleKR-sc-DGxaAI=')]">
            <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
            <CardBody className="relative w-full">
              <Typography
                color="white"
                className="text-xs font-bold opacity-50"
              >
                up to 40% OFF
              </Typography>
              <Typography variant="h4" className="mt-9" color="white">
                Sofas
              </Typography>
              <Typography
                color="white"
                className="mt-4 mb-14 font-normal opacity-50"
              >
                Explore our extensive collection
              </Typography>
              <Button size="sm" color="white">
                Read More
              </Button>
            </CardBody>
          </Card>
        </a>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <a href="" key={key}>
              <TopCategoryCard {...props} />
            </a>
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <a href="" key={key}>
              <TopCategoryCard {...props} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCategories;
