import PickerSelect from "../PickerSelect";
import renderer from "react-test-renderer";

let fakeItems = [
  {
    name: "Weimaraner",
    id: "1",
    key: "1",
  },
  {
    name: "English Springer Spaniel",
    id: "2",
    key: "1",
  },
];

const PickerSelectComponent = (
  <PickerSelect
    items={fakeItems}
    placeholderText="teste"
    onValueChange={() => {}}
    key={0}
  />
);

describe("src/components/PickerSelect", () => {
  test("renders correctly", () => {
    const Picker = renderer.create(PickerSelectComponent).toJSON() as any;

    expect(Picker).toBeTruthy();

    expect(Picker.type).toBe("View");
    expect(Picker.children[0].type).toBe("View");
    expect(Picker.children[0].children[0].children[0].type).toBe("TextInput");
  });
});
