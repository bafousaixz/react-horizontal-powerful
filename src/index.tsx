import * as React from 'react'
import { useEffect, useState } from 'react'
import { backIcon, nextIcon } from './const'
import styles from './styles.module.css'

interface ItemValues {
  id: number
  image: string
  title: string
  desc: string
}

interface Props {
  values: ItemValues[]
  delay?: number
  isAutoScroll?: boolean
  backIconCustom?: JSX.Element
  nextIconCustom?: JSX.Element
}

export const ExampleComponent = (props: Props) => {
  const { isAutoScroll, values, delay, backIconCustom, nextIconCustom } = props
  // const { title, desc, image } = values
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isAutoScroll) return

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, delay || 500)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setIndex(index === values.length - 1 ? 0 : index + 1)
  }, [count])

  return (
    <div className={styles.wrapper}>
      {values.length > 1 && (
        <button
          className={`${styles.iconLeft} ${styles.icon}`}
          onClick={() => setIndex(!index ? values.length - 1 : index - 1)}
          aria-label='Quay lại'
        >
          {backIconCustom || backIcon}
        </button>
      )}

      <div className={styles.slideShow}>
        {values.map((data, idx) => (
          <div
            key={data.id}
            className={`${styles.banner} ${idx === index ? styles.show : styles.hide
              }`}
            style={{ backgroundImage: `url(${data.image})` }}
          />
        ))}
      </div>

      {values.length > 1 && (
        <button
          className={`${styles.iconRight} ${styles.icon}`}
          onClick={() => setIndex(index === values.length - 1 ? 0 : index + 1)}
          aria-label='Tiếp theo'
        >
          {nextIconCustom || nextIcon}
        </button>
      )}

      <ul className={styles.dotArea}>
        {[...Array(values.length)].map((_, idx) => (
          <li
            key={Math.random()}
            className={`${styles.dot} ${index === idx && styles.selected}`}
            onClick={() => setIndex(idx)}
            onKeyDown={() => setIndex(idx)}
            role='presentation'
          />
        ))}
      </ul>
    </div>
  )
}
