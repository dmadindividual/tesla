
import './App.css';
import Header from './components/Header';
import info from './components/data';
import Item from './components/Item';



function App() {
  const element = info.map((item) => {
    return <Item key={item.id} item={item} />;
  });
  return (
    <div className='app'>
 <Header/>
<div className='app_container'>
  {element}

</div>
 </div>
   
   
  );
}

export default App;
