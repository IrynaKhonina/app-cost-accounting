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
    return (
      <div className="cost-item">
        <div>{date.toISOString()}</div>
        <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${amount}</div>
        </div>
    </div>
    );
  }

