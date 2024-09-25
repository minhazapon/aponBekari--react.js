import { useQuery } from "@tanstack/react-query";
import ListDetails from "./ListDetails";




const UserList = () => {
    
    const {data: query} = useQuery({

      queryKey: ['query'],
      queryFn: async () => {
        const res = await fetch('http://localhost:5000/signData')
        res.json()
      }
    })


    return (
        <div>

            <div>
                


               
               {
                 
                 query?.map( query=> <ListDetails key={query.id} query={query} ></ListDetails>  )

               }














            </div>
            
        </div>
    );
};

export default UserList;