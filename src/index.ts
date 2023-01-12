//Q1

let array = [2,3,6,7,9];
function getAverage(array:number[]):number
{
    let count=0
    let sum=0;
    array.forEach(function(value){
    sum+=value;
    count++;
})
return sum/count;
}
console.log(getAverage(array));

//Q2
function getAmountOfPositive(array:number[]):number{
    let count=0;
    array.forEach(function(value){
        if(value>0){
            count++;
    }
})
return count;
}

//Q3
function sortList(array:number[]):void{
    let min=0;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i;j++){
            if(array[j]>array[j+1])

            {
                let min=array[j];
                array[j]=array[j+1];
                array[j+1]=min;
            }
        }
    }
}