import { UserCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import { CircleUserRound, SquareUserRound } from "lucide-react";

const isLogged = true;

const UserActions = () => {
    if (isLogged)
        return (
            <div className="inline-flex flex-row items-center gap-1 select-none cursor-pointer">
                <span>John Doe</span>
                <CircleUserRound
                    size={26}
                    absoluteStrokeWidth
                    strokeWidth={1.5}
                />
            </div>
        );

    return (
        <div className="flex flex-row gap-1  text-nowrap text-xl font-light leading-none">
            <span>Login</span>
            <span>Register</span>
        </div>
    );
};
export default UserActions;
