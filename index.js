//Check whether a given positive number is a multiple of 3 or a multiple of 7

const checkDevisibility = (num) =>{
  if (num%3 === 0 || num%7=== 0) {
    return true
    
  }
  return false

}

const result_01 = checkDevisibility(21)
const result_02 = checkDevisibility(29)
const result_03 = checkDevisibility(91)

console.log(result_01)
console.log(result_02)
console.log(result_03)


