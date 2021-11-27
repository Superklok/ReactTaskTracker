import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
	const onClick = (e) => {
		console.log('Click', e);
	}

	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button 
				color='#F84AA7' 
				text='Add' 
				onClick={onClick} 
			/>
		</header>
	);
}

Header.defaultProps = {
	title: 'React Task Tracker',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header;