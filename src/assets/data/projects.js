import { v4 as uuidv4 } from 'uuid';
import MemoriesImg from '../images/memories.png';
import ExpenseImg from '../images/expense.PNG';
import COVIDImg from '../images/COVID.png';
import ChatImg from '../images/chat.jpg';
import TemperatureImg from '../images/temperature.PNG';
import CryptoImg from '../images/crypto.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'Memories',
    desc:
      'The App is called "Memories" and it is a simple social media MERN application that allows users to post interesting events that happened in their lives.',
    img: MemoriesImg,
  },
  {
    id: uuidv4(),
    name: 'Expense Tracker',
    desc:
      'In this expense tracker project I used full stack MERN app by adding a backend API with Express and MongoDB.',
    img: ExpenseImg,
  },
  {
    id: uuidv4(),
    name: 'COVID-19 Tracker',
    desc:
      'The project fetched the live data from the API using Async/Await syntax. I used here React with the addition of Charts.js, Material UI, and many different modules. ',
    img: COVIDImg,
  },
  {
    id: uuidv4(),
    name: 'Chat Application',
    desc:
      'I created a full Realtime Chat Application and used here React on the front end, with NodeJS + Socket.io web socket library on the back end. ',
    img: ChatImg,
  },
  {
    id: uuidv4(),
    name: 'CryptoCurrency Tracker',
    desc:
      'A simple Bitcoin cryptocurrency finance price tracker app using React and Next JS. I used here a crypto API to get the data.',
    img: CryptoImg,
  },
  {
    id: uuidv4(),
    name: 'Temperature Hot',
    desc:
      'Weather app in React JS, I used here the Modern Javascript Fetch API along with React hooks and conditonals.',
    img: TemperatureImg,
  },
];

export default projects;
