import './styles.css'
import Logo from '../../assets/images'
export default function Header() {
    return(
        <header>
            <div className="logo-container">
                <img src="" alt="Logo da Companhia" />
            </div>
            <nav>
                <a href="">Link One</a>
                <a href="">Link Two</a>
                <a href="">Link Three</a>
                <a href="">Link Four</a>
            </nav>
        </header>
    );
}