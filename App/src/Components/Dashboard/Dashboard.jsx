import React from 'react'
import BigContainer from '../BigContainer/BigContainer'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  return (
    <div className={styles.section}>
      <BigContainer title="our best selling products!" />
      <BigContainer title="most liked products!" />
    </div>
  )
}
