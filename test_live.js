const axios = require("axios");

async function testLive() {
  try {
    const res = await axios.post("https://startup-match-ai.onrender.com/api/auth/login", {
      email: "test@example.com",
      password: "password123"
    });
    console.log("Success:", res.status, res.data);
  } catch (err) {
    if (err.response) {
       console.log("Error status:", err.response.status);
       console.log("Error data:", err.response.data);
    } else {
       console.log("Network error:", err.message);
    }
  }
}

testLive();
