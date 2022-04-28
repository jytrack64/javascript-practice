class Students {
  studentsNumber () {
    let studentsnumber = Number(prompt("학생 수를 입력하세요."))
    this.studentsNumber = studentsnumber
  }

  score() {
    var [name, korean, math] = (prompt("학생의 이름, 국어 성적, 수학 성적을 차례대로 입력하세요.\n(ex. 박지성 89 71)")).split(" ")
    this.name = name
    this.korean = parseInt(korean)
    this.math = parseInt(math)
  }
}

let students = new Students
students.studentsNumber()

// 학생 정보(이름, 점수)를 저장하는 배열
let studentsName = []
let studentsKorean = []
let studentsMath = []
let studentsAvg = []

for(i=0; i<students.studentsNumber; i++) {
  students.score()
  studentsName[i] = students.name
  studentsKorean[i] = students.korean
  studentsMath[i] = students.math
  studentsAvg[i] = parseFloat((students.korean + students.math) / 2)
}

function highScore(arr) {
  let highscore = 0;
  let highscore_index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (highscore < arr[i]) {
      highscore = arr[i]
      highscore_index = i
    }
  }
  return [studentsName[highscore_index],highscore]
}

koreanHighScore = highScore(studentsKorean)
mathHighScore = highScore(studentsMath)
avgHighScore = highScore(studentsAvg)

alert("국어 1등은 " + koreanHighScore[0] + "님으로 " + koreanHighScore[1] + "점 입니다.\n"
+ "수학 1등은 " + mathHighScore[0] + "님으로 " + mathHighScore[1] + "점 입니다.\n"
+ "🥇 평균 1등은 " + avgHighScore[0] + "님으로 " + avgHighScore[1] + "점 입니다.")