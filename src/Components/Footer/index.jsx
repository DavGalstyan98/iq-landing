import React from "react";
import {Box} from "@material-ui/core";
import Button from "../Button";
import {Link, NavLink} from "react-router-dom";

const cards = [
  {
    title: 'Блогерам, экспертам, преподавателям',
    description: 'Тем, кто хочет зарабатывать на обучении людей',
    icon: '/Influencer.svg',
    price: 'Бесплатно',
    commission: '20%',
    button: 'Начать работу'
  },
  {
    title: 'Бизнесу, компаниям, организациям ',
    description: 'Тем, кто хочет учить своих сотрудников бесплатно',
    icon: '/hands.svg',
    price: '750₽/мес за сотрудника',
    commission: 'Бесплатно',
    button: 'Связаться с нами'
  },
  {
    title: 'Университетам, школам, колледжам ',
    description: 'Официальным образовательным учреждениям',
    icon: '/house.svg',
    price: 'Бесплатно',
    commission: 'Бесплатно',
    button: 'Связаться с нами'
  }
]

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
]

function Footer() {

  function renderLink (linkName) {
    if (linkName === 'Начать работу') {
      return window.open('https://app.iq.academy/')
    } else  {
      return 'dsds'
    }
  }

  return (
    <Box mt={40} width={1} >
      <Box display="flex" justifyContent="center" width={1}>
        {cards.map(card => {
          return (
            <Box display="flex" flexDirection="column" alignItems="center" key={card.title} mr={2} px={6} py={4} className="footerCard" borderRadius={20} position="relative">
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" position="absolute" className="cardTitle" px={1} py={3} maxWidth={260} height={260} top={-148} left={80} borderRadius={20}>
                <Box component='span' fontSize={20} fontWeight={500} color="#E1D3C1">{card.title}</Box>
                <Box component='img' src={card.icon}/>
                <Box component='span' fontSize={20} fontWeight={300} color="#E1D3C1">{card.description}</Box>
              </Box>
              <Box color="#E1D3C1" fontSize={20} fontWeight={500} mt={20}>Абонентская плата</Box>
              <Box my={4} p={1.5} fontSize={20} fontWeight={300} color="#E1D3C1" minWidth={202} borderRadius={20} boxShadow="-6px -12px 20px rgba(95, 79, 151, 0.26), 10px 12px 20px rgba(48, 35, 94, 0.37)">{card.price}</Box>
              <Box color="#E1D3C1" fontSize={20} fontWeight={500}>Комиссия с прибыли</Box>
              <Box my={4} p={1.5} fontSize={20} fontWeight={300} color="#E1D3C1" minWidth={202} borderRadius={20} boxShadow="-6px -12px 20px rgba(95, 79, 151, 0.26), 10px 12px 20px rgba(48, 35, 94, 0.37)">{card.commission}</Box>
              <Box onClick={() => {
                if (card.button === 'Начать работу') {
                  return window.open('https://app.iq.academy/')
                } else  {
                  return;
                }
              }}>
                <Button text={card.button}/>
              </Box>
            </Box>
          )
        })}
      </Box>
      <Box width={1} display="flex" justifyContent="center">
        <Box maxWidth={1266} className="footerCard" p={3.5} height={300} mt={8} borderRadius={20} display="inline-grid" gridTemplateColumns='auto auto auto' gridRowGap={48} gridColumnGap={12}>
          {explanations.map(expl => {
            return (
              <Box  display="flex" alignItems="center">
                <Box key={expl.id} mr={2}>
                  <Box display="flex" justifyContent="center" alignItems="center"  borderRadius="50%" className="footerCircle" width={50} height={50} fontSize={20} fontWeight={1} color="#E1D3C1">{expl.id}</Box>
                </Box>
                <Box  fontSize={20} fontWeight={1} color="#E1D3C1" maxWidth={366} mr={2} textAlign="left">{expl.text}</Box>
              </Box>
            )
          })}
        </Box>
      </Box>
      <Box mt={6}onClick={() => window.open('https://app.iq.academy/')}>
          <Button text='Начать работу с IQ.Academy'/>
      </Box>
    </Box>
  )
}

export default Footer;