import { ReactElement } from 'react';

export interface TimeLineProps {
  title: string;
  subtitle?: string;
  content?: string;
  htmlContent?: ReactElement;
  icon?: ReactElement;
  initialDate: string;
  finalDate?: string;
}
