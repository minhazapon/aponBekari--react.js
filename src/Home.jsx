import Read from "./crud files/Read";
import Baking from "./home file/Baking";
import Banner from "./home file/Banner";
import Breads from "./home file/Breads";
import Contact from "./home file/Contact";
import Fresh from "./home file/Fresh";
import Menu from "./home file/Menu";
import Our from "./home file/Our";
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
            <Menu></Menu>  
            <Our></Our>
            <Contact></Contact>
            
              
        </div>
    );
};

export default Home;