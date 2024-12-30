import React from 'react'
import Cards from '../components/Cards'
import Counter from '../components/Counter'
import CountDown from '../components/CountDown'
import Loop from '../components/Loop'

const CardPage = () => {
  return (
      <div>
          <Cards />
          <Counter />
          <CountDown />
          <Loop/>
      </div>
  )
}

export default CardPage