import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import RightsideNav from "../shared/RightsideNav/RightsideNav";
import Header from "../shared/Header/Header";
import { FaArrowLeftLong } from "react-icons/fa6";


const NewsDetails = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const navigate = useNavigate()

  const aNews = news.find((aNews) => aNews._id === id);
  const {title, details, image_url} = aNews

  const handleAllNewsCategory =()=>{
    navigate('/')
  }
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3 ">
        <h3 className="text-xl font-bold mb-2">Dragon News</h3>
          <div className="border p-7 dark:bg-gray-50 dark:text-gray-800">
            
            <div className="space-y-4">
              <div className="space-y-2 ">
                <img
                  src={image_url}
                  alt=""
                  className="block object-cover object-center w-full rounded-md  dark:bg-gray-500"
                />
                
              </div>
              <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-2xl font-bold dark:text-violet-600">
                    {title}
                  </h3>
                </a>
                <p className="leading-snug dark:text-gray-600">
                  {details}
                </p>
              </div>
            </div>
            <button onClick={handleAllNewsCategory} className="btn bg-red-700 text-white hover:text-black px-8 text-lg my-6"><FaArrowLeftLong></FaArrowLeftLong> All news in this category</button>
          </div>
        
        </div>
        <div>
          <RightsideNav></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
