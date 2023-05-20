import { createContext, useState } from 'react';

const AppContext = createContext();

const Provider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		console.log('toggling');
		setMenuOpen(!menuOpen);
	}

	const values = {
		menuOpen,
		toggleMenu
	}

	return (
		<AppContext.Provider value={values}>
			{children}
		</AppContext.Provider>
	)
}

export { Provider };
export default AppContext;