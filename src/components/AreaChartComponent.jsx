import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    дата: "Январь 22",
    План: 3200,
    Факт: 2338,
  },
  {
    дата: "Февраль 22",
    План: 2756,
    Факт: 2103,
  },
  {
    дата: "Март 22",
    План: 3322,
    Факт: 2194,
  },
  {
    дата: "Апрель 22",
    План: 3470,
    Факт: 2108,
  },
  {
    дата: "Май 22",
    План: 3475,
    Факт: 1812,
  },
  {
    дата: "Июнь 22",
    План: 3129,
    Факт: 1726,
  },
];

const valueFormatter = function (number) {
  return "₽" + new Intl.NumberFormat("us").format(number).toString();
};
const AreaChartComponent = () => {
  return (
    <Card className="mt-2">
      <Title>Доход от рассылки новостей с течением времени (RUB)</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["План", "Факт"]}
        colors={["indigo", "cyan"]}
        valueFormatter={valueFormatter}
        showAnimation={true}
      />
    </Card>
  );
};

export default AreaChartComponent;
