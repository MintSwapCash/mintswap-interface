import gql from 'graphql-tag'

export const poolsQuery = gql`
  query poolsQuery(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $block: Block_height
    $where: Pool_filter! = { allocPoint_gt: 0, accSushiPerShare_gt: 0 }
  ) {
    pools(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      block: $block
      where: $where
    ) {
      id
      pair
      allocPoint
      lastRewardBlock
      accSushiPerShare
      balance
      userCount
      owner {
        id
        sushiPerBlock
        totalAllocPoint
      }
    }
  }
`

export const masterChefV1PairAddressesQuery = gql`
  query masterChefV1PairAddresses(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $where: Pool_filter! = { allocPoint_gt: 0, accSushiPerShare_gt: 0 }
  ) {
    pools(first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection, where: $where) {
      id
      allocPoint
      accSushiPerShare
      pair {
        id
      }
    }
  }
`

export const masterChefV1TotalAllocPointQuery = gql`
  query masterChefV1TotalAllocPoint($id: String! = "0xf9882a21fc383ee56ecec4d67a4ac8b548fed15a") {
    masterChef(id: $id) {
      id
      totalAllocPoint
    }
  }
`

export const masterChefV1SushiPerBlockQuery = gql`
  query masterChefV1SushiPerBlock($id: String! = "0xf9882a21fc383ee56ecec4d67a4ac8b548fed15a") {
    masterChef(id: $id) {
      id
      sushiPerBlock
    }
  }
`
