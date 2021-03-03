import React from 'react';
import { Box } from '@material-ui/core';

function Messanger() {
  return (
    <Box
      bgcolor="#222222"
      mt={-37.5}
      position="relative"
      display="flex"
      justifyContent="center"
      width={1}
      style={{
        background: 'url(/bg-3.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      maxWidth={1800}
      zIndex={1}
    >
      <Box
        component="img"
        src="/bg-3.svg"
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
          <Box component="img" maxWidth={1} src="/bg-3-content.svg" width={1} />
          <Box position="absolute" top="-12%" left="10%" maxWidth={0.4}>
            <Box component="img" src="/bg-3-text.svg" width={1} />
            <Box position="absolute" top="60%" ml="15%" width={0.6}>
              <Box fontSize={20} fontWeight={500} color="#E1D3C1" mb={3}>
                Собственный мессенджер
              </Box>
              <Box fontSize={20} fontWeight={300} color="#E1D3C1">
                Отвечайте на вопросы учеников, беспокоить смогут только платные
                студенты
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Messanger;
