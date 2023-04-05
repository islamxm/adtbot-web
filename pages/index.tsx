import { useRouter } from "next/router";
import Router from "next/router";
import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Start from "@/components/Start/Start";
import CheckAuth from "@/hoc/CheckAuth";
import { useAppSelector } from "@/hooks/useTypesRedux";

const HomePage = () => {
    const {tokens} = useAppSelector(s => s)
    // Router.push('/console/my-bots')
    // return null;
    return (
        <ContentLayout
            head=""
            >
            <Start/>
            {/* <h1>Home</h1> */}
        </ContentLayout>
    )
}

export default HomePage;