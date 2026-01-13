document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const input = document.getElementById("searchInput");
    const message = document.getElementById("message");

    if (input.value.trim() === "") {
        message.textContent = "Please enter something to search!";
    } else {
        message.textContent = "";
        alert("You searched for: " + input.value);
    }
});
