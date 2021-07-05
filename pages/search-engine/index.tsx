import Head from "next/head";
import SearchBar from "../../components/search-engine/SearchBar";
import Navbar from "../../components/search-engine/Navbar";
import styles from "./SearchEngine.module.css";

function SearchEngine() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.logo_section}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          alt="google-logo"
        />
      </div>

      <SearchBar />
    </div>
  );
}

export default SearchEngine;
