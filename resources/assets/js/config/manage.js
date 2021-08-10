export const updateObjectOnList = (array, key, update) => {
    let getIndex = array.findIndex(e => e[key] == update[key])
    if (getIndex > -1) {
        array[getIndex] = update
    }

    return array
}
