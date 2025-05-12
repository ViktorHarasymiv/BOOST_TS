import { useState } from "react";

import { fetchArticles } from "../services/articleService";
import { Article } from "../types/article";

import OrderForm from "./OrderForm";
import SearchForm from "./SearchForm";

import ArticleList from "./ArticleList";

export default function Trening() {
  {
    /* FORM */
  }
  const handleOrder = (data: string) => {
    console.log("Order received from:", data);
    // можна зберегти замовлення, викликати API, показати повідомлення тощо
  };

  /* HTTP */

  // 1. Оголошуємо і типізуємо стан
  const [articles, setArticles] = useState<Article[]>([]);

  // 2. Додаємо стан індикатора завантаження
  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      // 3. Скидаємо стан помилки в false перед кожним запитом
      setIsError(false);
      const data = await fetchArticles(topic);
      setArticles(data);
    } catch {
      // 4. Встановлюємо стан isError в true
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ width: "80vw", height: "670px", overflowY: "scroll" }}>
      <OrderForm onSubmit={handleOrder}></OrderForm>
      <SearchForm onSubmit={handleSearch}></SearchForm>
      {isLoading && <p>Loading data, please wait...</p>}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}
