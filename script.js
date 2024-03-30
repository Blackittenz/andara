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

    // Check if the device is a smartphone
    const isSmartphone =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (isSmartphone) {
      // Create and append the popup element
      const popup = document.createElement("div");
      popup.classList.add("popup");
      popup.innerText = "Rekening Tersalin";
      document.body.appendChild(popup);

      // Remove the popup after 2 seconds
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 2000);
    }
  });
});
