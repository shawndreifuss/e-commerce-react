
import React from "react";
import { Dropdown } from 'flowbite-react';
import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Searchbar from "./Homepage/Searchbar";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import SearchIcon from "@mui/icons-material/Search";

const NAV_MENU = [
  {
    name: "Cart",
    icon: ShoppingCartIcon,
  },
  {
    name: "Orders",
    icon: CommandLineIcon,
    href: "/",
  },
  {
    name: "Shop",
    icon: UserCircleIcon,
    href: "/products",
  },
];

function NavItem({ children, href }) {

  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to='/'>
        <Typography color="blue-gray" className="text-lg font-bold">
          E-commerce Store
        </Typography>
        </Link>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
          {user && (
          <div className="ml-16 pl-10 flex flex-col items-center justify-center md:flex-row ">
            <div className="w-80 flex row ">
              <Input label="Explore" />
              <IconButton color="white"  aria-label="add to shopping cart">
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          )}
        </ul>
        <Searchbar />


     {/* =============  if no user ================= */}

        {/* <div className="hidden items-center gap-2 lg:flex">
          <Link to='/login'><Button href="/login" variant="text">Login</Button></Link>
          
          <a href="/register" >
            <Button color="gray">Sign Up</Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>*/}




        {/*    ===========   If User ============== */}
         <div className="hidden items-center gap-2 lg:flex">
              <Dropdown label="" renderTrigger={() => <NotificationsIcon color="action" className="mr-2 mt-1 h-6 w-6 cursor-pointer"/>} >
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Notifcation 1</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Notifcation 2</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Notifcation 3</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Notifcation 4</Dropdown.Item>
    </Dropdown>
         
    <Dropdown label="" renderTrigger={() => <ShoppingCartIcon color="action" className="mr-2 mt-1 h-6 w-6 cursor-pointer"/>} >
      <Dropdown.Header>
        <span className="block text-sm">Username</span>
        <span className="block truncate text-sm font-medium">user@email.com</span>
      </Dropdown.Header>
      <Dropdown.Item className="flex justify-between" > <img src="/images/no-avatar.png" alt="" className="w-7 h-7 m-0 p-0 object-cover" /><span>Cart Item 1</span></Dropdown.Item>
      <Dropdown.Item className="flex justify-between" > <img src="/images/no-avatar.png" alt="" className="w-7 h-7 m-0 p-0 object-cover" /><span>Cart Item 2</span></Dropdown.Item>
      <Dropdown.Item className="flex justify-between" > <img src="/images/no-avatar.png" alt="" className="w-7 h-7 m-0 p-0 object-cover" /><span>Cart Item 3</span></Dropdown.Item>
      <Dropdown.Item className="flex justify-between" > <img src="/images/no-avatar.png" alt="" className="w-7 h-7 m-0 p-0 object-cover" /><span>Cart Item 4</span></Dropdown.Item>
      <Dropdown.Divider />
      <Link to='/'>
      <Dropdown.Item >View All</Dropdown.Item>
      </Link>
    </Dropdown>

         <img src="/images/no-avatar.png" alt="" className="w-[36px] h-[36px] rounded-full object-cover mr-3" />
       
          <a href="#" >
            <Button color="gray">Logout</Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div> 
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
    
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Button href='/login' variant="text">Log in</Button>
            <a href="/register" target="_blank">
              <Button color="gray">Sign Up</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
