import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const ReadDeatils = ({users}) => {
    

    const { _id, name ,chef , Supplier , Taste , Category, Details ,PhotoUrl} = users

    

    const handleDelete = delete_id =>{

        console.log(_id)


        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
          
            fetch(`http://localhost:5000/users/${delete_id}` , {
              method: 'DELETE'

            })
            .then( res => res.json())
            .then( data => {
              console.log(data)
              if(data.deletedCount > 0){
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });



              }
            } )
          }
        });




    }




    return (
        <div>

        <div>
            <div>
        <div className="card flex items-center card-side bg-base-100 shadow-xl p-5">
          <figure>
            <img className=" h-[200px] w-[200px] rounded-xl"
              src={PhotoUrl}
              alt="Movie" />
          </figure>
          <div className="card-body">
          {/* <h2 className="card-title"> _id: {_id} </h2> */}
            <h2 className="card-title"> Name: {name} </h2>
            <p> Chef: {chef} </p>
            <p className=" "> Supplier:  {Supplier} </p>
            
          
          </div>
          <div className=" ">
            <img className=" btn mt-1  mb-1 h-[30px]" src="https://cdn-icons-png.flaticon.com/128/2767/2767146.png" alt="" />
            <br></br>
            
            <Link to={`/update/${_id}`} >
            <img className="  btn h-[30px]" src="https://cdn-icons-png.flaticon.com/128/17766/17766508.png" alt="" />
            </Link>
           
     
            <br></br>
            <button onClick={() => handleDelete(users._id)}  className=" "><img className=" btn mt-1 h-[30px]" src="https://cdn-icons-png.flaticon.com/128/14929/14929600.png" alt="" /></button>
            <br></br>
        </div>
        </div>
        </div>
            
        </div>
            
        </div>
    );
};

export default ReadDeatils;