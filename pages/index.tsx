import React ,{useEffect} from "react";
import {useRouter} from 'next/router'
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import * as ls from 'local-storage';

const Home = (props) => {
  const router = useRouter()
  const [state, setState] = React.useState("");

  useEffect(() => {
    ls.remove('searchItem')  
  }, [])

  const searchGoogle = (e) => {
    e.preventDefault();
    ls.set('searchItem',state);
    router.push("/search");
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__logo">
          <img src="/images/googleLogo.png" alt="Logo" />
        </div>
        <form className="home__form" onSubmit={searchGoogle}>
          <input
            type="text"
            className="home__input"
            onChange={(e) => setState(e.target.value)}
            value={state}
            required
          />
          <div className="home__group">
            <input type="submit" className="home__btn" value="Google Search" />
          </div>
          <FaSistrix className="search__icon" />
          <FaMicrophone className="microphone" />
        </form>
      </div>
    </div>
  );
};

export default Home;
