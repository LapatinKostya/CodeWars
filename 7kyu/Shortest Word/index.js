function findShort(s){
    let result  = s.split(' ')
    return result.reduce((a,c) => (c.length < a.length ? a = c : a, a), result[0]).length
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))