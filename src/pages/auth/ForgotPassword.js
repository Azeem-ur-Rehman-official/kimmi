import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import ErrorViewer from "../../components/errorViewer/ErrorViewer";
import "../../components/errorViewer/ErrorViewer.css";

import { useForgotPasswordApiMutation } from "../../services/api";
import "./Login.css";
const ForgotPassword = () => {
  const [errorOccured, setErrorOccured] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [forgotPasswordApi, { isLoading, isError }] =
    useForgotPasswordApiMutation();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email (e.g name@domain.com)."),
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
    forgotPasswordApi({ data: values })
      .unwrap()
      .then((payload) => {
        // const response = {
        //     token: payload.data.token,
        //     user: payload.data,
        // };
        // const cookies = new Cookies();
        // dispatch(loggedIn(response));
        // navigator(PATHS.dashboard);
        // cookies.set('Authentication', response.token, {
        //     path: '/',
        //     HttpOnly: false,
        //     Domain: 'trading-da.varcity.io'
        // });
      })
      .catch((error) => {});
  };
  return (
    <>
      {/* <Navbar style={{ background: "#0A4550" }} expand="lg">
        <Container fluid>
          <div className="d-flex">
            <Navbar.Brand>
              <a href="https://www.varcity.io/">
                <img src={logoAsset} alt="" className="mt-1" />
              </a>
            </Navbar.Brand>
          </div>
          <div className="d-flex gap-4 align-items-center pe-3">
            <Link to="/signup">
              <div className="media d-flex">
                <h5 className="mt-0 mb-0 fs-14 fw-500 text-white">Sign Up</h5>
              </div>
            </Link>
          </div>
        </Container>
      </Navbar> */}

      <div
        className="container-fluid"
        style={{ background: "#F5F5F5", height: "100vh" }}
      >
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 bg-white mt-5 p-4">
            <div className="main-content">
              <h2
                className="fs-22 fw-400 drakgrey mb-3"
                style={{ color: "#0A4550" }}
              >
                Forgot password?
              </h2>
            </div>
            <form>
              <label className="email login-label">Email</label>
              <input
                {...register("email")}
                type="text"
                className={`txt error${Boolean(errors.email)} loginInput`}
                id="email"
                placeholder="Enter your email address"
                required
              />

              {errors.email && (
                <ErrorViewer
                  className="text-danger ms-0"
                  message={errors.email.message}
                />
              )}

              <p className="fw-400 fs-15 mt-3" style={{ color: "#787878" }}>
                We will send a password reset link to the email above. Don't
                forget to check your junk folder!
              </p>

              <div>
                <div className="d-flex gap-4 align-items-center mt-4">
                  <Button
                    loading={isLoading}
                    type="submit"
                    label="Reset password"
                    buttonStyle="loginButton w-100"
                    onClick={handleSubmit(onSubmit)}
                  />
                </div>
              </div>
              <div className="mt-5 mb-3 text-center">
                <p className="fs-16 fw-500 grey">
                  Don't have an account?
                  <Link to="/signup">
                    <span className="darkgreen"> Sign up!</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
