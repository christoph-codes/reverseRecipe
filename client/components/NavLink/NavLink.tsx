import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavLink.module.scss';

interface INavLink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	children?: JSX.Element | string;
	href: string;
	exact?: boolean;
	activeClass?: string;
}

const NavLink = ({
	className,
	href,
	exact,
	children,
	activeClass,
	...rest
}: INavLink) => {
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
}

export default NavLink;
