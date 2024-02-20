/*
    Write a function filterObj that will filter out all the keys of a flat object that
    have objects or arrays using Object.keys and Object.entries.
*/

function filterObj(obj) {
    const filteredObj = {};
    for (const [key, value] of Object.entries(obj)) {
        // console.log("Key is : ", key ,"Value is : " , value , "Type is : " ,typeof value )
      if (typeof value !== 'object') {
        filteredObj[key] = value;
      }
    }
    return filteredObj;
  }
  
  // Example usage
  const obj = {
    a: "Apple",
    b: ["Basketball", "Baseball"],
    c: {
      call: "cellphone",
    },
    d: "Dog",
    e:null
  };
  
  const filteredObj = filterObj(obj);
  console.log(filteredObj);