import { useState , useEffect } from 'react'
import './App.css'
// import Navbar from './components/Navbar';
import Posts from './components/Posts';

const api = 'https://jsonplaceholder.typicode.com/todos'

function App() {


  // const[loading, setLoading] = useState(false);
  const [data, setData] = useState([]);


  const fetchData = async () => {
    // setLoading(true);
    try{
      const res = await fetch(api);
      const list = await res.json();
      setData(list);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
  fetchData();
  }, []);

  const removeItem = (id) => {
    const newItem = data.filter((item) => item.id !== id) ;
    setData(newItem);
}

  return (
    <>
      {/* <Navbar /> */}
      <Posts data={data} removeItem />
    </>
  )
}

export default App
