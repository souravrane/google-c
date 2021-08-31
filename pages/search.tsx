import React from "react";
import {useRouter} from 'next/router'
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import axios from "axios";
import * as ls from 'local-storage';
import ShowResults from "../components/search-engine/ShowResults";

const Search = ({key,cx}) => {
  const router = useRouter();
  const goBack = () => {
    router.push("/");
  };
  const [state, setState] = React.useState(ls.get<string>('searchItem'));
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = React.useState("");
  
  const searchGoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
      );
      if (response) {
        setResults(response.data.items);
        setInfo(response.data.searchInformation);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    async function getPosts() {
      if (state) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
          );
          if (response) {
            setResults(response.data.items);
            setInfo(response.data.searchInformation);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    setState(ls.get('searchItem'))
    getPosts();
  }, []);

  const setSearch = (e) => {
    setState(e.target.value);
    ls.set('searchItem',state)
  }

  return (
    <div className="search">
      <div className="search__form">
        <div className="search__form-logo">
          <img src="/images/small.png" alt="logo" onClick={goBack} />
        </div>
        <div className="search__form-input">
          <form method="POST" className="home__form" onSubmit={searchGoogle}>
            <input
              type="text"
              className="home__input"
              value={state}
              onChange={(e) => setSearch(e)}
              required
            />

            <FaSistrix className="search__icon" />
            <FaMicrophone className="microphone" />
          </form>
        </div>
      </div>
      <ShowResults results={results} info={info} />
    </div>
  );
};

export default Search;


export async function getServerSideProps() {
    const key = process.env.KX
    const cx = process.env.CX
  
    return { props: { key,cx } }
}
  