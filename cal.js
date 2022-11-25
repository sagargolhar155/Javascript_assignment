function myFunction() {
    var x = document.getElementById("his");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


let ref = document.querySelectorAll(".button");
let string = "";
let history = "";
Array.from(ref).forEach((fname) => {
    fname.addEventListener('click', a => {
        if (a.target.innerHTML === '=') {
            try {
                let his = "";
                his = string;
                string = eval(string);
                document.querySelector('input').value = string;
                history += his + "=" + string + "<br/>";
                document.getElementById('hist').innerHTML = history;
            }
            catch (error) {
                document.getElementById('input').value = "";
                string = "";
            }
        }
        else if (a.target.innerHTML === 'AC') {
            string = "";
            document.querySelector('input').value = string;

        }
        else if (a.target.innerHTML === 'DEL') {

            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else {
            string += a.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })

})

const clearHistory = "";
let histy = document.getElementById("clearAll");
console.log(histy);
histy.addEventListener('click', () => {
    histroy = "";
    document.getElementById('hist').innerHTML = clearHistory;
});

