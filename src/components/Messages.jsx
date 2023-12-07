import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
  {
    city: "Продажи",
    rating: "8",
  },
  {
    city: "Сопровождение",
    rating: "11",
  },
  {
    city: "Реализация",
    rating: "7",
  },
  {
    city: "Эксппортные продажи",
    rating: "6",
  },
  {
    city: "Развитие",
    rating: "50",
  },
  {
    city: "Реклама",
    rating: "1190",
  },
  {
    city: "Юриспруденция",
    rating: "33",
  },
  {
    city: "Логистика",
    rating: "45",
  },

  {
    city: "HR-отдел",
    rating: "88",
  },
  {
    city: "Проектные планы",
    rating: "28",
  },
  {
    city: "Предстоящий корпоратив",
    rating: "1",
  },
];

const Messages = () => {
  return (
    <Card className="max-w-full">
      <Title>Сообщения</Title>
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

export default Messages;
