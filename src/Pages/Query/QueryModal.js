import Table from "../../components/Table";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { setHours, setMinutes } from "date-fns";
const rows = [
    {
        nome: "Viviane",
        nascimento: "17/03/1997",
        email: "viviane@viviane",
        horario: "17/03/22 14:30",
    },
];

const QueryModal = () => {
    const [value, setValue] = useState(setHours(setMinutes(new Date(), 0), 8));
    return (
        <>
            <h1>Consultar agendamentos</h1>
            <label htmlFor="dateTimeOption">Selecionar</label>
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

            <Table
                columns={[
                    { key: "horario", value: "Horário" },
                    { key: "nome", value: "Nome" },
                    { key: "nascimento", value: "Nascimento" },
                    { key: "email", value: "Email" },
                ]}
                rows={rows}
            />
        </>
    );
};
export default QueryModal;
