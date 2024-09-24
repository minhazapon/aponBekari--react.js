import { useEffect, useState } from "react";
import BreadsDetails from "./BreadsDetails";



const Breads = () => {

    const [breads, setBreads] = useState([])

    useEffect( () => {
      fetch('http://localhost:5000/breads')
      .then(res => res.json())
      .then(data => setBreads(data))

    } , [])

    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">

            <div>


                <div>
                    <p className=" text-center text-5xl font-mono">Our ​Breads </p>
                </div>

                <hr className=" mt-5 mb-5"></hr>

            <div className=" flex justify-center">
                <div className=" grid  md:grid-cols-4 gap-5">

                {

                breads.map( breads=> <BreadsDetails key={breads.id} breads={breads} ></BreadsDetails> )
                
                }


                </div>
            </div>
             





            </div>
            
        </div>
    );
};

export default Breads;