import { render, screen } from "@testing-library/react";
import TableComponent from "./index";
describe("Table", () => {
    const columns = [{ key: "name", value: "Nome" }];
    const rows = [{ name: "Viviane" }];

    it("Render Table", () => {
        render(<TableComponent />);
    });

    it("Asserting columns name", () => {
        render(<TableComponent columns={columns} />);
        const linkElement = screen.getByText(/Nome/i);
        expect(linkElement).toBeInTheDocument();
    });

    it("Asserting rows name", () => {
        render(<TableComponent columns={columns} rows={rows} />);
        const linkElement = screen.getByText(/Viviane/i);
        expect(linkElement).toBeInTheDocument();
    });
});
