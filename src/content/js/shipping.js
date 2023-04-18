import { useState, React } from "react";
import { useFormik } from "formik";


const initialValues = {
    email: '',
    confirmEmail: '',
    firstName: '',
    lastName: '',
    address: '',
    zip:''
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validate = values => {

    let errors = {}

    //Email
    if (!values.email) {
        errors.email = 'Looks like we dont have an email address for you; please enter one now.'
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(values.email)) {
        errors.email = 'Sorry, we couldnt validate your email address; please re - enter.'
    }

    //confirmEmail
    if (!values.confirmEmail) {
        errors.confirmEmail = 'Please confirm your email address.'
    }

    //firstName
    if (!values.firstName) {
        errors.firstName = 'Please enter your first name.'
    }

    //lastName
    if (!values.lastName) {
        errors.lastName = 'Please enter your last name.'
    }

    //address
    if (!values.address) {
        errors.address = 'Please enter your mailing address. Note: P.O. boxes not allowed.'
    }

    //zip
    if(!values.zip){
        errors.zip='Looks like we dont have your ZIP code; please enter it now.'
    }else if(!/^(\d{5})?$/i.test(values.zip)){
        errors.zip='Please make sure that your zip code is 5 numbers'
    }

    return errors
}

const Shipping = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('visited fields', formik.touched)

    return (
        <div class="row" >

            <div class="section__header2 col-md-12 col-sm-12">
                <h2><span class="section__step">Step 2: </span>Where Would You Like Your Wine Delivered?</h2>

                <form onSubmit={formik.handleSubmit}>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                        <label for="floatingInput">Email</label>
                        {formik.touched.email && formik.errors.email ? <div class="error-message"><img src="https://www.wsjwine.com/images/us/common/icons/law/exclamation_triangle_solid_16x14.svg" height="14px" width="16px" />{formik.errors.email}</div> : null}
                    </div>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Confirm Email" name="confirmEmail" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmEmail} />
                        <label for="floatingInput">Confirm Email</label>
                        {formik.touched.confirmEmail && formik.errors.confirmEmail ? <div class="error-message"><img src="https://www.wsjwine.com/images/us/common/icons/law/exclamation_triangle_solid_16x14.svg" height="14px" width="16px" />{formik.errors.confirmEmail}</div> : null}
                    </div>

                    <div>
                        <input type="checkbox" />
                        <label> Yes, I would like to receive exclusive offers on your latest wine discoveries</label>
                    </div>

                    <div>
                        <input type="checkbox" />
                        <label> Yes, I would like to be updated with news from The Wall Street Journal</label>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="First Name" name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
                                <label for="floatingInput">First Name</label>
                                {formik.touched.firstName && formik.errors.firstName ? <div class="error-message"><img src="https://www.wsjwine.com/images/us/common/icons/law/exclamation_triangle_solid_16x14.svg" height="14px" width="16px" />{formik.errors.firstName}</div> : null}
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Last Name" name="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                                <label for="floatingInput">Last Name</label>
                                {formik.touched.lastName && formik.errors.lastName ? <div class="error-message"><img src="https://www.wsjwine.com/images/us/common/icons/law/exclamation_triangle_solid_16x14.svg" height="14px" width="16px" />{formik.errors.lastName}</div> : null}
                            </div>
                        </div>
                    </div>



                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Company Name" />
                        <label for="floatingInput">Company Name (optional)</label>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Address" name="address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
                                <label for="floatingInput">Address</label>
                                {formik.touched.address && formik.errors.address ? <div class="error-message"><img src="https://www.wsjwine.com/images/us/common/icons/law/exclamation_triangle_solid_16x14.svg" height="14px" width="16px" />{formik.errors.address}</div> : null}
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Apt., Suite, etc. (optional)" />
                                <label for="floatingInput">Apt., Suite, etc. (optional)</label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="ZIP" name="zip" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.zip} />
                                <label for="floatingInput">ZIP</label>
                                {formik.touched.zip && formik.errors.zip ? <div class="error-message"><img src="https://www.wsjwine.com/images/us/common/icons/law/exclamation_triangle_solid_16x14.svg" height="14px" width="16px" />{formik.errors.zip}</div>:null}
                            </div>
                        </div>
                        <div class="col">

                        </div>
                        <div class="col">

                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Phone" />
                                <label for="floatingInput">Phone</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Date Of Birth (MM/DD/YYYY)" />
                                <label for="floatingInput">Date Of Birth (MM/DD/YYYY)</label>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )

}
export default Shipping;