import styles from './Button.module.css';
import {FC, HTMLAttributes} from "react";
import cn from "classnames";

type Props = HTMLAttributes<HTMLButtonElement>

export const LargeButton: FC<Props> = ({children, className, ...props}) => {
	return (
		<button {...props} className={cn(styles.button, className)}>
			{children}
		</button>
	);
};
