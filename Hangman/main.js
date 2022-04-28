// 랜덤 단어 생성하기
// 시도 횟수 5번
// 사용자 입력 받아서 정답과 비교
// 정답에 포함되어 있다면 시도 횟수 그대로, 없다면 -1
// 사용자에게 몇 글자인지 보여줄 것(_ _ _)
// 사용자가 정답에 포함된 알파벳을 입력 시 채워줄 것(_ A _)

import _ from 'lodash'

const words = ["APPLE", "BANANA", "ORANGE", "LEMON", "WATERMELON", "GRAPE"]
let random = 0
let select_word = [] // 랜덤으로 선택한 단어를 배열에 한 글자씩 저장
let answer = [] // 사용자가 입력해서 맞는 값이 있으면 입력한 알파벳을 넣어줄 배열
let answer_string = ""
let input = ""
let life = 5

makeWord()
insertUnderbar(select_word)

while(true) {
  input = prompt("HANGMAN GAME\nA~Z 사이의 알파벳을 하나 입력하세요.\n\n" + answer_string)
  if(input === "") {
    alert("A~Z 사이의 알파벳을 하나 입력하세요.")
    continue
  }

  compareWord(select_word, input)
  
  if( !(answer.includes("_")) ) {
    alert("🎉 YOU WIN! 🎉")
    break;
  }
  else if(life === 0) {
    alert("GAME OVER!\n정답은 '" + words[random] + "' 입니다.")
    break;
  }
}

/////////////////////////////////////////////

// 랜덤 단어 선택 함수
function makeWord () {
  random = Math.floor((Math.random()) *  + words.length)
  select_word = words[random].split("")
  
  console.log(select_word)
}

function insertUnderbar (select_word) {
  for(let i=0; i<select_word.length; i++) {
    answer[i] = "_"
  }
  // 배열을 합쳐서 다시 문자열로 만듦
  answer_string = answer.join(" ")
}

// 정답과 사용자 입력을 비교하는 함수
function compareWord(select_word, input) {
  let order = 0

  // 사용자가 입력한 값을 포함하고 있다면
  if (select_word.includes(input)) {
    // 저장되어 있는 배열에서 인덱스를 찾아서 새로운 배열에 넣어줌
    for(let i=0; i<select_word.length; i++) {
      answer[_.indexOf(select_word, input, order)] = input
      order = _.indexOf(select_word, input, order) + 1
    }
    order = 0
    answer_string = answer.join(" ")

    alert("'" + input + "' (이)가 존재합니다.\n남은 시도 횟수: " + life + "\n\n" + answer_string)
  }
  else {
    alert("'" + input + "' (이)가 존재하지 않습니다.\n남은 시도 횟수: " + --life + "\n\n" + answer_string)
  }
}