import React, { useState } from 'react'
import ticks from "../../assets/ticks.svg";
import fiftyMonth from '../../assets/50.png';
import currency from '../../assets/currency.png';
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorViewer from 'components/errorViewer/ErrorViewer';

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Button } from 'react-bootstrap';
import SaveButton from 'components/Button/Button';
const Payment = () => {
    const [errorOccured, setErrorOccured] = useState(null);
  
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required").email("Email is invalid"),
        card_number : Yup.string()
            .min(14, "Card number must be at least 8 characters")
            .max(14)
            .required("card number is required"),
        exp_date: Yup.date().required(" expir date is required"),
        
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

    const onSubmit = (data) => {

        const onSubmit = (values) => {
            toast.success("Account created Successfully");
            navigator('/dashboard');
        };
    };
  return (
      <div className='container p-5'>
          <div className='row px-5 '>
              <div className='col-md-6 col-lg-6 col-12'>
                 
                  <div className='myBorder w-100 py-2'>
                      <span className='d-flex justify-content-center fw-700'>Summary</span>
                      <div className='d-flex justify-content-center'>
                          <span className='under my-3'></span>
                      </div>
                      
                      <div className='d-flex justify-content-between  p-4'><h3 className='fw-400'>Gold</h3><img src={fiftyMonth} alt='12' width="100px"></img></div>
                      
                      <div className='px-4 py-2 d-flex align-items-start '>
                          <img src={ticks} alt="tick" />
                          <span className='mx-2 '>All silver features</span>
                      </div>
                      <div className='px-4 py-2 d-flex align-items-start '>
                          <img src={ticks} alt="tick" />
                          <span className='mx-2 '>Ads free</span>
                      </div>
                      <div className='px-4 py-2 d-flex align-items-start '>
                          <img src={ticks} alt="tick" />
                          <span className='mx-2 '>You get access to the daily chart of all current and future included pairs in all markets (all other time frames such as 4h, weekly and monthly will be included in the future without any extra cost)</span>
                      </div>
                      <div className='px-4 py-2 d-flex align-items-start '>
                          <img src={ticks} alt="tick" />
                          <span className='mx-2 '>You can export all succeeded and failed opportunities as a CSV file unlimited times every month.</span>
                      </div>
                      <div className='px-4 py-2 d-flex align-items-start '>
                          <img src={ticks} alt="tick" />
                          <span className='mx-2 '>You have access to all discovered patterns of the all current and future included pairs</span>
                      </div>
                      <div className='px-4 py-2 d-flex align-items-start '>
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" required/>

                          </div>
                          <span className='mx-2 '>By confirming the order, I accept the<span className='text-primary'> terms of the
                              user agreement.</span></span>
                      </div>
                      <div className='d-flex justify-content-center'>
                          <span className='under my-3'></span>
                      </div>
                      <div className='d-flex justify-content-between  p-4'><h5 className='fw-400'>Total</h5><span className='d-flex align-items-center'><img src={currency} alt='12' width="13px" height="14px" className='img-fluid'></img>50.00</span></div>

                  </div>
              </div>
              <div className='col-md-6 col-lg-6 col-12 py-md-0 py-lg-0 py-5'>

                  <div className='myBorder w-100 py-2'>
                      <span className='d-flex justify-content-center fw-700'>Payment Details</span>
                      <div className='d-flex justify-content-center'>
                          <span className='under my-3'></span>
                      </div>

                      <form action="" method="post" id="form-image">
                          
                          <div className='row  m-auto p-4'>
                              <div className='col-12 py-2'>
                                  <label className="name name-label">
                                      Payment method
                                  </label>
                                  <select
                                     
                                      type="text"
                                      className= 'loginInput'
                                      id="name"
                                      placeholder="Enter your first name"
                                      required
                                  >
                                      <option value="Master Card" defaultChecked>Master card</option>
                                      </select>
                                                                    
                              </div>
                              <div className='col-12 py-2'>
                                  <label className="name name-label">
                                      Card holder name
                                  </label>
                                  <input
                                      {...register("login")}
                                      type="text"
                                      className={`txt error${Boolean(errors.name)} loginInput`}
                                      id="name"
                                      placeholder="Name"
                                      required
                                  />
                                  {errors.name && (
                                      <ErrorViewer message={errors.name.message} />
                                  )}
                                  {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
                              </div>
                              <div className='col-12 py-2'>
                                  <label className="card_number name-label">
                                      Card number
                                  </label>
                                  <input
                                      {...register("login")}
                                      type="text"
                                      className={`txt error${Boolean(errors.card_number)} loginInput`}
                                      id="name"
                                      placeholder="xxxx-xxxx-xxxx-xxxx"
                                      required
                                  />
                                  {errors.name && (
                                      <ErrorViewer message={errors.card_number.message} />
                                  )}
                                  {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
                              </div>
                              <div className='col-6'>
                                  <label className="email name-label">Expiry date</label>
                                  <input
                                   
                                      
                                      className={`txt loginInput`}
                                      type="text"
                                      pattern="([0-9]{2}[/]?){2}"
                                      placeholder="mm/yy"
                                      
                                  />
                                 
                                  {/* {errorOccured && <ErrorViewer message={errorOccured} />} */}
                              </div>
                              <div className='col-6'>
                                  <label className="name name-label">
                                      CVV
                                  </label>
                                  <input
                                      {...register("login")}
                                      type="text"
                                      className={`txt error${Boolean(errors.name)} loginInput`}
                                      id="name"
                                      placeholder="xxx"
                                      required
                                  />
                                 
                              </div>
                            
                             
                              
                          </div>
                          <div className=' col-6 px-4 mx-2 py-2 d-flex align-items-start col-12 py-2'>
                              <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />

                              </div>
                              <span className='mx-2 '>Remember this card’s information</span>
                          </div>
                          <div>
                              <div className="d-flex gap-4 align-items-center mt-4 px-4 m-2 mb-5 py-1">
                                  <SaveButton
                                      loading={false}
                                      type="submit"
                                      label="Pay Now"
                                      buttonStyle="loginButton w-100"
                                      onClick={handleSubmit(onSubmit)}
                                  />
                              </div>
                          </div>
                          
                      </form>
                      
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Payment