import { useEffect, useState } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

import Cards from "./Components/Cards";
import Modal from "./Components/Modal";

import "./App.css";
import Input from "./Components/UI/Input";
import Skeleton from "./Components/UI/Skeleton";

function App() {
  // -----------USE STATE-----------
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [enteredValue, setEnteredValue] = useState("african");
  const [isModal, setIsModal] = useState(false);
  const [source, setSource] = useState();
  const [userName, setUserName] = useState();
  const [userLocation, setUserLocation] = useState();
  const [searched, setSearched] = useState(false);

  // ----------ACCESKEY------------
  const accessKey = process.env.REACT_APP_ACCESSKEY;

  // ----------SEARCH----------
  const searchHandler = (event) => {
    setEnteredValue(event.target.value);
    setSearched(true);
  };
  const debouncedSearchHandler = debounce(searchHandler, 1000);

  // -------FETCHING DATA----------

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?client_id=${accessKey}&w=1500&dpr=2&query=${enteredValue}&count=8`
        );
        console.log(response);
        setItems(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [accessKey, enteredValue]);

  // -----------POPUP-----------
  const popUpHandler = () => {
    setIsModal(false);
  };

  // -----------RETURN-----------
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="App">
        <div className="header">
          {searched && !loading && (
            <h2>
              Search Results for <span>"{enteredValue}"</span>
            </h2>
          )}

          {searched && loading && (
            <h2>
              Searching for <span>"{enteredValue}"</span>
            </h2>
          )}
          {!searched && <Input
            type="search"
            name="name"
            aria-label="search box"
            placeholder="Search for photo"
            onKeyDown={debouncedSearchHandler}
          />}
        </div>

        {/* --------------GALLERY------------ */}
        {loading && <Skeleton />}
        <Cards
          setName={setUserName}
          setLocation={setUserLocation}
          setSource={setSource}
          setIsModal={setIsModal}
          items={items}
          loading={loading}
        />

        {isModal && (
          <Modal
            userLocation={userLocation}
            userName={userName}
            src={source}
            onClick={popUpHandler}
          ></Modal>
        )}
      </div>
    );
  }
}

export default App;
