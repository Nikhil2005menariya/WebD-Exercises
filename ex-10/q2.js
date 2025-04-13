// (a) Using getElementById
const titleElement = document.getElementById("title");
titleElement.textContent = "Updated Title";

// (b) Using getElementsByName
const usernameField = document.getElementsByName("username")[0];
usernameField.value = "John Doe";

const genderRadios = document.getElementsByName("gender");
for (let radio of genderRadios) {
    if (radio.checked) {
        console.log(`Selected Gender: ${radio.value}`);
    }
}

// (c) Using getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log(`Total number of paragraphs: ${paragraphs.length}`);

const listItems = document.getElementsByTagName("li");
for (let item of listItems) {
    console.log(`List item content: ${item.textContent}`);
}

// (d) Using getElementsByClassName
const inputFields = document.getElementsByClassName("input-field");
for (let field of inputFields) {
    field.style.backgroundColor = "lightblue";
}

// (e) Using querySelector
const firstInfoParagraph = document.querySelector(".info");
firstInfoParagraph.textContent = "This is the first info paragraph.";

const firstGenderRadio = document.querySelector('input[name="gender"]');
firstGenderRadio.checked = true;

// (f) Using querySelectorAll
const infoParagraphs = document.querySelectorAll(".info");
infoParagraphs.forEach(paragraph => {
    console.log(`Info paragraph content: ${paragraph.textContent}`);
});

const hobbyCheckboxes = document.querySelectorAll(".hobby");
hobbyCheckboxes.forEach(checkbox => {
    checkbox.checked = true;
    console.log(`Checked hobby: ${checkbox.value}`);
});
