import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    дата: "Январь 22",
    ЭкономАнализ: 2890,
    "Medical Visual Systems": 2338,
  },
  {
    дата: "Февраль 22",
    ЭкономАнализ: 2756,
    "Medical Visual Systems": 2103,
  },
  {
    дата: "Март 22",
    ЭкономАнализ: 3322,
    "Medical Visual Systems": 2194,
  },
  {
    дата: "Апрель 22",
    ЭкономАнализ: 3470,
    "Medical Visual Systems": 2108,
  },
  {
    дата: "Май 22",
    ЭкономАнализ: 3475,
    "Medical Visual Systems": 1812,
  },
  {
    дата: "Июнь 22",
    ЭкономАнализ: 3129,
    "Medical Visual Systems": 1726,
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
        categories={["ЭкономАнализ", "Medical Visual Systems"]}
        colors={["indigo", "cyan"]}
        valueFormatter={valueFormatter}
        showAnimation={true}
      />
    </Card>
  );
};

export default AreaChartComponent;
