import React from 'react'
import styles from "./categoryList.module.css"
import Image from 'next/image'
import Link from 'next/link'

const CategoryList = () => {
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>

        <Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>

        <Link href="/blog?cat=style" className={`${styles.category} ${styles.food}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          food
        </Link>

        <Link href="/blog?cat=style" className={`${styles.category} ${styles.clothing}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          clothing
        </Link>

        <Link href="/blog?cat=style" className={`${styles.category} ${styles.coding}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          coding
        </Link>

        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          cars
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
