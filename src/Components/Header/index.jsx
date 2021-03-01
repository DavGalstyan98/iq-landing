import React from "react";
import {Box, duration} from "@material-ui/core";

function Header ({firstRef, secondRef, thirdRef}) {

  function firstScroll () {
    firstRef.current.scrollIntoView({behavior: "smooth"});
  }
  function secondScroll () {
    secondRef.current.scrollIntoView({behavior: "smooth"});
  }
  function thirdScroll () {
    thirdRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <Box width={1} display='flex' alignItems="center" justifyContent='space-around' height={100}>
      <Box style={{cursor: "pointer"}}>
        <Box component="img" src="/logo.svg"/>
      </Box>
      <Box display='flex' justifyContent="space-between" width={0.5} color="rgba(225, 211, 193, 0.87)" fontSize={20} fontWeight={300}>
        <Box style={{cursor:"pointer"}} onClick={firstScroll}>Для кого</Box>
        <Box style={{cursor:"pointer"}} onClick={secondScroll}>Возможности</Box>
        <Box style={{cursor:"pointer"}} onClick={thirdScroll}>Тарифы</Box>
        <Box color="rgb(15, 189, 233)" style={{cursor:"pointer"}} onClick={() => window.location = 'https://app.iq.academy/'}>Начать бесплатно</Box>
      </Box>
    </Box>
  )
}

export default Header
