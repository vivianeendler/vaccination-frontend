import Table from "../../components/Table";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import { setHours, setMinutes, addHours } from "date-fns";
import { Pencil } from "tabler-icons-react";
import OpenModal from "./OpenModal";
import OrderTable from "../../utils/OrderTable";

import axios from "../../services/api";
async function getResults(rows, setRows) {
    if (localStorage.getItem("rows")) {
        setRows(JSON.parse(localStorage.getItem("rows")));
    } else {
        try {
            const { data, status } = await axios.get("/schedules");
            if (status === 200) return data;
        } catch (error) {
            console.log(error);
        }
    }
}

const QueryModal = () => {
    const [value, setValue] = useState(null);
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

    function isDateTime(values) {
        const selectedDateTime = addHours(value, -3).toISOString();
        return values.scheduledTo === selectedDateTime;
    }
    const handleGetResults = async () => {
        setRows(await getResults(rows, setRows));
    };
    useEffect(() => {
        if (localStorage.getItem("rows")) {
            setRows(JSON.parse(localStorage.getItem("rows")));
        } else {
            handleGetResults();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("rows", JSON.stringify(rows));
    }, [rows]);
    rows.sort(OrderTable);

    return (
        <>
            <h1>Consultar agendamentos</h1>
            <label htmlFor="scheduledTo">Selecionar</label>
            <DatePicker
                id="scheduledTo"
                name="scheduledTo"
                isClerable
                selected={value}
                onChange={(date) => setValue(date)}
                showTimeSelect
                timeFormat="HH:mm"
                minTime={setHours(setMinutes(new Date(), 0), 8)}
                maxTime={setHours(setMinutes(new Date(), 0), 17)}
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

            <Table
                columns={[
                    { key: "scheduledTo", value: "Horário" },
                    { key: "name", value: "Nome" },
                    { key: "bornDate", value: "Nascimento" },
                    { key: "email", value: "Email" },
                    { key: "status", value: "Status" },
                    { key: "observation", value: "Conclusão" },
                ]}
                rows={value ? rows.filter(isDateTime) : rows}
                actions={actions}
            />
            {modal.opened ? (
                <OpenModal opened={modal} toggle={toggle} schedule={row} />
            ) : null}
        </>
    );
};
export default QueryModal;
