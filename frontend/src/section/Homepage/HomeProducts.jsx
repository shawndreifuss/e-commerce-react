import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import HomeProductCard from "../../components/Homepage/Cards/HomeProductCard";
import CategoryTabs from "../../components/Homepage/CategoryTabs";

const Furniture = [
  {
    img: `https://media.istockphoto.com/id/1440917866/photo/modern-open-plan-office-space-interior.webp?b=1&s=170667a&w=0&k=20&c=vaidCDHWF1VcAZ_KbTHg4aYPi_ls9pHryzWmYYJfAiY=`,
    category: "Category",
    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `https://media.istockphoto.com/id/1449681387/photo/luxury-apartment.webp?b=1&s=170667a&w=0&k=20&c=mN6PfRbIbqxxMiX8hNaIe0Lj0N66F9ipLqW9_zlugw0=`,
    category: "Category",
    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww`,
    category: "Category",
    title: "Lorem ipsum dolor sit",
    desc:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
    category: "Category",
    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
    category: "Category",
    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
    category: "Category",
    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
  },
];


export function HomeProducts() {
  

  return (
    <section className="px-8 pt-20 pb-10">
      <div className="container mx-auto mb-20 text-center">
        {/*  Add discounted price  */}
        {/* <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-3 font-bold uppercase"
        >
           up to 40% OFF 
        </Typography> */}
        <Typography variant="h1" color="blue-gray" className="mb-2">
          Take a Look
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
        >
          We offer a wide range of study guides, test prep materials, and
          reference books. Whether you&apos;re tackling calculus or diving into
          Shakespeare, we&apos;ve got you covered.
        </Typography>
        <div className="mt-20 flex items-center justify-center">
          <CategoryTabs />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {Furniture.map((props, key) => (
          <HomeProductCard key={key} {...props} />
        ))}
      </div>
      <div className="grid place-items-center">
        <Button className="mt-32" variant="outlined">
          Show more
        </Button>
      </div>
    </section>
  );
}


export default HomeProducts;