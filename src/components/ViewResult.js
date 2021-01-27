import React from 'react'; 

function ViewResult(props){
    return(
        <div>
            <article>
                <h2>Varje person ska betala </h2>
                <h3>{props.friendSum}</h3>
            </article>

        </div>
    )
}

export default ViewResult; 