import { Contact } from '../contact'
import { Home } from '../home/home'

import { Menu } from '../menu'
import './nav.css'

export const Nav = (main) => {

    const navItems = [
        {id: 1, link: 'home', title: 'Home'},
         {id: 2, link: 'menu', title: 'Menu'},
          {id: 3, link: 'contact', title: 'Contact'}
    ]
  
    const header = document.createElement('div')
    header.setAttribute('class', 'header')
 
    const navContainer = document.createElement('ul')
    navContainer.setAttribute('class', 'nav')

    const navItem = navItems.map(nav =>{
        const navList = document.createElement('li')
        navList.setAttribute('class', 'navList')

        const navLink = document.createElement('a')
        navLink.setAttribute('class', 'navLink')

        navLink.textContent = nav.title

        navLink.addEventListener('click', ()=> {

            switch (nav.link) {
                case 'home':
                    removeAllChildNodes(main)
                    main.appendChild(Home())
                    break;
                    case 'menu':
                    removeAllChildNodes(main)
                    main.appendChild(Menu())
                    break;
                    case 'contact':
                    removeAllChildNodes(main)
                    main.appendChild(Contact())
                    break;
            
                default:
                    removeAllChildNodes(main)
                    main.appendChild(Home())
            }
        })

        navList.appendChild(navLink)
        
        navContainer.appendChild(navList)

        return navContainer
    })

    header.appendChild(navContainer)
    return header
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
