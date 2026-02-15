 function check() {
            let n = document.getElementById("num").value;
            let m = document.getElementById("msg");

            if (n === "") return;

            if (n % 2 === 0) {
                m.innerText = "Even";
                m.style.color = "#4caf50";
            } else {
                m.innerText = "Odd";
                m.style.color = "#f44336";
            }
        }