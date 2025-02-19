document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".tabs button")
  const seriasCards = document.querySelectorAll(".serias-card")
  const popup = document.getElementById("popup")
  const closePopup = document.getElementById("closePopup")
  const youtubeIframe = document.getElementById("youtubeIframe")

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      const filterType = button.textContent.toLowerCase()
      seriasCards.forEach((card) => {
        if (filterType === "مسلسلات") {
          card.style.display = card.classList.contains("serias") ? "flex" : "none"
        } else if (filterType === "برامج") {
          card.style.display = card.classList.contains("program") ? "flex" : "none"
        }
      })
    })
  })

  // Popup functionality
  seriasCards.forEach((card) => {
    card.addEventListener("click", () => {
      popup.style.display = "flex"
      // Replace 'VIDEO_ID' with the actual YouTube video ID
      youtubeIframe.src = "https://www.youtube.com/embed/VIDEO_ID"
    })
  })

  closePopup.addEventListener("click", () => {
    popup.style.display = "none"
    youtubeIframe.src = ""
  })
})

s