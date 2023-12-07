import { BarChart, Card, Title, Subtitle } from "@tremor/react";

const chartdata = [
  {
    name: "Ozon",
    "Общая выручка": 2488,
  },
  {
    name: "WOOSH",
    "Общая выручка": 1445,
  },
  {
    name: "HeadHunter",
    "Общая выручка": 743,
  },
  {
    name: "Астра Групп",
    "Общая выручка": 281,
  },
  {
    name: "Яндекс",
    "Общая выручка": 251,
  },
  {
    name: "Wildberries",
    "Общая выручка": 232,
  },
  {
    name: "Algae",
    "Общая выручка": 98,
  },
];

const valueFormatter = (number) =>
  `${new Intl.NumberFormat("us").format(number).toString()} млн. ₽ `;

const GraphicsTotal = () => (
  <Card>
    <Title>Общая выручка за квартал</Title>
    <Subtitle>
      {/* The IUCN Red List has assessed only a small share of the total known
      species in the world. */}
    </Subtitle>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Общая выручка"]}
      colors={["blue"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
    />
  </Card>
);

export default GraphicsTotal;
