import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import useCategories from "../services/useCategories";

import useAnimals from "../services/useAnimals";
import Card from "../components/Card";
import PickerSelect from "../components/PickerSelect";

const Home = () => {
  const { categories, isCategoriesError, isCategoriesLoading } =
    useCategories();
  const { animals, isAnimalsError, isAnimalsLoading } = useAnimals();

  if (isCategoriesLoading) {
    <View>
      <Text>Algo deu errado :( tente sair e entrar novamente no app</Text>
    </View>;
  }

  if (isCategoriesError || isAnimalsError) {
    return (
      <View>
        <Text>Algo deu errado :( tente sair e entrar novamente no app</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.categorieContainer}>
          <Text style={styles.categorieContainer__title}>HOME</Text>
          <Text style={styles.categorieContainer__subtitle}>
            Escolha uma categoria para visualizar
          </Text>
          {categories && (
            <PickerSelect
              placeholderText="Clique aqui para escolher uma categoria"
              items={categories.map((el) => {
                return { label: el.name, value: el.name, key: el.id };
              })}
              onValueChange={(value) => console.log(value)}
            />
          )}
        </View>
        <View style={styles.searchResults_container}>
          <View style={styles.searchResults_content}>
            <Text style={styles.searchResults_text}>Resultados da busca:</Text>

            {animals &&
              animals.map((el) => {
                return <Card key={el.name} animal={el} />;
              })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 40,
  },

  categorieContainer: {
    width: "80%",
  },
  categorieContainer__title: {
    fontSize: 18,
    fontWeight: "700",
  },
  categorieContainer__subtitle: {
    fontSize: 15,
    fontWeight: "500",
  },
  searchResults_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBE8FF",
  },
  searchResults_content: {
    width: "80%",
    gap: 10,
    marginVertical: 40,
  },
  searchResults_text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#AC13CA",
    marginBottom: 10,
  },
});
