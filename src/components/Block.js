import react from 'react'
import './Block.css'
import { useInView } from 'react-intersection-observer'

const Block = ({ color, text }) => {
  const uiwA = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  })

  const uiwB = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true
  })

  const classesA = ['block']
  if (uiwA.inView) {
    classesA.push('in-view')
  }
  const classesB = ['block']
  if (uiwB.inView) {
    classesB.push('in-view')
  }
  return (
    <>
      <div
        ref={uiwA.ref}
        className={classesA.join(' ')}
        style={{ backgroundColor: color }}
      >
        {text}
      </div>
      <div
        ref={uiwB.ref}
        className={classesB.join(' ')}
        style={{ backgroundColor: color }}
      >
        Et do deserunt ad laboris tempor ullamco cillum laborum occaecat ullamco
        nostrud. Lorem id ut sunt tempor irure pariatur dolor eiusmod.
        Adipisicing pariatur sint id proident amet est veniam.
      </div>
    </>
  )
}

export default Block
