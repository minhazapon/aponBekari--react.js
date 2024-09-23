

//

const Banner = () => {
    return (
        <div className=" flex justify-center bg-cover bg-no-repeat  p-24  "

        style={{
            backgroundImage: "url(  https://img.freepik.com/premium-photo/rustic-bakery-background-with-various-breads-baguettes-wooden-table_230363-11683.jpg?w=826 )",
          }}
         
        >

            <div className=" text-white bg-gradient-to-r from-black p-5 rounded-xl ">


          
            <div>
                <p className=" text-4xl font-thin">Family   bakery
                </p>

                <p className=" text-8xl font-mono font-bold">Organic<br></br>
                Breads</p>
            </div>


            <div className=" mt-10 flex justify-center ">
                <div className="  grid  md:grid-cols-3 gap-10">

                 
                 <div>
                    <p className=" text-3xl font-mono">F​ind Us</p>
                    <p className=" font-thin text-xl mt-5">121 Rock Sreet,<br></br> 21 Avenue, New York,<br></br> NY 92103-9000</p>
                 </div>

                 <div>
                    <p className=" text-3xl font-mono">Hours</p>
                    <p className=" font-thin text-xl mt-5">Monday – Saturday<br></br>
                     9am – 7pm<br></br>
                     Sunday<br></br>
                     10am – 6pm</p>
                 </div>

                 <div>
                    <p className=" text-3xl font-mono">Call Us</p>
                    <p className=" font-thin text-xl mt-5">01950374409<br></br>01947527866</p>
                 </div>







                </div>
            </div>







            </div>
            
        </div>
    );
};

export default Banner;