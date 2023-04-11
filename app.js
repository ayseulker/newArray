
let array1 = ["Zeki", "Mehmet", "Fatma", "Halil", "Ahsen", "Zeynep", "Burak"]
let array2 = ["Halil", "Veli", "Kerim", "Zeki", "Neriman", "Fatma", "Semih"]


let newArray=[]


for(array of array1){
    
   newArray.push(array)
}

for(arrays of array2){
    if(newArray.includes(arrays)){
        newArray;
    }else{
        newArray.push(arrays)
    }
}

newArray = newArray.sort()
   
console.log(newArray)


