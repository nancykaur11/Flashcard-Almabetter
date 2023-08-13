import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { CreateGroup } from "../components/CreateGroup";
import { CreateTerm } from "../components/CreateTeam";
import { flashcardSchema } from "../validation/CardScheme";
import { Toast } from "../components/design/Toast";
import { Button } from "../components/design/Button";
import { useDispatch } from "react-redux";
import { add } from "../store/features/cards";

export function CreateFlashcard() {
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(add(values));
    resetForm();
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 2000);
    //  toast message
  };

  return (
    // Formik wrapper for handling form state and validation
    <Formik
      initialValues={{
        groups: {
          group: "",
          groupDesc: "",
          Profile: null,
        },
        terms: [
          {
            term: "",
            defination: "",
            image: null,
          },
        ],
      }}
      validationSchema={flashcardSchema}
      onSubmit={handleSubmit}
      validateOnMount
    >
      {({ values, isValid, setFieldValue, dirty }) => (
        <Form autoComplete="false">
          <section className="mb-10 flex flex-col gap-10">
            {toast && (
              <Toast
                fn={() => setToast(false)}
                toastClass={!toast ? "-translate-y-96" : "translate-y-0"}
              />
            )}
            {/* Component to create flashcard group */}
            <CreateGroup values={values} setFieldValue={setFieldValue} />
            {/* Component to create flashcard term*/}
            <CreateTerm setFieldValue={setFieldValue} values={values} />
          </section>

          <div className="mx-auto text-center">
            {/* Button to submit the form */}
            <Button
              data-testid="submit-form"
              disabled={!isValid}
              type="submit"
              btnclass={`font-semibold rounded-md text-white text-xl px-14 py-4 ${
                !isValid ? "bg-red-200" : "bg-red-600"
              }`}
              text={"Create Flashcard"}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
