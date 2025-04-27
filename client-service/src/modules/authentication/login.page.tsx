import { UserLoginForm } from "./components/user-login-form"

export function LoginPage({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    return (
        <UserLoginForm />
    )
}
