


const Contact = () => {

  


    return (
        <div className=" mt-20 mb-10">

            <div className=" bg-no-repeat bg-cover p-20 rounded-xl " 
            style={{
                backgroundImage: "url(   https://img.freepik.com/premium-photo/homemade-sourdough-bread-food-photography_354831-3222.jpg?w=826  )",
              }}
            
            > 

                <div className=" flex justify-start ">
                  
                <div className=" border-[1px]  text-white border-black w-[500px] bg-gradient-to-r from-black  h-[520px] p-7  rounded-xl ">
                    
                    <p className=" text-center text-3xl font-mono font-bold text-[#4de7e2]">Contact Us
                    </p>
                    <p className=" text-center  mt-5 font-thin text-2xl">Monday - Friday 7:00 AM - 6:00 PM | Saturday 7:00<br></br> AM - 4:00 PM<br></br>
                    Closed Sunday to focus on faith and family</p>
                    <p className=" mt-5 font-thin text-2xl text-center ">Phone: (678) 580-0734<br></br>
                    Email: <span className=" text-[#4de7e2]">apon@gmail.com</span></p>
                    <p className=" font-thin text-2xl mt-5 text-center">Address:<br></br>
                    Great Harvest Bread Company<br></br>
                    150 Athens Hwy Suite 700<br></br>
                    Loganville, GA 30052 </p>

                </div>


                </div>
              



            </div>
            
        </div>
    );
};

export default Contact;