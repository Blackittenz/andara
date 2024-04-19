const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button, index) => {
  button.addEventListener("click", async function () {
    const textToCopy = document.getElementById(
      `text-to-copy-${index + 1}`
    ).innerText;

    if (navigator.clipboard) {
      // Coba menggunakan Clipboard API
      try {
        await navigator.clipboard.writeText(textToCopy);
        showCopyPopup(); // Fungsi untuk menampilkan pop-up
      } catch (err) {
        console.error("Failed to copy with Clipboard API: ", err);
        fallbackCopyTextToClipboard(textToCopy);
      }
    } else {
      // Fallback jika Clipboard API tidak tersedia
      fallbackCopyTextToClipboard(textToCopy);
    }

    afterCopy(button, index); // Fungsi untuk operasi setelah copy
  });
});

function fallbackCopyTextToClipboard(textToCopy) {
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = textToCopy;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextarea);
  showCopyPopup(); // Fungsi untuk menampilkan pop-up
}

function showCopyPopup() {
  const popup = document.getElementById("copyPopup");
  popup.classList.add("show");
  popup.style.display = "block";

  setTimeout(() => {
    popup.classList.remove("show");
    popup.classList.add("hide");
    setTimeout(() => {
      popup.style.display = "none";
      popup.classList.remove("hide");
    }, 500); // Durasi animasi fade out
  }, 3000); // Pop-up akan hilang setelah 3 detik
}

function afterCopy(button, index) {
  button.innerText = "Tersalin";
  button.disabled = true;
  copyButtons.forEach((otherButton, otherIndex) => {
    if (otherIndex !== index) {
      otherButton.innerText = "Salin";
      otherButton.disabled = false;
    }
  });
}
