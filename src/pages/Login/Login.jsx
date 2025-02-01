import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    console.log("clicked");
  };
  return (
    <div className="bg-base-200">
      <Navbar></Navbar>
      <div className="hero min-h-screen">
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
