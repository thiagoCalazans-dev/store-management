import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Login () {
    const navigate = useNavigate()

    function handleLogin () {
        console.log("logou")
        navigate("/dashboard")
    }

    return (
        <>login
        <Button onClick={handleLogin}>Login</Button>
        </>
    )
}