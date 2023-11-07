const notesContainer = document.querySelector(".notescontainer");
const createBtn = document.querySelector(".btn");

function shownotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
shownotes();

function updatesstorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updatesstorage();
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updatesstorage();
    }
});

notesContainer.addEventListener("input", function(e) {
    if (e.target.tagName === "P") {
        updatesstorage();
    }
});

document.addEventListener("keydown", event => {
    if (event.target.tagName === "P" && event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
        updatesstorage();
    }
});
