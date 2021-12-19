import React from "react";
import { GalleryProps } from "./Gallery.props";
import {
  Box,
  CircularProgress,
  ImageList,
  ImageListItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { ImageInterface } from "../../interfaces/Image.interface";

export const Gallery = ({
  images,
  handleOpen,
  ...props
}: GalleryProps): JSX.Element => {
  return (
    <>
      <ImageList variant="woven" cols={3} gap={8} sx={{ p: 2 }}>
        {images.map((item: ImageInterface) => (
          <ImageListItem
            key={item.id}
            onClick={() => handleOpen(item.download_url)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={`${item.download_url}?w=161&fit=crop&auto=format`}
              srcSet={`${item.download_url}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.author}
              loading="lazy"
              style={{ borderRadius: "5px" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
