import React, { useState } from "react";
import { Text } from "./text";
import { SelectTypeText } from "../SelectTypeText/selectText";

// Определите структуру вашей истории
export default {
  title: "Components/TextWithSelect",
  component: Text,
};

// Создайте комбинированную историю
export const TextWithSelect = () => {
  const [selectedType, setSelectedType] = useState("normal");

  // Функция для обработки изменения типа текста
  const handleTypeChange = (newType: string) => {
    setSelectedType(newType);
  };

  return (
    <>
      <SelectTypeText onSelectTypeChange={handleTypeChange} />
      <Text font={selectedType} />
    </>
  );
};