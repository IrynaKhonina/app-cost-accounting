 import "./Constitem.css"

 type CostItemProps = {
     date: Date;
     description: string;
     amount: number;
 };


export const ConstItem = (props: CostItemProps) => {
    const {
        date,
        description,
        amount,
    } = props

    const month =date.toLocaleDateString("ru-RU", {month: "long"})
    const year=date.getFullYear()
    const day = date.getDate().toString().padStart(2, "0");
    return (
      <div className="cost-item">
          <div>
              <div>{month}</div>
              <div>{year}</div>
              <div>{day}</div>
          </div>
          <div className="cost-item__description">
              <h2>{description}</h2>
              <div className="cost-item__price">${amount}</div>
          </div>
    </div>
    );
  }

