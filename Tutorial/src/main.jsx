import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createElement } from 'react'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




// createRoot(document.getElementById('root')).render(
//   <>
//     <Page />
//     {/* <MainPage /> */}
//   </>
// )


// function MainPage() {
//   return(
//     <main>
//       <li>I did this myself</li>
//       <li>I did this myself</li>
//       <li>I did this myself</li>
//     </main>
//   )
// }

// function Footer() {
//   return(
//     <footer>
//       <small>This is a small footer text</small>
//     </footer>
//   )
// }

// function Page() {
//   return(
//     <>
//       <header>
//         <img src="./images/t1.png" alt="Image" />
//       </header>
//       <MainPage />
//       <Footer />
      
//     </>
//   )
// }


// const h1Element = document.createElement('h1');
// h1Element.textContent = 'It is a happy day learning react';
// h1Element.classList.add('header');
// document.getElementById('root').appendChild(h1Element)

// imperative: give specific step-by-step instructions
// declarative: simply describe and let the program do his job.
// a react component is a function that returns a react element.