import React from "react";
import {Box} from "@material-ui/core";

function Apple () {
  return(
    <Box bgcolor="#222222" position="relative" minHeight={1300} zIndex={2}>
      <Box position="absolute" top={0} >
        <Box position="relative" >
          <Box component="img" src="/background13.png" position="absolute" top={110} />
          <Box position="absolute" top={200} left={60} color="#E1D3C1" className="iphoneBackground" zIndex={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Box component="span" fontSize={20} maxWidth={329} fontWeight={500}>Собственное приложение для IPhone, IPad, Android</Box>
              <Box mt={2} fontSize={20} fontWeight={300} maxWidth={400}>IQ.Academy доступен на всех платформах - в браузере, а также в мобильных приложениях для Apple и Android. Приложения полностью функциональны как для учеников, так и для преподавателей</Box>
          </Box>
          <Box component="img" src="/apple.png" position="absolute" top={500} left={120}/>
          <Box component="img" src="/background14.png" position="relative" top={-220} zIndex={-1}/>2
        </Box>
      </Box>
    </Box>)
}

export default Apple;
