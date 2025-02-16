let secret = "783";

function sirliSoz() {
  let input = document.getElementById("dr").value;
  let message = document.getElementById("message");

  if (input === secret) {
    message.textContent = "You won!😁";
    document.body.style.backgroundColor = "green";
  } else {
    message.textContent = "You could not find!🙃";
    document.body.style.backgroundColor = "red";

    setTimeout(() => {
      message.textContent = "";
      document.body.style.backgroundColor = "orange";
    }, 1000);
  }
}
