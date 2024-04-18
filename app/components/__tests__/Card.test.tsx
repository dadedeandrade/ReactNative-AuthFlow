import React from "react";
import { create, type ReactTestRendererJSON } from "react-test-renderer";
import Card from "../Card";
import { AnimalDetails } from "../../services/useSelectedAnimals";
import renderer from "react-test-renderer";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("src/components/LinkButton", () => {
  const fakeAnimal: AnimalDetails = {
    age: 1,
    categoryId: 1,
    id: "1",
    img: "",
    name: "",
    description: "",
    email: "",
    phone: "",
  };

  const CardComponent = <Card animal={fakeAnimal} key={1} />;
  test("renders correctly", () => {
    const Card = renderer.create(CardComponent).toJSON() as any;
    expect(Card).toBeTruthy();
    expect(Card.type).toBe("View");
    expect(Card.children[0].type).toBe("Image");
    expect(Card.children[1].type).toBe("View");
    expect(Card.children[1].children[0]).toBe("Text");
    expect(Card.children[1].children[1]).toBe("Text");
  });
});
