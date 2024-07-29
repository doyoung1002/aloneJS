setTimeout() // 특정한 시간 후에 한 번
setInterval() // 특정한 시간마다

// const a = setTimeout(function () {
//   console.log('setTimeout 함수')
// }, 1000)

// const b = setInterval(function () {
//   console.log('setInterval 함수')
// }, 1000)

console.log(a, b)

// 타이머 제거 함수
clearTimeout(a)
clearInterval(b)

  // 즉시 호출 함수(IIFE Immediately Invoked Function Expression)
  // 함수를 만들고 즉시 호출하는 함수

  (function () {

  })()

const a =
  (function () { })()


    (() => {

    })()