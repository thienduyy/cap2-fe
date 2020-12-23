import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

export default function RouteWrapper({ ...props }) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Route {...props} />
    );
}