let obj = {
    name:"Harry Potter",
    age: 12,
    address: {
    details: ["4", "Privet Drive"],
    area:"Little Whinging",
    city: "Surrey",
    state: "England"
    } 
  }

function getNestedKey(obj , path){
    const pathValue = path.split(".")
    let copyObj = obj

    for(const key of pathValue){
        if(copyObj.hasOwnProperty(key)){
            copyObj = copyObj[key]
        }else{
            return undefined
        }
    }

    return copyObj
}

const result = getNestedKey(obj , "address.details.1")
console.log("The value of nested key path :" , result);