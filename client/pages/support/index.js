import PageTemplate from '../../templates/PageTemplate';
import Section from '../../components/Section';
import Card from '../../components/Card';
import styles from './Support.module.scss';

const Support = ({ props }) => {
	return (
		<PageTemplate className={styles.Support}>
			<Section>
				<h1 className="text-center">Support</h1>
				<p className="text-center">
					Have any questions or feedback you would like to give our
					team?
				</p>
				<Card className={`${styles.Card} text-center`}>
					<h3>DebitTwoTech@gmail.com</h3>
					<div className={styles.SupportSocial}>
						<img
							src="/icon_facebook.svg"
							alt="Reverse Recipe Facebook Page"
						/>
						<img
							src="/icon_twitter.svg"
							alt="Reverse Recipe Twitter Page"
						/>
						<img
							src="/icon_pinterest.svg"
							alt="Reverse Recipe Pinterest Page"
						/>
					</div>
				</Card>
			</Section>
		</PageTemplate>
	);
};

export default Support;
