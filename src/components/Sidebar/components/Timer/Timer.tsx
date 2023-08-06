import styles from "./Timer.module.css";
import {useContext} from "react";
import {homePageContext} from "@/pages/HomePage/HomePageContext.tsx";
import {getDifferenceBeetwenDates} from "@/helpers/getDifferenceBeetwenDates.ts";

export const Timer = () => {
	const [contextState] = useContext(homePageContext);

	if (!contextState.currentCity) {
      return null
  };

  const data = getDifferenceBeetwenDates(new Date(contextState.currentCity.startDate));

	return (
		<div className={styles.timerWrapper}>
			{Object.keys(data).map((item) => {
				return (
					<div key={item} className={styles.timeline}>
						<p className={styles.date}>{data[item as keyof typeof data]}</p>
						<p className={styles.nameDate}>{item}</p>
					</div>
				);
			})}
		</div>
	);
};
