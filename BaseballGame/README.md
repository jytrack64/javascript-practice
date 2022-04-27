# ⚾ 숫자야구 게임

- 컴퓨터가 랜덤으로 세 자리 숫자를 생성할 것(단, 중복되는 숫자가 없어야 함)
- 사용자의 입력과 정답을 비교하여 STRIKE, BALL, OUT을 출력할 것
- 'q'를 입력하면 게임이 종료되고 정답을 알려줄 것
- 게임 종료 시 몇 회만에 정답을 맞혔는지 알려줄 것
<br/>

## 중복 없애기
`makeRandom()`은 한 자리의 숫자를 랜덤하게 뽑아주는 함수이다.<br/>
함수 호출 시 `random` 배열에서 0~9까지의 숫자 중 하나를 랜덤으로 선택한다.<br/>
중복으로 선택되지 않도록 선택된 값은 `.splice()`를 사용하여 배열에서 제거했다.<br/>
숫자 하나가 선택될 때마다 배열에서 숫자가 제거됨에 따라(배열이 줄어듦) 랜덤으로 선택하는 숫자도 감소해야 한다. 따라서 `.length`를 이용해 배열 길이만큼의 범위에서 난수를 생성했다.

```
let random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let num = []
let temp = 0;

makeRandom(0)
makeRandom(1)
makeRandom(2)

function makeRandom(a) {
  temp = Math.floor((Math.random()) *  + random.length)
  num[a] = random[temp]
  random.splice(temp, 1)
}
```
<br/>

## 실행 결과
~~정답을 맞추기 위해 콘솔창에 정답을 출력되게 했다.~~
- 정답을 맞춘 경우

![GIF 2022-04-28 오전 12-18-02](https://user-images.githubusercontent.com/103479942/165556046-374d55fa-a3d9-4713-92d3-2b60d5aef764.gif)
<br/>

- 게임을 강제 종료한 경우('`q`'을 누른 경우)

![GIF 2022-04-28 오전 12-21-11](https://user-images.githubusercontent.com/103479942/165556176-e0681bee-b5ad-45da-b1e2-524c2fc0d965.gif)
