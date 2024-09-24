import { useQuery } from "@tanstack/react-query";
import Pdetails from "./Pdetails";



const Products = () => {

     const {data: query} = useQuery({
          
        queryKey: ['query'],
        queryFn: async () => {
           const res = await fetch('http://localhost:5000/query')
           return res.json();

        }
     })


    return (

        <div className=" mt-10 mb-10 ml-5 mr-5">

            <div className=" flex justify-center">

                  <div className=" grid md:grid-cols-3 gap-5">
                      

                     {
                         
                         query?.map( query=> <Pdetails key={query.id}  query={query} ></Pdetails> )


                     }
 

                  </div>


            </div>
            
        </div>
    );
};

export default Products;