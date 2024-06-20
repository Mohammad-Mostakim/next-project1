"use client"

import { useEffect, useState } from "react";
import { useScrollTrigger, Zoom, Fab,styled } from "@mui/material";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollTopButton = styled('div')({
  position: 'fixed',
  bottom: 8,
  right: 8,
  zIndex: 1200,
  backgroundColor:"customBg.button"
});
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  useEffect(() => {
    setIsVisible(trigger);
  }, [trigger]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={isVisible}>
      <ScrollTopButton
        onClick={scrollToTop}
        role="presentation"
      >
        <Fab color="primary" size="medium" aria-label="scroll back to top">
          <MdKeyboardArrowUp />
        </Fab>
      </ScrollTopButton>
    </Zoom>
  );
}
