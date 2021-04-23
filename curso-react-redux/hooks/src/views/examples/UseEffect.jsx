import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
  const number = parseInt(num)
  if (number < 0) return -1
  if (number === 0) return 1
  return calcFatorial(number - 1) * number
}

function checkIsOdd(num) {
  const number = parseInt(num, 10)
  return number % 2 === 0 ? true : false
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1)
  const [fatorial, setFatorial] = useState(1)
  const [isOdd, setIsOdd] = useState(true)

  useEffect(() => {
    setFatorial(calcFatorial(number))
    setIsOdd(checkIsOdd(number))
  }, [number])

  useEffect(() => {
    if (fatorial > 100000) {
      document.title = 'Eita!!!'
    }
  }, [fatorial])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício 1" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? 'Não existe' : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício 2" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{isOdd ? 'Par' : 'Ímpar'}</span>
        </div>
      </div>
    </div>
  )
}

export default UseEffect
