import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Kbd } from "flowbite-react";
import { Link } from "react-router-dom";

const inCart = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: 90.00,
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: 32.00,
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

export default function Cart() {
  const [open, setOpen] = useState(false);
  const [subTotal, setSubTotal] = useState(0);



  
  useEffect(() => {
    let total = 0;
    inCart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setSubTotal(total);
  }, [inCart]);





  const removeCartItem = () => {
    console.log("removeCartItem");
  };
  


  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <>
        <ShoppingCartIcon
          color="action"
          className="mr-2 mt-1 h-6 w-6 cursor-pointer"
          onClick={handleClick}
        />
      </>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {inCart.map((product, index) => (
                                <CartSingleItem
                                  key={product.id}
                                  data={product}
                                  index={index}
                                />
                              ))}
                            </ul>
                          </div>
                        </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${subTotal}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <Link
                          to='/checkout'
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

const CartSingleItem = ({ data, index }) => {
  const product = data;
console.log(index);
  const [quantity, setQuantity] = useState(1);
  const singleItemTotal = product.price * quantity;
 

  const removeCartItem = () => {
    console.log("removeCartItem");
  };

  return (
    <>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href={product.href}>{product.name}</a>
              </h3>
              <p className="ml-4">${singleItemTotal}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">Qty {quantity}</p>

            <Kbd className="cursor-pointer" onClick={() => setQuantity(quantity + 1)}>
              +
            </Kbd>
            <Kbd
              className="cursor-pointer"
              onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
            >
              -
            </Kbd>

            <div className="flex">
              <button
                onClick={removeCartItem}
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
