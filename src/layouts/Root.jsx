import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins p-3 lg:p-0">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;