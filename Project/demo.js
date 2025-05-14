// Function to toggle visibility of "Read More" sections
function toggleText(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


function exploreNow() {
    document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
}

// Form submission alert and prevention of page reload
function submitForm() {
    alert("Message sent successfully!");
    return false; // Prevents default form submission behavior
}




