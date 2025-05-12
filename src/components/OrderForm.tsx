interface OrderFormProps {
  onSubmit: (value: string) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    onSubmit(username);
  };
  return (
    <>
      <h2>FORM TS</h2>
      <form action={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit" style={{ marginLeft: "20px" }}>
          Place order
        </button>
      </form>

      <h3>Що тут важливо:</h3>
      <b style={{ display: "block", maxWidth: "600px" }}>
        OrderForm не знає, що буде з даними - вона просто викликає
        onSubmit(data) Компонент форми не залежить від того, як саме
        обробляються дані - це зовнішня відповідальність. <br /> Код стає
        чистішим: форма не має логіки, яку вона не повинна знати.
      </b>
    </>
  );
}
