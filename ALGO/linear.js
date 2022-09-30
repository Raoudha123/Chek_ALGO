const x=[1,2,4]
const y=[1,3,5,2]
function somme (Arr1,Arr2)
  {

let sum=0
for (let i = 0; i < Arr1.length; i++) {
  let test = false
for (let j = 0; j < Arr2.length; j++) {
    if (Arr1[i]===Arr2[j]) {
      test=true
      }
  
   console.log(test) 

}
      if (!test){
        sum=sum+Arr1[i]
        
      }  
}
for (let j = 0; j < Arr2.length; j++) {
  let test = false
for (let i = 0; i < Arr1.length; i++) {
    if (Arr2[j]===Arr1[i]) {
      test=true
      }
  
   console.log(test) 

}
      if (!test){
        sum=sum+Arr2[j]
        
      }  
}
    return sum
  }
console.log(somme(x,y))
function somme_overlapping (Arr1,Arr2)
  {

let sum=0
for (let i = 0; i < Arr1.length; i++) {
  let test = false
for (let j = 0; j < Arr2.length; j++) {
    if (Arr1[i]==Arr2[j]) {
      test=true
      }
  
   console.log(test) 

}
      if (test){
        sum=sum+Arr1[i]
        
      }  
}
for (let j = 0; j < Arr2.length; j++) {
  let test = false
for (let i = 0; i < Arr1.length; i++) {
    if (Arr2[j]==Arr1[i]) {
      test=true
      }
  
   console.log(test) 

}
      if (test){
        sum=sum+Arr2[j]
        
      }  
}
    return sum
  }
console.log(somme_overlapping(x,y))