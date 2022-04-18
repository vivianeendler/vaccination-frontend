import { Table, Button } from "@mantine/core";

function TableComponent({ columns = [], rows = [], actions = [] }) {
    return (
        <Table striped highlightOnHover>
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
                        <td>
                            {actions.map(
                                ({ icon, name, onClick, ...props }, index) => (
                                    <Button
                                        leftIcon={icon}
                                        key={index}
                                        onClick={() => onClick(row)}
                                        {...props}
                                    >
                                        {name}
                                    </Button>
                                ),
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
export default TableComponent;
