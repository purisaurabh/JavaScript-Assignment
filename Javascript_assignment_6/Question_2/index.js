/*
    What makes a method mutating or non mutating in Javascript? 
    Find out whether each of the following methods are mutating or non-mutating. 
    How can you verify this?:

    1.push
    2.pop
    3.filter
    4.find
    5.sort
    6.map
*/


// 1.Push

let pushArr = [1,2,3,4,5]
pushArr.push(6)
console.log("Array aftre the pushing : ",pushArr);

// by above example we can say that the push method is mutating because it add the element at the last


// 2. pop

pushArr.pop()
console.log("Array after the poping :", pushArr);
// by above example we can say that pop method is mutating because it remove the last element from the array


// 3. filter 
// if we have to find the even number from the below array using the filter method
let filterArray = [1,2,3,4,5,6,7,8,9,10]
let newFilterArray = filterArray.filter(element => element % 2 == 0)
console.log("The given array : " , filterArray);
console.log("The filter array : " , newFilterArray);
// from above example we can say the filter method can create the new array so that the filter method is non mutating



// 4.find 
// if we have to find the element which is greater than 5
let findArr = [1,2,3,4,5,6,7,8,9,10,11]
let newFindArr = findArr.find(element  => element > 5)
console.log("The given arr : ", findArr);
console.log("The new arr with condition : " , newFindArr);

// here the find method return the first element from the arr which satisfy the condition without modifying the original array
// so that finc method is non mutating


// 5.sort 
// if we have to sort the given arr with ascending order
let sortArr = [4,2,9,1,3,8,4,0,6,5,7]
let newSortArr = sortArr.sort()
console.log("The given arr : " , sortArr);
console.log("The sort arr : " , newSortArr);

// from the above example both arr are sorted if we print the both arr
// so the sort method is mutating



// 6.Map 
// consider we have to perform the some operation on element which is present in an arr
let mapArr = [1,2,3,4,5]
let newMapArr = mapArr.map(element => element*2)
console.log("The given arr : " , mapArr);
console.log("The new map arr : " , newMapArr);

// from above example both the arr print the different value
// so the map is non mutating method


