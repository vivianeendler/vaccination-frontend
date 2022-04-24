import React from "react";
import { Home, Clock, Search } from "tabler-icons-react";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Link({ icon, color, label, path }) {
    const navigate = useNavigate();

    return (
        <UnstyledButton
            onClick={() => navigate(path)}
            sx={(theme) => ({
                display: "block",
                width: "100%",
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[0]
                        : theme.black,

                "&:hover": {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[6]
                            : theme.colors.gray[0],
                },
            })}
        >
            <Group>
                <ThemeIcon color={color} variant="light">
                    {icon}
                </ThemeIcon>

                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    );
}

const routes = [
    {
        icon: <Home size={16} />,
        color: "blue",
        label: "Início",
        path: "/",
    },
    {
        icon: <Clock size={16} />,
        color: "teal",
        label: "Agendar",
        path: "/schedule",
    },
    {
        icon: <Search size={16} />,
        color: "violet",
        label: "Consultar",
        path: "/query",
    },
];

export default function MainLinks() {
    return (
        <div>
            {routes.map((route) => (
                <Link key={route.label} {...route} />
            ))}
        </div>
    );
}
