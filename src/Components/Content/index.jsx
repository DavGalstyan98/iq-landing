import React from "react";
import {Box} from "@material-ui/core";

function Content () {
  return (

    <Box bgcolor="#222222" mt={10} position="relative" minHeight={1100} zIndex={8}>
      <Box display="flex" flexDirection="column" alignItems="center" position="relative" zIndex={10}>
        <Box component="span" fontSize={50} color="#E1D3C1" fontWeight="normal">
          Лучшие инструменты для лучших результатов
        </Box>
        <Box component="span" lineHeight="170%" fontSize={26} color="rgba(225, 211, 193, 0.87)" maxWidth={976} fontWeight={300} my={5.2}>
          Мощные и функциональные инструменты помогут Вам <br/> достичь своих целей и вдохновить учеников на обучение
        </Box>
      </Box>
      <Box position="absolute" top={0} >
        <Box position="relative" >
          <Box component="img" src="/background1.png" position="absolute" top={30} />
          <Box component="img" src="/addContent.png" position="absolute" top={224} right={180}/>
          <Box component="img" src="/screenShot.png" position="absolute" top={322} right={180}/>
          <Box component="img" src="/navigation.png" position="absolute" top={772} left={0}/>
          <Box component="img" src="/navigation.png" position="absolute" top={772} left={0}/>
          <Box component="img" src="/Vector1.svg" position="absolute" top={190} left={500}/>
          <Box component="img" src="/Vector2.svg" position="absolute" right={400} top={1120}/>
          <Box position="absolute" top={300} left={80} color="#E1D3C1" className="constructorTest">
            <Box position="absolute" left={-40} top={-80} component="img" src="/constructorBackground.png"/>
            <Box position="relative" zIndex={10}>
              <Box component="span" fontSize={20} fontWeight={500}>Удобный конструктор уроков и тестов</Box>
              <Box mt={2} fontSize={20} fontWeight={300} maxWidth={400}>Собирайте Ваш курс с помощью потрясающих виджетов. Без программистов и дизайнеров, полностью самостоятельно, как на сайте, так и с телефона. Все работает действительно понятно и удобно</Box>
            </Box>
          </Box>
          <Box component="img" src="/background2.png" />
        </Box>
      </Box>
    </Box>
  )
}

export default Content;
