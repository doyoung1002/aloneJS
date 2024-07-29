// 콜백함수 매개변수로 숫자 하나를 받는 형태!
const 테스트 = function (콜백함수) {
  콜백함수(10)
}

const 함수 = function (콜백함수의_매개변수) {
  console.log(`${콜백함수의_매개변수}`)
}
테스트(함수)

//forEach
// const 배열 = [273, 52, 103, 32, 57]
// 배열.forEach(function (value, index) {
//   console.log(`${index}번째의 값은 ${value}`)
// })

//filter
let 배열 = [273, 52, 103, 32, 57]
배열 = 배열.filter(function (value, index) {
  return true
  // value를 기반으로
})
console.log(배열)

const myForEach = function (배열, 콜백함수) {
  for (let i = 0; i < 배열.length; i++) {
    const element = 배열[i];
    콜백함수(element, i, 배열)
  }
}


배열.filter(function (value, index) {
  return false
})

const myFilter = function (배열, 콜백함수) {
  const output = [];
  for (let i = 0; i < 배열.length; i++) {
    const element = 배열[i];
    if (콜백함수(element, i, 배열)) {
      output.push(element);
    }
  }
  return output
}

// 화살표 함수
배열 = 배열.filter((value, index) => {
  return false
})

// Map
let 배열 = [273, 52, 103, 32, 57]
배열 = 배열.map(function (value, index) {
  return value + '!!'
})
console.log(배열)

// 화살표 함수
배열 = 배열.map(function (value, index) => value + "!!")
console.log(배열)

