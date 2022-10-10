import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import Calculator from "../components/calculator";

const Home: NextPage = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await axios.post("/api/hello");
    };
    getData();
  }, []);

  return (
    <div>
      <Calculator />
    </div>
  );
};

export default Home;
