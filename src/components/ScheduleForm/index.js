import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { setHours, setMinutes } from "date-fns";
import { Button } from "@mantine/core";

import DatePickerField from "../DatePickerField";
import schema from "./ValidationSchema";
import NewSchedule from "../../services/NewSchedule";

import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

const Basic = () => {
    const [value, setValue] = useState(setHours(setMinutes(new Date(), 0), 12));
    const [bornDate, setBornDate] = useState(new Date());
    return (
        <div>
            <h1>Agendar Horário</h1>

            <Formik
                validationSchema={schema}
                initialValues={{
                    scheduledTo: "",
                    name: "",
                    bornDate: "",
                    email: "",
                }}
                onSubmit={NewSchedule}
            >
                {({ errors }) => (
                    <Form className="form-control">
                        <div>
                            <label htmlFor="scheduledTo">
                                Dia e hora para agendamento
                            </label>
                            <DatePickerField
                                name="scheduledTo"
                                className="input"
                                id="scheduledTo"
                                selected={value}
                                onChange={(date) => setValue(date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                minTime={setHours(setMinutes(new Date(), 0), 8)}
                                maxTime={setHours(
                                    setMinutes(new Date(), 0),
                                    17,
                                )}
                                excludeTimes={[
                                    setHours(setMinutes(new Date(), 30), 8),
                                    setHours(setMinutes(new Date(), 30), 9),
                                    setHours(setMinutes(new Date(), 30), 10),
                                    setHours(setMinutes(new Date(), 30), 11),
                                    setHours(setMinutes(new Date(), 30), 12),
                                    setHours(setMinutes(new Date(), 30), 13),
                                    setHours(setMinutes(new Date(), 30), 14),
                                    setHours(setMinutes(new Date(), 30), 15),
                                    setHours(setMinutes(new Date(), 30), 16),
                                ]}
                                dateFormat="d, MMMM, yyyy h:mm aa"
                            />

                            {errors.scheduledTo && (
                                <div className="error">
                                    {errors.scheduledTo}
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
                                dateFormat="dd/MM/yyyy"
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
