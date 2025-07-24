import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

  const navigate = useNavigate()
const { registerUser} = useContext(AuthContext)
const [error, setError] = useState(null)
    const handleRegister = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        // console.log(form.get('name'));
        const email = form.get('email')
        const password = form.get('password')
        registerUser(email, password)
        .then(result =>{
          console.log(result.user);
          Swal.fire({
  position: "center",
  icon: "success",
  title: "You have registered successfully!!",
  showConfirmButton: false,
  timer: 1500
});
          navigate('/')
        })
        .catch(error =>{
          setError(error)
          
        })

        
        
    }
    return (
        <div className="bg-base-200">
        <Navbar></Navbar>
        <div className="hero md:min-h-screen py-4 md:py-0">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">Register Your Account</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                      error && <p className="text-red-400">{error.code}</p>
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

                
                <div className="form-control mt-2">
                  <button className="btn btn-neutral">Register</button>
                </div>
                
                <p>Already Have An Account? Please <Link to='/login' className="text-red-600 font-bold">Login</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;