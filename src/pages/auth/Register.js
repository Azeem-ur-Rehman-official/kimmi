
import "./Register.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../components/errorViewer/ErrorViewer.css";
import ErrorViewer from '../../components/errorViewer/ErrorViewer';
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useSignupMutation } from "../../services/api";
import PATHS from "../../routing/Path";
import { toast } from "react-toastify";
import { darkVarcityLogoAsset } from "../../assets/Index";
import NavbarIo from '../../components/navbar-io/Navbar'
import FotterIo from '../../components/footer-io/Footer'
import SocialLogin from "./SocialLogin";
import backImg from '../../assets/login-img.png';
import { BiShow, BiHide } from 'react-icons/bi';
import Footer from "../../components/footer-io/Footer";
const Register = () => {
  const [errorOccured, setErrorOccured] = useState(null);
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [signup, { isLoading, isError }] = useSignupMutation();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    verifyPassword: Yup.string()
      .min(8, "verify Password must be at least 8 characters")
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required("verify Password is required"),
  });
  let defaultValues = { login: "", password: "" };
  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;


 const onSubmit = (values) => {
      toast.success("Account created Successfully");
      // navigator('/dashboard');
 };


  return (
      
   <div className="container-fluid py-3">
  
      

      <div className="login-main py-2">
        <div className="row align-items-center justify-content-center ">
          <div className="login-background col-md-6">
            <div className="wraper d-flex  align-items-center">
              <img src={backImg} alt="logo" className="loginLogo img-fluid"></img>
              <span className="login-content">GET <span>VIRTUAL NUMBERS</span> IN NO TIME.</span>
          </div>
          </div>
          <div className="col-md-6   my-md-0 my-4 d-flex justify-content-center">
            
            <form className="p-5 bg-white loginForm">
              <div className="main-content d-flex justify-content-center">
                <h2 className="fs-22 fw-700 drakgrey mb-3 mx-auto">Create an Account</h2>
              </div>
              <div>

                <input
                  {...register("name")}
                  type="text"
                  className={`txt error${Boolean(errors.name)} loginInput`}
                  id="name"
                  placeholder="Username"
                  required
                />
                {errors.name && <ErrorViewer message={errors.name.message} />}
                {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
              </div>
              <div>

                <input
                  {...register("email")}
                  type="text"
                  className={`txt error${Boolean(errors.email)} loginInput`}
                  id="email"
                  placeholder="Email"
                  required
                />
                {errors.email && (
                  <ErrorViewer message={errors.email.message} />
                )}
                {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
              </div>


              <div className="mt-3">
                {/* <div className="d-flex mt-2 align-items-center">
                 
                  <p className="fs-14 fw-500 darkgrey ms-auto cursor hide-show" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <BiShow /> : <BiHide />}</p>
                </div> */}
                <div>
                  <input
                    {...register("password")}
                    type={`${showPassword ? "text" : "password"}`}
                    className={`pswd error${Boolean(errors.password)} loginInput`}
                    id="password"
                    placeholder="Password"
                    required
                  />

                </div>
                {errors.password && (
                  <ErrorViewer message={errors.password.message} />
                )}

              </div>


              <div className="mt-3">
                {/* <div className="d-flex mt-2 align-items-center">
                  
                  <p className="fs-14 fw-500 darkgrey ms-auto cursor hide-show" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <BiShow /> : <BiHide />}</p>
                </div> */}
                <div>
                  <input
                    {...register("verifyPassword")}
                    type={`${showConfirmPassword ? "text" : "password"}`}
                    className={`pswd error${Boolean(errors.verifyPassword)} loginInput`}
                    id="password"
                    placeholder="Confirm Password"
                    required
                  />

                </div>
                {errors.verifyPassword && (
                  <ErrorViewer message={errors.verifyPassword.message} />
                )}
                {errorOccured && <ErrorViewer message={errorOccured} />}
              </div>

              <div>
                <div className='mt-4 d-flex align-items-start '>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" required />

                  </div>
                  <span className='mx-2 '>I agree to the <span className=' fst-italic theme-clr'> Terms & Conditions.</span></span>
                </div>
                <div className="d-flex gap-4 align-items-center mt-4">
                  <Button loading={isLoading} type="submit" label="Login" buttonStyle="loginButton w-100" onClick={handleSubmit(onSubmit)} />
                </div>
                <p className="fs-16 fw-500 mt-4 text-center">
                  Already have an account?
                  <Link to="/login">
                    <span className="darkgreen text-decoration-underline text-primary"> Login</span>
                  </Link>
                </p>
              </div>


            </form>
          </div>
        </div>
      </div>

      
    </div>  
      
    

  );
};

export default Register;