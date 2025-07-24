import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftsideNav from "../shared/LeftsideNav/LeftsideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightsideNav from "../shared/RightsideNav/RightsideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData()
    console.log(news);

   
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6">
                <div >
                    <LeftsideNav></LeftsideNav>
                </div>
                
                <div className="col-span-2 ">
                <h3 className="text-xl font-bold pb-3">Dragon News Home</h3>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div >
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;