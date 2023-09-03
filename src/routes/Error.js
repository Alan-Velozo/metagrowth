import { useRouteError } from "react-router-dom"

export function Error(){

    const error = useRouteError();

    return <>
            <h1>ERROR</h1>
            <p>{error.statusText}</p>
    </>
}