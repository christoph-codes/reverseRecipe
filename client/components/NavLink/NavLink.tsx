import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavLink.module.scss';

interface IChildren {
	children?: React.ReactNode;
}

interface INavLink extends IChildren {
	className?: string;
	href: string;
	exact?: boolean;
	activeClass?: string;
	rest?: React.HTMLProps<HTMLAnchorElement>;
}

export default function NavLink({
	className,
	href,
	exact,
	children,
	activeClass,
	...rest
}: INavLink): React.ReactNode {
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
