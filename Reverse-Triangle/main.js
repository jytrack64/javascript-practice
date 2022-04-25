var sum = "";

// 바깥의 for문과 안의 for문이 연관이 있어야 함!
for (let i=0; i<5; i++) {

  for(let j=0; j<i; j++) {
    sum += " "
  }
  for(let k=0; k<5-i; k++) {
    sum += "*"
  }
  console.log(sum)
  sum = ""
}