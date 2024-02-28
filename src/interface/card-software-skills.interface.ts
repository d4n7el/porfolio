import { ReactElement } from 'react';

export interface SkillsCardProps {
  icon?: ReactElement;
  label?: string;
  description?: string;
  labelBody?: string;
  dataBody?: {
    [key: string]: string;
  };
}
