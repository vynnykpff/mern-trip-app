import styles from "./Timer.module.css";

interface IData {
    id: number;
    value: number;
    type: "hours" | "days" | "minutes" | "seconds";
}

const data: IData[] = [
    {value: 30, type: "days"},
    {value: 20, type: "hours"},
    {value: 15, type: "minutes"},
    {value: 10, type: "seconds"},
].reduce<IData[]>((accum, curr) => {
    return [...accum, {...curr, id: Math.random() * Date.now()}] as IData[];
}, []);

export const Timer = () => {
    return (
        <div className={styles.timerWrapper}>
            {data.map((item) => {
                return (
                    <div key={item.id} className={styles.timeline}>
                        <p className={styles.date}>{item.value}</p>
                        <p className={styles.nameDate}>{item.type}</p>
                    </div>
                );
            })}
        </div>
    );
};
