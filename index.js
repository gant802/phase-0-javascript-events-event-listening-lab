const input = document.getElementById('button');

function addingEventListener() {
    input.addEventListener("click", () => {
        alert("I've been clicked!");
    })
};

input.onclick = addingEventListener();


