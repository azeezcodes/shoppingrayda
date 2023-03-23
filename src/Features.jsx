import React from "react";
import {
   QueryClient,
   QueryClientProvider,
   useQuery,
} from "@tanstack/react-query";


const Features = () => {
    
    
     const { isLoading, error, data } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
           fetch(
              "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b"
           ).then((res) => res.json()),
     });

    
    if (isLoading) return "Loading...";
    console.log(data)

     if (error) return "An error has occurred: " + error.message;
    return (
        <div>
            {data.lenght > 0 && data.map((item, index) => (
                <div key={index}>
                    
                </div>
            ))}
        </div>
    )
}
export default Features;