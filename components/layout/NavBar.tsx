import Link from 'next/link'


const NavBar = () => {
  return (
    <nav className='w-full px-5 py-2'>
        <div className='logo '>
            Learn
        </div>
        <div className='nav-link flex'>
            <Link href={'/dashboard/users'}>Users</Link>
        </div>
    </nav>
  )
}

export default NavBar