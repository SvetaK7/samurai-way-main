import React from 'react';
import s from './FormsControls.module.css'

export const FormControl = ({input, meta, checkbox, ...props}: any) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + '' + s.error}>
            <div className={hasError ? s.errorTextarea : ''}>
                {
                    props.elementType === 'checkbox' ? <input type={'checkbox'} /> :  <props.elementType {...input}/>
                }
            </div>
            {hasError && <span className={s.errorMessage}>{meta.error}</span>}
        </div>
    )
}

