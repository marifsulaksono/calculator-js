let state = {
    inputNumber1: parseInt(localStorage.getItem("inputNumber1") ?? "0"),
    inputNumber2: parseInt(localStorage.getItem("inputNumber2") ?? "0"),
};

function setState(newState) {
    const prevState = { ...state };
    const nextState = { ...state, ...newState };
    state = nextState;
    render()
    onStateChange(prevState, nextState);
}

function onStateChange(prevState, nextState) {
    if (prevState.inputNumber1 !== nextState.inputNumber1) {
        localStorage.setItem("inputNumber1", nextState.inputNumber1);
    } else if (prevState.inputNumber2 !== nextState.inputNumber2) {
        localStorage.setItem("inputNumber2", nextState.inputNumber2);
    }
}

function CalculatorPage() {
    console.log(state)

    const numb1 = document.createElement("input");
    numb1.id = "numb1";
    numb1.value = state.inputNumber1;
    numb1.oninput = function (event) {
        const numberValue = parseInt(event.target.value)
        if (!isNaN(numberValue)) {
            setState({ inputNumber1: numberValue });
        }
    }

    const numb2 = document.createElement("input");
    numb2.id = "numb2";
    numb2.value = state.inputNumber2;
    numb2.oninput = function (event) {
        const numberValue = parseInt(event.target.value)
        if (!isNaN(numberValue)) {
            setState({ inputNumber2: numberValue });
        }
    }

    const btnPlus = document.createElement("button");
    btnPlus.id = "plus";
    btnPlus.textContent = "+";
    btnPlus.onclick = function () {
        result = state.inputNumber1 + state.inputNumber2;
        document.getElementById("result").innerHTML = result;
    }

    const btnMinus = document.createElement("button");
    btnMinus.id = "minus";
    btnMinus.textContent = "-";
    btnMinus.onclick = function () {
        result = state.inputNumber1 - state.inputNumber2;
        document.getElementById("result").innerHTML = result;
    }

    const btnMultiple = document.createElement("button");
    btnMultiple.id = "multiple";
    btnMultiple.textContent = "X";
    btnMultiple.onclick = function () {
        result = state.inputNumber1 * state.inputNumber2;
        document.getElementById("result").innerHTML = result;
    }

    const btnDivide = document.createElement("button");
    btnDivide.id = "divide";
    btnDivide.textContent = "/";
    btnDivide.onclick = function () {
        result = state.inputNumber1 / state.inputNumber2;
        document.getElementById("result").innerHTML = result;
    }

    const textResult = document.createElement("p")
    textResult.id = "result";

    const div = document.createElement("div");
    div.id = "number";
    div.append(numb1);
    div.append(numb2);
    div.append(btnPlus);
    div.append(btnMinus);
    div.append(btnMultiple);
    div.append(btnDivide);
    div.append(textResult);

    return div;
}

function render() {
    const root = document.getElementById("root")

    const focusedElement = document.activeElement
    const focusedElementId = focusedElement.id;
    const selectionStart = focusedElement.selectionStart;
    const selectionEnd = focusedElement.selectionEnd;


    root.innerHTML = ""
    root.appendChild(CalculatorPage())

    if (focusedElementId) {
        console.log(selectionStart, selectionEnd)

        const focusedElement = document.getElementById(focusedElementId)
        focusedElement.focus()
        focusedElement.selectionStart = selectionStart
        focusedElement.selectionEnd = selectionEnd
    }
}

render();
