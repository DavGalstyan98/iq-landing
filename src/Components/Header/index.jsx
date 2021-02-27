import React from "react";
import {Box} from "@material-ui/core";

function Header () {
  return (
    <Box width={1} display='flex' alignItems="center" justifyContent='space-around' height={100}>
      <Box style={{cursor: "pointer"}}>
        <Box component="img" src="/logo.svg"/>
      </Box>
      <Box display='flex' justifyContent="space-between" width={0.5} color="rgba(225, 211, 193, 0.87)" fontSize={20} fontWeight={300}>
        <Box style={{cursor:"pointer"}}>О проекте</Box><Box style={{cursor:"pointer"}}>Услуги</Box><Box style={{cursor:"pointer"}}>Цены</Box><Box style={{cursor:"pointer"}}>Контакты</Box>
      </Box>
    </Box>
  )
}

export default Header
