import React from 'react'; 

function handleClick(e){
    e.preventDefult()
    console.log(e.target.value)
}

function View(props){
    return(
        <div>
            <form  onSubmit={handleClick} className=' form'>
                <label> Summa </label>
                <input type ='text' onChange={handleClick}/> 

                 <label> Antal Vannar</label>
                <input type ='text' /> 

                <label> Drinks</label>
                <input type ='text' /> 

                <button className='button'>Rankna </button>

            </form>
        </div>
    )
}

export default View;