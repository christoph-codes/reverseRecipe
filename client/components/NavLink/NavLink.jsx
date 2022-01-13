import Link from 'next/link';
import { useRouter } from 'next/router';
import { string, bool } from 'prop-types';
import styles from './NavLink.module.scss';

const NavLink = ({
	className,
	href,
	exact,
	children,
	activeClass,
	...rest
}) => {
	const { pathname } = useRouter();
	const isActive = exact ? pathname === href : pathname.startsWith(href);
	return (
		<Link href={href} className={styles.NavLink}>
			<a
				className={`${className} ${
					isActive && activeClass ? activeClass : ''
				}`}
				{...rest}
			>
				{children}
			</a>
		</Link>
	);
};

export default NavLink;

NavLink.propTypes = {
	href: string.isRequired,
	className: string,
	exact: bool,
};

NavLink.defaultProps = {
	exact: false,
	className: '',
};
