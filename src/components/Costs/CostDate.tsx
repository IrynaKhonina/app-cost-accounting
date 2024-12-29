import "./CostDate.css"
type Props = {
    date: Date; // Добавляем тип для свойства date
};

export const CostDate = (props: Props) => {
    const { date } = props; // Извлекаем date из props

    const month = date.toLocaleDateString("ru-RU", { month: "long" });
    const year = date.getFullYear();
    const day = date.getDate().toString().padStart(2, "0");

    return (
        <div className="cost-date">
            <div className="cost-date__month">{month}</div>
            <div className="cost-date__year">{year}</div>
            <div className="cost-date__day">{day}</div>
        </div>
    );
};