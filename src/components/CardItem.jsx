import { Card, BadgeDelta, Flex, Metric, Text } from "@tremor/react";

const Carditem = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Продажа</Text>
        <BadgeDelta deltaType="moderateIncrease">+12.5%</BadgeDelta>
      </Flex>
      <Metric>₽ 98,74</Metric>
    </Card>
  );
};

export default Carditem;
