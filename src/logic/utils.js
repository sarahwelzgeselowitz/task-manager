/*Takes:
    * items, a list of objects
    * keyName, a string representing the object key to group by
 Returns: an object whose keys are unique values of "keyName" from the
 original items, and whose values are the items with that value of "keyName"
*/
function groupBy(items, keyName) {
    return items.reduce((acc, item) => {
        const key = item[keyName];
        const updatedValue = key in acc ? acc[key].concat([item]) : [item];
        return { ...acc,
            [key]: updatedValue
        }
    }, {})
}

/*Takes:
    * list, a list of objects
    * keyName, a string representing the object key to group by
    * constructItem: a function mapping a value at keyName, and the items with that value, to a new item
 Returns: A list of objects of the specified form
*/
function toGroups(list, keyName, constructItem) {
    const dict = groupBy(list, keyName);
    return Object.keys(groupBy(list, keyName)).reduce((acc, key) => {
        return acc.concat([constructItem(key, dict[key])]);
    }, []);
}

export {
    toGroups
}