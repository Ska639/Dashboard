import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
  {
    city: "Продажи",
    rating: "33 370 ₽",
  },
  {
    city: "Сопровождение",
    rating: "13 491 ₽",
  },
  {
    city: "Реализация",
    rating: "4 744 ₽",
  },
  {
    city: "Эксп. продажи",
    rating: "1 521 ₽",
  },
  {
    city: "Развитие",
    rating: "1 020 ₽",
  },
  {
    city: "Реклама",
    rating: "759 ₽",
  },
];

const ScoreList = () => {
  return (
    <Card className="max-w-full">
      <Title>Загрузка отделов</Title>
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

export default ScoreList;
