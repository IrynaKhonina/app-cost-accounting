import "./ConstItem.css";
import { CostDate } from "./CostDate";
import { Card } from "../UI/Card";
import {useState} from "react";

export type CostItemProps = {
    date: Date;
    description: string;
    amount: number;
};

export const CostItem = (props: CostItemProps) => {
    const { date, amount } = props;
    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () =>{
    setDescription ("New cost")
    }
    return (
        <Card className="cost-item">
            <CostDate date={date} />
            <div className="cost-item__description">.
                <h2>{description}</h2>
                <div className="cost-item__price">${amount}</div>
            </div>
            <button onClick={changeDescriptionHandler}>Изменить описание</button>
        </Card>
    );
};