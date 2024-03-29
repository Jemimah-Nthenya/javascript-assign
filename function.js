const num =[1,5,3,8,6,7,4];
function numSort(){
    num.sort()
    return num
}
console.log(numSort(num))


//2
var a =[1,-3,5,-6,-8]
function arr(){
    let nega = a.filter((element)=>
    element<0);
    let post = a.filter((element)=>
    element<0);
    let zero =a.filter((element)=>
    element==0);
    return{
        nega:negative
        post:postive
        
    }
}
//4
function multiplication(number){
    number.forEach((number)=>{
        console.log(number*2);
    });
}
multiplication([20,10,30,40]);
