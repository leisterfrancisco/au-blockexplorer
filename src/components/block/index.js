import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Unstable_Grid2'
import Divider from '@mui/material/Divider'

import { makeStyles } from '@mui/styles'

import styles from './styles'

// useful links
// https://fontsource.org/fonts/klee-one/install
// figma.com
// https://mui.com/material-ui/getting-started/
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/

const useStyles = makeStyles(styles)

const Block = ({ /* children, */ ...props }) => {
  const classes = useStyles()
  const [number, setNumber] = useState(0)
  const [trxs, setTrxs] = useState([])
  const [size, setSize] = useState(1500)
  const [gasUsed, setGasUsed] = useState(1)
  const [totalDifficulty, setTotalDifficulty] = useState(1)
  const [status, setStatus] = useState('safe')

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid
        xs={6}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        {number}
      </Grid>
      <Grid xs={6} display="flex" justifyContent="flex-end" alignItems="center">
        <Grid container spacing={2} className={classes.text}>
          <Grid xs={6}>Total TRX</Grid>
          <Grid xs={6}>{trxs.length}</Grid>
        </Grid>
      </Grid>
      <Grid xs={12} className={classes.middleText}>
        {size} bytes
      </Grid>
      <Grid xs={12}>
        <Grid
          container
          spacing={2}
          className={classes.text}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid xs={4}>
            <Grid container spacing={2}>
              <Grid xs={6}>Gas used</Grid>
              <Grid xs={6}>{gasUsed}</Grid>
            </Grid>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid xs={4}>
            <Grid container spacing={2}>
              <Grid xs={6}>Total difficulty</Grid>
              <Grid xs={6}>{totalDifficulty}</Grid>
            </Grid>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid xs={4}>
            <Grid container spacing={2}>
              <Grid xs={6}>Status</Grid>
              <Grid xs={6}>{status}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

Block.propTypes = {
  title: PropTypes.string,
  //   children: PropTypes.node,
  handleOnFilter: PropTypes.func,
  filterValues: PropTypes.array.isRequired,
  filterRowsBy: PropTypes.number.isRequired
}

Block.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleOnFilter: () => {},
  filterValues: [],
  filterRowsBy: 0
}

export default Block
