import gql from 'graphql-tag'

export const barQuery = gql`
  query barQuery($id: String! = "0x584cd161a2263b62b5d3d267440328b7d2abf319", $block: Block_height) {
    bar(id: $id, block: $block) {
      id
      totalSupply
      ratio
      xSushiMinted
      xSushiBurned
      sushiStaked
      sushiStakedUSD
      sushiHarvested
      sushiHarvestedUSD
      xSushiAge
      xSushiAgeDestroyed
      # histories(first: 1000) {
      #   id
      #   date
      #   timeframe
      #   sushiStaked
      #   sushiStakedUSD
      #   sushiHarvested
      #   sushiHarvestedUSD
      #   xSushiAge
      #   xSushiAgeDestroyed
      #   xSushiMinted
      #   xSushiBurned
      #   xSushiSupply
      #   ratio
      # }
    }
  }
`

export const barHistoriesQuery = gql`
  query barHistoriesQuery {
    histories(first: 1000) {
      id
      date
      timeframe
      sushiStaked
      sushiStakedUSD
      sushiHarvested
      sushiHarvestedUSD
      xSushiAge
      xSushiAgeDestroyed
      xSushiMinted
      xSushiBurned
      xSushiSupply
      ratio
    }
  }
`

export const barUserQuery = gql`
  query barUserQuery($id: String!) {
    user(id: $id) {
      id
      bar {
        totalSupply
        sushiStaked
      }
      xSushi
      sushiStaked
      sushiStakedUSD
      sushiHarvested
      sushiHarvestedUSD
      xSushiIn
      xSushiOut
      xSushiOffset
      xSushiMinted
      xSushiBurned
      sushiIn
      sushiOut
      usdIn
      usdOut
      createdAt
      createdAtBlock
    }
  }
`
