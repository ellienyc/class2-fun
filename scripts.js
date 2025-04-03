// all copied from class model or or CoPilot in VS Code or ChatGPT https://chatgpt.com/c/67dc5514-b2e8-8004-ba98-f7fbd9497355

//JSON object for the data {key}, use notation to access and log
const buttons = document.querySelectorAll(".button");
const outputTitle = document.getElementById("outputTitle");
const outputDescription = document.getElementById("outputDescription");

// "Event listeners" for each color, with the description
// don't ask me; all ChatGPT (and CoPilot) for how to click off an image to "reset" the text
function handleClick(event) {
    // Remove "active" class from all buttons
    buttons.forEach(button => button.classList.remove("active"));

    // Add "active" class to the clicked button
    event.currentTarget.classList.add("active");

    const img = event.currentTarget.querySelector("img");

    // Update text based on clicked button; ## booleans logic
    if (event.currentTarget.id === "essieTC") {
        outputTitle.innerText = "essie turquoise & caicos";
        outputDescription.innerText = "an aqua green cream";
       
        // Toggle image source
        if (img.src === img.getAttribute("data-original")) {
            img.src = img.getAttribute("data-new");
        } else {
            img.src = img.getAttribute("data-original");
        }

    } else if (event.currentTarget.id === "essieADU") {
        outputTitle.innerText = "essie all dolled up";
        outputDescription.innerText = "a bright pink shiny cream";
        if (img.src === img.getAttribute("data-original")) {
            img.src = img.getAttribute("data-new");
        } else {
            img.src = img.getAttribute("data-original");
        }
    } else if (event.currentTarget.id === "opiTC") {
        outputTitle.innerText = "OPI Toucan Do It If You Try";
        outputDescription.innerText = "a creamy orange coral";

        // Toggle image source
        if (img.src === img.getAttribute("data-original")) {
            img.src = img.getAttribute("data-new");
        } else {
            img.src = img.getAttribute("data-original");
        }
    } else if (event.currentTarget.id === "opiDT") {
        outputTitle.innerText = "OPI Dutch Tulips";
        outputDescription.innerText = "a pink-red crème";

        // Toggle image source
        if (img.src === img.getAttribute("data-original")) {
            img.src = img.getAttribute("data-new");
        } else {
            img.src = img.getAttribute("data-original");
        }
    } else if (event.currentTarget.id === "sinfulT") {
        outputTitle.innerText = "Sinful Colors Tempest";
        outputDescription.innerText = "a matte pastel lilac purple";

        // Toggle image source
        if (img.src === img.getAttribute("data-original")) {
            img.src = img.getAttribute("data-new");
        } else {
            img.src = img.getAttribute("data-original");
        }
    }
}

// Attach event listeners to buttons, ## arrays
buttons.forEach(button => button.addEventListener("click", handleClick));

// ChatGPT; for how to click off an image to "reset" the text
// Reset when clicking anywhere outside the buttons
document.addEventListener("click", function (event) {
    // Check if the clicked area is NOT a button
    if (!event.target.closest(".button")) {
        // Reset text
        outputTitle.innerText = "polish info";
        outputDescription.innerText = "and description";

        // Remove active class from buttons
        buttons.forEach(button => {
            button.classList.remove("active");

            // Reset image source to original
            const img = button.querySelector("img");
            if (img && img.getAttribute("data-original")) {
                img.src = img.getAttribute("data-original");
            }
        });
    }
});