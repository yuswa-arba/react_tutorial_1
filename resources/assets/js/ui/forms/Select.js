import React, {Component} from 'react'
import {GENDERS} from "../../config/genders";

export const SelectBox = React.memo(props => {

    return (
        <div className={`input-group ${props.extraClass || ''}`}>
            {props.label ? (<label className="">
                {props.label}
            </label>) : null}
            <select name={props.name} id={props.id}
                    className={`form-control capitalize ${props.className || ''}`}
                    value={props.value}
                    disabled={props.disabled}
                    onChange={props.change}
                    multiple={props.multiple || false}
                    style={props.style}>
                {props.options}
            </select>
            <span className="icon-input"><i className="pg-arrow_minimize" aria-hidden="true"/></span>
        </div>
    );

})

export const SelectUnderLine = React.memo(props => {

    return (
        <div className={`input-group input-group-underline ${props.extraClass}`}>
            <select name={props.name} id={props.id}
                    className={`form-control capitalize ${props.className}`}
                    value={props.value}
                    onChange={props.change}
                    disabled={props.disabled}
                    style={props.style}>
                {props.options}
            </select>
            <span className="icon-input"><i className="pg-arrow_minimize" aria-hidden="true"/></span>
        </div>
    );

})

export const SelectGender = (props) => {

    const options = Object.keys(GENDERS).map(key => (
        <option key={key} value={key}>{_.startCase(key)}</option>
    ))
    options.unshift(<option key="-" value="">{props.unShift || '- Select Option -'}</option>)

    if (props.underLine) {
        return (
            <SelectUnderLine name={props.name}
                             value={props.value}
                             change={props.change}
                             extraClass={props.extraClass}
                             className={props.className}
                             disabled={props.disabled}
                             style={props.style}
                             id={props.id}
                             options={options}
            />
        )
    }

    return (
        <SelectBox name={props.name}
                   label={!props.unLabel ? props.label : 'Gender' || ''}
                   value={props.value}
                   change={props.change}
                   extraClass={props.extraClass}
                   clasName={props.className}
                   disabled={props.disabled}
                   style={props.style}
                   id={props.id}
                   options={options}
        />
    )

}
