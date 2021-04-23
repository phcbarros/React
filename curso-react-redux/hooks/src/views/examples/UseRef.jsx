import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(s1, s2) {
  return s1 + s2
}

const UseRef = (props) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const count = useRef(0)
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)

  useEffect(() => {
    if (!value1) return
    count.current++
    inputRef2.current.focus()
  }, [value1])

  useEffect(() => {
    if (!value2) return
    count.current++
    inputRef1.current.focus()
  }, [value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício 01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          ref={inputRef1}
          type="text"
          className="input"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício 02" />
      <div className="center">
        <input
          ref={inputRef2}
          type="text"
          className="input"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  )
}

export default UseRef
