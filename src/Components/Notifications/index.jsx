import React from 'react';
import { Box } from '@material-ui/core';

function Notifications() {
  return (
    <Box
      bgcolor="#222222"
      mt={-25}
      position="relative"
      display="flex"
      justifyContent="center"
      width={1}
      style={{
        background: 'url(/bg-5.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      maxWidth={1800}
      zIndex={1}
    >
      <Box
        component="img"
        src="/bg-5.svg"
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
          <Box component="img" maxWidth={1} src="/bg-5-content.svg" width={1} />
          <Box position="absolute" top="-20%" left={0} maxWidth={0.45}>
            <Box component="img" src="/bg-5-text.svg" width={1} />
            <Box position="absolute" top="65%" ml="15%" width={0.6}>
              <Box fontSize={20} fontWeight={500} color="#E1D3C1" mb={3}>
                Push уведомления и рассылки
              </Box>
              <Box fontSize={20} fontWeight={300} color="#E1D3C1">
                Осуществляйте промо акции, уведомляйте учеников о новых
                материалах. Стимулируйте подписчиков покупать Ваши курсы
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Notifications;
