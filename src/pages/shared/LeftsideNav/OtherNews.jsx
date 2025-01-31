import girlPic from '../../../assets/girl-photo.jpg'
import employee from '../../../assets/employee.jpg'
import stadiumPic from '../../../assets/stadium.jpg'
import { SlCalender } from "react-icons/sl";

const OtherNews = () => {
    return (
   <div className='mt-8 space-y-4'>
    
    {/* card 1 */}
    <div className="card card-compact ">
  <figure>
    <img
      src={girlPic}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup </h2>
    <p className='flex justify-between'>Sports <span className='flex items-center gap-2'><SlCalender></SlCalender> Jan 29, 2025</span></p>
    
  </div>
</div>
{/* card 2 */}
    <div className="card card-compact ">
  <figure>
    <img
      src={employee}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup </h2>
    <p className='flex justify-between'>Sports <span className='flex items-center gap-2'><SlCalender></SlCalender> Jan 29, 2025</span></p>
    
  </div>
</div>

{/* card 2 */}
    <div className="card card-compact ">
  <figure>
    <img
      src={stadiumPic}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup </h2>
    <p className='flex justify-between'>Sports <span className='flex items-center gap-2'><SlCalender></SlCalender> Jan 29, 2025</span></p>
    
  </div>
</div>
   </div>
    );
};

export default OtherNews;