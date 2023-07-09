import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'LN'
  },
  {
    name: 'Twhinh200120',
    url: '/ln/twhinh200120',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Twhinh204120',
    url: '/ln/twhinh204120',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Twhinh220120',
    url: '/ln/twhinh220120',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    title: true,
    name: 'SCANTECH'
  },
  {
    name: 'Products',
    url: '/scantech/products',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Movements',
    url: '/scantech/movements',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Accounts',
    url: '/scantech/accounts',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  }
];
