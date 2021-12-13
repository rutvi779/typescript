
let colorsArray:string[]=["apple","orange","graps"]

let output:string=''

for(let i=0;i<colorsArray.length;i++){
    output+=`${colorsArray[i]} `
    
}
console.log(output)

output=''

for(let index in colorsArray){
     output+=`${colorsArray[index]} `
    
}
console.log(output)

output=''
for(let i of colorsArray){
    output+=`${i}`
}
output=``
colorsArray.forEach((color)=>{
    output+=`${color}`
})
console.log(output)
