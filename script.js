document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const payload = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const res = await fetch("https://YOUR_BACKEND_URL/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    const data = await res.json();
    document.getElementById("status").textContent = data.message;
});
