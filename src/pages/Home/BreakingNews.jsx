import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-red-700 text-white hover:text-black px-8 text-lg">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-6">Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as... </Link>
                <Link className="mr-6">Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as... </Link>
                <Link className="mr-6">Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as... </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;