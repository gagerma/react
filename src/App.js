import logo from './logo.svg';
import './App.css';
import Main_1 from './Bandimas.js';

function App() {
  let posts =[
  {
    id:1, 
    pavadinimas:"Pavadinimas kuri galima keisti",
    textas:"Bet kuris textas kuris bus parasitas",
    img:"https://www.efoto.lt/files/images/67008/_MG_7804.preview.jpg",
  },
  {
    id: 2,
    pavadinimas:"Pavadinimas kuri galima keisti2",
    textas:"Bet kuris textas kuris bus parasitas2",
    img:"https://www.efoto.lt/files/images/67008/_MG_7804.preview.jpg",
  },{
    id: 3,
    pavadinimas:"Pavadinimas kuri galima keisti3",
    textas:"Bet kuris textas kuris bus parasitas3",
    img:"https://www.efoto.lt/files/images/67008/_MG_7804.preview.jpg",
  },
];
  let list = posts.map((post) => {
    return (
      <Main_1 key={post.id} title={post.pavadinimas}  content={post.textas} img={post.img}/>
  );
  })
  return <div>{list}</div> 
}

export default App;
