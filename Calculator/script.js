function press(num) {
    document.getElementById("output").value += num;
}

function clearScreen() {
    document.getElementById("output").value = "";
}

function deleteLast() {
    let current = document.getElementById("output").value;
    document.getElementById("output").value = current.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("output").value);
        document.getElementById("output").value = result;
    } catch {
        alert("Invalid Input");
    }
}

