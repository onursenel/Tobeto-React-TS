import { ErrorMessage, Field } from 'formik'
import React from 'react'

type Props = {
    label:string;
    name:string;
    type?: string;
    placeHolder?: string;

}

const FormikInput = (props: Props) => {
    return (
        <div className="mb-3">
            <label className="form-label">{props.label}</label>
            <Field name={props.name} type={props.type || "text"} placeHolder={props.placeHolder} className="form-control" />
            <ErrorMessage name={props.name}>
                {(message) => <span className='text-danger'>{message}</span>}
            </ErrorMessage>
        </div>
    )
}

export default FormikInput