let array = [1,500,230,40,4,65,28,32,45,1002]


orden1 = array.sort(function(a,b){return a-b})
console.log(orden1)

orden2= orden1.reverse()
console.log(orden2)

function eliminado(){
    orden1.shift()
    console.log(orden1)
}

function combinado(){
    orden_definitivo=orden1.concat(orden2)
    console.log(orden_definitivo)
}

orden1.push(85,65,103,25)
console.log(orden1)
 