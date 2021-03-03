import React, { useRef } from 'react';

import { Box } from '@material-ui/core';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import Card from '../../Components/Cards';
import Content from '../../Components/Content';
import ControlUsers from '../../Components/ControlUsers';
import Messanger from '../../Components/Messanger';
import Finansical from '../../Components/Finansical';
import Notifications from '../../Components/Notifications';
import Paymant from '../../Components/Paymant';
import Apple from '../../Components/Apple';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';

const cards = [
  {
    title: 'Блогерам, экспертам, преподавателям',
    description: 'Тем, кто хочет зарабатывать на обучении людей',
    price: 'Бесплатно',
    tax: '20%',
    iconSrc: '/bloger.svg',
  },
  {
    title: 'Бизнесу, компаниям, организациям',
    description: 'Тем, кто хочет учить своих сотрудников бесплатно',
    price: '750₽/мес за сотрудника',
    tax: 'Бесплатно',
    iconSrc: '/hands.svg',
  },
  {
    title: 'Университетам, школам, колледжам',
    description: 'Официальным образовательным учреждениям',
    price: 'Бесплатно',
    tax: 'Бесплатно',
    iconSrc: '/house.svg',
  },
];

const explanations = [
  {
    id: 1,
    text: 'Бесплатное создание курсов, для старта платить ничего не нужно',
  },
  {
    id: 4,
    text: 'Полный функционал без ограничений ',
  },
  {
    id: 7,
    text: 'Рассылки пользователям',
  },
  {
    id: 2,
    text: 'Неограниченное количество курсов',
  },
  {
    id: 5,
    text: 'Неограниченное хранилище данных',
  },
  {
    id: 8,
    text: 'Неограниченное количество сотрудников',
  },
  {
    id: 3,
    text: 'Неограниченное количество сотрудников',
  },
  {
    id: 6,
    text: 'Мобильное приложение для преподавателя и учеников',
  },
  {
    id: 9,
    text: 'Персональный менеджер',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
      color: 'rgba(225, 211, 193, 0.5)',
      borderColor: 'rgba(225, 211, 193, 0.5)',
      width: '25ch',
    },
  },
}));

function Welcome() {
  const classes = useStyles();
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  return (
    <Box className="root" width={1}>
      <Header firstRef={firstRef} secondRef={secondRef} thirdRef={thirdRef} />
      <Box height={1} position="relative" mt={10}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
          zIndex={10}
        >
          <Box
            component="span"
            fontSize={50}
            color="#E1D3C1"
            fontWeight="normal"
          >
            Добро пожаловать <br />в{' '}
            <Box component="span" color="#0FBDE9">
              будущее
            </Box>{' '}
            систем образования
          </Box>
          <Box
            component="span"
            fontSize={26}
            color="rgba(225, 211, 193, 0.87)"
            fontWeight={300}
            my={5.2}
          >
            Лучшая платформа для создания и продажи курсов
          </Box>
          <Box onClick={() => (window.location = 'https://app.iq.academy/')}>
            <Button text="Начать бесплатно" />
          </Box>
        </Box>
        <Box bgcolor="#222222" width={1} mb={2} height={650}>
          <Box
            component="img"
            src="/Illustration 1.png"
            position="absolute"
            zIndex={1}
            top={126}
            left={0}
          />
        </Box>
      </Box>
      <Box height={1} py={8} className="borderRotate" mt={8} ref={firstRef}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
          zIndex={10}
        >
          <Box
            component="span"
            fontSize={50}
            color="#E1D3C1"
            fontWeight="normal"
          >
            Вдохновляем учить и зарабатывать
          </Box>
          <Box
            component="span"
            lineHeight="170%"
            fontSize={26}
            color="rgba(225, 211, 193, 0.87)"
            maxWidth={976}
            fontWeight={300}
            my={5.2}
          >
            У каждого свой подход к творчеству. <br />
            Технология IQ.Academy поможет любому достичь успеха <br />
            в выбранном направлении. <br />
            <Box component="span" color="#0FBDE9">
              Пора создавать будущее образования
            </Box>
          </Box>
          <Box
            position="relative"
            width={1}
            mt={8}
            display="flex"
            justifyContent="center"
            className="cardsBackground"
            alignItems="center"
          >
            <Box
              display="grid"
              gridTemplateColumns="auto auto auto"
              gridGap="70px 88px"
              position="relative"
              zIndex={2}
            >
              {cards.map(card => (
                <Card
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  iconSrc={card.iconSrc}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Content secondRef={secondRef} />
        <ControlUsers />
        <Messanger />
        <Finansical />
        <Notifications />
        <Paymant />
        <Apple />
        <Box
          bgcolor="#222222"
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={1}
          style={{
            background: 'url(/bg-8.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          maxWidth={1800}
          zIndex={1}
        >
          <Box
            component="img"
            src="/bg-8.svg"
            width={1}
            style={{ opacity: 0 }}
            maxWidth={1800}
          />
          <Box
            position="absolute"
            top={350}
            width={0.85}
            bottom={0}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Box fontSize={50} fontWeight={400} color="#E1D3C1">
              Лучшие условия для успешного старта{' '}
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
              my={11}
            >
              <Box
                display="flex"
                maxWidth={0.55}
                fontSize={36}
                fontWeight={300}
                color="#E1D3C1"
                textAlign="left"
              >
                В это непростое время IQ.Academy стал одним из самых ценных
                партнеров. Проект позволяет преподавателям и консультантам
                зарабатывать создавая увлекательные онлайн курсы, чтобы студенты
                успешно осваивали учебный материал и получали дополнительные
                знания и навыки.
              </Box>
              <Box display="flex" width={0.45}>
                <Box component="img" src="/human.svg" width={1} />
              </Box>
            </Box>
            <Box
              fontSize={36}
              fontWeight={300}
              color="rgba(15, 189, 233, 0.87)"
              width={0.8}
              mb={21}
            >
              Мы создали идеальные условия для сотрудничества, которых нет ни у
              одного конкурента
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width={1}
              mb={18}
            >
              {cards.map(i => (
                <Box
                  key={i.title}
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  width={400}
                  borderRadius={20}
                  style={{
                    background:
                      'linear-gradient(195.87deg, rgba(15, 189, 233, 0.3) 33.19%, rgba(68, 131, 147, 0) 88.66%), linear-gradient(59.19deg, rgba(92, 52, 250, 0.234) 6.02%, rgba(92, 52, 250, 0.093) 52.95%)',
                    backdropFilter: 'blur(26px)',
                    boxSizing: 'border-box',
                  }}
                  pb={4.5}
                >
                  <Box
                    height={260}
                    width={260}
                    mt="-130px"
                    borderRadius={20}
                    mb={5}
                    px={1}
                    py={3}
                    style={{
                      background:
                        'linear-gradient(228.5deg, rgba(79, 63, 132, 0.5) 38.4%, rgba(116, 92, 197, 0) 117.48%), linear-gradient(132.23deg, rgba(15, 189, 233, 0.7) 17.62%, rgba(76, 210, 243, 0) 85.59%)',
                      backdropFilter: 'blur(26px)',
                      boxSizing: 'border-box',
                    }}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box fontSize={20} fontWeight={500} color="#E1D3C1">
                      {i.title}
                    </Box>
                    <Box component="img" src={i.iconSrc} />
                    <Box fontSize={20} fontWeight={300} color="#E1D3C1">
                      {i.description}
                    </Box>
                  </Box>
                  <Box fontSize={20} fontWeight={500} color="#E1D3C1">
                    Абонентская плата
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={20}
                    fontWeight={300}
                    color="#E1D3C1"
                    minWidth={200}
                    style={{
                      background:
                        'linear-gradient(290.86deg, rgba(55, 213, 214, 0.4104) -13.13%, rgba(54, 9, 109, 0.1998) 102.85%)',
                      boxShadow:
                        '-6px -12px 20px rgba(95, 79, 151, 0.26), 10px 12px 20px rgba(48, 35, 94, 0.37)',
                      backdropFilter: 'blur(26px)',
                      boxSizing: 'border-box',
                    }}
                    p={1.5}
                    borderRadius={20}
                    my={3.75}
                  >
                    {i.price}
                  </Box>
                  <Box fontSize={20} fontWeight={500} color="#E1D3C1" mb={3.75}>
                    Комиссия с прибыли
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={20}
                    fontWeight={300}
                    color="#E1D3C1"
                    minWidth={200}
                    style={{
                      background:
                        'linear-gradient(290.86deg, rgba(55, 213, 214, 0.4104) -13.13%, rgba(54, 9, 109, 0.1998) 102.85%)',
                      boxShadow:
                        '-6px -12px 20px rgba(95, 79, 151, 0.26), 10px 12px 20px rgba(48, 35, 94, 0.37)',
                      backdropFilter: 'blur(26px)',
                      boxSizing: 'border-box',
                    }}
                    p={1.5}
                    borderRadius={20}
                  >
                    {i.tax}
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width={1}
              flexWrap="wrap"
              p={3.5}
              pb={1}
              style={{
                background: 'rgba(92, 52, 250, 0.34)',
                backdropFilter: 'blur(26px)',
              }}
              borderRadius={20}
              mb={6}
            >
              {explanations.map(i => (
                <Box
                  key={i.id}
                  display="flex"
                  minWidth={0.33}
                  width={0.33}
                  mb={2.5}
                >
                  <Box
                    minWidth={50}
                    widtn={50}
                    height={50}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize={20}
                    fontWeight={500}
                    color="#E1D3C1"
                    mr={2}
                    style={{
                      background:
                        'radial-gradient(83% 61% at -15% 0%, #0FBDE9 0%, rgba(15, 189, 233, 0) 100%), radial-gradient(126.34% 75% at 66% 60%, rgba(92, 52, 250, 0.7) 0%, rgba(92, 52, 250, 0.7) 95.83%)',
                    }}
                    borderRadius="50%"
                  >
                    {i.id}
                  </Box>
                  <Box
                    fontSize={20}
                    fontWeight={300}
                    color="#E1D3C1"
                    width={1}
                    textAlign="left"
                    display="flex"
                    alignItems="center"
                  >
                    {i.text}
                  </Box>
                </Box>
              ))}
            </Box>
            <Box onClick={() => (window.location = 'https://app.iq.academy/')}>
              <Button text="Начать работу с IQ.Academy" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        bgcolor="#222222"
        position="relative"
        minHeight={510}
        zIndex={0}
        display="flex"
        width={1}
        justifyContent="center"
      >
        <Box position="absolute" top={0}>
          <Box
            position="absolute"
            top={200}
            left="15%"
            zIndex={10}
            textAlign="left"
            display="flex"
            flexDirection="column"
          >
            <Box
              component="span"
              mb={2}
              color="#E1D3C1"
              fontSize={20}
              fontWeight={500}
            >
              Нужны персональные условия?{' '}
            </Box>
            <Box
              component="span"
              mb={2}
              color="#E1D3C1"
              fontSize={20}
              fontWeight={300}
            >
              Оставьте заявку, мы перезвоним и обсудим детали
            </Box>
            <TextField
              className={classes.root}
              id="standard-basic"
              label="Номер телефона"
            />
            <Box mt={4}>
              <Button text="Оставить заявку" />
            </Box>
          </Box>
          <Box
            component="img"
            src="/backgroundEnd.png"
            position="relative"
            top={110}
          />
        </Box>
        <Box
          component="img"
          src="/background18.png"
          position="relative"
          zIndex={1}
          left={-20}
        />
      </Box>
    </Box>
  );
}

export default Welcome;
