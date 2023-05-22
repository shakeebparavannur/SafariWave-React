import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='props.class' onClick={props.action} type='props.type' name='props.name'> 
            {props.value}
        </button>
    </div>
  )
}

export default Button