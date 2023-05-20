import { Link } from "react-router-dom";
import './header.scss';

// components
import IconLogo from '../../assets/icons/IconLogo';

const Header = ({ navigation, menuOpen, onToggle }) => {
	return (
		<header className="header">
			<div className="header__inner">
				<a 
					className="header__logo"
					href="/"
				>
					<span className="sr-only">Logo</span>
					<div className="header__logo-icon">
						<IconLogo />
					</div>
				</a>
				<button
					onClick={onToggle}
					className={`header__toggle ${menuOpen ? 'is-open' : ''}`}
				>
					<span className="sr-only">Toggle Mobile Menu</span>
				</button>
				<nav className={`header__nav ${menuOpen ? 'is-open' : ''}`}>
					<ul className="header__nav-list">
						{navigation.map(item => (
							<li key={item.text} className="header__nav-item">
								<Link
									to={item.href}
									target={item.target}
									className="header__nav-link"
								>
									{item.text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header;