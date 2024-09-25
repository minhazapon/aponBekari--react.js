import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { fireContext } from "./firebase sign/AuthContext";



const Nav = () => {


    const {users, logOut} = useContext(fireContext)

    const navz = <>
       <div className=" flex-col md:flex-row lg:flex-row  flex items-center gap-5">
       <li className=" w-[100px]  text-center border-[1px] border-[#4de7e2] rounded-lg font-mono" ><NavLink className='text-center' to='/' >Home</NavLink></li>
       <li className="  w-[100px] text-center border-[1px] border-[#4de7e2] rounded-lg font-mono" ><NavLink to='/products' >Products</NavLink></li>
       { users && <>
       
       <li className=" w-[100px] text-center  border-[1px] border-[#4de7e2] rounded-lg font-mono" ><NavLink to='/list' >userList</NavLink></li>

       </>

       }
       
       </div>
    </>


    const handleOut = () => {
      logOut()
      .then(() => console.log('logOut successfully'))
      .catch( error => 
        console.error(error)
      )
     }


    return (
        <div>

<div className="navbar bg-base-100 shadow-md p-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navz}
      </ul>
    </div>
    <div className=" flex items-center gap-2">
        <img className=" h-[100px]" src="https://cdn-icons-gif.flaticon.com/15547/15547179.gif" alt="" />
        <a className=" text-xl font-mono">AponBekari</a>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navz}
    </ul>
  </div>
  <div className="navbar-end">

    {/* <Link to='/login' >
    <a className="btn">SignIn</a>
    </Link> */}

{ users ? <>
    
    <a href="#_" onClick={handleOut} class="relative inline-block text-lg group">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease">SignOut</span>
    <span class="relative">SignOut</span>
    </span>
    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
    </a>
    
  </>:

    <Link to="/login" >
    <a className="btn">Go</a>
    </Link>

  }
    
  </div>
</div>
            
        </div>
    );
};

export default Nav;