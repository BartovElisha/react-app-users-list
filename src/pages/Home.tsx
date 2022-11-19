import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import Table from "../components/Table";
import Title from "../components/Title";

function Home() {
    return (
        <>
            <Title content="Add User"/>
            <MenuBar />
            <Title content="Users List"/>
            <Table /> 
            <Footer />
        </> 
    );
}

export default Home;