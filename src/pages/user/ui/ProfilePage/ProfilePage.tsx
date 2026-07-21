import {Link} from "react-router";
import {ROUTES} from "@/shared/routes";

export function ProfilePage() {
    return <div>
        Профиль пользователя
        <Link to={ROUTES.profile.index}>Профиль</Link>
    </div>
}