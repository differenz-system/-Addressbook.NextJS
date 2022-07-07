import Image from 'next/image';
import { useRouter } from 'next/router';

// third party packages
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// enums
import { ROUTES } from '../../lib/enums';
import { logout } from '../../redux/actions/authActions';

// css|styled component
import {
	Navbar,
	LogoContainer,
	LogoText,
	LogoSubText,
	NavLinkContainer
} from './Header.style';
import NavLink from '../navItem';
import { NavLink as NavItem } from '../ui';

const Header = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const isLogin = useSelector(state => state.auth.isLogin);

	return (
		<Navbar>
			<nav className="mx-auto">
				<LogoContainer onClick={() => router.push(ROUTES.home)}>
					<Image src="/address-book-logo.png" alt="@ logo" width="48" height="48" />

					<div className="logo-text-container">
						<LogoText>Address Book</LogoText>
						<LogoSubText>Powered by Next.JS</LogoSubText>
					</div>
				</LogoContainer>

				<NavLinkContainer>
					<NavLink
						href={ROUTES.home}
						title={`Home`}
						isShow={() => true}
					/>

					<NavLink
						href={ROUTES.addressBook}
						title={`Address book`}
						isShow={() => isLogin}
					/>

					<NavLink
						href={ROUTES.login}
						title={`Login`}
						isShow={() => !isLogin}
					/>

					{isLogin &&
						<NavItem onClick={() => dispatch(logout())}>
							Logout
						</NavItem>
					}
				</NavLinkContainer>
			</nav>
		</Navbar>
	)
}

export default Header