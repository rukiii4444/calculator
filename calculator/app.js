var display = document.getElementById('output');

function set(nums) {
    display.textContent += nums.textContent;
    console.log("set(" + nums.textContent + ")");
}

function calc() {
    display.textContent = new Function("return " + display.textContent)();
    console.log("calc()");
}

function reset() {
    display.textContent = "";
    console.log("reset()");
}