import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

interface ILink {
  id: string;
  label: string;
  path: string;
  isActive: boolean;
};

interface IListProps {
  items: ILink[];
}

const List:React.FC<IListProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {
        items.map(({ id, label, path, isActive }) => {
          return (
            <li 
              className={styles.listItem} 
              key={id}
            >
              <NavLink 
                className={styles.link}
                activeClassName={'active-nav-link'}
                to={path}
              >
                {label}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  )
};

const Navbar: React.FC = () => {
  const [links, setLinks] = useState<ILink[]>([
    {
      id: Math.random().toString(),
      label: 'Экспресс прогнозы',
      path: '/express-forecasts',
      isActive: false
    },
    {
      id: Math.random().toString(),
      label: 'ЧМ Австрии',
      path: '/wc-austria',
      isActive: true
    },
    {
      id: Math.random().toString(),
      label: 'ЧМ Польшы',
      path: '/wc-poland',
      isActive: false
    },
    {
      id: Math.random().toString(),
      label: 'ЧМ России',
      path: '/wc-russia',
      isActive: false
    },
    {
      id: Math.random().toString(),
      label: 'ЧМ Украины',
      path: '/wc-ukraine',
      isActive: false
    },
    {
      id: Math.random().toString(),
      label: 'ЧМ Бразилии',
      path: '/wc-brazil',
      isActive: false
    }
  ]);
  
  return (
    <nav>
      <List items={links} />
    </nav>    
  )
}

export default Navbar;
