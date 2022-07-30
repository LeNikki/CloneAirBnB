import './App.css';
import Main from './Components/Main';
import Upper from './Components/Upper';
import data from "./Components/data.js"
console.log(data)
function App() {

  const main = data.map(item=>{
    //foreach object in data, it will return: 
     return( <Main
      key ={item.id} //important
      // img = {item.coverImg}
      // num = {item.stats.rating}
      // people = {item.stats.reviewCount}
      // place ={item.location}
      // price = {item.price}
      // label ={item.title}
      // openSpots = {item.openSpots}
      // location = {item.location}

      /*I prefer this alone
        -->it will be passed as props.item.name
      */
      //item = {item}

      /*This looks quite obscure, but for practice:
      --->it will be passed as props.name
      */
      {...item} //returns an object ex {name:"Anna"}
    />)
  })

  return (
    <div className="App">
      <Upper/>
      <section className='node'>
      {main}
     </section>

    </div>
  );
}

export default App;
