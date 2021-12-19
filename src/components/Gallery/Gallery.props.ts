import { ImageInterface } from "../../interfaces/Image.interface";
import { ModalInterface } from "../../interfaces/Modal.interface";

export interface GalleryProps {
  images: ImageInterface[];
  handleOpen: (src: string) => void;
}
