import { Outlet } from "react-router";
import {Footer} from "@/shared/ui";
import { Icon } from "@/assets";
import {useUserStore} from "@/entities";

export function Layout() {
    const {profile} = useUserStore();

    return <div>
        <div>Шапка</div>
        {profile?.name}
        <Icon.Check />
        <Outlet />
        <Footer />
    </div>
}