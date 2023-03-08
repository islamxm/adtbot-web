import ContentLayout from "@/components/ContentLayout/ContentLayout";


const NotfoundPage = () => {

    return (
        <ContentLayout
            head="Упс, неправильный адрес ("
            >
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h1>404</h1>
                <div>Not found</div>
            </div>
        </ContentLayout>
    )
}


export default NotfoundPage;