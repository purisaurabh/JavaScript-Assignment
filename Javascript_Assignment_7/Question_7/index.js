// Write a function to filter an array of strings to hold only unique values

const duplicateValue = ["abc" , "abc" , "xyz" , "xyz" , "pqr" , "pqr"]

function storeUniqueValue(duplicateValue){
    const uniqueValue = []
    const checkValue = {}

    duplicateValue.forEach(element => {
        if(!checkValue[element]){
            checkValue[element] = true
            uniqueValue.push(element)
        }
    });

    return uniqueValue
}


const ans = storeUniqueValue(duplicateValue)
console.log(ans);