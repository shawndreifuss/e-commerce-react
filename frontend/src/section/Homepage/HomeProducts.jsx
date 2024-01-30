import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  Button,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import HomeProductCard from "../../components/Homepage/Cards/HomeProductCard";
import CategoryTabs from "../../components/Homepage/CategoryTabs";

const Furniture = [
  {
    img: `https://media.istockphoto.com/id/1440917866/photo/modern-open-plan-office-space-interior.webp?b=1&s=170667a&w=0&k=20&c=vaidCDHWF1VcAZ_KbTHg4aYPi_ls9pHryzWmYYJfAiY=`,
    
    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: 'living'
  },
  {
    img: `https://media.istockphoto.com/id/1449681387/photo/luxury-apartment.webp?b=1&s=170667a&w=0&k=20&c=mN6PfRbIbqxxMiX8hNaIe0Lj0N66F9ipLqW9_zlugw0=`,
    
    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: 'living'
  },
  {
    img: `https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww`,
    
    title: "Lorem ipsum dolor sit",
    desc:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: 'bedroom'
  },
  {
    img: `https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
   
    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: 'ouside'
  },
  {
    img: `https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
    
    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: 'dining'
  },
  {
    img: `https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
    
    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: 'trending'
  },
];



export function HomeProducts() {

  const [activeTab, setActiveTab] = useState("trending");
  const [ category , setCategory ] = useState("trending");

  const handleClick = (category) => {
    setCategory(category);
    
  }

  const state = category 

  console.log(state)

  return (
    <section className="px-8 pt-20 pb-10">
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
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
         {category === state  && Furniture.map((props, key) => (
         <HomeProductCard key={key} {...props} />
          ))}
          { category === 'living' && Furniture.map((props, key) => (
             <HomeProductCard key={key} {...props}  />
        ))}
      </div>
      <div className="grid place-items-center">
        <Link to="/products">
        <Button className="mt-32" variant="outlined">
          Show more
        </Button>
        </Link>
        
      </div>
    </section>
  );
}


export default HomeProducts;



    
  
