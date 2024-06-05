import background from './images/bg-header-desktop.svg'
import backgroundMobile from './images/bg-header-mobile.svg'
import './header.css'
export default function Header() {
    return (
        <header>
            <picture>
                <source media='(max-width: 35em)' srcSet={backgroundMobile} />
                <source media='(min-width: 35em)' srcSet={background} />
                <img src={background} alt="fond géométrique cyan foncé" />
            </picture> 
        </header> 
    )
}