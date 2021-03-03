import React from 'react';
import { Box } from '@material-ui/core';

function Content({ secondRef }) {
  return (
    <Box
      bgcolor="#222222"
      mt={10}
      position="relative"
      display="flex"
      justifyContent="center"
      zIndex={8}
      width={1}
      ref={secondRef}
      style={{
        background: 'url(/bg-1.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      maxWidth={1800}
    >
      <Box
        component="img"
        src="/bg-1.svg"
        width={1}
        style={{ opacity: 0 }}
        maxWidth={1800}
      />
      <Box
        position="absolute"
        top={200}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          maxWidth={1}
          mb={4.5}
          height={0.13}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
        >
          <Box fontSize={50} fontWeight={400} color="#E1D3C1" mb={6}>
            Лучшие инструменты для лучших результатов
          </Box>
          <Box fontSize={36} fontWeight={300} color="#E1D3C1">
            Мощные и функциональные инструменты помогут <br /> Вам достичь своих
            целей и вдохновить учеников на обучение
          </Box>
        </Box>
        <Box position="absolute" width={0.85} maxWidth={1800} mt="15%">
          <Box component="img" maxWidth={1} src="/bg-1-content.svg" width={1} />
          <Box position="absolute" top={0} left={0} maxWidth={0.8}>
            <Box component="img" src="/bg-1-text.svg" width={1} />
            <Box position="absolute" top="25%" ml="5%" width={0.4}>
              <Box fontSize={20} fontWeight={500} color="#E1D3C1" mb={3}>
                Удобный конструктор уроков и тестов
              </Box>
              <Box fontSize={20} fontWeight={300} color="#E1D3C1">
                Собирайте Ваш курс с помощью потрясающих виджетов. Без
                программистов и дизайнеров, полностью самостоятельно, как на
                сайте, так и с телефона. Все работает действительно понятно и
                удобно
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Content;
