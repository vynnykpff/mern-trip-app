import styles from "./ProfileHeader.module.css";
import {FC} from "react";

type ProfileHeaderProps = {
	headerTitle: string;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({headerTitle}) => {
	return (
		<header className={styles.header}>
			<h4 className={styles.title}>{headerTitle}</h4>
		</header>
	);
};
