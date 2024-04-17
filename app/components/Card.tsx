import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { AnimalDetails } from "../services/useAnimals";
import { useNavigation } from "@react-navigation/native";

interface CardProps {
  animal: AnimalDetails;
}

const Card = ({ animal }: CardProps) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Details", { selectedAnimal: animal })}
    >
      <View style={styles.card}>
        <Image
          style={{
            width: "30%",
            height: "auto",
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          }}
          resizeMode="cover"
          source={{ uri: animal.img }}
        ></Image>
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 16 }}>{animal.name}</Text>
          <Text>{animal.age} Anos</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 110,
    borderRadius: 15,
  },
});
