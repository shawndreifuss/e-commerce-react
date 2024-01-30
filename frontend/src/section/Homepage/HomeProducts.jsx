import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  Button,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import HomeProductCard from "../../components/Homepage/Cards/HomeProductCard";
import { trendingFurniture, diningFurniture, livingFurniture, bedroomFurniture, outsideFurniture, bathroomFurniture } from "../../data";





export function HomeProducts() {

  const [activeTab, setActiveTab] = useState("trending");
  const [ category , setCategory ] = useState("trending");

  const handleClick = (category) => {
    setCategory(category);
    
  }


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
         {category === 'trending'  && trendingFurniture.map((props, key) => (
         <HomeProductCard key={key} {...props} />
          ))}
          { category === 'dining' && diningFurniture.map((props, key) => (
             <HomeProductCard key={key} {...props}  />
        ))}
         { category === 'living' && livingFurniture.map((props, key) => (
             <HomeProductCard key={key} {...props}  />
        ))}
         { category === 'bedroom' && bedroomFurniture.map((props, key) => (
             <HomeProductCard key={key} {...props}  />
        ))}
         { category === 'outside' && outsideFurniture.map((props, key) => (
             <HomeProductCard key={key} {...props}  />
        ))}
         { category === 'bathroom' && bathroomFurniture.map((props, key) => (
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



    
  
