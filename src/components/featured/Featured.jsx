import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>
        <b>Hey, blogger here! Discover my stories and creative ideas.</b>
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={StyleSheet.image} />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, reprehenderit!</h1>
          <p className={styles.postDec}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quae dolores earum at et quas laudantium impedit iste, consequatur itaque consequuntur libero praesentium eum nihil sapiente voluptates quasi id ipsa?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
