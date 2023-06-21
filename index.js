/*index.js*/

function alertFunction() {
    alert("This is a test");
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', alertFunction);