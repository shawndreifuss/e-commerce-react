import BedIcon from "@mui/icons-material/Bed";
import DnsIcon from "@mui/icons-material/Dns";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import HouseIcon from "@mui/icons-material/House";

export const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
export const subCategories = [
  { name: "Shirts" },
  { name: "Jackets" },
  { name: "Pants" },
  { name: "Shorts" },
  { name: "Shoes" },
];
export const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "shirts", label: "Shirts", checked: false },
      { value: "jackets", label: "Jackets", checked: false },
      { value: "pants", label: "Pants", checked: false },
      { value: "shorts", label: "Shorts", checked: false },
      { value: "shoes", label: "Shoes", checked: false },
    ],
  },
  // {
  //   id: "category",
  //   name: "Category",
  //   options: [
  //     { value: "new-arrivals", label: "New Arrivals", checked: false },
  //     { value: "sale", label: "Sale", checked: false },
  //     { value: "travel", label: "Travel", checked: false },
  //     { value: "organization", label: "Organization", checked: false },
  //     { value: "accessories", label: "Accessories", checked: false },
  //   ],
  // },
  {
    id: "gender",
    name: "Gender",
    options: [
      { value: "men", label: "Men", checked: false },
      { value: "women", label: "Women", checked: false },
      { value: "kids", label: "Kids", checked: false },
     
    ],
  },
];

// product Data
export const productData = [
  {
    id: "1",
    category: "Shirts",
    subCategory: "men",
    name: "Mens Casual Bundle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.7,
    },
    price: 49.99,
    discount_price: 45,
    rating: 4.3,
    total_sell: 35,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "12",
    category: "Shirts",
    subCategory: "men",
    name: "Mens Casual Bundle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.7,
    },
    price: 49.99,
    discount_price: 45,
    rating: 4.3,
    total_sell: 35,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "123",
    category: "Shirts",
    subCategory: "men",
    name: "Mens Casual Bundle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.7,
    },
    price: 49.99,
    discount_price: 45,
    rating: 4.3,
    total_sell: 35,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "1234",
    category: "Shirts",
    subCategory: "men",
    name: "Mens Casual Bundle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.7,
    },
    price: 49.99,
    discount_price: 45,
    rating: 4.3,
    total_sell: 35,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "12345",
    category: "Shirts",
    subCategory: "men",
    name: "Mens Casual Bundle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.7,
    },
    price: 49.99,
    discount_price: 45,
    rating: 4.3,
    total_sell: 35,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },

  {
    id: "21",
    category: "Shirts",
    subCategory: "women",
    name: "Womens Shirt",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 20.99,
    price: 24.99,
    rating: 5,
    total_sell: 80,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "212",
    category: "Shirts",
    subCategory: "women",
    name: "Womens Shirt",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 20.99,
    price: 24.99,
    rating: 5,
    total_sell: 80,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },

  {
    id: "2123",
    category: "Shirts",
    subCategory: "women",
    name: "Womens Shirt",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 20.99,
    price: 24.99,
    rating: 5,
    total_sell: 80,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },

  {
    id: "21234",
    category: "Shirts",
    subCategory: "women",
    name: "Womens Shirt",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 20.99,
    price: 24.99,
    rating: 5,
    total_sell: 80,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },

  {
    id: "212345",
    category: "Shirts",
    subCategory: "women",
    name: "Womens Shirt",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 20.99,
    price: 24.99,
    rating: 5,
    total_sell: 80,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },

  {
    id: "3",
    category: "Shirts",
    subCategory: "kids",
    name: "Kids Shirt Bundle ",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMHNoaXJ0fGVufDB8fDB8fHww",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMHNoaXJ0fGVufDB8fDB8fHww",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 10.99,
    discount_price: 10.49,
    rating: 4,
    total_sell: 75,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "31",
    category: "Shirts",
    subCategory: "kids",
    name: "Kids Shirt Bundle ",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMHNoaXJ0fGVufDB8fDB8fHww",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMHNoaXJ0fGVufDB8fDB8fHww",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 10.99,
    discount_price: 10.49,
    rating: 4,
    total_sell: 75,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "312",
    category: "Shirts",
    subCategory: "kids",
    name: "Kids Shirt Bundle ",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMHNoaXJ0fGVufDB8fDB8fHww",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMHNoaXJ0fGVufDB8fDB8fHww",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 10.99,
    discount_price: 10.49,
    rating: 4,
    total_sell: 75,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "3123",
    category: "Shirts",
    subCategory: "kids",
    name: "Kids Shirt Bundle ",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMHNoaXJ0fGVufDB8fDB8fHww",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMHNoaXJ0fGVufDB8fDB8fHww",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 10.99,
    discount_price: 10.49,
    rating: 4,
    total_sell: 75,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "31234",
    category: "Shirts",
    subCategory: "kids",
    name: "Kids Shirt Bundle ",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMHNoaXJ0fGVufDB8fDB8fHww",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMHNoaXJ0fGVufDB8fDB8fHww",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 10.99,
    discount_price: 10.49,
    rating: 4,
    total_sell: 75,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
























  {
    id: "4",
    category: "cat4",
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMHNoaXJ0fGVufDB8fDB8fHww",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 12,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "5",
    category: "Mens live Shirt",
    subCategory: "men",
    name: "New Trend Shirt for gents with all sizes",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_Url: [
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBzaGlydHMlMjBwcm9kdWN0fGVufDB8fDB8fHww",
      },
      {
        public_id: "test",
        url: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBzaGlydHMlMjBwcm9kdWN0fGVufDB8fDB8fHww",
      },
    ],
    shop: {
      name: "Alisha Shoes Mart",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 120,
    discount_price: 89,
    rating: 5,
    total_sell: 49,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "141234234",
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    subCategory: "men",
    category: "cat1",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "41234234",
    name: "New Fashionable Watch for men 2023 with multiple colors",
    category: "cat2",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 62,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
  {
    id: "123411",
    category: "cat3",
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },

  {
    id: "2462542",
    category: "cat4",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    price: 1099,
    rating: 5,
    total_sell: 20,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },

  {
    id: 231,
    category: "cat5",
    name: "Gaming Headphone A",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        url: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {

        url: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
];

export const CATEGORIES = [
  {
    img: "https://media.istockphoto.com/id/1467126728/photo/modern-scandinavian-and-japandi-style-bedroom-interior-design-with-bed-white-color-wooden.webp?b=1&s=170667a&w=0&k=20&c=gPCpCv93qEQmXuOy__B4h3qTNR-WCJWn0wribNREeFU=",
    icon: BedIcon,
    title: "Bedsets",
    desc: "up to 40% OFF",
    category: "living",
  },
  {
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    icon: TableRestaurantIcon,
    title: "Dining Tables",
    desc: "up to 40% OFF",
    category: "bedroom",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683141318297-75a3d8e86476?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RHJlc3NlcnxlbnwwfHwwfHx8MA%3D%3D",
    icon: DnsIcon,
    title: "Dressers",
    desc: "up to 40% OFF",
    category: "trending",
  },
  {
    img: "https://images.unsplash.com/photo-1617806265182-7b3f847f0b75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
    icon: HouseIcon,
    title: "Home Decor",
    desc: "up to 40% OFF",
    category: "outside",
  },
];

export const trendingFurniture = [
  {
    img: `https://media.istockphoto.com/id/1440917866/photo/modern-open-plan-office-space-interior.webp?b=1&s=170667a&w=0&k=20&c=vaidCDHWF1VcAZ_KbTHg4aYPi_ls9pHryzWmYYJfAiY=`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "living",
  },
  {
    img: `https://media.istockphoto.com/id/1449681387/photo/luxury-apartment.webp?b=1&s=170667a&w=0&k=20&c=mN6PfRbIbqxxMiX8hNaIe0Lj0N66F9ipLqW9_zlugw0=`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "living",
  },
  {
    img: `https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "bedroom",
  },
  {
    img: `https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "ouside",
  },
  {
    img: `https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "dining",
  },
  {
    img: `https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "trending",
  },
];

export const livingFurniture = [
  {
    img: `https://media.istockphoto.com/id/1449681387/photo/luxury-apartment.webp?b=1&s=170667a&w=0&k=20&c=mN6PfRbIbqxxMiX8hNaIe0Lj0N66F9ipLqW9_zlugw0=`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "living",
  },

  {
    img: `https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "ouside",
  },
  {
    img: `https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "dining",
  },
  {
    img: `https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "trending",
  },
];

export const diningFurniture = [
  {
    img: `https://media.istockphoto.com/id/1440917866/photo/modern-open-plan-office-space-interior.webp?b=1&s=170667a&w=0&k=20&c=vaidCDHWF1VcAZ_KbTHg4aYPi_ls9pHryzWmYYJfAiY=`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "living",
  },
  {
    img: `https://media.istockphoto.com/id/1449681387/photo/luxury-apartment.webp?b=1&s=170667a&w=0&k=20&c=mN6PfRbIbqxxMiX8hNaIe0Lj0N66F9ipLqW9_zlugw0=`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "living",
  },
  {
    img: `https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "bedroom",
  },

  {
    img: `https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "dining",
  },
];

export const bedroomFurniture = [
  {
    img: `https://media.istockphoto.com/id/1449681387/photo/luxury-apartment.webp?b=1&s=170667a&w=0&k=20&c=mN6PfRbIbqxxMiX8hNaIe0Lj0N66F9ipLqW9_zlugw0=`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "living",
  },

  {
    img: `https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "dining",
  },
  {
    img: `https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "trending",
  },
];

export const outsideFurniture = [
  {
    img: `https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "ouside",
  },
  {
    img: `https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "dining",
  },
  {
    img: `https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "trending",
  },
];

export const bathroomFurniture = [
  {
    img: `https://media.istockphoto.com/id/1440917866/photo/modern-open-plan-office-space-interior.webp?b=1&s=170667a&w=0&k=20&c=vaidCDHWF1VcAZ_KbTHg4aYPi_ls9pHryzWmYYJfAiY=`,

    title: "Lorem ipsum dolor sit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
    price: "$99",
    offPrice: "$79",
    category: "living",
  },
];

export const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
