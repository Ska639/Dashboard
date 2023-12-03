import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";

const data = [
  {
    name: "Кобяков Антон Анатольевич",
    Role: "Помощник Президента РФ",
    departement:
      "Советник по вопросам внешней политики и международных отношений",
    status: "Действующий",
  },
  {
    name: "Левицкая Александра Юрьевна",
    Role: "Помощник Президента РФ",
    departement: "Советник по вопросам экономического и социального развития",
    status: "Действующий",
  },
  {
    name: "Толстой Владимир Ильич",
    Role: "Помощник Президента РФ",
    departement: "Советник по вопросам культуры и искусства",
    status: "Действующий",
  },
  {
    name: "Фадеев Валерий Александрович",
    Role: "Помощник Президента РФ",
    departement:
      "Советник по развитию институтов гражданского общества и правам человека",
    status: "Действующий",
  },
  {
    name: "Эдельгериев Руслан Сайд-Хусайнович",
    Role: "Помощник Президента РФ",
    departement: "Советник по вопросам изменения климата",
    status: "Действующий",
  },
  {
    name: "Воронцов Юлий Михайлович",
    Role: "Помощник Президента РФ",
    departement: "Советник по вопросам внешней политики",
    status: "Действующий",
  },
  {
    name: "Малышев Николай Григорьевич",
    Role: "Помощник Президента РФ",
    departement: "Советник по вопросам науки и высшей школы",
    status: "Действующий",
  },
];

const TableComponent = () => {
  return (
    <Card className="mt-2">
      <Title>Список федеральных советников Российской Федерации</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Ф.И.О.</TableHeaderCell>
            <TableHeaderCell>Положение</TableHeaderCell>
            <TableHeaderCell>Отдел</TableHeaderCell>
            <TableHeaderCell>Статус</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.Role}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.departement}</Text>
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={StatusOnlineIcon}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableComponent;
