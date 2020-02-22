import React from 'react';
import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
  mobile: 0,
  tablet: 768,
  desktop: 1023,
})

export const OnMobile = layout.is('mobile');
export const OnAtLeastTablet = layout.isAtLeast('tablet');
export const OnDesktop = layout.is('desktop');
