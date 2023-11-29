import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Unstable_Grid2'
// import Divider from '@mui/material/Divider'

import { makeStyles } from '@mui/styles'

import styles from './styles'

// useful links
// https://fontsource.org/fonts/klee-one/install
// figma.com
// https://mui.com/material-ui/getting-started/
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/

const useStyles = makeStyles(styles)

const Transaction = ({ /* children, */ ...props }) => {
  console.log({ props })
  const classes = useStyles()
  const [blockNumber /* , setNumber */] = useState(1)
  const [hash /* , setNumber */] = useState('0xabc')
  const [gasPrice /* , setTrxs */] = useState(12)
  const [gasLimit /* , setTrxs */] = useState(150000)
  const [trxFee /* , setTrxs */] = useState(500)
  const [from /* , setTrxs */] = useState('0xalice')
  const [to /* , setTrxs */] = useState('0xbob')
  const [status /* , setTrxs */] = useState('safe')
  const [value /* , setTrxs */] = useState(1000)

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid
        xs={8}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          xs={12}
          container
          className={classes.text}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid xs={12}>Transaction Hash: {hash}</Grid>
          <Grid
            xs={12}
            className={`${classes.middleText} ${classes.centerText}`}
          >
            {value}
          </Grid>
          <Grid
            xs={12}
            container
            spacing={2}
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            className={classes.text}
          >
            <Grid xs={4}>From: {from}</Grid>
            <Grid xs={4}>To: {to}</Grid>
            <Grid xs={4}>Block: {blockNumber}</Grid>
            <Grid xs={4}>status: {status}</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={4}>
        <Grid
          container
          spacing={1}
          className={classes.text}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid xs={12}>Gas Price {gasPrice}</Grid>
          <Grid xs={12}>Gas Limit {gasLimit}</Grid>
          <Grid xs={12}>TRX Fee {trxFee}</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

Transaction.propTypes = {
  title: PropTypes.string,
  handleOnFilter: PropTypes.func,
  filterValues: PropTypes.array.isRequired,
  filterRowsBy: PropTypes.number.isRequired
}

Transaction.defaultProps = {
  handleOnFilter: () => {},
  filterValues: [],
  filterRowsBy: 0
}

export default Transaction
