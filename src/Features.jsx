import React, { useState } from "react";
import {
   QueryClient,
   QueryClientProvider,
   useQuery,
} from "@tanstack/react-query";

// import Img1 from '../public/1png';

const images = [
   <img src="./1.png" alt="work" />,
   <img src="./2.png" alt="work" />,
   <img src="./3.png" alt="work" />,
   <img src="./4.png" alt="work" />,
   <img src="./5.png" alt="work" />,
   <img src="./6.png" alt="work" />,
   <img src="./7.png" alt="work" />,
   <img src="./8.png" alt="work" />,
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


   if (isLoading) return <div>"Loading..."</div>;
   console.log(data.data);


   if (error) return "An error has occurred: " + error.message;
   return (
      <div>
         {data.data.map((item, index) => (
            <div key={index} className=" border rounded-md border-[#D0D5DD] ">
              
               {images[index]}
               <div className="flex flex-row items-center " >
                  <div>{item.name.slice(0, 2).toUpperCase()} </div>
                  <p>{ item.name}</p>
                  <p>(Highest Bidder)</p>
               </div>
               <p></p>
            </div>
         ))}
      </div>
   );
};
export default Features;
