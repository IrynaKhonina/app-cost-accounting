import "./Card.css";

type Props = {
    children?: React.ReactNode;
    className?: string; // Добавляем свойство className в тип Props
};

export const Card = (props: Props) => {
    const classes = `card ${props.className || ""}`; // Объединяем классы
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};