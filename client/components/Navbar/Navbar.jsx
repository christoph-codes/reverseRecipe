import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Col from '../Col';
import Row from '../Row';
import Container from '../Container';
import NavLink from '../NavLink';
import styles from './Navbar.module.scss';

const Navbar = ({ props }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const navLinks = [
		{
			label: 'Explore',
			link: '/explore',
		},
		{
			label: 'Support',
			link: '/support',
		},
		{
			label: 'Login',
			link: '/login',
		},
		{
			label: 'Sign Up',
			link: '/signup',
		},
		{
			label: 'Playground',
			link: '/playground',
		},
	];
	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};
	return (
		<div className={`${styles.Navbar} bg-primary text-white`}>
			<Container as={Row}>
				<Col xs="auto" className={styles.NavbarLogo}>
					<Link href="/">
						<a>
							<Image
								src="/rr-logo-light.svg"
								width="234"
								height="48"
								layout="intrinsic"
								alt="Reverse Recipe Logo"
							/>
						</a>
					</Link>
				</Col>
				<Col xs="auto" as="ul" className={styles.NavbarNavigation}>
					{navLinks.map((navLink, index) => {
						return (
							<li
								key={index}
								className={styles.NavbarNavigationLink}
							>
								<NavLink
									activeClass={
										styles.NavbarNavigationLinkActive
									}
									exact
									href={navLink.link}
								>
									{navLink.label}
								</NavLink>
							</li>
						);
					})}
				</Col>
				<Col className={styles.NavbarHamburger}>
					<button onClick={toggleSidebar}>
						<img src="/hamburger.svg" alt="Hamburger menu" />
					</button>
				</Col>
			</Container>
			<aside
				className={`${styles.NavbarSidebar} ${
					sidebarOpen ? styles.NavbarSidebarOpen : ''
				}`}
			>
				<button onClick={() => setSidebarOpen(!sidebarOpen)}>
					<img src="/close.svg" alt="Close menu" />
				</button>
				<ul className={styles.NavbarSidebarNavigation}>
					{navLinks.map((navLink, index) => {
						return (
							<li
								key={index}
								className={styles.NavbarSidebarNavigationLink}
							>
								<NavLink
									activeClass={
										styles.NavbarSidebarNavigationLinkActive
									}
									exact
									href={navLink.link}
								>
									{navLink.label}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</aside>
		</div>
	);
};

export default Navbar;
