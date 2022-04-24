import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import { NotificationsProvider } from "@mantine/notifications";

ReactDOM.render(
    <React.StrictMode>
        <NotificationsProvider>
            <Router />
        </NotificationsProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);
