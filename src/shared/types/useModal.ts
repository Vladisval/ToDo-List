import { useState } from "react";

export interface ModalProps {
  isOpen: boolean;
}
export const useModal = (isOpened: boolean) => {
  const [isOpen, setIsOpen] = useState(isOpened);
  setIsOpen((prevState) => !prevState);

  return isOpen;
};
