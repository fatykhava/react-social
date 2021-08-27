const updateObjectInArray = (item, itemProperty, property, newObjProps) => {
  return item.map(u => {
    if (u[property] === itemProperty) {
      return {...u, ...newObjProps}
    }
    return u;
  })
}

export default  updateObjectInArray;
