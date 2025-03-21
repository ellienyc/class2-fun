// all copied from class model or ChatGPT https://chatgpt.com/c/67dc5514-b2e8-8004-ba98-f7fbd9497355

//JSON object for the data {key}, use notation to access and log
const buttons = document.querySelectorAll(".button");
const outputTitle = document.getElementById("outputTitle");
const outputDescription = document.getElementById("outputDescription");

// "Event listeners" for the color
essieTC.addEventListener("click", function () {
    outputTitle.innerText = "essie turquoise & caicos";
    outputDescription.innerText = "an aqua green cream";
    outputTitle.style.display = "block";
    outputDescription.style.display = "block";
});

essieADU.addEventListener("click", function () {
    outputTitle.innerText = "essie all dolled up";
    outputDescription.innerText = "a bright pink shiny cream";
    outputTitle.style.display = "block";
    outputDescription.style.display = "block";
});

opiTC.addEventListener("click", function () {
    outputTitle.innerText = "OPI Toucan Do It If You Try";
    outputDescription.innerText = "creamy orange coral";
    outputTitle.style.display = "block";
    outputDescription.style.display = "block";
});

opiDT.addEventListener("click", function () {
    outputTitle.innerText = "OPI Dutch Tulips";
    outputDescription.innerText = "pink-red crème";
    outputTitle.style.display = "block";
    outputDescription.style.display = "block";
});

sinfulT.addEventListener("click", function () {
    outputTitle.innerText = "Sinful Colors Tempest";
    outputDescription.innerText = "matte pastel lilac purple";
    outputTitle.style.display = "block";
    outputDescription.style.display = "block";
});

// ## don't ask me all ChatGPT
function handleClick(event) {
    // Remove "active" class from all buttons
    buttons.forEach(button => button.classList.remove("active"));

    // Add "active" class to the clicked button
    event.currentTarget.classList.add("active");

    // Update text based on clicked button; ## booleans logic
    if (event.currentTarget.id === "essieTC") {
        outputTitle.innerText = "essie turquoise & caicos";
    } else if (event.currentTarget.id === "essieADU") {
        outputTitle.innerText = "essie all dolled up";
        outputDescription.innerText = "a bright pink shiny cream";
    }

    // Stop event from propagating to the document click listener
    event.stopPropagation();
}

// Attach event listeners to buttons, ## arrays
buttons.forEach(button => button.addEventListener("click", handleClick));

// Reset when clicking anywhere outside the buttons
document.addEventListener("click", function (event) {
    // Check if the clicked area is NOT a button
    if (!event.target.closest(".button")) {
        // Reset text
        outputTitle.innerText = "polish info";
        outputDescription.innerText = "and description";

        // Remove active class from buttons
        buttons.forEach(button => button.classList.remove("active"));
    }
});
