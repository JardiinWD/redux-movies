import React from 'react'
import './styles/Footer.scss'


const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="footer">
            <div>Movie App</div>
            <div>{year} | &copy; Alessandro Pecorilla</div>
        </div>
    )
}

export default Footer
