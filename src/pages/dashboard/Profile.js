import React, { useState} from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import profile from "../../assets/profile.svg";
import { BiLock } from 'react-icons/bi';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { BiShow, BiHide } from 'react-icons/bi';
import './profile.css';
import ErrorViewer from 'components/errorViewer/ErrorViewer';
const Profile = () => {
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState(
        'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
    );
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() + 3)

    const [date, setDate] = useState(defaultDate)
    const [errorOccured, setErrorOccured] = useState(null);
    const [navtoggle, setNavtoggle] = useState(true);
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(" First Name is required"),
        lname: Yup.string().required("Last Name is required"),
        email: Yup.string().required("Email is required").email("Email is invalid"),
        curr_password: Yup.string()
            .required("Password is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
        verifyPassword: Yup.string()
            .min(8, "verify Password must be at least 8 characters")
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required("verify Password is required"),
    });
    let defaultValues = { name: "Azeem", lname: "rehman",email:"azeem@gmail.com",date:"12/29/2000", phone:"03024885436", city:"lahore", country:"Pakistan",address:"Joher Town lahore" };
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
    const getCurrentDateInput = () => {

        const dateObj = new Date();

        // get the month in this format of 04, the same for months
        const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        const day = ("0" + dateObj.getDate()).slice(-2);
        const year = dateObj.getFullYear();

        const shortDate = `${year}-${month}-${day}`;

        return shortDate;
    };
    const onChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

        const onSubmit = (values) => {
            toast.success("Profile Updated Successfully");
            
        };
    
  return (
      <div className='container py-3'>
          <h3 className='text-blue'>Profile</h3>
          <div className='row gap-2'>
              <div className='col-md-3 col-12 myBorder '>
                  <div className='sidebar d-flex flex-column py-3'>
                      <span className='py-3' onClick={() => setNavtoggle(true)}><img src={profile} alt="profile" className='mx-2 ' />Profile {navtoggle == true ? <span className='underBorder'></span> : null}</span>
                      <span onClick={()=>setNavtoggle(false)}><BiLock className='passIcon' />Password{navtoggle == false ? <span className='underBorder2'></span> : null}</span>
                  </div>
              </div>
              {navtoggle == true ? <div className='col-md-8 col-12 myBorder row py-4 position-relative m-auto'>
                  <form action="" method="post" id="form-image">
                      <div className='col-6'><div>
                          <div class="avatar-upload px-2">
                              <div class="avatar-edit">

                                  <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={onChange} />
                                  <label for="imageUpload"></label>


                              </div>
                              <div class="avatar-preview">


                                  <img class="profile-user-img img-responsive img-circle img-fluid" id="imagePreview" src={avatarPreview} alt="User profile picture" />
                              </div>
                          </div>
                      </div></div>
                      <div className='col-6 d-flex justify-content-end gap-2 form-btns'><button className='cancelBtn'>Cancel</button><button className='loginButton'>Save</button></div>

                      <div className='row col-12 m-auto'>
                          <div className='col-6'>
                              <label className="name name-label">
                                  First Name
                              </label>
                              <input
                                  {...register("name")}
                                  type="text"
                                  className={`txt error${Boolean(errors.name)} loginInput`}
                                  id="name"
                                  placeholder="Enter your first name"
                                  
                              />
                              {errors.name && (
                                  <ErrorViewer message={errors.name.message} />
                              )}
                              {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
                          </div>
                          <div className='col-6'>
                              <label className="name name-label">
                                  Last Name
                              </label>
                              <input
                                  {...register("lname")}
                                  type="text"
                                  className={`txt error${Boolean(errors.lname)} loginInput`}
                                  id="name"
                                  placeholder="Enter your last name"
                                  
                              />
                              {errors.lname && (
                                  <ErrorViewer message={errors.lname.message} />
                              )}
                              {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
                          </div>
                          <div className='col-6'>
                              <label className="email name-label">Email</label>
                              <input
                                  {...register("email")}
                                  type="text"
                                  className={`txt error${Boolean(errors.email)} loginInput`}
                                  id="email"
                                  placeholder="Enter your email address"
                                  
                              />
                              {errors.email && <ErrorViewer message={errors.email.message} />}
                              {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
                          </div>
                          <div className='col-6'>
                              <label className="name name-label">
                                  Phone number
                              </label>
                              <input
                                  {...register("phone")}
                                  type="text"
                                  className={`txt error${Boolean(errors.phone)} loginInput`}
                                  id="name"
                                  placeholder="Enter your phone number"
                                  required
                              />
                              {errors.phone && (
                                  <ErrorViewer message={errors.phone.message} />
                              )}
                              {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
                          </div>
                          <div className='col-6'>
                              <label className="name name-label">
                                  Date of birth
                              </label>
                              <input
                                  {...register("date")}
                                  type="date"
                                  className={`txt error${Boolean(errors.date)} loginInput`}
                                  id="name"
                                  value={date.toLocaleDateString('en-CA')}
                                  placeholder="Enter your name"
                                  required
                              />
                              {errors.date && (
                                  <ErrorViewer message={errors.date.message} />
                              )}
                              {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
                          </div>
                          <div className='col-3'>
                              <label className="name name-label">
                                  City
                              </label>
                              <input
                                  {...register("city")}
                                  type="text"
                                  className={`txt error${Boolean(errors.city)} loginInput`}
                                  id="name"
                                  
                                  required
                              />
                              {errors.city && (
                                  <ErrorViewer message={errors.city.message} />
                              )}
                              {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
                          </div>
                          <div className='col-3'>
                              <label className="name name-label">
                                  Country
                              </label>
                              <input
                                  {...register("country")}
                                  type="text"
                                  className={`txt error${Boolean(errors.country)} loginInput`}
                                  id="name"
                                 
                                  required
                              />
                              {errors.country && (
                                  <ErrorViewer message={errors.country.message} />
                              )}
                              {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
                          </div>
                          <div className='col-6'>
                              <label className="address name-label">
                                  Address
                              </label>
                              <input
                                  {...register("address")}
                                  type="text"
                                  className={`txt error${Boolean(errors.address)} loginInput`}
                                  id="name"
                                  placeholder="Enter your address"
                                  required
                              />
                              {errors.address && (
                                  <ErrorViewer message={errors.address.message} />
                              )}
                              {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
                          </div>
                      </div>

                  </form>
              </div> : <div className='col-md-8 col-12 myBorder row py-4 position-relative m-auto'>
                  <form action="" method="post" id="form-image">
                      <div className='col-6'><div>
                          <h5 className='mx-2'>Change Password</h5>
                      </div></div>
                      <div className='col-6 d-flex justify-content-end gap-2 form-btns'><button className='cancelBtn'>Cancel</button><button className='loginButton'>Save</button></div>

                      <div className='row col-12 m-auto gap-1'>
                          <div className='col-6'>
                                  <div className="d-flex mt-2 align-items-center">
                                      <label className="pasword name-label">
                                         Current Password
                                      </label>
                                      <p className="fs-14 fw-500 darkgrey ms-auto cursor hide-show" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <BiShow /> : <BiHide />}</p>
                                  </div>
                                  <div>
                                      <input
                                          {...register("curr_password")}
                                          type={`${showPassword ? "text" : "password"}`}
                                          className={`pswd error${Boolean(errors.curr_password)} loginInput`}
                                          id="password"
                                          placeholder="Enter your password"
                                          required
                                      />

                                  </div>
                                  {errors.curr_password && (
                                      <ErrorViewer message={errors.password.message} />
                                  )}
                              </div>
                              <div className='col-6'>
                                  <div className="d-flex mt-2 align-items-center">
                                      <label className="pasword name-label">
                                          New Password
                                      </label>
                                      <p className="fs-14 fw-500 darkgrey ms-auto cursor hide-show" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <BiShow /> : <BiHide />}</p>
                                  </div>
                                  <div>
                                      <input
                                          {...register("password")}
                                          type={`${showPassword ? "text" : "password"}`}
                                          className={`pswd error${Boolean(errors.password)} loginInput`}
                                          id="password"
                                          placeholder="Enter your password"
                                          required
                                      />

                                  </div>
                                  {errors.password && (
                                      <ErrorViewer message={errors.password.message} />
                                  )}
                              </div>
                          <div className='col-6'>
                                  <div className="d-flex mt-2 align-items-center">
                                      <label className="pasword name-label">
                                          Confirm password
                                      </label>
                                      <p className="fs-14 fw-500 darkgrey ms-auto cursor hide-show" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <BiShow /> : <BiHide />}</p>
                                  </div>
                                  <div>
                                      <input
                                          {...register("verifyPassword")}
                                          type={`${showConfirmPassword ? "text" : "password"}`}
                                          className={`pswd error${Boolean(errors.verifyPassword)} loginInput`}
                                          id="password"
                                          placeholder="Enter your password"
                                          required
                                      />

                                  </div>
                                  {errors.verifyPassword && (
                                      <ErrorViewer message={errors.verifyPassword.message} />
                                  )}
                                  {errorOccured && <ErrorViewer message={errorOccured} />}
                          </div>
                          
                      </div>

                  </form>
              </div>}
              
      </div>
      </div>
  )
}

export default Profile