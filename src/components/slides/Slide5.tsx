import React from 'react';
import { Landmark } from 'lucide-react';
import { IconBadge } from '../ui/Layout';
import { SlideProps } from '../../types';

export const Slide5: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
      <IconBadge icon={Landmark} label="UBA Prepaid" />
      <IconBadge icon={Landmark} label="Equity Visa" />
      <IconBadge icon={Landmark} label="Rawbank Click" />
      <IconBadge icon={Landmark} label="Illicocash" />
    </div>
  );
};
