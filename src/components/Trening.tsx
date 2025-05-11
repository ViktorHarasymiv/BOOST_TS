import OrderForm from "./OrderForm";

export default function Trening() {
  const handleOrder = (data: string) => {
    console.log("Order received from:", data);
    // можна зберегти замовлення, викликати API, показати повідомлення тощо
  };
  return (
    <div style={{ width: "80vw", height: "670px", overflowY: "scroll" }}>
      <OrderForm onSubmit={handleOrder}></OrderForm>
    </div>
  );
}
