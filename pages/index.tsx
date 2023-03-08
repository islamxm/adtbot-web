import { useRouter } from "next/router";
import Router from "next/router";

const HomePage = () => {
    Router.push('/console/my-bots')
    return null;
}

export default HomePage;