import { useParams } from "react-router-dom"

export function DashboardId () {
    const {id} = useParams()

    return (
        <>Dashboard {id}</>
    )
}