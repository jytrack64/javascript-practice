function Calculator() {
  this.read = function () {
    let input = prompt('두 개의 숫자를 입력하세요. (ex. 2 6)')
    let inputsplit = input.split(' ')

    // parseInt, Number 모두 가능
    this.input1 = Number(inputsplit[0])
    this.input2 = Number(inputsplit[1])
  }

  this.sum = function() {
    return this.input1 + this.input2
  }

  this.mul = function() {
    return this.input1 * this.input2
  }
}

let calculator = new Calculator()
calculator.read()

alert("Sum= " + calculator.sum())
alert("Mul= " + calculator.mul())