import { Outlet } from "react-router-dom";
import MainLinks from "./MainLinks";
import { AppShell, Navbar } from "@mantine/core";

const Layout = () => {
    return (
        <AppShell
            navbar={
                <Navbar width={{ base: 300 }} height={500} p="xs">
                    <Navbar.Section grow mt="xs">
                        <MainLinks />
                    </Navbar.Section>
                </Navbar>
            }
        >
            <Outlet />
        </AppShell>
    );
};

export default Layout;
