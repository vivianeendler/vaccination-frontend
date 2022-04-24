import * as Yup from "yup";

const ScheduleFormSchema = Yup.object({
    name: Yup.string().required("O campo Nome é de preenchimento obrigatório."),
    email: Yup.string().email("Favor digitar um e-mail válido."),
    scheduledTo: Yup.date()
        .required(
            "O campo de seleção de Dia e Horário para agendamento é de preenchimento obrigatório.",
        )
        .min(new Date(), "Favor selecionar uma data válida."),
    bornDate: Yup.date()
        .required("O campo Nascimento é de preenchimento obrigatório.")
        .max(new Date(), "Favor selecionar uma data válida."),
});

export default ScheduleFormSchema;
