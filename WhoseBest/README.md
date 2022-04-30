# 🥇 과목 별 1등을 뽑자!
- 학생 정보(이름, 국어 성적, 수학 성적)를 입력받는다.
- 입력받은 학생 정보를 바탕으로 국어 1등, 수학 1등, 평균 1등의 학생 이름과 점수를 출력한다.
- 클래스를 사용할 것.
<br/>

## 클래스에 넣을 데이터 선정하기
학생 정보는 반복적으로 사용되는 것이므로 학생 수를 입력받는 부분과 학생 정보를 입력받고, 저장하는 부분을 클래스로 구현하였다.
```js
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
```
<br/>

## 복수의 값을 반환(`return`)하기
과목 별로 가장 높은 점수를 기록한 학생을 가려내는 함수(`highScore()`)를 보면 다음과 같이 배열로 반환하는 코드가 있다.
```js
return [studentsName[highscore_index],highscore]
```
<br/>

> 🤔 분할 대입
보통 함수에서 값을 반환할 때 여러 개의 값을 반환할 수는 없다. (~~나도 여태까지 이렇게 알고 살았다..~~) 그렇다면 복수의 값을 반환하는 방법은 전혀 없을까?<br/>
NO! 배열과 객체를 이용하면 가능하다. 여러 값들을 배열 혹은 객체로 묶어서 하나의 값으로 만든 후, 반환하는 것이다.
<br/>

함수에서 반환할 때 배열로 묶어서 반환한 후, 호출 시 배열에 저장하면 인덱스를 통해 각각의 데이터에 접근할 수 있다.
```js
koreanHighScore = highScore(studentsKorean)
alert("국어 1등은 " + koreanHighScore[0] + "님으로 " + koreanHighScore[1] + "점 입니다.\n")
```
<br/>

## 실행 결과
