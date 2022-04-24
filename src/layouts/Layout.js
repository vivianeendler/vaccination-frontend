import { Outlet } from "react-router-dom";
import { AppShell, Navbar } from "@mantine/core";
import MainLinks from "./MainLinks";

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
