import { CiBookmark,CiShare2 } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsCard = ({news}) => {
  console.log(news);
  const {_id,title, rating,total_view,author,image_url,details}  = news
  
    return (
        <div className="card card-compact bg-base-100 border mb-6">
          <div className="flex justify-between items-center p-4 bg-slate-100 rounded-t-xl">
            <div className="flex gap-3 items-center">
              <div>
              <img className="w-10 rounded-full" src={author.img} alt="" />
              </div>
              <div>
              <h3 className="font-semibold">{author.name}</h3>
              <p>{author?.published_date}</p>
              </div>
            </div>
            <div className="flex gap-2 text-2xl">
              <CiBookmark className="cursor-pointer"></CiBookmark>
              <CiShare2 className="cursor-pointer"></CiShare2>
            </div>
          </div>
    <div className="p-5">
    <h2 className="card-title pb-3">{title}</h2>

<figure>
  <img
    src={image_url}
    alt="Shoes" />
</figure>
<div className="">
  {details.length > 200 ?
  <p className="py-5">{details.slice(0,200)}<Link className="font-bold text-orange-400" to={`/news/${_id}`}> Read More...</Link></p>:
  <p className="py-5">{details}</p>

  }
  <div className="flex justify-between py-5 border-t">
    <div className="flex gap-2 items-center">
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
      <p>{rating.number}</p>
      
  </div>
    <div className="flex gap-2 items-center">
      <IoMdEye className="text-2xl"></IoMdEye>
      <p>{total_view}</p>
    </div>
  </div>
</div>
    </div>
</div>
    );
};

export default NewsCard;
NewsCard.propTypes = {
  news : PropTypes.object,
}