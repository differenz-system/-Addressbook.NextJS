import Link from 'next/link'
import { useRouter } from 'next/router'

// third party packages
import React from 'react'

// css|styled components
import { NavLink } from '../ui'

const NavbarItem = ({ isShow = () => false, ...props }) => {
  const router = useRouter();

  return (
    <>
      {
        (router.pathname !== props.href && isShow()) &&
        <Link href={props.href} passHref>
          <NavLink>{props.title}</NavLink>
        </Link>
      }
    </>
  )
}

export default NavbarItem