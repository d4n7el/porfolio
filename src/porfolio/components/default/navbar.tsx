import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { useDarkTheme } from '@hooks/use-dark-theme';

export const NavbarDefault = () => {
  const { darkMode, changeTheme } = useDarkTheme();

  return (
    <Navbar className='dark:bg-dark-primary bg-light'>
      <NavbarBrand>
        <p className='font-bold text-inherit'>ACME</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link
            className='dark:text-light text-dark-primary '
            color='foreground'
            href='#'
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className='dark:text-light text-dark-primary'
            href='#'
            aria-current='page'
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className='dark:text-light text-dark-primary'
            color='foreground'
            href='#'
          >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='h-6 w-6 flex cursor-pointer'>
          {darkMode ? (
            <span
              onClick={changeTheme}
              className='icon-[icon-park-solid--dark-mode] h-6 w-6'
            ></span>
          ) : (
            <span
              onClick={changeTheme}
              className='icon-[material-symbols-light--dark-mode-rounded] h-6 w-6'
            ></span>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
