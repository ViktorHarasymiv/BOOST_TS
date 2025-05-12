interface SearchFormProps {
  onSubmit: (value: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;

    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (topic === "") {
      alert("Please enter search topic!");
      return;
    }

    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля
    onSubmit(topic);
  };
  return (
    <>
      <h2>HTTP TS</h2>

      <form action={handleSubmit}>
        <input type="text" name="topic" />
        <button type="submit" style={{ marginLeft: "20px" }}>
          Search
        </button>
      </form>

      <h3>Що тут важливо:</h3>
      <b style={{ display: "block", maxWidth: "600px" }}>
        Обов’язково типізуємо відповідь від бекенду. <br />
        Для цього створюємо два інтерфейси: Article - описує один об’єкт статті.
        Не потрібно типізувати всі поля з бекенду - тільки ті, які ми реально
        використовуємо. <br /> ArticlesHttpResponse - описує об’єкт відповіді
        від API (властивість response.data), в якому нас поки що цікавить тільки
        властивість hits, масив об’єктів типу Article. <br /> Підсумок
        <br /> HTTP-запити виконуємо в батьківському компоненті, не в формі.
        Дані з форми передаються через callback-пропс. Дані відповіді типізуємо
        окремо, це дає підказки та захист від помилок.
      </b>
      <p>
        <b>
          Ми застосували типову схему роботи з HTTP-запитами у React: <br />{" "}
          Запустили запит за подією (сабміт форми). <br /> Типізували відповідь
          від бекенду (ArticlesHttpResponse). <br /> Зберегли отримані дані у
          стан (useState). Вивели JSX-розмітку на основі цього стану.
        </b>
      </p>
      <p>
        <b>
          ! 🧠 Завжди, коли хочете показати на екрані дані від бекенда, вам
          потрібно: <br /> 1. Отримати ці дані (наприклад, з API). <br /> 2.
          Зберегти їх у стані (useState) 3. Рендерити JSX на основі цього стану
        </b>
      </p>
    </>
  );
}
