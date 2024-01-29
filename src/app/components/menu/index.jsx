'use client'
import { useState } from 'react'
import './style.css'

const Menu = () => {
    const [menulateral, setMenuLateral] = useState(false)
    return(
    <>
        <nav className='menu'>
            <button onClick={() => setMenuLateral(!menulateral)}>menu</button>
            <div>logo</div>
            <button>login</button>
        </nav>

        {menulateral && 
                <div className="menu_lateral">
                <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                </ul>
            </div>}
    </>
    )
}
export default Menu