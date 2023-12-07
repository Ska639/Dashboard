import React, { useState } from "react";
import {
  BadgeDelta,
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const stocks = [
  {
    name: "OZON",
    value: 10456,
    performance: "6.1%",
    deltaType: "увеличение",
  },
  {
    name: "ВУШ Холдинг",
    value: 5789,
    performance: "1.2%",
    deltaType: "умеренное увеличение",
  },
  {
    name: "АСТРА групп",
    value: 4367,
    performance: "2.3%",
    deltaType: "умеренное увеличение",
  },
  {
    name: "HeadHunter",
    value: 3421,
    performance: "0.5%",
    deltaType: "умеренное увеличение",
  },
  {
    name: "Яндекс",
    value: 1432,
    performance: "3.4%",
    deltaType: "уменьшение",
  },
];

const dataFormatter = (number) => {
  return "₽" + Intl.NumberFormat("us").format(number).toString();
};

const SalesItem = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const rub = 35555;
  const [variable, setVariable] = useState(rub);
  const handleClickCard = () => {
    setVariable(variable + 50);
  };

  return (
    <Card className="max-w-full mx-auto" onClick={handleClickCard}>
      <Flex className="space-x-0 flex-col lg:flex-row">
        <Title>Анализ</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant="solid">
            <Tab icon={ChartPieIcon}>Диаграмма</Tab>
            <Tab icon={ViewListIcon}>Список</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className="mt-8">Стоимость портфеля</Text>
      <Metric>{variable} ₽</Metric>
      <Divider />
      <Text className="mt-8">
        <Bold>Распределение активов</Bold>
      </Text>
      <Text>1 Класс активов - 5 Холдинг компаний</Text>
      {selectedIndex === 0 ? (
        <DonutChart
          data={stocks}
          valueFormatter={dataFormatter}
          showAnimation={true}
          category="value"
          index="name"
          className="mt-6"
        />
      ) : (
        <>
          <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
              <Bold>Акции</Bold>
            </Text>
            <Text>После транзакции</Text>
          </Flex>
          <List className="mt-4">
            {stocks.map((stock) => (
              <ListItem key={stock.name}>
                <Text>{stock.name}</Text>
                <Flex className="space-x-2" justifyContent="end">
                  <Text>
                    ₽ {Intl.NumberFormat("us").format(stock.value).toString()}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Flex className="mw-6 pt-4 border-t">
        <Button
          size="xs"
          variant="light"
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          Подробнее
        </Button>
      </Flex>
    </Card>
  );
};
export default SalesItem;
