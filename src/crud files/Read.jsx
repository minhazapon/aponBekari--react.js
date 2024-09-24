import { useEffect, useState } from "react";
import ReadDeatils from "./ReadDeatils";


const Read = () => {

    const [users, setUser] = useState([])


    useEffect( () => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUser(data))
    } , [])


    return (
        <div className=" flex justify-center mt-10">

          <div className=" grid  md:grid-cols-2 gap-5 ">



                {

                   
                    users.map( users => <ReadDeatils key={users._id} users={users}></ReadDeatils> )


                }



          </div>
            
        </div>
    );
};

export default Read;