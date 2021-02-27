import React from "react";
import Finansical from "../Finansical";
import {Box} from "@material-ui/core";

function Notifications () {
  return (
    <Box bgcolor="#222222" position="relative" minHeight={1450} zIndex={4}>
      <Box position="absolute" top={0} >
        <Box position="relative" >
          <Box component="img" src="/background9.png" position="absolute" top={110} />
          <Box position="absolute" top={380} left={200} color="#E1D3C1" className="constructorTest" zIndex={4}>
            <Box position="absolute" right={-50} top={-80} component="img" src="/pushBackground.png"/>
            <Box position="relative" zIndex={10} width={400}>
              <Box component="span" fontSize={20} maxWidth={342} fontWeight={500}>Push уведомления и рассылки</Box>
              <Box mt={2} fontSize={20} fontWeight={300} maxWidth={387}>Осуществляйте промо акции, уведомляйте учеников о новых материалах. Стимулируйте подписчиков покупать Ваши курсы</Box>
            </Box>
          </Box>
          <Box component="img" src="/nav.png" position="absolute" top={556} left={270} zIndex={1}/>
          <Box component="img" src="/notification.png" position="absolute" top={250} right={58}/>
          <Box component="img" src="/settings.png" position="absolute" top={836} left={60} zIndex={2}/>
          <Box component="img" src="/background10.png" position="relative" top={-220} zIndex={-1}/>
          <Box component="img" src="/Vector6.svg" position="absolute" left={728} top={1418} zIndex={2}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Notifications;