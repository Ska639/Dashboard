import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
  {
    city: "Проектная документация",
    rating: "18шт",
  },
  {
    city: "Реестр счетов",
    rating: "21шт",
  },
  {
    city: "Реализация",
    rating: "55шт",
  },
  {
    city: "Экспортные продажи",
    rating: "90шт",
  },
  {
    city: "Развитие",
    rating: "3шт",
  },
  {
    city: "Планы проекта",
    rating: "17шт",
  },
  {
    city: "Отчеты по проектам",
    rating: "45шт",
  },
  {
    city: "Кадровые документы",
    rating: "90шт",
  },

  {
    city: "Политики и процедуры",
    rating: "73шт",
  },
  {
    city: "Бухгалтерские отчеты",
    rating: "117шт",
  },
  {
    city: "Налоговая отчетность",
    rating: "122шт+",
  },
];

const Documents = () => {
  return (
    <Card className="max-w-full">
      <Title>Документы</Title>
      <List>
        {cities.map((item) => (
          <ListItem key={item.city}>
            <span>{item.city}</span>
            <span>{item.rating}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Documents;
