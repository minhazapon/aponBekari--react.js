import { Link } from "react-router-dom";



const Baking = () => {


    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">

            <div>
                <p className=" text-center  text-6xl font-mono">Delicious Baking</p>
            </div>

            <div className=" flex justify-center mt-10 ">

           
             
             <div className=" grid  md:grid-cols-3 gap-10">

             

             <div className=" flex gap-5">
                <img className=" h-[50px]" src="https://assets.nicepagecdn.com/d2cc3eaa/3379718/images/3014502.png" alt="" />
                <div>
                    <p className=" font-bold text-2xl">Baked Fresh Daily
                    </p>
                    <p className=" font-thin text-xl mt-5">Our bread is baked fresh daily,<br></br> contains no preservatives and<br></br>  is very high in quality. It is<br></br>  also especially nice and soft</p>
                </div>
             </div>
             <div className=" flex gap-5">
                <img className=" h-[50px]" src="https://assets.nicepagecdn.com/d2cc3eaa/3379718/images/4241664.png" alt="" />
                <div>
                    <p className=" font-bold text-2xl">Great Value
                    </p>
                    <p className=" font-thin text-xl mt-5">Our bread is baked fresh daily,<br></br> contains no preservatives and<br></br>  is very high in quality. It is<br></br>  also especially nice and soft</p>
                </div>
             </div>
             <div className=" flex gap-5">
                <img className=" h-[50px]" src="https://assets.nicepagecdn.com/d2cc3eaa/3379718/images/8555318.png" alt="" />
                <div>
                    <p className=" font-bold text-2xl">Institutions
                    </p>
                    <p className=" font-thin text-xl mt-5">Our bread is baked fresh daily,<br></br> contains no preservatives and<br></br>  is very high in quality. It is<br></br>  also especially nice and soft</p>
                </div>
             </div>
             <div className=" flex gap-5">
                <img className=" h-[50px]" src="https://assets.nicepagecdn.com/d2cc3eaa/3379718/images/2203124.png" alt="" />
                <div>
                    <p className=" font-bold text-2xl">Delivery To Your Door

                    </p>
                    <p className=" font-thin text-xl mt-5">Our bread is baked fresh daily,<br></br> contains no preservatives and<br></br>  is very high in quality. It is<br></br>  also especially nice and soft</p>
                </div>
             </div>
             <div className=" flex gap-5">
                <img className=" h-[50px]" src="https://assets.nicepagecdn.com/d2cc3eaa/3379718/images/679821.png" alt="" />
                <div>
                    <p className=" font-bold text-2xl">No Order Too Large

                    </p>
                    <p className=" font-thin text-xl mt-5">Our bread is baked fresh daily,<br></br> contains no preservatives and<br></br>  is very high in quality. It is<br></br>  also especially nice and soft</p>
                </div>
             </div>
             <div className=" flex gap-5">
                <img className=" h-[50px]" src="https://assets.nicepagecdn.com/d2cc3eaa/3379718/images/4937753.png" alt="" />
                <div>
                    <p className=" font-bold text-2xl">Delicious Baking

                    </p>
                    <p className=" font-thin text-xl mt-5">Our bread is baked fresh daily,<br></br> contains no preservatives and<br></br>  is very high in quality. It is<br></br>  also especially nice and soft</p>
                </div>
             </div>


             </div>



            </div>


            <div>
               <p className=" font-mono text-center text-5xl mt-10">Add Your Items</p>
               <div className=" flex justify-center mt-5">
                  <Link to='/addForm' >
                   <button className=" btn  border-[1px] border-[#4de7e2] ">AddItems</button>
                  </Link>
              
               </div>

            </div>
            
        </div>
    );
};

export default Baking;