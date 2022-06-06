import { Children, PropsWithChildren } from "react";
import styles from './LoginCard.module.scss';
import Col from "../Col";
import Row from "../Row";
import Button from "../Button";

interface ILoginButton {
    className?: string;
    href?: string;
    onClick?: () => void;
}

interface ILoginCard {
    className?: string;
    title?: string;
    loginButton?: ILoginButton;
}

const LoginCard = ({ 
	className,
    children,
    title,
    loginButton,
}: PropsWithChildren<ILoginCard>) => {

	return (
		<Row className={`${styles.Card} ${className}`}>
			<>
				<Col className={styles.title} xs={12}>
                    <h3>{title ?? 'LOGIN'}</h3>
				</Col>
				<Col className={styles.content} xs={12}>
					<>
                        {children}
                    </>
				</Col>
                <Col className={styles.controls} xs={12}>
                    <Button href={loginButton?.href ?? '#'} onClick={loginButton?.onClick}>
                        Log In
                    </Button>
                </Col>
			</>
		</Row>
	);
}

export default LoginCard;
