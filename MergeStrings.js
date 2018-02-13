function mergeStrings(str1, str2){

    let newArr = []

    let strA = str1.split('')
    let strB = str2.split('')
    let min =  strB.length > strA.length ? strB.length : strA.length

    let i = 0
    
    while (i < min) {

        if (i < strA.length) {
            newArr.push(strA[i])
        }

        if (i < strB.length) {
            newArr.push(strB[i])
        }

        i++
    }

    let result = newArr.join('')    
    return result

}
