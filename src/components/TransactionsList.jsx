import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
  {
    city: "Продажи",
    rating: "28",
  },
  {
    city: "Сопровождение",
    rating: "60",
  },
  {
    city: "Реализация",
    rating: "7",
  },
  {
    city: "Экспортные продажи",
    rating: "99",
  },
  {
    city: "Развитие",
    rating: "10",
  },
  {
    city: "Реклама",
    rating: "119",
  },
  {
    city: "Юриспруденция",
    rating: "31",
  },
  {
    city: "HR",
    rating: "48",
  },

  {
    city: "Логистика",
    rating: "65",
  },
  {
    city: "Проектные планы",
    rating: "20",
  },
  {
    city: "Аналитика",
    rating: "39",
  },
];

const TransactionList = () => {
  return (
    <Card className="max-w-full">
      <Title>Транзакции</Title>
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

export default TransactionList;
