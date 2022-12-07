const footerYear = document.getElementById('footer-year')
const profileId = document.getElementById('profile-id')
const elIntro = document.getElementById('intro')
const elAbout = document.getElementById('about')
const elContact = document.getElementById('contact')
const darkModeLabel = document.getElementById('dark-mode')

// PENGATURAN DEFAULT 😁
footerYear.innerHTML = new Date().getFullYear()
profileId.innerHTML = "Zul Hilmi."

darkModeLabel.innerHTML = "☀️"
let defaultMode = "light"
// TUTUP PENGATURAN


// BUKA KONTEN intro, sembunyikan konten lain
const intro = () => {
  elIntro.style.display = 'block'
  elIntro.style.visibility = 'visible'
  elAbout.style.visibility = 'hidden'
  elContact.style.visibility = 'hidden'
  elAbout.style.display = 'none'
  elContact.style.display = 'none'
}

// BUKA KONTEN about, sembunyikan konten lain
const about = () => {
  elIntro.style.visibility = 'hidden'
  elAbout.style.visibility = 'visible'
  elContact.style.visibility = 'hidden'
  elIntro.style.display = 'none'
  elAbout.style.display = 'block'
  elContact.style.display = 'none'
}

// BUKA KONTEN contact, sembunyikan konten lain
const contact = () => {
  elIntro.style.visibility = 'hidden'
  elAbout.style.visibility = 'hidden'
  elContact.style.visibility = 'visible'
  elIntro.style.display = 'none'
  elAbout.style.display = 'none'
  elContact.style.display = 'block'
}


const darkMode = () => {
  if(defaultMode === "light") {
    defaultMode = "dark"
    darkModeLabel.innerHTML = "🌙"
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  } else {
    defaultMode = "light"
    darkModeLabel.innerHTML = "☀️"
    // document.body.style.backgroundColor = "rgb(255, 243, 228)"
    document.body.style.backgroundColor = "#FEFCF3"
    document.body.style.color = "rgb(93, 93, 93)"
  }
}

intro() // halaman pertamakali dibuka