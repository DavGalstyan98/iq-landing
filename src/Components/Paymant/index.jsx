import React from "react";
import Notifications from "../Notifications";
import {Box} from "@material-ui/core";

function Paymant () {
  return (
    <Box bgcolor="#222222" position="relative" minHeight={1300} zIndex={3}>
      <Box position="absolute" top={0} >
        <Box position="relative" >
          <Box component="img" src="/background11.png" position="absolute" top={110} />
          <Box position="absolute" top={330} left={844} color="#E1D3C1" className="constructorTest" zIndex={4}>
            <Box position="absolute" right={-60} top={-100} component="img" src="/optionBackground.png"/>
            <Box position="relative" zIndex={10} width={400}>
              <Box component="span" fontSize={20} maxWidth={342} fontWeight={500}>Гибкие параметры доступа и оплаты</Box>
              <Box mt={2} fontSize={20} fontWeight={300} maxWidth={387}>Определяйте формат доступа к Вашим курсам, самостоятельно определяйте цены за обучение</Box>
            </Box>
          </Box>
          <Box component="img" src="/coursePay.png" position="absolute" top={250} left={16}/>
          <Box component="img" src="/createPage.png" position="absolute" top={622} left={500}/>
          <Box component="img" src="/background12.png" position="relative" top={-200} zIndex={-1}/>
          <Box component="img" src="/Vector7.svg" position="absolute" left={200} top={1238} zIndex={2}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Paymant;