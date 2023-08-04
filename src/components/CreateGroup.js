import React from "react";
import { FieldInput } from "../components/design/InputField";
import { Field } from "formik";
import { AiFillFileImage } from "react-icons/ai";
import { Button } from "../components/design/Button";

export function CreateGroup({ values, setFieldValue }) {
  return (
    <div className="bg-white shadow-md md:p-10 p-5 rounded-md sm:p-5">
      <div
        className={`flex items-end gap-5 mb-5 sm:flex-row flex-col flex-wrap`}
      >
        <FieldInput
          name={`groups.group`}
          id={"group"}
          htmlFor={"group"}
          label={"Create Group"}
          placeholder={"Enter Group Name "}
        />

        <div>
          <Button
            type={"button"}
            btnclass={
              "border-2 rounded-md min-w-max font-semibold text-lg px-6 py-2"
            }
            text={
              <>
                <label
                  htmlFor="profile"
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <AiFillFileImage className="text-blue-700" />
                  {values.groups.Profile ? "Change" : "Upload"} Image
                  <Field
                    type="file"
                    id="profile"
                    name={`groups.profile`}
                    hidden
                    value=""
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.readAsDataURL(file);

                      reader.onload = () => {
                        setFieldValue("groups.Profile", reader.result);
                      };
                    }}
                  />
                </label>
              </>
            }
          />
        </div>
        {values.groups.Profile && (
          <>
            <div className="flex items-center gap-5">
              <img
                className="w-20 aspect-square rounded-md"
                src={values.groups.Profile}
                alt="card_profile"
                loading="lazy"
              />
              <Button
                type="button"
                btnclass={"font-semibold text-blue-700 mt-5"}
                fn={() => setFieldValue("groups.Profile", null)}
                text={"- Remove"}
                list
              />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor="groupDescription"
          className="font-semibold text-gray-500"
        >
          Add Description
        </label>
        <Field
          as="textarea"
          name={`groups.groupDesc`}
          id="groupDescription"
          maxLength="500"
          placeholder="Enter description "
          className="p-2 text-lg border-2 rounded-md h-36 resize-none"
        />
      </div>
    </div>
  );
}
