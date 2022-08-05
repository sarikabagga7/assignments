// Program 6- Print odd numbers from 0-100

function isOdd(numbers) {
  if (numbers % 2 != 0) {
      return true;
  }
  return false;

}

for(i=0;i<=100;i++){

  let oddNumber = isOdd(i)
  if(oddNumber==true){
    console.log(i);
  }
}
  