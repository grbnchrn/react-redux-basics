import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from './components/UserProfile'
import { useSelector } from "react-redux";

function App() {
    const isAuthenticated = useSelector(
        (state) => state.authRdr.isAuthenticated
    );
    return (
        <>
            <Header isAuthenticated = {isAuthenticated}/>
            {!isAuthenticated && <Auth />}
            {isAuthenticated && <UserProfile />}
            <Counter />
        </>
    );
}

export default App;