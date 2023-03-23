import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import GoogleLogin from 'react-google-login';
import { BiHide, BiShow } from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import backImg from '../../assets/login-img.png';
import Button from "../../components/Button/Button";
import ErrorViewer from "../../components/errorViewer/ErrorViewer";
import "../../components/errorViewer/ErrorViewer.css";

import "./Login.css";
import SocialLogin from "./SocialLogin";
import NavbarComponent from "components/navbar-io/Navbar";
import Footer from "components/footer-io/Footer";
const Login = () => {
  const [errorOccured, setErrorOccured] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigator = useNavigate();



  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email (e.g name@domain.com)."),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Incorrect password"),
  });
  let defaultValues = { email: "", password: "" };
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
    toast.success("Login Successfully");
    // navigator('/dashboard');
  };
  const onSuccess = (response) => {
    console.log("user successfully login", response.profileObj);
  }
  const onFailure = (response) => {
    console.log("user not successfully login", response);
  }
  useEffect(() => {
    gapi.load("client:auth2", () => {
      function start() {
        gapi.client.init({
          clientId: "907091442226-v5ngnb5jb7ti1kkohnt6a5iqls9672l7.apps.googleusercontent.com",
scope:"",
        })
      };
      gapi.load('client:auth2', start);
      
    });
  }, [])
  
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
                <h2 className="fs-22 fw-700 drakgrey mb-3 mx-auto">LOGIN TO YOUR ACCOUNT</h2>
              </div>
              
              <input
                {...register("email")}
                type="text"
                className={`txt error${Boolean(errors.email)} loginInput`}
                id="email"
                placeholder="Email Address or Username"
                required
              />
              {errors.email && <ErrorViewer message={errors.email.message} />}
              <div>
                {/* <div className="d-flex mt-2 align-items-center mt-4">
                  

                  <p
                    className="fs-14 fw-500 darkgrey ms-auto cursor hide-show"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <BiShow/> : <BiHide/>}
                  </p>
                </div> */}
                <div>
                  <div>
                    <input
                      {...register("password")}
                      type={`${showPassword ? "text" : "password"}`}
                      className={`pswd error${Boolean(
                        errors.password
                      )} loginInput`}
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>{" "}
                  {errors.password && (
                    <ErrorViewer message={errors.password.message} />
                  )}
                  {errorOccured && <ErrorViewer message={errorOccured} />}
                  <div className="d-flex justify-content-between py-5">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                        <label class="form-check-label" for="flexCheckChecked">
                          Remember me
                        </label>
                    </div>
                    {/* <Link
                      to="/forgotpassword"
                      className="f-pasword darkgreen fs-12 fw-400"
                    >
                      Forgot password?
                    </Link> */}
                  </div>
                  
                </div>
              </div>
              <div>
                <div className="d-flex gap-4 align-items-center ">
                  <Button
                    loading={false}
                    type="submit"
                    label="Login"
                    buttonStyle="loginButton w-100"
                    onClick={handleSubmit(onSubmit)}
                  />
                </div>
              </div>
              <div className="mt-3  text-center">
                {/* <span className="fs-22 mb-5">Or</span>
                <br></br> */}
               
                <p className="fs-16 fw-500 grey mt-4">
                  Don't have an account?
                  <Link to="/signup">
                    <span className="darkgreen text-primary fst-italic"> Sign up!</span>
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

export default Login;
