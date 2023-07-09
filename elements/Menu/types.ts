export type menuItemType = {
  label: string;
  link: string;
  icon?: JSX.Element;
  rightSection?: JSX.Element;
};
type menuSection = { label: string; menuItems: menuItemType[] };

type PropTypes = {
  label: string;
  menuSections: menuSection[];
};

export default PropTypes;
