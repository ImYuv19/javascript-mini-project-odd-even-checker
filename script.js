function check() {
    let input = document.getElementById("num").value.trim();
    let msg = document.getElementById("msg");

    
    const numberPattern = /^-?\d+$/;

    if (input === "") {
        msg.innerText = "Please enter a number";
        msg.style.color = "orange";
        return;
    }

    if (!numberPattern.test(input)) {
        msg.innerText = "Only integer numbers are allowed";
        msg.style.color = "orange";
        return;
    }

    const n = parseInt(input);

    if (n % 2 === 0) {
        msg.innerText = "Even";
        msg.style.color = "#4caf50";
    } else {
        msg.innerText = "Odd";
        msg.style.color = "#f44336";
    }
}

