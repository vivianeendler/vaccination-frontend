import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { setHours, setMinutes } from "date-fns";
import { Button } from "@mantine/core";
import DatePickerField from "../DatePickerField";
import schema from "./validationSchema";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

const Basic = () => {
    const [value, setValue] = useState(setHours(setMinutes(new Date(), 0), 8));
    const [bornDate, setBornDate] = useState(new Date());
    return (
        <div>
            <h1>Agendar Horário</h1>

            <Formik
                validationSchema={schema}
                initialValues={{
                    dateTimeOption: "",
                    name: "",
                    bornDate: "",
                    email: "",
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors }) => (
                    <Form className="form-control">
                        <div>
                            <label htmlFor="dateTimeOption">
                                Dia e hora para agendamento
                            </label>
                            <DatePickerField
                                name="dateTimeOption"
                                className="input"
                                id="dateTimeOption"
                                selected={value}
                                onChange={(date) => setValue(date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                minTime={setHours(setMinutes(new Date(), 0), 8)}
                                maxTime={setHours(
                                    setMinutes(new Date(), 30),
                                    17,
                                )}
                                dateFormat="d, MMMM, yyyy h:mm aa"
                            />

                            {errors.dateTimeOption && (
                                <div className="error">
                                    {errors.dateTimeOption}
                                </div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <Field
                                className="input"
                                id="name"
                                name="name"
                                placeholder="Jane Doe"
                            />
                            {errors.name && (
                                <div className="error">{errors.name}</div>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                className="input"
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                            />
                            {errors.email && (
                                <div className="error">{errors.email}</div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="bornDate">Data de nascimento</label>
                            <DatePickerField
                                className="input"
                                id="bornDate"
                                name="bornDate"
                                selected={bornDate}
                                onChange={(date) => setBornDate(date)}
                                dateFormat="d, MMMM, yyyy"
                            />
                            {errors.bornDate && (
                                <div className="error">{errors.bornDate}</div>
                            )}
                        </div>
                        <div>
                            <Button className="button" type="submit">
                                Agendar
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Basic;
