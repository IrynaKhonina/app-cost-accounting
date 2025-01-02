import React, { useState } from "react";
import "./CostForm.css";

export const CostForm: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [date, setDate] = useState<string>("");

    const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ name, amount, date });
        // Здесь можно добавить логику для обработки данных формы
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-cost__controls">
                    <div className="new-cost__control">
                        <label>Название</label>
                        <input type="text" value={name} onChange={nameChangeHandler} />
                    </div>
                    <div className="new-cost__control">
                        <label>Сумма</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={amount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className="new-cost__control">
                        <label>Дата</label>
                        <input
                            type="date"
                            min="2019-01-01"
                            max="2024-12-31"
                            value={date}
                            onChange={dateChangeHandler}
                        />
                    </div>
                    <div className="new-cost__actions">
                        <button type="submit">Добавить расход</button>
                    </div>
                </div>
            </form>
        </div>
    );
};