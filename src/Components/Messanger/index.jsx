import React from "react";
import ControlUsers from "../ControlUsers";
import {Box} from "@material-ui/core";

function Messanger () {
  return (
    <Box bgcolor="#222222" position="relative" minHeight={1500} zIndex={6}>
      <Box position="absolute" top={0} >
        <Box position="relative" >
          <Box component="img" src="/background5.png" position="absolute" top={110} />
          <Box position="absolute" top={300} left={200} color="#E1D3C1" className="constructorTest" zIndex={2}>
            <Box position="absolute" right={-50} top={-80} component="img" src="/manegerBackground.png"/>
            <Box position="relative" zIndex={10} width={400}>
              <Box component="span" fontSize={20} maxWidth={342} fontWeight={500}>Собственный мессенджер</Box>
              <Box mt={2} fontSize={20} fontWeight={300} maxWidth={444}>Все ученики на одном экране. Выявляйте отличников! Назначайте себе администраторов, предоставляя им доступ к управлению Вашими курсами и партнеров, давая им возможность продвигать Ваши продукты</Box>
            </Box>
          </Box>
          <Box component="img" src="/chat.png" position="absolute" right={86} top={240}/>
          <Box component="img" src="/download.png" position="absolute" top={650} left={20}/>
          <Box component="img" src="/message.png" position="absolute" top={1050} left={250}/>
          <Box component="img" src="/Vector4.svg" position="absolute" left={1000} top={1650}/>
          <Box component="img" src="/background6.png" />
        </Box>
      </Box>
    </Box>
  )
}

export default Messanger;
