import Home from "../views/home"

export interface routeType {
    path: string,
    element?: any
}
// define routing
const routes: Array<routeType> = [
    {
        path: '/',
        element: < Home />
    },
]

export default routes