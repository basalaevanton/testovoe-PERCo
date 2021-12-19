import { ModalInterface } from "../../interfaces/Modal.interface";

export interface ModalProps {
  modal: ModalInterface;
  handleClose: () => void;
  setLike: () => void;
}
