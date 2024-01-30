"use Client";
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ProductCard from '../components/Cards/ProductCard'
import {Menu as FilterMenu } from '@headlessui/react'
import { EXAMPLE_FURNITURE, sortOptions, productData } from '../data'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <>
<div className="p-4 lg:p-24 sm:ml-64">
<FilterMenu as="div" className="relative inline-block text-right lg:mr-8 w-3/4 mb-2">
                <div>
                  <FilterMenu.Button className="group inline-flex justify-center text-md font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </FilterMenu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <FilterMenu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <FilterMenu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </FilterMenu.Item>
                      ))}
                    </div>
                  </FilterMenu.Items>
                </Transition>
              </FilterMenu>
   <div className=" p-12 rounded-lg lg:w-4/5 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-3 lg:gap-6  mb-6 mr-auto  ">
      {EXAMPLE_FURNITURE.map((props, key) => (
          <ProductCard key={key} {...props} />
        ))}
        {EXAMPLE_FURNITURE.map((props, key) => (
          <ProductCard key={key} {...props} />
        ))}
        {EXAMPLE_FURNITURE.map((props, key) => (
          <ProductCard key={key} {...props} />
        ))}
        {EXAMPLE_FURNITURE.map((props, key) => (
          <ProductCard key={key} {...props} />
        ))}
         </div>
   </div>
</div>
</>

  )
}
