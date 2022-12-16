export interface IGroupImage {
  description: string;
  group_name: string;
  id: number;
  id_model: number;
  is_main: number;
  key: string;
  marker: string;
  order_image: number;
  original: string;
  resize1: string;
  resize2: string;
  resize3: string;
  text_block1: boolean | string;
  text_block2: boolean | string;
  title: string;
  type: number;
}

export interface MainNavProps {
  vine: MainNavItemProps[];
  batya: MainNavItemProps[];
  isMenu: boolean;
  isRouteFromMenu: {
    vine: boolean;
    batya: boolean;
  };
  routeTo: string;
  scrollTo: string;
}

export interface MainNavItemProps {
  name: string;
  path: string;
}

// export interface IRouteFromMenu {
//   vine: boolean;
//   batya: boolean;
// }
