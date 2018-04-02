export default function insertItemInArray(array, action) {
  const newArray = array.slice()
  newArray.splice(action.index, 0, action.item)
  return newArray
}
