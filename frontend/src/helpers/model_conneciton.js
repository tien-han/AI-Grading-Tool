async function fetchModelResponse() {
    const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "applications/json",
        },
        body: JSON.stringify({ prompt: "Say hi"}),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.response); // Logs the response from the backend
    return data.response;
}

// Trigger the request, e.g., when a button is clicked
document.getElementById("send-msg").addEventListener("click", async () => {
    try {
        const modelResponse = await fetchModelResponse();
        document.getElementById("response").innerText = modelResponse;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});