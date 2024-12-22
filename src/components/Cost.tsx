import React from "react";
import { ConstItem, CostItemProps } from "./ConstItem"; // Импортируем тип CostItemProps

// Определяем тип для массива costs
type Cost = CostItemProps;

// Определяем тип для props компонента Cost
type Props = {
    costs: Cost[]; // Массив объектов типа Cost
};


export const Cost: React.FC<Props> = ({ costs }) => {
    return (
        <div>
            <ConstItem
                date={costs[0].date}
                description={costs[0].description}
                amount={costs[0].amount}
            />
            <ConstItem
                date={costs[1].date}
                description={costs[1].description}
                amount={costs[1].amount}
            />
            <ConstItem
                date={costs[2].date}
                description={costs[2].description}
                amount={costs[2].amount}
            />
        </div>
    );
};