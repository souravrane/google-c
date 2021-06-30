import Head from "next/head";
import SearchBar from "../../components/search-engine/SearchBar";
import Navbar from "../../components/search-engine/Navbar";

function SearchEngine() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SearchBar />
    </div>
  );
}

export default SearchEngine;
