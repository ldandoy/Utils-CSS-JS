import React from 'react'

import Navbar from '../components/Navbar'
import MenuCss from '../components/MenuCss'

const LayoutCss = ({ children, withAside = true }) => {
    return <>
        <header>
            <Navbar />
        </header>
        { withAside &&
            <aside className="aside aside-fixed h-100">
                <MenuCss />
            </aside>
        }

        <main className={`${ withAside ? 'container-aside' : ''} pt-20`}>
            { children }
        </main>
        
        <footer className="txt-center mt-50 txt-size-11 ptb-50 bg-green">
            <div>Tous droits réservés &copy; 2021-2022 <a href='https://overconsulting.net' rel="noreferrer" className="txt-green-900" target="_blank">overconsulting.net</a></div>
        </footer>
    </>
}

export default LayoutCss
