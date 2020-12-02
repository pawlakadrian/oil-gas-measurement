import './Header.scss';
import logo from './gas-pump.svg';

function Header() {
    return (
        <div className='header'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>App for oil & gas measurement</h1>
        </div>
    );
}

export default Header;

