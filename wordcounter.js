document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("text-area");
	const container = document.querySelector(".container_cuvinte");
    const placeholder = document.getElementById("placeholder");

   textArea.addEventListener("input", function () {
      // Dacă există text în textarea, adaugă clasa 'active' și ascunde placeholder-ul
      if (textArea.value.trim()) {
        container.classList.add("active");
        placeholder.style.opacity = "0"; // Ascunde placeholder-ul când se scrie
      } else {
        container.classList.remove("active");
        placeholder.style.opacity = "1"; // Afișează placeholder-ul când nu se scrie
      }
    });
  });