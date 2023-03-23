
import "./ChangePassword.css";
import * as Yup from "yup";
import { useRef, useState } from 'react';
import "./Login.css"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "../../components/errorViewer/ErrorViewer.css";
import ErrorViewer from '../../components/errorViewer/ErrorViewer';
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useChangepasswordMutation } from "../../services/api";
import PATHS from "../../routing/Path";
import { useDispatch, useSelector } from "react-redux";
const ChangePassword = () => {
  const auth = useSelector((data) => data.auth);
  const [errorOccured, setErrorOccured] = useState(null)
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [changepassword, { isLoading, isError }] = useChangepasswordMutation();

  // const validationSchema = Yup.object().shape({
  //   // currentpassword: Yup.string()
  //   //   .min(8, "currentpassword must be at least 8 characters")
  //   //   .required("currentpassword is required"),
  //   // password: Yup.string()
  //   //   .min(8, "Password must be at least 8 characters")
  //   //   .required("Password is required"),
  //   // verifyPassword: Yup.string()
  //   //   .min(8, "verify Password must be at least 8 characters")
  //   //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //   //   .required("verify Password is required"),
  // });

  let defaultValues = { email: "", password: "" };

  const methods = useForm({
    mode: "onTouched",
    // resolver: yupResolver(
    //   // validationSchema
    // ),
    defaultValues,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  
  const ref = useRef(null);

  const onSubmit = (values) => {

    changepassword({ data: values })
      .unwrap()
      .then((payload) => {
        const response = {
          token: payload.data.token,
          user: payload.user,
        };
        navigator(PATHS.signin);
      })
      .catch((error) => {
        setErrorOccured(error.data.message)
      });
  };

  return (
    <div className="container-fluid" style={{ background: "#F5F5F5", height: "100vh" }}>

      <div className="row justify-content-center m-0">
        <div className="col-md-4 bg-white mt-5 p-4">
          <div className="main-content">
            <h2 className="fs-22 fw-400 darkgreen  mb-3">Change Password</h2>
            <p >Change Password to manage your account.</p>
            <form>
              <div className="container p-0 f-div">
                <label className="email login-label">
                  Email*
                </label>
                <input
                  {...register("userId")}
                  type="hidden"
                  required
                  defaultValue={auth?.userDetail?.user?.userId} />
                <input
                  {...register("login")}
                  type="text"
                  // defaultValue={auth?.userDetail?.user?.login}
                  // readOnly
                  className="loginInput"
                />
                {errors.login && (
                  <ErrorViewer message={errors.login.message} />
                )}
                <div className="d-flex mt-2 align-items-center">
                  <label className="currentpassword login-label">
                    Current Password
                  </label>

                </div>
                <div>
                  <input
                    {...register("currentpassword")}
                    type="password"
                    className={`pswd error${Boolean(errors.currentpassword)} loginInput`}
                    id="currentpassword"
                    placeholder="Enter your current password"
                    required
                  />

                </div>{" "}
                {errors.currentpassword && (
                  <ErrorViewer message={errors.currentpassword.message} />
                )}
                <div>
                  <input
                    {...register("password")}
                    type="password"
                    className={`pswd error${Boolean(errors.password)} loginInput mt-2`}
                    id="password"
                    placeholder="Enter your password"
                    required
                  />

                </div>{" "}
                {errors.password && (
                  <ErrorViewer message={errors.password.message} />
                )}
                {errorOccured && <ErrorViewer message={errorOccured} />}
                <div className="d-flex mt-2 align-items-center">
                  <label className="pasword login-label">
                    Verify Password
                  </label>

                </div>
                <div>
                  <input
                    {...register("verifyPassword")}
                    type="password"
                    className={`pswd error${Boolean(errors.verifyPassword)} loginInput`}
                    id="password"
                    placeholder="Enter your password"
                    required
                  />

                </div>{" "}
                {errors.verifyPassword && (
                  <ErrorViewer message={errors.verifyPassword.message} />
                )}
                {errorOccured && <ErrorViewer message={errorOccured} />}
                <Button loading={isLoading} type="submit" label="SIGN IN" buttonStyle="loginButton mt-4 w-100" onClick={handleSubmit(onSubmit)} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;