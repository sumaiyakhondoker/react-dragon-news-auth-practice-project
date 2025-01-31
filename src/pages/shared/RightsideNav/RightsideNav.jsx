import { FaGoogle, FaGithub,FaTwitter,FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import qZone1 from '../../../assets/swimming.png'
import qZone2 from '../../../assets/class.png'
import qZone3 from '../../../assets/playground.png'

const RightsideNav = () => {
    return (
        <div className="space-y-5">
            <div >
            <h3 className="text-xl font-bold">Login With</h3>
            <button className="btn btn-outline btn-info my-2 w-full"><FaGoogle></FaGoogle> Login With Google</button>
            <button className="btn btn-outline mb-3 w-full"><FaGithub></FaGithub> Login With Github</button>
            </div>


            <div >
            <h3 className="text-xl font-bold">Find Us On</h3>
            <div className="my-5">
            <a href="" className="flex gap-2 items-center p-6 border rounded-t-lg"><FaFacebook></FaFacebook> Facebook</a>
            <a href="" className="flex gap-2 items-center p-6 border-x"><FaTwitter></FaTwitter> Twitter</a>
            <a href="" className="flex gap-2 items-center p-6 border rounded-b-lg"><FaInstagram></FaInstagram> Instagram</a>
            </div>
            </div>



            <div className="bg-slate-100 py-4">
            <h3 className="text-xl font-bold pl-3">Q-Zone</h3>
            <div className="space-y-5">
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            </div>
        </div>
    );
};

export default RightsideNav;