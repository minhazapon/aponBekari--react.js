import Read from "./crud files/Read";
import Baking from "./home file/Baking";
import Banner from "./home file/Banner";
import Breads from "./home file/Breads";
import Fresh from "./home file/Fresh";
import Quality from "./home file/Quality";



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Baking></Baking>
            <Read></Read>
            <Fresh></Fresh>
            <Breads></Breads>
            <Quality></Quality>            
        </div>
    );
};

export default Home;