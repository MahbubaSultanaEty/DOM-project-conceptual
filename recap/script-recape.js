
const container = document.getElementById("container");

let user= "Manik"


const div = document.createElement("div");
div.innerHTML = `
<p>User name is ${user}</p>
<button>Click Me</button>`;
container.appendChild(div);

const delegation = document.getElementById("body");
delegation.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.target.parentNode);
})

let arr = [1, 2, 3, 5, 7];
// const findMethod = arr.find(item => item == 6);
// console.log(findMethod);

// const filterMethod = arr.filter(item => item == 5);
// console.log(filterMethod);
const filterMethod = arr.filter(item => item != 7);
console.log(filterMethod);