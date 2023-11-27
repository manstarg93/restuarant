
import RestaurantImage from '../img/restaurant.jpg'
import './home.css'
export const Home = () => {

  

   const home = document.createElement('section')

   const banner = document.createElement('div')
   banner.setAttribute('class', 'banner')
   banner.style.backgroundImage = `url(${RestaurantImage})`

   const bannerBackdrop = document.createElement('div')
   bannerBackdrop.setAttribute('class', 'bannerBackDrop')
   const bannerHeading = document.createElement('h1')
   bannerHeading.textContent = 'Noms Resturante'
   
   const bannerText1 = document.createElement('p')
   bannerText1.textContent = `Noms Resturante has the best pizza! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.
  
   `

    const bannerText2 = document.createElement('p')
   bannerText2.textContent = ` Noms Resturante has the best pizza! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.
   `

   const bannerContentContainer = document.createElement('div')
   bannerContentContainer.setAttribute('class', 'bannerContentContainer')

   bannerContentContainer.appendChild(bannerHeading)
   bannerContentContainer.appendChild(bannerText1)
    bannerContentContainer.appendChild(bannerText2)
 

   bannerBackdrop.appendChild(bannerContentContainer)
   home.appendChild(banner)
   home.appendChild(bannerBackdrop)


   return home
}

