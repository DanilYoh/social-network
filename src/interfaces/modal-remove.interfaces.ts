export interface IModalRemoveProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: (id: number) => Promise<void>;
  textBody?: string;
  itemOnDelete: number;
}
