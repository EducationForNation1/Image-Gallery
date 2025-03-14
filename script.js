function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

// Close Modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close on Escape Key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});
