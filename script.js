function reverseString(str) {
  let reverseString = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i]
  }
  return (inverseResult.innerHTML = reverseString)
}

const inputWord = document.querySelector(".input-word")
const buttonDiscover = document.querySelector("#discover")
const buttonRestart = document.querySelector("#restart")
const inverseResult = document.querySelector(".inverse-result")

buttonDiscover.addEventListener("click", () =>
  console.log(reverseString(String(inputWord.value)))
)

function restartComponents() {
  inputWord.value = ""
  inverseResult.innerHTML = ""
  inputWord.focus()
}

buttonRestart.addEventListener("click", restartComponents)
