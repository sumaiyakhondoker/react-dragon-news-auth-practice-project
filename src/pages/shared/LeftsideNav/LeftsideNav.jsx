import { NavLink} from "react-router-dom";
import OtherNews from "./OtherNews";
import { useEffect, useState } from "react";


const LeftsideNav = () => {

const [categories, setCategories] = useState([])

useEffect(()=>{
    fetch('/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
},[])


    return (
        <div>
            <h3 className="text-xl font-bold">All Category</h3>
            
                {
                    categories.map(category =><NavLink className='block text-lg font-semibold my-3 rounded-lg px-8 py-3 bg-gray-200' key={category.id}>{category.name}</NavLink>)
                }
                <OtherNews></OtherNews>
           
        </div>
    );
};

export default LeftsideNav;