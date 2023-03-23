import React from 'react'
import "../../pages/style.css"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SaveButton from '../Button/Button'

const CookieBanner = () => {
    return (
        <>
            <Container fluid>
                <div className="row align-items-center ps-4 pe-4 pt-3 pb-3" style={{ background: "#dafd5d" }}>
                    <div className="col-md-6">
                        <p className='fs-16 fw-500 greyclr'>This website uses cookies to improve your experience.  </p>
                    </div>

                    <div className="col-md-6">
                        <div className='d-flex justify-content-end gap-3 align-items-center'>
                            <p className='fs-16 fw-500 greyclr'>Read More </p>

                            <Link to="temporarySignUp">
                                <SaveButton label="Sign up" buttonStyle="cookiebannersignUp" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CookieBanner