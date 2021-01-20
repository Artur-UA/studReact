import React from 'react';
import'./FormControl.css';

const FormControl = ({input, meta, el, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={(hasError ? 'error2' : null)}>
            <div >
                {React.createElement(el, {...input, ...props})}
            </div>
            <div className='error1'>
                { hasError && <span >{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl {...props} el="textarea"/>
}

export const Input =(props) => {
    return <FormControl {...props} el='input'/>
}

/* 
export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={(hasError ? 'error2' : null)}>
            <div >
                <textarea  {...input} {...props} />
            </div>
            <div className='error1'>
                { hasError && <span >{meta.error}</span>}
            </div>
        </div>
    )
} 

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={(hasError ? 'error2' : null)}>
            <div >
                <input  {...input} {...props} />
            </div>
            <div className='error1'>
                { hasError && <span >{meta.error}</span>}
            </div>
        </div>
    )
}*/