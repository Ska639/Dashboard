import { Card, BadgeDelta, Flex, Metric, Text } from "@tremor/react";

import { useState } from "react";

const Carditem = () => {
  const rub = 98.65;
  const [variable, setVariable] = useState(rub);

  const handleClickCard = () => {
    setVariable(variable + 1);
  };

  return (
    <Card
      className="w-xs"
      decoration="top"
      decorationColor="indigo"
      onClick={handleClickCard}
    >
      <Flex justifyContent="between" alignItems="center">
        <Text>Продажа</Text>
        <BadgeDelta deltaType="moderateIncrease">+12.5%</BadgeDelta>
      </Flex>
      <Metric>{variable} ₽</Metric>
    </Card>
  );
};

export default Carditem;
