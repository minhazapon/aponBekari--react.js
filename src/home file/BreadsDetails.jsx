


const BreadsDetails = ({breads}) => {

    const {img, name, details} = breads


    return (
        <div>

            <div className="max-w-xs p-6 rounded-md shadow-md bg-white text-black">
            	<img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            	<div className="mt-6 mb-2">

            		<h2 className="text-xl font-semibold text-blue-500 tracking-wide"> Premium Breads </h2>
            	</div>
            	<p className="text-black   font-mono "> {details} </p>
            </div>
            
        </div>
    );
};

export default BreadsDetails;