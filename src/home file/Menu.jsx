


const Menu = () => {


    return (
        <div className=" mt-10 mb-10  bg-no-repeat bg-cover p-32 "
        
        style={{
            backgroundImage: "url(  https://img.freepik.com/premium-photo/still-life-varied-assortment-breads-black-wall_165656-826.jpg?w=740  )",
          }}
        
        >

            <div>
                <p className=" text-6xl text-white font-mono text-center">Sweets Menu</p>
            </div>
            

            <div className=" flex justify-center ">


            <div className=" grid  md:grid-cols-3 gap-10 mt-10">

                
                <div className=" border-[1px] bg-gradient-to-r from-black   text-white border-black h-[350px] w-[350px] p-6 rounded-xl">
                   <p className=" font-bold text-2xl">Cookies</p>
                   <p className=" text-xl font-mono  mt-5">--Biscotti</p>
                   <p className=" text-xl font-mono  mt-5">--Chocolate Chip </p>
                   <p className=" text-xl font-mono  mt-5">--Oatmeal Pecan</p>
                   <p className=" text-xl font-mono  mt-5">--Oat Ginger Bar</p>
                   <p className=" text-xl font-mono  mt-5">--Seasonal specials
                   </p>
                </div>
                
                
                <div className=" border-[1px] text-white bg-gradient-to-r from-black border-black h-[350px] w-[350px] p-6 rounded-xl">
                   <p className=" font-bold text-2xl">Scones</p>
                   <p className=" text-xl font-mono  mt-5">--Classic butter scone
                   </p>
                   <p className=" text-xl font-mono  mt-5">--Fresh fruit buttermilk 
                   </p>
                   <p className=" text-xl font-mono  mt-5">--Handmade scones
                   </p>
                </div>
                
                
                <div className=" border-[1px] text-white bg-gradient-to-r from-black border-black h-[350px] w-[350px] p-6 rounded-xl">
                   <p className=" font-bold text-2xl">Other</p>
                   <p className=" text-xl font-mono  mt-5">--Seasonal galletes
                   </p>
                   <p className=" text-xl font-mono  mt-5">--Tartlets </p>
                   <p className=" text-xl font-mono  mt-5">--Banana Bread</p>
                   <p className=" text-xl font-mono  mt-5">--Bread Puddingr</p>
                   <p className=" text-xl font-mono  mt-5">--Cranberry Pecan Granola
                   </p>
                </div>
                
                
                </div>
                
                
                

                
                </div>

         

            
        </div>
    );
};

export default Menu;