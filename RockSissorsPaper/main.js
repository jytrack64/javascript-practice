// 1:가위, 2:바위, 3:보

let start = prompt("가위바위보 게임! 시작하겠습니까? 1. 예 2. 아니오")

if (start === "1") {
  // 컴퓨터
  let random = Math.random()
  let com = Math.floor(random * 3 + 1)

  // 유저
  let user = prompt('1(가위), 2(바위), 3(보) 중 하나를 입력하세요.')
  user = parseInt(user)

  while (true) {
    if (user <= 0 || user > 3) {
      user = prompt('1(가위), 2(바위), 3(보) 중 하나를 입력하세요.')
      user = parseInt(user)
    } else {
      break;
    }
  }

  console.log("컴퓨터: " + com)
  console.log("당신: " + user)

  if ((com === 1 && user === 2) || (com === 2 && user === 3) || (com === 3 && user === 1)) {
    console.log("승리했습니다!!")
  } else if (com === user) {
    console.log("무승부입니다.")
  } else if ((com === 1 && user === 3) || (com === 2 && user === 1) || (com === 3 && user === 2)) {
    console.log("패배했습니다!")
  }
} else if (start === "2") {
  console.log("게임을 종료합니다.")
}