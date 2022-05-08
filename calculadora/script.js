function insert(num) {
    if (check(num)) {
        let number = document.getElementById("result").innerHTML;
        if (number == "Digite  os  valores") {
            number = "";
        }
        document.getElementById("result").innerHTML = number + num;
    }
}

function check(num) {
    let operations = ["+", "-", "/", "*", "."];
    let number = document.getElementById("result").innerHTML;
    if (
        operations.includes(number[number.length - 1]) &&
        operations.includes(num)
    ) {
        return false;
    }
    return true;
}

function clean() {
    document.getElementById("result").innerHTML = "";
}

function back() {
    const result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(
        0,
        result.length - 1
    );
}

function calculate() {
    const result = document.getElementById("result").innerHTML;
    if (result) {
        let calc = eval(result);
        if (!Number.isInteger(calc)) {
            calc = calc.toFixed(2);
        }
        document.getElementById("result").innerHTML = calc;
    } else {
        document.getElementById("result").innerHTML = "Digite os valores...";
    }
}
