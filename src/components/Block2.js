import react, {useState} from 'react'
import './Block.css'
import { InView } from 'react-intersection-observer'

const Block2 = () => {
  const [classes, setClasses] = useState('block')
  return (
    <InView
      as="div"
      onChange={(inView, entry) => setClasses(inView ? 'block in-view-2' : 'block')}
      className={classes}
      style={{ backgroundColor: 'black', color: 'gold' }}
    >
      Fuuu
    </InView>
  )
}

export default Block2
