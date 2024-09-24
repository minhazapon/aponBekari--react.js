import Read from "./crud files/Read";
import Baking from "./home file/Baking";
import Banner from "./home file/Banner";



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Baking></Baking>
            <Read></Read>
            
        </div>
    );
};

export default Home;