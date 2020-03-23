// Code your solutions in this file

function writeCards(array, day = "birthday"){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
      newArray.push(`Thank you, ${array[i]}, for the wonderful ${day} gift!`);
    }
    return newArray;
}

function countDown(num){
    for(let i = num; i > -1; i--){
        console.log(i);
    }
}