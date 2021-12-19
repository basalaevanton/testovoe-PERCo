import React, { useEffect, useState } from "react";
import axios from "axios";
import { withLayout } from "../layout/Layout";
import { ImageInterface } from "../interfaces/Image.interface";
import { Gallery, ModalComponent } from "../components";
import {
  Box,
  CircularProgress,
  ImageList,
  ImageListItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import { ModalInterface } from "../interfaces/Modal.interface";

const Start = () => {
  const [images, setImages] = useState<ImageInterface[]>([]);
  const [load, setLoading] = useState<boolean>(false);

  const [modal, setModal] = useState<ModalInterface>({
    open: false,
    download_url: "",
    like: false,
  });
  const handleOpen = (src: string) => {
    setModal({ ...modal, open: true, download_url: src });
  };
  const handleClose = () =>
    setModal({ open: false, download_url: "", like: false });

  const setLike = () => {
    setModal({ ...modal, like: !modal.like });
  };

  const data = async (page = 1, limit = 10) => {
    try {
      setLoading(true);

      const response = await axios.get("https://picsum.photos/v2/list", {
        params: { _page: page, _limit: limit },
      });

      setImages(response.data);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  if (load) {
    return <CircularProgress color="secondary" size={150} />;
  }

  return (
    <>
      <ModalComponent
        modal={modal}
        handleClose={handleClose}
        setLike={setLike}
      />

      <Gallery images={images} handleOpen={handleOpen} />
    </>
  );
};

export default withLayout(Start);
