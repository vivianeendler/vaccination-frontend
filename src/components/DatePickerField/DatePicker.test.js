import { render } from "@testing-library/react";
import { Formik } from "formik";
import DatePickerField from "./index";

describe("DatePickerField", () => {
    it("Render DatePickerField", () => {
        render(
            <Formik>
                <DatePickerField />
            </Formik>,
        );
    });
});
