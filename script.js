const buttons = document.querySelectorAll(".boxs");
const ansBox = document.querySelector(".ansBox");

let currentInput = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "=") {
            try {
                currentInput = eval(currentInput);
                ansBox.value = currentInput;
            } catch (error) {
                ansBox.value = "Error";
                currentInput = "";
            }
        } else if (value === "C") {
            currentInput = "";
            ansBox.value = "";
        } else {
            currentInput += value;
            ansBox.value = currentInput;
        }
    });
});
