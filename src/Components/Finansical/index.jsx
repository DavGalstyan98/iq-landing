import React from "react";
import Messanger from "../Messanger";
import {Box} from "@material-ui/core";

function Finansical() {
  return (
    <Box bgcolor="#222222" position="relative" minHeight={1350} zIndex={5}>
      <Box position="absolute" top={0}>
        <Box position="relative">
          <Box component="img" src="/background7.png" position="absolute" top={110}/>
          <Box position="absolute" top={440} right={200} color="#E1D3C1" className="constructorTest" zIndex={4}>
            <Box position="absolute" right={-50} top={-80} component="img" src="/payBackground.png"/>
            <Box position="relative" zIndex={10} width={400}>
              <Box component="span" fontSize={20} maxWidth={342} fontWeight={500}>Управление учениками и контроль
                прогресса обучения</Box>
              <Box mt={2} fontSize={20} fontWeight={300} maxWidth={382}>Отвечайте на вопросы учеников, беспокоить смогут
                только платные студенты</Box>
            </Box>
          </Box>
          <Box component="img" src="/finans.png" position="absolute" top={354} left={0}/>
          <Box component="img" src="/price.png" position="absolute" top={770} left={440}/>
          <Box component="img" src="/Vector5.png" position="absolute" left={240} top={1378}/>
          <Box component="img" src="/background8.png" position="relative" top={-200} zIndex={-1}/>
        </Box>
      </Box>
    </Box>)
}

export default Finansical;
