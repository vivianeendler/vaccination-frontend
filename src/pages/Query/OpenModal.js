import { Modal, Textarea, Button, Select } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

import axios from "../../services/api";
import { useState } from "react";

const QueryModal = ({ opened, toggle, schedule }) => {
    const [form, setForm] = useState(schedule);
    const onChange = (event) => {
        setForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };
    const onSubmit = async () => {
        const { _id } = schedule;
        const update = {
            status: form.status,
            observation: form.observation,
        };
        try {
            await axios.put(`/schedule/${_id}`, update);
            if (localStorage.getItem("rows")) {
                localStorage.clear();
            }
            showNotification({
                color: "green",
                message: "Status atualizado com sucesso",
                title: "Successo",
            });
        } catch (error) {
            console.log(error);
            showNotification({
                color: "red",
                message: error.response?.data?.message,
                title: "Erro",
            });
        }
        toggle();
    };

    return (
        <Modal
            opened={opened}
            onClose={toggle}
            size="60%"
            title="Alterar Status"
        >
            <Select
                data={[
                    { label: "Não Atendido", value: "Não Atendido" },
                    {
                        label: "Atendido",
                        value: "Atendido",
                    },
                ]}
                label="Status do Atendimento"
                mb={16}
                onChange={(value) =>
                    onChange({ target: { name: "status", value } })
                }
                value={form.status}
            />

            <Textarea
                label="Observação sobre o atendimento"
                mb={16}
                value={form.observation ? form.observation : ""}
                name="observation"
                onChange={onChange}
            />
            <Button mt={16} onClick={() => onSubmit(form)}>
                Salvar
            </Button>
        </Modal>
    );
};

export default QueryModal;
