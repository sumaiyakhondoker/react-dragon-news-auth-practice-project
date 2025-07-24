import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState(null)
  // console.log(location);
  const {loginUser} = useContext(AuthContext)
 
  const handleLogin = (e) => {
    setLoginError('')
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    loginUser(email, password)
    .then(result =>{
      console.log(result.user);
       navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
      console.log(error);
      setLoginError(error)
    })
    e.target.reset()
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 md:min-h-screen py-4 md:py-0">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Login Your Account</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
                {
                  loginError && <p className="text-red-500">{loginError.message.slice(17,40)}</p>
                }
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
              </div>
              <p>Don't Have An Account? Please <Link to='/register' className="text-red-600 font-bold">Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
