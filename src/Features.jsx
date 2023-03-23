import React, { useState } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import {
   QueryClient,
   QueryClientProvider,
   useQuery,
} from "@tanstack/react-query";

// import Img1 from '../public/1png';

const images = [
   <img src="./1.png" alt="work" className="w-full" />,
   <img src="./2.png" alt="work" className="w-full" />,
   <img src="./3.png" alt="work" className="w-full"/>,
   <img src="./4.png" alt="work" className="w-full"/>,
   <img src="./5.png" alt="work" className="w-full"/>,
   <img src="./6.png" alt="work" className="w-full"/>,
   <img src="./7.png" alt="work" className="w-full"/>,
   <img src="./8.png" alt="work" className="w-full"/>,
];

const Features = () => {
   const [content, setContent] = useState(null);

   const { isLoading, error, data } = useQuery({
      queryKey: ["repoData"],
      queryFn: () =>
         fetch(
            "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b"
         ).then((res) => res.json()),
   });


   if (isLoading) return <div>Please wait a while our product is loading...</div>;
   console.log(data.data);


   if (error) return "An error has occurred: " + error.message;
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6  justify-items-center">
         {data.data.map((item, index) => (
            <div
               key={index}
               className=" border rounded-md border-[#D0D5DD] h-fit w-[300px] p-3 "
            >
               <div className="w-full"> {images[index]}</div>
               <div className="flex flex-row items-center mt-3 gap-3 ">
                  <div className="border rounded-full p-[.4rem] bg-[#F2F4F7] ">
                     <p className="font-semibold text-[14px]">
                        {item.name.slice(0, 2).toUpperCase()}{" "}
                     </p>
                  </div>
                  <p className="font-bold text-[12px]">{item.name}</p>
                  <p className="text-[#D0D5DD] text-[12px]">(Highest Bidder)</p>
               </div>
               <p className="font-[600] text-[14px] mt-4">{item.title}</p>
               <div className="flex items-center mt-4 mb-2">
                  {" "}
                  <p className="font-[400] text-[14px] mr-2 ">Current bid: </p>{" "}
                  <p className="font-[600] text-[14px]">{item.bid}</p>
               </div>
               <Divider />
               <div>
                  {" "}
                  <Button variant="contained" sx={{ width: "100%", marginTop:"12px" }}>
                     Add to wishlist
                  </Button>
               </div>
            </div>
         ))}
      </div>
   );
};
export default Features;
