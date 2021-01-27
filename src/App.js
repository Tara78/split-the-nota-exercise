
import './App.css';
// import View from './view'; 
import React, {useState } from 'react'; 
import ViewResult from './components/ViewResult'; 



/*1. Hamta summa fron input
  2.hamta personer fron input 
  3- hamta dricks fron input 
  4- Rakna ut drick fron summa och addera till total summan 
  5- Rakna ut summa per person och visa 
*/
function App(){
  const [sum, setSum]= useState(''); 
  const [people, setPeople]= useState(''); 
  const[tip,setTip] = useState(''); 
  const[ result, setResult] = useState(''); 


  function calculateTip(sum, tip){
    const calculatedTip = parseInt(sum) * parseFloat(tip); 
    return calculatedTip; 
  } 

  function divideTotal(total, numberOfFirends){
    const sumDivided = total /parseInt(numberOfFirends); 
    return sumDivided; 
  }
 

  function handleClick(){
    const calculatedTip = calculateTip(sum,tip); 
    const totalSum = parseInt(sum) + calculatedTip; 

    const sumToPay = divideTotal(totalSum, people); 
    setResult(sumToPay); 
   
  }

  return(
    <main>
      <h2>Split the Note</h2>
    <section className= 'form'>
      <input type='number' onChange={(event) => setSum(event.target.value)}/>
      <input type='number' onChange={(event) => setPeople(event.target.value)}/>
      <input type='number' onChange={(event) => setTip(event.target.value)}/>
      <button classNAme= 'form_button'onClick={handleClick} >Rakna ut </button>
      </section>
      <ViewResult friendSum ={result} />
      </main>
  )
}

export default App;
