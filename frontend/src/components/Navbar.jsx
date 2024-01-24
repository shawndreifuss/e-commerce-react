
import React from "react";
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
    name: "Account",
    icon: UserCircleIcon,
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
        <Typography color="blue-gray" className="text-lg font-bold">
          E-commerce Store
        </Typography>
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
        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/login" variant="text">Log in</Button>
          <a href="/register" target="_blank">
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
