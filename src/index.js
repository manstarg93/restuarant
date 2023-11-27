import { Home } from './home/home'
import { Nav } from './nav/nav'

import './styles.css'

const content = document.querySelector('#content')

const main = document.createElement('div')
main.appendChild(Home())



content.appendChild(Nav(main))
content.appendChild(main)