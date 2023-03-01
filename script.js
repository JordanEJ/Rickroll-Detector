const knownLinks = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=oHg5SJYRHA0",
  // Add more known Rickroll links here
];

function checkLink() {
  const input = document.getElementById("input-link").value;
  const result = document.getElementById("result");
  const body = document.querySelector("body");

  if (knownLinks.includes(input)) {
    result.textContent = "This is a Rickroll!";
    body.style.backgroundColor = "red";
    body.style.color = "#fff";
  } else {
    result.textContent = "This is not a Rickroll.";
    body.style.backgroundColor = "#52D017";
    body.style.color = "#fff";
  }
}
