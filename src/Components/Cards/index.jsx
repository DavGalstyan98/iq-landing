import React from "react";
import { Box } from "@material-ui/core";

function Card({ title, iconSrc, description }) {
  return (
    <Box
      width={220}
      height={294}
      className="card"
      borderRadius={20}
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={3}
      px={2}
      style={{ cursor: "pointer" }}
    >
      <Box component="span" fontSize={20} fontWeight={500} color="#E1D3C1">
        {title}
      </Box>
      <Box component="img" src={iconSrc} mt={2.3} />
      <Box
        component="span"
        mt={2.3}
        fontSize={20}
        fontWeight={300}
        color="#E1D3C1"
      >
        {description}
      </Box>
    </Box>
  );
}

export default Card;
