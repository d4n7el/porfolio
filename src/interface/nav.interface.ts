import { Dispatch, SetStateAction } from 'react';

type NavActionProps<S> = Dispatch<SetStateAction<S>>;

export interface NavProps {
  setLinkActive?: NavActionProps<string>;
  linkActive?: string;
  changeActiveLink?: (newActiveLink: string) => void;
}
