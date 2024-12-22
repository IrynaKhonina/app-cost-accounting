import React from "react";
import { ConstItem, CostItemProps } from "./ConstItem"; // Импортируем тип CostItemProps

// Определяем тип для массива costs
type CostProps = CostItemProps;

// Определяем тип для props компонента Cost
type Props = {
    costs: CostProps[]; // Массив объектов типа Cost
};


export const Cost: React.FC<Props> = ({ costs }) => {
    return (
        <div>
            {/* Используем map для динамического рендеринга всех элементов массива costs */}
            {costs.map((cost, index) => (
                <ConstItem
                    key={index} // Уникальный ключ для каждого элемента
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                />
            ))}


            {/*<ConstItem*/}
            {/*    date={costs[0].date}*/}
            {/*    description={costs[0].description}*/}
            {/*    amount={costs[0].amount}*/}
            {/*/>*/}
            {/*<ConstItem*/}
            {/*    date={costs[1].date}*/}
            {/*    description={costs[1].description}*/}
            {/*    amount={costs[1].amount}*/}
            {/*/>*/}
            {/*<ConstItem*/}
            {/*    date={costs[2].date}*/}
            {/*    description={costs[2].description}*/}
            {/*    amount={costs[2].amount}*/}
            {/*/>*/}
        </div>
    );
};