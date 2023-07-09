import { Menu, Button, Text } from '@mantine/core';
import { FC } from 'react';
import PropTypes, { menuItemType } from './types';
import NextLink from '../NextLink';

const MenuItem: FC<menuItemType> = ({ icon, link, rightSection, label }) => (
  <Menu.Item icon={icon} rightSection={rightSection}>
    <NextLink href={link}>
      <Text>{label}</Text>
    </NextLink>
  </Menu.Item>
);

const CustomMenu: FC<PropTypes> = ({ label, menuSections }) => (
  <Menu shadow="md" width={200}>
    <Menu.Target>
      <Button>{label}</Button>
    </Menu.Target>

    <Menu.Dropdown>
      {menuSections.map((menuSection) => (
        <div key={`${menuSection.label}-menu-section`}>
          <Menu.Label>{menuSection.label}</Menu.Label>
          {menuSection.menuItems.map((menuItem) => (
            <MenuItem {...menuItem} key={`${menuItem.label}-menu-item`} />
          ))}
        </div>
      ))}
    </Menu.Dropdown>
  </Menu>
);

export default CustomMenu;
