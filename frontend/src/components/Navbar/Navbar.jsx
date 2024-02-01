
import React from "react";
import Cart from "../Navbar/Cart";
import Notification from "./Notification";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';
import Searchbar from "../Homepage/Searchbar";
import Store from "../../redux/store";
import { logout} from "../../redux/actions/user";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { toast } from "react-toastify";



const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    name: "Shop",
    icon: StorefrontIcon,
    href: "/products",
  },
  {
    name: "My Orders",
    icon: ViewListIcon,
    href: "/orders",
  },
];



function NavItem({ children, href }) {
 


  return (
    <Link to={href}>
    <li>
      <Typography
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

const { isAuthenticated  } = useSelector((state) => state.user);
const { user } = useSelector((state) => state.user);



  const handleLogout = () => { 
    Store.dispatch(logout())
    toast.success('Logged out successfully')
   window.location.href = '/login'
    }


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
        </ul>
        <Searchbar />


     {!isAuthenticated ? (
<>
         <div className="hidden items-center gap-2 lg:flex">
          <Link to='/login'><Button href="/login" variant="text">Login</Button></Link>
          
          <Link to='/register' >
            <Button color="gray">Sign Up</Button>
          </Link>
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
     </>
)  : (


          <>
         <div className="hidden items-center gap-2 lg:flex">
           <Notification />
         <Cart />
       
          <div onClick={handleLogout} >
            <Button color="gray">Logout</Button>
          </div>
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
        </>
      )}  


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
            <Link to='/login'>
            <Button  variant="text">Log in</Button>
            </Link>
            <Link to="/register" target="_blank">
              <Button color="gray">Sign Up</Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>

  );
}

export default Navbar;
