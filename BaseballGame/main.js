// 랜덤한 세자리 숫자 생성해서 저장하는 배열 하나
// 사용자 입력 저장할 배열 하나
// 세 자리 숫자 중복 x
// 반복문으로 비교해서 결과 저장할 변수 strike, ball, out
// 시도 횟수 저장할 변수 cnt

// 랜덤 생성
let random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let num = []
let temp = 0;

// 사용자 입력
let input = 0
let inputarr = []

// 결과값
let strike = 0
let ball = 0
let out = 0
let cnt = 0

makeRandom(0)
makeRandom(1)
makeRandom(2)
console.log(num)

while(true) {
  input = prompt("0 ~ 9 사이의 세 자리 숫자를 입력하세요.\n(ex. 1 2 3)")
  inputarr = input.split(" ")
  cnt++

  checkInput()
  
  if(strike === 3) { // 스트라이크가 세 개 나오면 while을 멈춤
    alert("🎉 승리! " + cnt + "회만에 정답을 맞혔습니다.")
    break;
  }
  else if(input === 'q') {
    alert("게임을 종료합니다. 정답은 "+ num[0] + num[1] + num[2] + "입니다.")
    break;
  }
  else { // 그렇지 않으면 결과를 보여줌
    console.log(input)
    alert("입력한 숫자: " + input + "\nSTRIKE: " + strike + ", BALL: " + ball + ", OUT: " + out)
  }

  // 결과를 초기화
  strike = 0
  ball = 0
  out = 0
}

// 랜덤으로 세 자리 숫자 생성, 중복 제거
function makeRandom(a) {
  temp = Math.floor((Math.random()) *  + random.length)
  num[a] = random[temp]
  random.splice(temp, 1)
}

// 사용자가 입력한 값과 정답 비교
function checkInput() {
  for(let i=0; i<3; i++) {
    // STRIKE
    if(num[i] === Number(inputarr[i])) {
      strike++
    }
    // BALL
    else if( (num[i] === Number(inputarr[0])) ||
             (num[i] === Number(inputarr[1])) ||
             (num[i] === Number(inputarr[2])) ) {
      ball++
    }
    // OUT
    else {
      out++
    }
  }
}