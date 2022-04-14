import { useState } from "react";
import DatePicker from "react-datepicker";
import { Formik, Form } from "formik";
import { setHours, setMinutes } from "date-fns";
import { Button, Input } from "@mantine/core";
import "react-datepicker/dist/react-datepicker.css";

const Basic = () => {
    const [value, setValue] = useState(setHours(setMinutes(new Date(), 0), 8));
    const [birthDate, setBirthDate] = useState(new Date());
    return (
        <div>
            <h1>Agendar Horário</h1>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="dateTimeOption">
                            Dia e hora para agendamento
                        </label>

                        <DatePicker
                            id="dateTimeOption"
                            name="dateTimeOption"
                            selected={value}
                            onChange={(date) => setValue(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            minTime={setHours(setMinutes(new Date(), 0), 8)}
                            maxTime={setHours(setMinutes(new Date(), 30), 17)}
                            dateFormat="d, MMMM, yyyy h:mm aa"
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <Input id="name" name="name" placeholder="Jane Doe" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="birthDate">Data de nascimento</label>
                        <DatePicker
                            id="birthDate"
                            name="birthDate"
                            selected={birthDate}
                            onChange={(date) => setBirthDate(date)}
                            dateFormat="d, MMMM, yyyy"
                        />
                    </div>
                    <div>
                        <Button type="submit">Agendar</Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Basic;
