import React from 'react';

export interface SlideProps {
  title: string;
  subtitle: string;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  Component: React.ComponentType<SlideProps>;
}
