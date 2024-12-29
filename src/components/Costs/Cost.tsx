import "./ConstItem.css";
import { CostItem, CostItemProps } from "./ConstItem"; // Исправляем импорт

type CostProps = {
    costs: CostItemProps[]; // Массив объектов типа CostItemProps
};

export const Cost: React.FC<CostProps> = ({ costs }) => {
    return (
        <div>
            {costs.map((cost, index) => (
                <CostItem
                    key={index} // Уникальный ключ для каждого элемента
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                />
            ))}
        </div>
    );
};


