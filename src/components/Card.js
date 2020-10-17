import React, {Component} from 'react'

// class Card extends Component {
//   render(){
//     return(
//       <div className = 'f2 tc'>
//         <h1>Hello</h1>
//       </div>
//     )
//   }
// }

const Card = ({name,email,id}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='xyz'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card
