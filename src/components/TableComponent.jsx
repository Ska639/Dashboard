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
    name: "Кобяков Алексей Анатольевич",
    Role: "Исп. Директор",
    status: "Действующий",
  },
  {
    name: "Нагорная Александра Юрьевна",
    Role: "Звм. директора",
    status: "Действующий",
  },
  {
    name: "Ходынов Владимир Ильич",
    Role: "HR директор",
    status: "Действующий",
  },
  {
    name: "Евстафьев Валерий Александрович",
    Role: "Начальник отдела продаж",
    status: "Действующий",
  },
  {
    name: "Эдельгериев Руслан Сайд-Хусайнович",
    Role: "Пресс-атташе",
    status: "Действующий",
  },
  {
    name: "Воронцов Кирилл Михайлович",
    Role: "Начальник развития",
    status: "Действующий",
  },
  {
    name: "Малышев Николай Григорьевич",
    Role: "SMM-менеджер",
    status: "Действующий",
  },
];

const TableComponent = () => {
  return (
    <Card className="mt-2">
      <Title>Список сотрудников</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Ф.И.О.</TableHeaderCell>
            <TableHeaderCell>Должность</TableHeaderCell>
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
