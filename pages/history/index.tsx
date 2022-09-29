import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import History from "../../components/History.js";

const Home: NextPage = () => {
  return (
    <div>
      <History />
    </div>
  );
};

export default Home;
