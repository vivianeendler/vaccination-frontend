import { Table } from "@mantine/core";

function TableComponent({ columns = [], rows = [] }) {
    return (
        <Table striped>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.value}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column, index) => (
                            <td key={index}>{row[column.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
export default TableComponent;
