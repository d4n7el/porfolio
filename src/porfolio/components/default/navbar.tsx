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
import { VisitCount } from 'src/components/visit-count';
import { useTranslation } from 'react-i18next';
import { SelectLanguage } from '@components/select-languages/select-language';

export const NavbarDefault: React.FC<NavProps> = ({
  linkActive,
  setLinkActive,
}) => {
  const [t] = useTranslation('translation');

  const menuItems = [
    {
      label: t('home'),
      url: '#home',
    },
    {
      label: t('about'),
      url: '#about',
    },
    {
      label: t('resume'),
      url: '#resume',
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeActiveLink = (activeLink: string) => {
    if (setLinkActive) setLinkActive(activeLink);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const menuItemsElements = menuItems.map((item) => (
    <NavbarItem key={item.url}>
      <Link
        onClick={() => changeActiveLink(item.url)}
        className={`dark:text-boston-blue-100 text-boston-blue-900 text-1xl 
        tracking-[.15em]  
        cursor-pointer px-3 rounded-md ${
          linkActive === item.url ? 'border-active-link' : ''
        }`}
        href={item.url}
      >
        {item.label}
      </Link>
    </NavbarItem>
  ));

  return (
    <Navbar
      className='navbar-default dark:bg-black-alpha-8  bg-white-alpha-light  shadow-none fixed'
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent className='sm:hidden'>
        <NavbarMenuToggle
          icon={
            isMenuOpen ? (
              <span
                className='icon-[iconamoon--close] text-2xl dark:text-boston-blue-100
              text-boston-blue-700 animate-expand-horizontally'
              ></span>
            ) : (
              <span
                className='icon-[tabler--menu] 
                text-2xl 
                dark:text-boston-blue-100
                text-boston-blue-700 animate-expand-vertically'
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
          {theme === 'dark' ? (
            <button aria-label='theme-dark' onClick={() => setTheme('light')}>
              <span
                className='icon-[icon-park-solid--dark-mode]
                h-6 w-6 dark:text-boston-blue-100
                text-boston-blue-900
                animate-spin-clockwise'
              ></span>
            </button>
          ) : (
            <button aria-label='theme-light' onClick={() => setTheme('dark')}>
              <span
                className='icon-[tdesign--mode-dark]
                h-6 w-6 dark:text-boston-blue-100 text-boston-blue-900
                animate-spin-counter-clockwise'
              ></span>
            </button>
          )}
        </NavbarItem>
        <SelectLanguage></SelectLanguage>
        <VisitCount></VisitCount>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item.url}`}>
            <Link
              onClick={() => changeActiveLink(item.url)}
              className={`w-full dark:text-boston-blue-100 text-boston-blue-900 ${
                linkActive === item.url
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
