
// Missing number

function missingNo(num){
let test = [1,2,3,4,5,6,7,8,9,10];
let output = [];

for(let i = 0; i < test.length; i++){
    let cur = test[i]
    if(!num.includes(cur)) output.push(cur)   
}
if(output.length > 0) {
    return output
} else return "Empty Array"

}
// console.log(missingNo([1,2,3,4,5,6,7,8,10]))

   
//let arrs = [1,2,3,1,4,5,6,7,7,8,10];

// using index of

function duplicateIdexOf(test){

    let unique = []
    
    for(let i = 0; i < test.length; i++){
        var current = test[i]
        if(unique.indexOf(current) === -1){
            unique.push(current)
        }
    }

    return unique

   
}
//console.log(duplicateIdexOf([4,4,5,6,7,2,1,6,8]))


// using forEach()
function duplicateForEach(test){
    let unique = []
    test.forEach(element =>{
        if(!unique.includes(element)){
            unique.push(element)
        }
    })
    return unique
}

//console.log(duplicateForEach([4,4,5,6,7,2,1,6,8]))

// using Set()
function duplicateSet(test){
    let setValue = [...new Set(test)]
    return setValue
}

console.log(duplicateSet([4,4,5,6,7,2,9,1,6,8]))
