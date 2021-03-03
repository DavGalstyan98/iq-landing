import React from 'react';
import { Box } from '@material-ui/core';

function ControlUsers() {
  return (
    <Box
      bgcolor="#222222"
      mt={-48.5}
      position="relative"
      display="flex"
      justifyContent="center"
      zIndex={8}
      width={1}
      style={{
        background: 'url(/bg-2.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      maxWidth={1800}
    >
      <Box
        component="img"
        src="/bg-2.svg"
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
        <Box position="absolute" width={0.85} maxWidth={1800} mt="15%">
          <Box component="img" maxWidth={1} src="/bg-2-content.svg" width={1} />
          <Box position="absolute" top="-55%" right={0} maxWidth={0.48}>
            <Box component="img" src="/bg-2-text.svg" width={1} />
            <Box position="absolute" bottom="10%" right="15%" width={0.55}>
              <Box fontSize={20} fontWeight={500} color="#E1D3C1" mb={3}>
                Управление учениками и контроль прогресса обучения
              </Box>
              <Box fontSize={20} fontWeight={300} color="#E1D3C1">
                Все ученики на одном экране. Выявляйте отличников! Назначайте
                себе администраторов, предоставляя им доступ к управлению Вашими
                курсами и партнеров, давая им возможность продвигать Ваши
                продукты
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ControlUsers;
