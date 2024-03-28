const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    const textToCopy = document.getElementById(
      `text-to-copy-${index + 1}`
    ).innerText;
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    button.innerText = "Tersalin";
    button.disabled = true;
    copyButtons.forEach((otherButton, otherIndex) => {
      if (otherIndex !== index) {
        otherButton.innerText = "Salin";
        otherButton.disabled = false;
      }
    });
  });
});
