import React from 'react'
import styles from './Story.module.css'
import Card from './Card'

const Story = () => {
	return (
		<div className={styles.container}>
			<section className={styles.section1}>
				<div className={styles.content1}>
					<h1 className={styles.h1}>Our story</h1>
					<p className={styles.p}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque officiis
						perferendis aliquid nihil odit sit, fugiat placeat excepturi incidunt consectetur eaque.
						Reiciendis quia maiores eligendi sapiente, quidem voluptatibus. Ipsa aspernatur eum
						pariatur. Id ea, illo quidem maiores quam enim.
					</p>
				</div>
			</section>
			<section className={styles.section2}>
				<div className={styles.content2}>
					<h2 className={styles.h2}>Explore</h2>
					<h3 className={styles.h3}>The world</h3>
				</div>
			</section>
			<section className={styles.section3}>
				<Card />
				<Card />
				<Card />
			</section>
		</div>
	)
}

export default Story
