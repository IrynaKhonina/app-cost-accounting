import "./ConstItem.css";
import { CostDate } from "./CostDate";
import { Card } from "../UI/Card";

export type CostItemProps = {
    date: Date;
    description: string;
    amount: number;
};

export const CostItem = (props: CostItemProps) => {
    const { date, description, amount } = props;
    const changeDiscriptionHandler = () =>{

    }
    return (
        <Card className="cost-item">
            <CostDate date={date} />
            <div className="cost-item__description">.
                <h2>{description}</h2>
                <div className="cost-item__price">${amount}</div>
            </div>
            <button onClick={changeDiscriptionHandler}>Изменить описание</button>
        </Card>
    );
};