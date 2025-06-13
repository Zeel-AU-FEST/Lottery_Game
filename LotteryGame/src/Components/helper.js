function generateTicket(n)
{
    let arr=new Array(n);
    for (let index = 0; index < arr.length; index++) {
        arr[index]=Math.floor(Math.random()*10);
        
    }
    return arr;
}

function Sum(arr)
{
    let sum=0;
    for (let index = 0; index < arr.length; index++) {
        sum+=arr[index]; 
    }
    return sum;
}
export {generateTicket,Sum}