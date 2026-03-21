async function test() {
  const r1 = await fetch("https://startup-match-ai.onrender.com/health");
  console.log("health:", r1.status, await r1.text());

  const r2 = await fetch("https://startup-match-ai.onrender.com/api/auth/login", { method: "POST" });
  console.log("login:", r2.status, await r2.text().then(t => t.substring(0, 100)));
}
test();
