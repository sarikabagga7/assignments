// Program 5- Print even numbers from 0-100

function isEven(numbers) {
  if (numbers % 2 == 0) {
      return true;
  }
  return false;

}

for(i=0;i<=100;i++){

  let oddNumber = isEven(i)
  if(oddNumber==true){
    console.log(i);
  }
}
  