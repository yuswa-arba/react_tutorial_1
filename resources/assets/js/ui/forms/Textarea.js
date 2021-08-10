import React from 'react'

export const TextareaBox = (props) => {

    return (
        <div className={"wp-text-area-setting full-width" + (props.extraClass||'')}>
            {props.label ? (<label className="">
                {props.label}
            </label>) : null}
            <textarea name={props.name} id={props.id}
                      value={props.value}
                      onChange={props.change}
                      placeholder={props.placeholder||''}
                      className={'padding-15 form-control ' + (props.extraInputClass||'')}
                      cols={props.cols||'4'} rows={props.rows||'4'}
                      disabled={props.disabled||''}
                      readOnly={props.readOnly||''}/>
        </div>
    )

}
