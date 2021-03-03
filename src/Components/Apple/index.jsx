import React from 'react';
import { Box } from '@material-ui/core';

function Apple() {
  return (
    <Box
      bgcolor="#222222"
      mt={-25}
      position="relative"
      display="flex"
      justifyContent="center"
      width={1}
      style={{
        background: 'url(/bg-7.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      maxWidth={1800}
      zIndex={1}
    >
      <Box
        component="img"
        src="/bg-7.svg"
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
        <Box position="absolute" width={0.85} maxWidth={1800}>
          <Box
            component="img"
            maxWidth={1}
            src="/bg-7-content.svg"
            width={1}
            mt="30%"
          />
          <Box position="absolute" top="-25%" left={0} maxWidth={0.51}>
            <Box component="img" src="/bg-7-text.svg" width={1} />
            <Box position="absolute" top="52%" ml="12%" width={0.68}>
              <Box fontSize={20} fontWeight={500} color="#E1D3C1" mb={3}>
                Собственное приложение для IPhone, IPad, Android
              </Box>
              <Box fontSize={20} fontWeight={300} color="#E1D3C1">
                IQ.Academy доступен на всех платформах - в браузере, а также в
                мобильных приложениях для Apple и Android. Приложения полностью
                функциональны как для учеников, так и для преподавателей
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Apple;
