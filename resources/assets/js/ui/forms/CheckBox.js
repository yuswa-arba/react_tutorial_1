import React from 'react'

export const CheckBox = (props) => {

    return (
        <div className="checkbox">
            <input type="checkbox"
                   id={props.id}
                   className="checkbox-medium cursor"
                   disabled={props.disabled}
                   checked={props.checked}
                   value={props.value}
                   onChange={props.handle}
                   name={props.name}/>
            <label htmlFor={props.id} className={'bold text-black text-vertical-top cursor ' + (props.extraClass || '')}>
                {props.label}
            </label>
        </div>
    )

}
