import React, { useRef } from "react";

import {Box} from "@material-ui/core";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import Card from "../../Components/Cards";
import Content from "../../Components/Content";
import ControlUsers from "../../Components/ControlUsers";
import Messanger from "../../Components/Messanger";
import Finansical from "../../Components/Finansical";
import Notifications from "../../Components/Notifications";
import Paymant from "../../Components/Paymant";
import Apple from "../../Components/Apple";
import Footer from "../../Components/Footer";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";

const cards = [
  {
    title: "Блогерам",
    description: "Монетизируйте свою аудиторию продвигая свои знания в массы",
    iconSrc: "/bloger.svg"
  },
  {
    title: "Экспертам",
    description: "Зарабатывайте больше на своих знаниях",
    iconSrc: "/icon74.svg"
  },
  {
    title: "Бизнесу",
    description: "Повышайте эффективность компании обучая и тестируя сотрудников онлайн",
    iconSrc: "/XMLID.svg"
  },
  {
    title: "Школам и ВУЗам",
    description: "Организуйте дистанционное обучение предоставляя ученикам Ваши курсы онлайн",
    iconSrc: "/Scool.svg"
  },
  {
    title: "Инфобизнесменам",
    description: "Передавайте полезную информацию в удобной форме и расширяйте свою аудиторию",
    iconSrc: "/business.svg"
  },
  {
    title: "Преподавателям",
    description: "Расширьте число учеников за счет безграничных возможностей интернета",
    iconSrc: "/XMLID6.svg"
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
      color: 'rgba(225, 211, 193, 0.5)',
      borderColor: 'rgba(225, 211, 193, 0.5)',
      width: '25ch',
    },
  },
}));

function Welcome () {
  const classes = useStyles();
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null)

  return (
    <Box className="root">
      <Header firstRef={firstRef} secondRef={secondRef} thirdRef={thirdRef}/>
      <Box height={1}  position="relative" mt={10}>
        <Box display="flex" flexDirection="column" alignItems="center" position="relative" zIndex={10}>
          <Box component="span" fontSize={50} color="#E1D3C1" fontWeight="normal">
            Добро пожаловать <br/>
            в <Box component="span" color="#0FBDE9">будущее</Box> систем образования
          </Box>
          <Box component="span" fontSize={26} color="rgba(225, 211, 193, 0.87)" fontWeight={300} my={5.2}>Лучшая платформа для создания и продажи курсов</Box>
          <Box onClick={() => window.location = 'https://app.iq.academy/'}>
            <Button text="Начать бесплатно"/>
          </Box>
        </Box>
        <Box bgcolor="#222222" width={1} mb={2} height={650}>
          <Box component="img" src="/Illustration 1.png" position="absolute" zIndex={1} top={126} left={0}/>
        </Box>
      </Box>
      <Box height={1} py={8} className="borderRotate" mt={8} ref={firstRef}>
        <Box display="flex" flexDirection="column" alignItems="center" position="relative" zIndex={10}>
          <Box component="span" fontSize={50} color="#E1D3C1" fontWeight="normal">
            Вдохновляем учить и зарабатывать
          </Box>
          <Box component="span" lineHeight="170%" fontSize={26} color="rgba(225, 211, 193, 0.87)" maxWidth={976} fontWeight={300} my={5.2}>
              У каждого свой подход к творчеству. <br/>
              Технология IQ.Academy поможет любому достичь успеха <br/>
              в выбранном направлении. <br/>
              <Box component="span" color="#0FBDE9">Пора создавать будущее образования</Box>
          </Box>
          <Box position="relative" width={1} mt={8} display="flex" justifyContent="center" className="cardsBackground" alignItems="center">
            <Box display="grid" gridTemplateColumns="auto auto auto" gridGap='70px 88px' position="relative" zIndex={2}>
              {cards.map(card => <Card key={card.title} title={card.title} description={card.description} iconSrc={card.iconSrc} />)}
            </Box>
            {/*<Box component="img" src='/underCardImage.png' position="absolute" top={30} left={0} right={0}/>*/}
          </Box>
        </Box>
      </Box>
      <Content secondRef={secondRef}/>
      <ControlUsers/>
      <Messanger/>
      <Finansical/>
      <Notifications/>
      <Paymant/>
      <Apple/>
      <Box bgcolor="#222222" position="relative" minHeight={2600} zIndex={1}>
        <Box component="span" fontSize={50} color="#E1D3C1" fontWeight='normal' top={400} left="15%" position="absolute"  ref={thirdRef}>Лучшие условия для успешного старта </Box>
        <Box position="absolute" left={32} top={600} display="flex" alignItems="center" justifyContent='space-between'>
          <Box component="span" fontSize={36} fontWeight={300} maxWidth={600} color="rgba(225, 211, 193, 0.87)">В это непростое время IQ.Academy стал одним из самых ценных партнеров. Проект позволяет преподавателям и консультантам зарабатывать создавая увлекательные онлайн курсы, чтобы студенты успешно осваивали учебный материал и получали дополнительные знания и навыки.</Box>
          <Box component="img" src="/user.png"/>
        </Box>
        <Box  top={1100} position="absolute" display="flex" flexDirection="column" width={1} >
          <Box component="span" fontSize={36} fontWeight={300} color="rgba(15, 189, 233, 0.87)" >Мы создали идеальные условия для сотрудничества,<br/> которых нет ни у одного конкурента</Box>
          <Footer/>
        </Box>
        <Box position="absolute" top={0}>
          <Box position="relative" >
            <Box component="img" src="/background15.png" position="absolute" top={110} />
            <Box component="img" src="/backgroundDown.png" position="absolute" top={1200} zIndex={-1}/>
          </Box>
        </Box>
      </Box>
      <Box bgcolor="#222222" position="relative" minHeight={510} zIndex={0}>
        <Box position="absolute" top={200} left="15%" zIndex={10} textAlign="left" display="flex" flexDirection="column">
          <Box component="span" mb={2} color="#E1D3C1" fontSize={20} fontWeight={500}>Нужны персональные условия? </Box>
          <Box component="span" mb={2} color="#E1D3C1" fontSize={20} fontWeight={300}>Оставьте заявку, мы перезвоним и обсудим детали</Box>
          <TextField className={classes.root} id="standard-basic" label="Номер телефона" />
          <Box mt={4}>
            <Button text="Оставить заявку"/>
          </Box>
        </Box>
        <Box position="absolute" top={0} >
            <Box component="img" src="/backgroundEnd.png" position="relative" top={110} />
        </Box>
        <Box component="img" src="/background18.png" position="relative" zIndex={1} left={-20}/>
      </Box>
    </Box>
  )
}

export default Welcome;
