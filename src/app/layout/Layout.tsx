import { Outlet } from "react-router";
import {Footer} from "../../shared";
import { Icon } from "../../assets/Icon/icon";

export function Layout() {
    return <div>
        <div>Шапка</div>
        <Icon.Check />
        <Outlet />
        <Footer />
    </div>
}