import React from 'react';
import { Box } from '@material-ui/core';

function Finansical() {
  return (
    <Box
      bgcolor="#222222"
      mt={-30}
      position="relative"
      display="flex"
      justifyContent="center"
      zIndex={0}
      width={1}
      style={{
        background: 'url(/bg-4.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      maxWidth={1800}
    >
      <Box
        component="img"
        src="/bg-4.svg"
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
          position="absolute"
          width={0.85}
          maxWidth={1800}
          mt="15%"
          zIndex={100}
        >
          <Box component="img" maxWidth={1} src="/bg-4-content.svg" width={1} />
          <Box position="absolute" top="-25%" right={0} maxWidth={0.46}>
            <Box component="img" src="/bg-4-text.svg" width={1} />
            <Box position="absolute" bottom="13%" right="10%" width={0.68}>
              <Box fontSize={20} fontWeight={500} color="#E1D3C1" mb={3}>
                Встроенная платежная система и удобный вывод средств
              </Box>
              <Box fontSize={20} fontWeight={300} color="#E1D3C1">
                Не тратьте время на подключение к платежным системам, мы это
                сделали за Вас! Вывод заработанных средств прямо на Вашу карту
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Finansical;
