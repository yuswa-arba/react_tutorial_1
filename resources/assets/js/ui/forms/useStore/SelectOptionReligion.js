import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {SelectBox, SelectUnderLine} from "../Select";

import {ManageReligionStore} from "./DataStore";

const Store = new ManageReligionStore()

const DataSelectOptionReligion = observer(class SelectOptionReligion extends Component {

    componentWillMount() {
        Store.runGetData()
    }

    render() {

        let props = this.props
        let dataStore = Store.getReligions || []

        const options = dataStore.map((data, key) => (
            <option key={key} value={data.id}>{data.name}</option>
        ))

        options.unshift(<option key="-religion-" value="">
            {props.underLine ? "Select Religion" : props.unShift || ''}
        </option>)

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
                       label={!props.unLabel ? props.label : 'Religion' || ''}
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

})

const SelectOptionReligion = React.memo(props => {
    return <DataSelectOptionReligion {...props}/>
})

export default SelectOptionReligion
