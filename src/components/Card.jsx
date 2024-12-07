import React from 'react'

const Card = (props) => {
  
  return (
 <>
    <div class="card">
      <h2>TITLE {props.title}</h2>
      <h5>{props.date}</h5>
      <div  >
        <img src={props.image} alt="" style={{width:"50%" }} />
      </div>
      <p>Some text..</p>
      <p>{props.details}</p>
    </div>

    
    </>

  );
}

export default Card
