import React from "react";
import MenuIcon from "./assets/MenuIcon";
import PenIcon from "./assets/PenIcon";
import SettingIcon from "./assets/SettingIcon";
import ProfileIcon from "./assets/ProfileIcon";

const Panel = () => {
    const toggleSidebar = () => {
        const sidebar = document.querySelector(".app-sidebar");
        sidebar.classList.toggle("open");
    }

    return (
        <div className="panel">
            <div className="spacer">
                <div className="icon" onClick={toggleSidebar}>
                    <MenuIcon />
                </div>
            </div>
            <div className="icon">
                <PenIcon />
            </div>
            <div className="icon">
                <SettingIcon />
            </div>
            <div className="hold">
                <ProfileIcon />
            </div>
        </div>
    );
};

export default Panel;
