import { useRouteError ,Link} from "react-router-dom"

const Error = () => {
    const error  = useRouteError();

    if(error.status === 404) {
        return (
            <main className="grid min-h-[100vh] place-items-center px-8">
                <h1 className="text-6xl ">404</h1>
                <h4 className="text-center font-bold text-4xl">Page Not Found</h4>
                <Link to="/" className="text-center text-primary btn">Back Home</Link>
            </main>
        )
    }

}

export default Error