import React from "react";
import Header from "./header";
import MainContent from "./mainContent";

const AppLayout = () => {
    return (
        <div className="layout">
            < Header />
            <MainContent />
        </div>
    );
}

export default AppLayout;