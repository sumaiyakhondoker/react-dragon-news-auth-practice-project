import moment from 'moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center my-4 space-y-2'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour </p>
            <p className='text-xl font-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;