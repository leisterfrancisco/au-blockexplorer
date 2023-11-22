import React, { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
// import { makeStyles } from '@mui/styles'
// import { useTranslation } from 'react-i18next'

// import { useSharedState } from '../../context/state.context'

// import styles from './styles'

// const useStyles = makeStyles(styles)

// const BlockProducerInfo = lazy(() => import('./BlockProducerInfo'))

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

const Home = () => {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }
    getBlockNumber();
  });

  return <div className="App">Block Number: {blockNumber}</div>;
};

Home.propTypes = {};

export default Home;
