import React from 'react'

import Navbar from '../components/Navbar'
import MenuCss from '../components/MenuCss'

const LayoutCss = ({ children }) => {
    return <>
        <header>
            <Navbar />
        </header>

        <aside className="aside aside-fixed bg-blue-300 pt-20">
            <MenuCss />
        </aside>

        <main className="container-aside pt-20">
            { children }
        </main>
        
        <footer className="txt-center mt-50 txt-size-11 ptb-50 bg-green txt-white-100">
            <div>Tous droits réservés &copy; 2021 <a href='https://overconsulting.net' rel="noreferrer" target="_blank">overconsulting.net</a></div>
        </footer>
    </>
}

export default LayoutCss
