import Table from "../../components/Table";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import { setHours, setMinutes } from "date-fns";
import { Pencil } from "tabler-icons-react";
import OpenModal from "./OpenModal";
import OrderTable from "../../utils/OrderTable";

import axios from "../../services/api";

const QueryModal = () => {
    const [value, setValue] = useState(setHours(setMinutes(new Date(), 0), 8));
    const [rows, setRows] = useState([]);
    const [modal, setModal] = useState({ opened: false, data: null });
    const [row, setRow] = useState([null]);

    const onClick = (row) => {
        setModal({ opened: !modal.opened });
        setRow(row);
    };

    const actions = [
        {
            leftIcon: <Pencil />,
            onClick: (row) => onClick(row),
        },
    ];
    const toggle = () => {
        setModal({ ...modal, opened: !modal.opened });
    };

    useEffect(() => {
        axios.get("/schedules").then((response) => setRows(response.data));
    }, []);
    rows.sort(OrderTable);
    return (
        <>
            <h1>Consultar agendamentos</h1>
            <label htmlFor="scheduledTo">Selecionar</label>
            <DatePicker
                id="scheduledTo"
                name="scheduledTo"
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
                    { key: "scheduledTo", value: "Horário" },
                    { key: "name", value: "Nome" },
                    { key: "bornDate", value: "Nascimento" },
                    { key: "email", value: "Email" },
                    { key: "status", value: "Status" },
                    { key: "observation", value: "Conclusão" },
                ]}
                rows={rows}
                actions={actions}
            />
            {modal.opened ? (
                <OpenModal opened={modal} toggle={toggle} schedule={row} />
            ) : null}
        </>
    );
};
export default QueryModal;
