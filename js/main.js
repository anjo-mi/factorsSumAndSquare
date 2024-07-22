function listSquared(m, n) {
    let obj = {}
    let arr = []
    function divs(num){
        let arr = []
        for (let i = 1 ; i <= num ; i++){
            if (num % i === 0){
                arr.push(i)
            }
        }
        return arr
    }
    for (let i = m ; i <= n ; i++){
        obj[i] = divs(i)
    }
    for(let key in obj){
        let pairs = []
        obj[key] = obj[key].reduce((a,el) => a + el**2, 0)
        if(Number.isInteger(Math.sqrt(obj[key]))){
            pairs.push(+key, obj[key])
        }
        if (pairs.length === 2){
            arr.push(pairs)
        }
    }
    return arr
}

listSquared(1,250)