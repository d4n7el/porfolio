import { Navbar, NavbarContent, NavbarItem, Link } from '@nextui-org/react';
import { useDarkTheme } from '@hooks/use-dark-theme';
import { useState } from 'react';

export const NavbarDefault = () => {
  const [linkActive, setLinkActive] = useState<string>('resume');
  const { darkMode, changeTheme } = useDarkTheme();

  const changeActiveLink = (activeLink: string) => {
    setLinkActive(activeLink);
  };

  return (
    <Navbar className='navbar-default dark:bg-black bg-white-alpha shadow-2xl shadow-none'>
      <NavbarContent
        className={`hidden sm:flex gap-4 font-default font-semibold`}
        justify='center'
      >
        <NavbarItem>
          <Link
            onClick={() => changeActiveLink('home')}
            className={`dark:text-boston-blue-100 text-boston-blue-900 text-1xl tracking-[.15em] 
            cursor-pointer px-3 rounded-md ${
              linkActive === 'home' ? 'border-active-link' : ''
            }`}
            href='#home'
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            onClick={() => changeActiveLink('about')}
            className={`dark:text-boston-blue-100
             text-boston-blue-900 
              text-1xl tracking-[.15em] 
              cursor-pointer hover:bg-te px-3 rounded-md ${
                linkActive === 'about' ? 'border-active-link' : ''
              }`}
            href='#about'
            aria-current='page'
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => changeActiveLink('resume')}
            className={`dark:text-boston-blue-100 text-boston-blue-900 
            text-1xl tracking-[.15em] 
            cursor-pointer hover:bg-te px-3 rounded-md ${
              linkActive === 'resume' ? 'border-active-link' : ''
            }`}
            href='#resume'
          >
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='h-6 w-6 flex cursor-pointer'>
          {darkMode ? (
            <button onClick={changeTheme}>
              <span className='icon-[icon-park-solid--dark-mode] h-6 w-6 dark:text-boston-blue-100 text-boston-blue-900'></span>
            </button>
          ) : (
            <button onClick={changeTheme}>
              <span className='icon-[material-symbols-light--dark-mode-rounded] h-6 w-6 dark:text-boston-blue-100 text-boston-blue-900'></span>
            </button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
