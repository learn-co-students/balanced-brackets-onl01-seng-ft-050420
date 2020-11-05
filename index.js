function isBalanced(string){
    //returns a boolean that determines whether it is paired correctly\
    //and is balanced
    

    let array=[]
    
    //string.split([])
    //array.push(string)
    let leftCurve ="("
    let rightCurve =")"
    let rightSquare="]"
    let leftSquare="["
    let rightSquig="}"
    let leftSquig="{"
    let balancedCurve = leftCurve +rightCurve
    let balancedSquare = leftSquare+rightSquare
    let balancedSquig = leftSquig+rightSquig
    for(let i=0; i<string.length; i++){

        if (string[i]===leftCurve||string[i]===leftSquare||string[i]===leftSquig){
            array.push(string[i])
        } else {
            let lastElement = array.pop()
            
            if(string[i]===rightCurve && lastElement !==leftCurve){
                return false              
            } else if (string[i]===rightSquare && lastElement !==leftSquare){
                return false
            } else if (string[i]===rightSquig && lastElement !==leftSquig){
                return false
            } 
        }
       
    

    
}

        if (array.length ===0){
            return true
        } else return false
}


//     if (array.includes("()"|| "{}" || "[]" || balancedCurve || balancedSquare|| balancedSquig)){
    //         return true
    //     } else if (array.includes(array.indexOf(leftCurve) < array.indexOf(rightCurve))){
    //         return true
    //     } else if (array.includes(array.indexOf(leftSquare) < array.indexOf(rightSquare))){
    //         return true
    //     } else if (array.includes(array.indexOf(leftSquig) < array.indexOf(rightSquig))){
    //         return true
    //     } else if (array.includes(array.indexOf(leftSquig) && !array.indexOf(rightSquig))){
    //         return false
    //     } else if (array.includes(array.indexOf(leftCurve) && !array.indexOf(rightCurve))){
    //         return false
    //     } else if (array.includes(array.indexOf(leftSquare) && !array.indexOf(rightSquare))){
    //         return false
    //     } else if (array[-1] === array[0]){
    //         return true
    //     } else return false
    // }