import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
const SocialLogin = () => {
    return (
        <div className='d-flex justify-content-center gap-4 mt-3'>
            <span className='social-icons'><FcGoogle className='social'/></span>
            <span className='social-icons'><FaFacebook className='social' style={{ color:"#4267B2"}}/></span>
            <span className='social-icons'><FaTwitter className='social text-primary' /></span>
        </div>
    )
}

export default SocialLogin