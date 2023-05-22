import React from 'react'
import styles from './Hero.module.css'
import Button from '../UI/Button'

const Hero = () => {
	return (
		<div className={styles.hero}>
            <div className={styles.content}>

			<h1 className={styles.h1}>
				It's time <br />
				for hiking
			</h1>
			<h3 className={styles.h3}>Loremipusum dolor</h3>
			<Button className={styles.lightBtn}> Read more </Button>
			<p className={styles.italic}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit,
				accusantium laborum velit, tempora fugit et dolore magna.
                </p>
            </div>
		</div>
	)
}

export default Hero
