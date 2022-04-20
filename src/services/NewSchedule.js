import axios from "./api";
import { addHours } from "date-fns";
import { showNotification } from "@mantine/notifications";

const NewSchedule = async (schedule) => {
    const newSchedule = {
        ...schedule,
        scheduledTo: addHours(schedule.scheduledTo, -3),
    };
    try {
        await axios.post("/schedule", newSchedule);
        if (localStorage.getItem("rows")) {
            localStorage.clear();
        }
        showNotification({
            color: "green",
            message: "Agendado com sucesso",
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
};

export default NewSchedule;
