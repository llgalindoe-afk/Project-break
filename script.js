const body = document.body
const photos = [
  "./images/backimage1.jpg",
  "./images/backimage2.jpg",
  "./images/backimage3.jpg",
  "./images/backimage4.jpg",
  
]

const changeBackground = () =>{
  const randomNumber = Math.floor(Math.random() * photos.length);
  newBackground = photos[randomNumber]
  body.style.backgroundImage = `url(${newBackground})`;
}


setInterval(() => {
  changeBackground()
}, 15000)

changeBackground()