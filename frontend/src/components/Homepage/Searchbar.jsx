import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { productData } from "../../data";
const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    

    const filteredProducts =
      productData &&
      productData.filter((product) => {
        return product.name.toLowerCase().includes(term.toLowerCase());
      });
    setSearchData(filteredProducts);
    if (term === "") {
      setSearchData("");
    }
  };
  return (
    <>
      <div className="grid justify-center pl-4 gap-2 flex flex-col">
        <div className=" flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="w-80">
            <Input label="Explore" value={searchTerm} onChange={handleSearch} />
          </div>
        </div>
      
          <div className="flex flex-col items-center mt-20 gap-2  w-72 bg-white z-10 overflow-x-hidden overflow-y-scroll absolute">

            {searchData && searchData.map((i, index) => {
              const productName = i.name.replace(/\s+/g, "-");
              return (
                
                <Link to={`/product/${productName}`} key={index}>
                  <div className=" flex h-12 overflow-x-hidden no-wrap text-[16px]  w-full">
                    <img src={i.image_Url[0].url} alt="" className="w-[36px] h-[36px] mr-auto"  />
                    <div className="flex ml-auto">
                    <h1 className="text-center overflow-x-hidden flex  no-wrap">{productName}</h1>
                    </div>
                  </div>
                </Link>
              )
            })}
        </div> 
      
      <></>
      </div>
    </>
  );
};

export default Searchbar;
