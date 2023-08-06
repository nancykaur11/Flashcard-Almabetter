import * as Yup from "yup";

export const flashcardSchema = Yup.object().shape({
  groups: Yup.object().shape({
    group_Id: Yup.string().required(),
    group: Yup.string()
      .min(2, "Minimum character length is 2")
      .max(20, "You have reached the max length")
      .required("Required"),
  }),

  terms: Yup.array(
    Yup.object().shape({
      card_Id: Yup.string().required(),
      term: Yup.string()
        .min(10, "Minimum character length is 10")
        .max(200, "You have reached the max length")
        .required("Required"),

      defination: Yup.string()
        .min(10, "Minimum character length is 10")
        .max(2000, "You have reached the max length")
        .required("Required"),
    })
  ),
});
