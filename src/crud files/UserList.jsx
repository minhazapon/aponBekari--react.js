
import { useEffect, useState } from "react";




const UserList = () => {
    
    // const {data: query} = useQuery({

    //   queryKey: ['query'],
    //   queryFn: async () => {
    //     const res = await fetch('http://localhost:5000/signData')
    //     res.json()
    //   }
    // })


    const [query, setQue] = useState([])
    
    useEffect( () => {
       
      fetch('http://localhost:5000/signData')
      .then(res => res.json())
      .then(data => setQue(data))


    } , [])

    return (
        <div>

            <div>

            <div>

                  <div>
                  <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                  <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                  <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                  </colgroup>
                  <thead className="bg-gray-700">
                  <tr className="text-left">
                  <th className="p-3">_ID #</th>
                  <th className="p-3">EMAIL</th>
                  
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                    

                  {
                 
                   query.map( query=> <div className=" flex justify-between items-center gap-11">
                       
                       <p> {query._id} </p>
                       <p> {query.email} </p>

                   </div>  )

                 }                  
                  </tr>
                  
                  </tbody>
                  </table>
                  </div>
                  </div>
                  
                  </div>
                  
                  
                  </div>
                

               
               
             














            </div>
            
        </div>
    );
};

export default UserList;