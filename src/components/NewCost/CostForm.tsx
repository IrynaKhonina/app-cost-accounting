import React, { useState } from "react";
import "./CostForm.css";

export const CostForm: React.FC = () => {
    const [inputName, setInputName] = useState<string>("");
    const [inputAmount, setInputAmount] = useState<string>("");
    const [inputDate, setInputDate] = useState<string>("");

    const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(event.target.value);
    };

    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // Здесь можно добавить логику для обработки данных формы
    };


    const constData ={
        name: inputName,
        amount: inputAmount,
        date: new Date (inputDate)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-cost__controls">
                    <div className="new-cost__control">
                        <label>Название</label>
                        <input type="text" value={inputName} onChange={nameChangeHandler} />
                    </div>
                    <div className="new-cost__control">
                        <label>Сумма</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={inputAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className="new-cost__control">
                        <label>Дата</label>
                        <input
                            type="date"
                            min="2019-01-01"
                            max="2024-12-31"
                            value={inputDate}
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