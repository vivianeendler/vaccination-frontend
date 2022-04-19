import axios from "./api";
import { addHours } from "date-fns";

const NewSchedule = async (schedule) => {
    const newSchedule = {
        ...schedule,
        scheduledTo: addHours(schedule.scheduledTo, -3),
    };
    try {
        await axios.post("/schedule", newSchedule);
    } catch (error) {
        console.log(error);
    }
};

export default NewSchedule;
