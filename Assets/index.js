document.addEventListener("DOMContentLoaded", () => {
    let kilo = document.querySelector('.kilo');
    let gram = document.querySelector('.gram');
    let pound = document.querySelector('.pound');
    let ounce = document.querySelector('.ounce');
    let form = document.querySelector('.form');
    let error = document.querySelector('.error')

    hideError = () => {
        console.log("called");
        setTimeout(() => {
            error.style.display = "none";
        }, 3000)
    }
    weightCalc = (e) => {
        if (e.target.classList.contains('kilo')) {
            let x = e.target.value
            if (x && x < 0) {
                console.log("inside");
                error.style.display = "block";
                hideError();
            } else {
                pound.value = (x * 2.20462).toFixed(2);
                gram.value = (x * 1000).toFixed(2)
                ounce.value = (x * 35.274).toFixed(2)
            }

        }
        else if (e.target.classList.contains('gram')) {
            let x = e.target.value
            if (x && x < 0) {
                error.style.display = "block";
                hideError();
            } else {
                pound.value = (x * 0.00220462).toFixed(2);
                kilo.value = (x * 0.001).toFixed(2)
                ounce.value = (x * 0.035274).toFixed(2)
            }

        }
        else if (e.target.classList.contains('pound')) {
            let x = e.target.value
            if (x && x < 0) {
                error.style.display = "block";
                hideError();
            } else {
                kilo.value = (x * 0.453592).toFixed(2);
                gram.value = (x * 453.592).toFixed(2)
                ounce.value = x * 16
            }

        }
        else if (e.target.classList.contains('ounce')) {
            let x = e.target.value
            if (x && x < 0) {
                error.style.display = "block";
                hideError();
            } else {
                pound.value = (x * 0.0625).toFixed(2);
                gram.value = (x * 28.3495).toFixed(2)
                kilo.value = (x * 0.0283495).toFixed(2)
            }

        }
    }  
    form.addEventListener('input', weightCalc);

})