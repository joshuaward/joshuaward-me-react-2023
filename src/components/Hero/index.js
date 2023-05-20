import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './hero.scss';

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__inner">
				<h1 className="hero__heading">
					ui/ux engineer
				</h1>
				<div className="hero__scroller">
					<a href="#work" className="hero__scroll">
						<FontAwesomeIcon icon="fa-solid fa-angle-down" />
					</a>
				</div>
				<div className="hero__parallax"></div>
			</div>
		</section>
	)
}

export default Hero;