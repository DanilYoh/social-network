interface NavigateButtonProp {
  name: string;
  path: string;
}
export interface IDropDownProps {
  onDeleteClick?: () => void;
  onEditClick?: () => void;
  onNavigateClick?: () => void;
  edit?: string;
  remove?: string;
  navigateParams?: string;
  navigateButtons?: NavigateButtonProp[];
}

export interface IDropDownPropsFlights {
  onDeleteClick: (id: number) => void;
  onEditClick: (id: number) => void;
  id: number;
}

export interface IDropdownMenuDestination {
  id: number;
  onDeleteClick: (id: number) => void;
  onEditClick?: (id: number) => void;
  onNavigateClick?: () => void;
  edit?: string;
  remove?: string;
  navigateParams?: string;
  navigateButtons?: NavigateButtonProp[];
}
