


import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="h-full object-cover no-repeat bg-[url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
    <div className="!flex h-[55vh] w-full  items-center justify-between px-10 bg-[url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <img
        // width={1200}
        // height={1200}
        src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28 ">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl text-center"
            >
             <span className="bolder text-xl-9">E-commerce</span>  <br />Furniture Store
            </Typography>
            <div className=" w-full flex justify-center gap-4 lg:pt-4 lg:justify-center">
              <Button color="gray">Shop All</Button>
              <Button color="gray" variant="outlined">
                see pricing
              </Button>
            </div>
            <div className=" pt-6 grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-center">
              <a href="/">
              <img
                // width={144}
                // height={144}
                className="w-36 rounded-xl"
                src="https://media.istockphoto.com/id/1357529222/photo/3d-rendering-of-a-dining-area-in-modern-kitchen.webp?b=1&s=170667a&w=0&k=20&c=bfG-kYG4jZyPrimKf_DNUEQpouINV5Ckij060oNjY1s="
                alt="pinterest"
              />
              </a>
              <a href="/">
              <img
                // width={144}
                // height={144}
                className="w-36 rounded-xl"
                src="https://media.istockphoto.com/id/1413428981/photo/modern-living-room-interior-3d-render.webp?b=1&s=170667a&w=0&k=20&c=1NhHJ9jHYfpIfQE03cEybhGHePuqk62kwUVhudY9c44="
                alt="pinterest"
              />
              </a>
              <a href="/">
              <img
                // width={144}
                // height={144}
                className="w-36 rounded-xl"
                src="https://media.istockphoto.com/id/1457954746/photo/a-bedroom-with-a-wood-headboard-and-footboard.webp?b=1&s=170667a&w=0&k=20&c=bP8zyk4Jy_Ca3nvAt0JOAc7c_YUeNED3OEh038fuIF0="
                alt="pinterest"
              />
              </a>
              <a href="/" className="h-full w-full">
              <img
                // width={144}
                // height={144}
                className="w-36 rounded-xl"
                src="https://media.istockphoto.com/id/1415799772/photo/home-interior-with-vintage-furniture.jpg?s=2048x2048&w=is&k=20&c=u95oK-AfnflG_CXLYy4mf9owTsBFk86sBhiYKMZvulI="
                alt="pinterest"
              />
              </a>
              
            </div>
          </Card>
        </div>
      </div>
    </div>
    </div>
  
    
  );
}
export default Hero;
