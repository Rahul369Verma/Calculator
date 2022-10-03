import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import Trash from "../../components/Trash";

const Home: NextPage = () => {
  return (
    <div>
      <Trash />
    </div>
  );
};

export default Home;
