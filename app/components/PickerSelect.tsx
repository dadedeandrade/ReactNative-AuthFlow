import React from "react";
import { StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface CustomPickerProps {
  placeholderText: string;
  items: any[];
  onValueChange: (value: any, index: number) => void;
}

const PickerSelect = ({
  placeholderText,
  items,
  onValueChange,
}: CustomPickerProps) => {
  const pickerStyles = {
    inputIOS: styles.pickerInput,
    inputAndroid: styles.pickerInput,
    placeholder: { color: "purple" },
  };
  const placeholder = {
    label: placeholderText,
    value: null,
    color: "#9EA0A4",
  };

  return (
    <>
      <RNPickerSelect
        placeholder={placeholder}
        style={pickerStyles}
        onValueChange={onValueChange}
        items={items}
      />
    </>
  );
};
const styles = StyleSheet.create({
  pickerInput: {
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "#FBE8FF",
    borderWidth: 1,
    color: "purple",
    marginVertical: 15,
  },
});

export default PickerSelect;
