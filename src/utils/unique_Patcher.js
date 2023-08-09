import { generate_UniqueId } from "./uniqueGenerator";

const unique_Id_Patcher = (data) => {
  const { groups, terms } = data;
  groups.group_Id = generate_UniqueId("group");
  const id_Terms = terms.map((item) => {
    item.card_Id = generate_UniqueId("card");
    return item;
  });
  return { groups, terms: id_Terms };
};

export default unique_Id_Patcher;
