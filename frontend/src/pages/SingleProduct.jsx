import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import  SingleProductDescription  from "../components/ProductsPage/SingleProductdescription";
import { productData } from "../data";
import { Carousel } from 'flowbite-react';
import { useParams } from "react-router-dom";
import Ratings from "../components/ProductsPage/Ratings";
import {Button} from 'flowbite-react';
import { product as data } from "../data";
import SingleProductRatings from "../components/ProductsPage/SingleProductRatings";
import { useNavigate } from "react-router-dom";


const singles =  {
sizes: [
  { name: "XXS", inStock: false },
  { name: "XS", inStock: true },
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
  { name: "2XL", inStock: true },
  { name: "3XL", inStock: true },
]
}

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SingleProduct() {
  const params = useParams();
  

  const Navigate = useNavigate();
  
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [product, setProduct] = useState(null);
      

  const SingleProduct = (p) => {
    console.log(p)
      const find = productData.find((product) => product.id === p)
     console.log(find)

    setProduct(find)
    setSelectedColor(find.colors[0])
    // setSelectedSize(find.sizes[2])
    }
  useEffect(() => {
    SingleProduct(params.productId)
  });

  const handleMessageSend = () => {
    Navigate("/inbox?conversation=984q3tvwybwy3vy5vyw45y")
  }
 
 
  
  return (
    <div className="bg-white">
      {product &&
      <div className="pt-6">
        {/*  =========== BreadCRumbs =========== */}
        {/* <nav aria-label="Breadcrumb"> 
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >

            
             {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))} 
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
             */}

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-screen-2xl lg:grid-cols-2 lg:gap-x-15 lg:px-8">
          
       <div className="flex flex-col ">
      <Carousel slideInterval={5000} className="w-[600px] h-[500px] mb-10">
        <img src={product.image_Url[0].url} />
        <img src={product.image_Url[1].url}  alt="..." />
        <img src={product.image_Url[0].url}  alt="..." />
        <img src={product.image_Url[1].url}  alt="..." />
        <img src={product.image_Url[0].url}  alt="..." />
      </Carousel>

      <Tabs aria-label="Tabs with icons" style="default">
              <Tabs.Item  title="Description" icon={HiUserCircle} >
                <SingleProductDescription  description={product.description} />
              </Tabs.Item>
              <Tabs.Item title="Reviews" icon={HiAdjustments}>
                <SingleProductRatings />
              </Tabs.Item>
            </Tabs>

   </div>


          <div className="h-screen sm:overflow-hidden sm:rounded-lg">
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <Ratings rating = {product.rating} />

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                  <p className="text-3xl tracking-tight text-gray-900">
                {product.name}
              </p>
                    
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                     
                  </a>
                  
                </div>
                <p className="text-gray-500">{product.category}</p>
              </div>

              {/*  Handle Message Send */}
              <div className="mt-6">
                <Button onClick={handleMessageSend} className="w-full h-14">Message Seller</Button>
                </div>





              <form className="mt-10 w-3/5">


                {/* If Colors TODO*/}
                {/* <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div> */}

                <div>
                  <p className="text-gray-500 h-28   overflow-y-scroll">{product.description}</p>
                </div>


                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center ">
                    
                  <Button className="w-6/12 m-3 h-14 opacity-75 "> <span className="text-xl ">Add to Cart </span></Button>
                  <Button className="w-6/12 h-14 ">
                    <span className="text-xl ">Buy</span></Button>


                  </div>
                  <div className="mt-10 pb-10 border-b-1 border-slate-300">
    <h3 className="text-sm font-medium text-gray-900  ">Highlights</h3>

    <div className="mt-4">
      <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
        {data.highlights.map((highlight) => (
          <li key={highlight} className="text-gray-400">
            <span className="text-gray-600">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
  <div className="mt-10">
    <h3 className="text-sm font-medium text-gray-900 text-center">License </h3>

    <div className="mt-4">
      <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
        
          <div className="text-gray-400 text-center">
            <span className="text-gray-600">LOrem Ipsum LOrem Ipsum LOrem Ipsum LOrem Ipsum LOrem Ipsum LOrem Ipsum LOrem Ipsum  </span>
          </div>
       
      </ul>
    </div>
  </div>
  

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes && product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div> 
                  </RadioGroup>
                </div>
              </form>
            </div>
          </div>
        </div>

       
      </div>
}
    </div>
  );
}
