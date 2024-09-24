



const Pdetails = ({query}) => {

    const {name, title, img} = query


    return (
        <div>

            <div className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img className=" h-[300px] w-[400px]"
                  src={img}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title} </h2>
                <p> Name: {name} </p>
               
              </div>
            </div>
            
        </div>
    );
};

export default Pdetails;