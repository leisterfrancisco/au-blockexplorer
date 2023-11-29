import React, { useEffect /* useState */ } from 'react'
// import { Alchemy, Network } from 'alchemy-sdk'
import Grid from '@mui/material/Unstable_Grid2'
// import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { makeStyles } from '@mui/styles'

import BlockComponent from '../../components/block'
import TransactionComponent from '../../components/transaction'
import styles from './styles'

const useStyles = makeStyles(styles)

// const settings = {
//   apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
//   network: Network.ETH_MAINNET
// }
// const alchemy = new Alchemy(settings)

const Home = () => {
  const classes = useStyles()
  // const [blockNumber, setBlockNumber] = useState()

  useEffect(() => {
    async function getBlockNumber() {
      // setBlockNumber(await alchemy.core.getBlockNumber())
    }
    getBlockNumber()
  })

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={6} className={classes.column}>
          Latest Block
        </Grid>
        <Grid item xs={6} className={classes.column}>
          Latest Transactions
        </Grid>
      </Grid>
      <Grid container rowSpacing={4} className={classes.secondRow}>
        <Grid item xs={4} md={4}>
          <List>
            <ListItem>
              <BlockComponent />
            </ListItem>
            <ListItem>
              <BlockComponent />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8} className={classes.secondRow}>
          <List>
            <ListItem>
              <TransactionComponent />
            </ListItem>
            <ListItem>
              <TransactionComponent />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

Home.propTypes = {}

export default Home
