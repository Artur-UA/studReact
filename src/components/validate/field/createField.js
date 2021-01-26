import React from 'react'
import {Field} from 'redux-form'

 const createField = (placeholder, name, component, validate, type, text) => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component} validate={validate} type={type}/>{text} 
        </div> 
    )
}

export default createField