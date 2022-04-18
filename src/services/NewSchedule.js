import axios from "./api";

const NewSchedule = async (scheduledTo, name, bornDate, email) => {
    try {
        await axios.post("/schedule", scheduledTo, name, bornDate, email);
    } catch (error) {
        console.log(error);
    }
};

export default NewSchedule;
