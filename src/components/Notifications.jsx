import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
  {
    city: "Продажа +12.5 млн.₽",
    rating: "7мин. назад",
  },
  {
    city: "Продажа +10.1 млн.₽",
    rating: "5 часов назад",
  },
  {
    city: "Покупка -20.3 млн.₽",
    rating: "23 дня назад",
  },
];

const Notifications = () => {
  return (
    <Card className="max-w-full">
      <Title>Уведомления</Title>
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

export default Notifications;
