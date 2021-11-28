import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const Footer = () => {
	const location = useLocation();

	return (
		<footer>
			<p className='copyright'>&copy; 2021 Superklok Labs</p>
			{location.pathname === '/' && 
				<Link to='/guide'>User Guide</Link>}
			{location.pathname === '/guide' && 
				<Link to='/'>Return</Link>}
		</footer>
	);
}

export default Footer;