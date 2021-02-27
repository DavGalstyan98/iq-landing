import React from "react";
import {Box} from "@material-ui/core";

function ControlUsers () {
  return (
    <Box bgcolor="#222222" mt={10} position="relative" minHeight={1400} zIndex={7}>
      <Box position="absolute" top={0} >
        <Box position="relative" >
          <Box component="img" src="/background3.png" position="absolute" top={110} />
          <Box position="absolute" top={180} right={200} color="#E1D3C1" className="studentsBackground" zIndex={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Box component="span" fontSize={20} maxWidth={342} fontWeight={500}>Управление учениками и контроль прогресса обучения</Box>
              <Box mt={2} fontSize={20} fontWeight={300} maxWidth={382}>Отвечайте на вопросы учеников, беспокоить смогут только платные студенты</Box>
          </Box>
          <Box component="img" src="/students.png" position="absolute" top={450} left={0}/>
          <Box component="img" src="/progress.png" position="absolute" top={800} left={200}/>
          <Box component="img" src="/Vector3.svg" position="absolute" left={200} top={1400}/>
          <Box component="img" src="/background4.png" />
        </Box>
      </Box>
    </Box>
  )
}

export default ControlUsers;
