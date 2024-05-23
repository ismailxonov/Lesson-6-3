// const name = localStorage.setItem("name", "Sirotillo");
// const lost = localStorage.setItem("lost", "Ismailxonov");
// const age = localStorage.setItem("age", "12");
// const name2 = localStorage.getItem("name");
// console.log(name2);
// const lost2 = localStorage.getItem("lost");
// console.log(lost2);
// const age2 = localStorage.getItem("age");
// console.log(age2);
// const removge = localStorage.removeItem("name");
// const clear = localStorage.clear();





// localStorage.removeItem("last")
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById('nameInput');
    const displayName = document.getElementById('displayName');
    const storedName = localStorage.getItem('name');

    if (storedName) {
        nameInput.value = storedName;
        displayName.textContent = `${ storedName }`;
    }
});

function saveName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
        localStorage.setItem('name', nameInput);
        document.getElementById('displayName').textContent =` ${ nameInput }`;
    }
}






