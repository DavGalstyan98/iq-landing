import React from 'react';
import { Box } from '@material-ui/core';

function Paymant() {
  return (
    <Box
      bgcolor="#222222"
      mt={-42}
      position="relative"
      display="flex"
      justifyContent="center"
      zIndex={8}
      width={1}
      style={{
        background: 'url(/bg-6.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      maxWidth={1800}
    >
      <Box
        component="img"
        src="/bg-6.svg"
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
          mt="10%"
          zIndex={100}
        >
          <Box component="img" maxWidth={1} src="/bg-6-content.svg" width={1} />
          <Box position="absolute" top="-40%" right="2%" maxWidth={0.52}>
            <Box component="img" src="/bg-6-text.svg" width={1} />
            <Box position="absolute" bottom="20%" right="17%" width={0.68}>
              <Box fontSize={20} fontWeight={500} color="#E1D3C1" mb={3}>
                Гибкие параметры доступа и оплаты
              </Box>
              <Box fontSize={20} fontWeight={300} color="#E1D3C1">
                Определяйте формат доступа к Вашим курсам, самостоятельно
                определяйте цены за обучение
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Paymant;
