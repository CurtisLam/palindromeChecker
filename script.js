const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkPalindrome = (input) => {
  const userInput = input;
  if (input === "") {
    alert("Please input a value");
    return;
  }

  // empty the previous result
  resultDiv.replaceChildren();

  // remove all the non-alphanumeric and format the string to lowercase
  let processedStr = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // check if the str is equal to reversed str
  let resultMessage = `<strong>${userInput}</strong> ${
    processedStr === processedStr.split("").reverse().join("") ? "is" : "is not"
  } a palindrome.`;

  // create a p tag to display the result in result div
  const pTag = document.createElement("p");
  pTag.className = "result";
  pTag.innerHTML = resultMessage;
  // add the created element to the result
  resultDiv.appendChild(pTag);
  // show the result
  resultDiv.classList.remove("hidden");
};

checkBtn.addEventListener("click", () => {
  checkPalindrome(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPalindrome(userInput.value);
    userInput.value = "";
  }
});
