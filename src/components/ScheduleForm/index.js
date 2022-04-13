import { useState } from "react";
import DatePicker from "react-datepicker";
import { Formik, Field, Form } from "formik";
import { setHours, setMinutes } from "date-fns";
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
                    <label htmlFor="dateTimeOption">
                        Dia e hora para agendamento
                    </label>

                    <DatePicker
                        selected={value}
                        onChange={(date) => setValue(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        minTime={setHours(setMinutes(new Date(), 0), 8)}
                        maxTime={setHours(setMinutes(new Date(), 30), 17)}
                        dateFormat="d, MMMM, yyyy h:mm aa"
                    />
                    <br />
                    <label htmlFor="name">Nome</label>
                    <Field id="name" name="name" placeholder="Jane Doe" />
                    <br />
                    <label htmlFor="birthDate">Data de nascimento</label>

                    <DatePicker
                        selected={birthDate}
                        onChange={(date) => setBirthDate(date)}
                        dateFormat="d, MMMM, yyyy"
                    />
                    <br />
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />
                    <br />
                    <button type="submit">Agendar</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Basic;
