import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { NavProps } from '@interface/nav.interface';
import { useState } from 'react';

export const NavbarDefault: React.FC<NavProps> = ({
  linkActive,
  setLinkActive,
}) => {
  const menuItems = [
    {
      label: 'Home',
      url: '#home',
      key: 'home',
    },
    {
      label: 'About',
      url: '#about',
      key: 'about',
    },
    {
      label: 'Resume',
      url: '#resume',
      key: 'resume',
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const changeActiveLink = (activeLink: string) => {
    if (setLinkActive) setLinkActive(activeLink);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const menuItemsElements = menuItems.map((item) => (
    <NavbarItem key={item.key}>
      <Link
        onClick={() => changeActiveLink(item.key)}
        className={`dark:text-boston-blue-100 text-boston-blue-900 text-1xl 
        tracking-[.15em]  
        cursor-pointer px-3 rounded-md ${
          linkActive === item.key ? 'border-active-link' : ''
        }`}
        href={item.url}
      >
        {item.label}
      </Link>
    </NavbarItem>
  ));

  return (
    <Navbar
      className='navbar-default dark:bg-black bg-white-alpha shadow-none'
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent className='sm:hidden'>
        <NavbarMenuToggle
          icon={
            isMenuOpen ? (
              <span
                className='icon-[material-symbols-light--close-rounded] 
                text-2xl dark:text-boston-blue-100
                text-boston-blue-700'
              ></span>
            ) : (
              <span
                className='icon-[tabler--menu] 
                text-2xl 
                dark:text-boston-blue-100
                text-boston-blue-700'
              ></span>
            )
          }
        />
      </NavbarContent>
      <NavbarContent
        className={`hidden sm:flex gap-4 font-default font-semibold`}
        justify='center'
      >
        {menuItemsElements}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='h-6 w-6 flex cursor-pointer'>
          {theme === 'light' ? (
            <button onClick={() => setTheme('dark')}>
              <span className='icon-[icon-park-solid--dark-mode] h-6 w-6 dark:text-boston-blue-100 text-boston-blue-900'></span>
            </button>
          ) : (
            <button onClick={() => setTheme('light')}>
              <span className='icon-[material-symbols-light--dark-mode-rounded] h-6 w-6 dark:text-boston-blue-100 text-boston-blue-900'></span>
            </button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.key}-${index}`}>
            <Link
              onClick={() => changeActiveLink(item.key)}
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className={`w-full dark:text-boston-blue-100 text-boston-blue-900 ${
                linkActive === item.key
                  ? 'dark:text-boston-blue-100 text-boston-blue-900'
                  : 'dark:text-boston-blue-500 text-boston-blue-500'
              }`}
              href={item.url}
              size='lg'
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
