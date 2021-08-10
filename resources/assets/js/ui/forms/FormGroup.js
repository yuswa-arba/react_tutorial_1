import React from 'react'

export const FormGroupUnderLine = React.memo(props => {

    const iconLeftPosition = (props.iconLeftPosition || false)
    const iconElement = props.iconClass ? (<span><i className={props.iconClass} aria-hidden="true"/></span>) : null

    return (
        <div className={"input-group input-group-underline " + (props.extraClass || '')}>
            {iconLeftPosition ? iconElement : null}
            <input type={props.type || 'text'}
                   id={props.id} name={props.name}
                   value={props.value}
                   className={"form-control p-r-25 " + (props.extraInputClass || '')}
                   autoComplete={props.autoComplete || 'off'}
                   placeholder={props.placeholder || 'Enter (Search)'}
                   onChange={props.change}
                   onKeyPress={props.keyPress}/>
            {!iconLeftPosition ? iconElement : null}
        </div>
    );

});

export const FormGroup = React.memo(props => {

    const iconLeftPosition = (props.iconLeftPosition || false)
    const iconElement = props.iconClass ? (<span><i className={props.iconClass} aria-hidden="true"/></span>) : null

    return (
        <div className={"input-group " + (props.extraClass || '')}>
            {iconLeftPosition ? iconElement : null}
            <input type={props.type || 'text'}
                   id={props.id} name={props.name}
                   value={props.value}
                   className={"form-control " + (props.extraInputClass || '')}
                   autoComplete={props.autoComplete || 'off'}
                   placeholder={props.placeholder || ''}
                   onChange={props.change}
                   onKeyPress={props.keyPress}/>
            {!iconLeftPosition ? iconElement : null}
        </div>
    );

});
