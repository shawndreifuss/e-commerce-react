

import React from "react";
import TopCategoryCard from "../../components/Homepage/Cards/TopCategoryCard";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { CATEGORIES } from "../../data";

export function TopCategories() {

  // TODO: add Top items sold to the top categories
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const items = productData && productData.sort((a,b) => b.total_sell - a.total_sell)
  //   const firsFiveItems = items.slice(0, 6);
  //   setData(firsFiveItems);

  //   }, );


  const Navigate = useNavigate();
  const handleSubmit = (category) => {
    console.log("hello")
    Navigate(`/products?category=${category}`)
    window.location.reload();
  }

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
        <Link to=''>
          {" "}
          <Card className="relative grid h-full w-full place-items-center overflow-hidden text-center bg-cover bg-no-repeat  bg-[url('https://media.istockphoto.com/id/1432859958/photo/cozy-luxury-and-modern-living-room-with-sofa-windows-and-decoration-a-close-up-on-the-sofa.webp?b=1&s=170667a&w=0&k=20&c=97koD0slUrWPCEMYsGFqxCqQzNmBmleKR-sc-DGxaAI=')]">
            <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
            <CardBody onClick={() => handleSubmit("sofas")} className="relative w-full">
              <Typography
                color="white"
                className="text-xs font-bold opacity-50"
              >
                up to 40% OFF
              </Typography>
              <Typography  variant="h4" className="mt-9" color="white">
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
        </Link>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <Link onClick={() => handleSubmit(props.category)} key={key}>
              <TopCategoryCard {...props} />
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <Link onClick={() => handleSubmit(props.category)} key={key}>
              <TopCategoryCard {...props} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCategories;
