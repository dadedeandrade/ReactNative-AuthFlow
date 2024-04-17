import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Details = () => {
  //mock data
  const selectedAnimal = {
    id: "2",
    categoryId: "3",
    name: "Oriental",
    age: 10,
    img: "http://loremflickr.com/640/480/animals?lock=2",
    description:
      "Etiam eget nulla facilisis lectus fringilla imperdiet. Mauris ut cursus dolor.",
    phone: "+55 92 7298-2520",
    email: "kwilliams@yahoo.com",
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 15,
              }}
              resizeMode="cover"
              source={{ uri: selectedAnimal.img }}
            ></Image>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.animalDetails}>
              <Text style={styles.animalDetails__name}>
                {selectedAnimal.name}
              </Text>
              <Text style={styles.animalDetails__age}>
                {selectedAnimal.age} Anos
              </Text>
              <Text style={styles.animalDetails__description}>
                {selectedAnimal.description}
              </Text>
            </View>
            <View style={styles.getInTouch}>
              <Text style={styles.getInTouch__text}>
                Gostou desse bichinho?{"\n"}Entre em contato e adote-o agora
                {"\n"}💜💜
              </Text>
              <View style={styles.getInTouch__email__container}>
                <Ionicons name="mail" size={24} color="black" />
                <Text style={styles.getInTouch__email__text}>
                  {selectedAnimal.email}
                </Text>
              </View>
              <View style={styles.getInTouch__phone__container}>
                <Ionicons name="call" size={24} color="black" />
                <Text style={styles.getInTouch__phone__text}>
                  {selectedAnimal.phone}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "30%",
    paddingVertical: 20,
  },
  detailsContainer: {
    height: "70%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FBE8FF",
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    paddingVertical: 20,
  },
  animalDetails: {},
  animalDetails__name: {
    fontSize: 18,
    fontWeight: "700",
  },
  animalDetails__age: {
    fontSize: 15,
    fontWeight: "500",
  },
  animalDetails__description: {},
  getInTouch: {
    width: "80%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  getInTouch__text: { marginBottom: 20, fontSize: 18, fontWeight: "700" },
  getInTouch__phone__container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  getInTouch__phone__text: {},
  getInTouch__email__container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  getInTouch__email__text: {},
});
