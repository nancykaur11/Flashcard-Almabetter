import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { CreateGroup } from "../components/CreateGroup";
import { CreateTerm } from "../components/CreateTeam";
import { flashcardSchema } from "../validation/CardScheme";
import { Toast } from "../components/design/Popup";
import { Button } from "../components/design/Button";

export function CreateFlashcard() {
  const [toast, setToast] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 2000);
  };

  return (
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

            <CreateGroup values={values} setFieldValue={setFieldValue} />

            <CreateTerm setFieldValue={setFieldValue} values={values} />
          </section>

          <div className="mx-auto text-center">
            <Button
              data-testid="submit-form"
              disabled={!(isValid)}
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
