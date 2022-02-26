import { useEffect } from "react";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import { useDispatch } from "react-redux";
import { ridesActions } from "./store/ridesSlice";
import { userActions } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRides = async () => {
      const response = await fetch("/rides");
      const data = await response.json();
      dispatch(ridesActions.setRides(data));
    };

    const fetchUser = async () => {
      const response = await fetch("/user");
      const data = await response.json();
      dispatch(userActions.setUser(data));
    };

    fetchUser();
    fetchRides();
  }, []);

  return (
    <>
      <Header />
      <MainComponent />
    </>
  );
}

export default App;
