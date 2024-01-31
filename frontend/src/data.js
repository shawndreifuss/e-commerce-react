import BedIcon from "@mui/icons-material/Bed";
import DnsIcon from "@mui/icons-material/Dns";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import HouseIcon from "@mui/icons-material/House";

export const EXAMPLE_FURNITURE = [
    {
      img: `https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww`,
      category: "Frank Herbert",
      title: "Lorem Ipsum",
      desc: "A classic epic that explores political intrigue and power struggles on a desert planet.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww`,
      category: "William Gibson",
      title: "Lorem Ipsum",
      desc: "A pioneering cyberpunk novel filled with futuristic technology and hackers.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fHww`,
      category: "J.R.R. Tolkien",
      title: "Lorem Ipsum",
      desc: "A timeless adventure through Middle-earth, featuring Bilbo Baggins and his quest.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `https://media.istockphoto.com/id/1386471399/photo/modern-living-room-interior-3d-render.webp?b=1&s=170667a&w=0&k=20&c=ZJHxSY7Pg6xA9lx7df7xZe7KjH9z_16SfZj5wwZzC9E=`,
      category: "Lorem Ipsum",
      title: "Dune",
      desc: "A classic epic that explores political intrigue and power struggles on a desert planet.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
      category: "William Gibson",
      title: "Lorem Ipsum",
      desc: "A pioneering cyberpunk novel filled with futuristic technology and hackers.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
      category: "J.R.R. Tolkien",
      title: "Lorem Ipsum",
      desc: "A timeless adventure through Middle-earth, featuring Bilbo Baggins and his quest.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `https://images.unsplash.com/photo-1540638349517-3abd5afc5847?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
      category: "Frank Herbert",
      title: "Lorem Ipsum",
      desc: "A classic epic that explores political intrigue and power struggles on a desert planet.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
      category: "William Gibson",
      title: "Lorem Ipsum",
      desc: "A pioneering cyberpunk novel filled with futuristic technology and hackers.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
      category: "J.R.R. Tolkien",
      title: "Lorem Ipsum",
      desc: "A timeless adventure through Middle-earth, featuring Bilbo Baggins and his quest.",
      price: "$99",
      offPrice: "$79",
    },
  ];

 export const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  export const subCategories = [
    { name: 'cat1', href: '#' },
    { name: 'cat2', href: '#' },
    { name: 'cat3', href: '#' },
    { name: 'cat4', href: '#' },
    { name: 'cat5', href: '#' },
  ]
  export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true },
      ],
    },
  ]



  // product Data
  export const productData = [
    {
      id:'254646421',
      category:"cat1",
      name: "MacBook pro",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
        },
        {
          public_id: "test",
          url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
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
      price: 1099,
      discount_price: 1049,
      rating: 4,
      total_sell: 35,
      stock: 10,
      colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      ],
    },
    {
      id:'6245624562',
      category:"cat2",
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
      discount_price: 2499.99,
      price: 1099,
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
      id:'1623463',
      category:"cat3",
      name: "MacBook ",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
        {
          public_id: "test",
          url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
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
      price: 1099,
      discount_price: 1049,
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
      id:'6354454',
      category:"cat4",
      name: "New Fashionable Watch for men 2023 with multiple colors",
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
      total_sell: 12,
      stock: 10,
      colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      ],
    },
    {
      id:'541234234',
      category:"cat5",
      name: "New Trend shoes for gents with all sizes",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
        },
        {
          public_id: "test",
          url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
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
      id:'141234234',
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      category:"cat1",
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
      id:'41234234',
      name: "New Fashionable Watch for men 2023 with multiple colors",
      category:"cat2",
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
      id:'123411',
      category:"cat3",
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
      id:'2462542',
      category:"cat4",
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
      category:"cat5",
      name: "Gaming Headphone A",
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
  ];




  export const CATEGORIES = [
    {
      img: "https://media.istockphoto.com/id/1467126728/photo/modern-scandinavian-and-japandi-style-bedroom-interior-design-with-bed-white-color-wooden.webp?b=1&s=170667a&w=0&k=20&c=gPCpCv93qEQmXuOy__B4h3qTNR-WCJWn0wribNREeFU=",
      icon: BedIcon,
      title: "Bedsets",
      desc: "up to 40% OFF",
      category: 'living'
    },
    {
      img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      icon: TableRestaurantIcon,
      title: "Dining Tables",
      desc: "up to 40% OFF",
      category: 'bedroom'
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1683141318297-75a3d8e86476?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RHJlc3NlcnxlbnwwfHwwfHx8MA%3D%3D",
      icon: DnsIcon,
      title: "Dressers",
      desc: "up to 40% OFF",
      category: 'trending'
    },
    {
      img: "https://images.unsplash.com/photo-1617806265182-7b3f847f0b75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
      icon: HouseIcon,
      title: "Home Decor",
      desc: "up to 40% OFF",
      category: 'outside'
    },
  ];



  export const trendingFurniture = [
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

  export const livingFurniture = [
    
    {
      img: `https://media.istockphoto.com/id/1449681387/photo/luxury-apartment.webp?b=1&s=170667a&w=0&k=20&c=mN6PfRbIbqxxMiX8hNaIe0Lj0N66F9ipLqW9_zlugw0=`,
      
      title: "Lorem ipsum dolor sit",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
      price: "$99",
      offPrice: "$79",
      category: 'living'
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

  export const diningFurniture = [
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
      img: `https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D`,
      
      title: "Lorem ipsum dolor sit",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
      price: "$99",
      offPrice: "$79",
      category: 'dining'
    },
    
  ];

  export const bedroomFurniture = [

    {
      img: `https://media.istockphoto.com/id/1449681387/photo/luxury-apartment.webp?b=1&s=170667a&w=0&k=20&c=mN6PfRbIbqxxMiX8hNaIe0Lj0N66F9ipLqW9_zlugw0=`,
      
      title: "Lorem ipsum dolor sit",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
      price: "$99",
      offPrice: "$79",
      category: 'living'
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

  export const outsideFurniture = [
   
    
    
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

  export const bathroomFurniture = [
    {
      img: `https://media.istockphoto.com/id/1440917866/photo/modern-open-plan-office-space-interior.webp?b=1&s=170667a&w=0&k=20&c=vaidCDHWF1VcAZ_KbTHg4aYPi_ls9pHryzWmYYJfAiY=`,
      
      title: "Lorem ipsum dolor sit",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ",
      price: "$99",
      offPrice: "$79",
      category: 'living'
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