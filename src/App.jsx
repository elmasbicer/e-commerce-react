import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading/Loading";
import DrawerBasket from "./components/Drawer/Drawer";

function App() {
  return (
    <>
      <div>
        <PageContainer>
          <Header />
          <hr />
          <RouterConfig />
          <Loading />
          <DrawerBasket />
        </PageContainer>
      </div>
    </>
  );
}

export default App;
