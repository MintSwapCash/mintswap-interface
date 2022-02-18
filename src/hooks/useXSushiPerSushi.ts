import { request } from 'graphql-request'
import useSWR from 'swr'

const QUERY = `{
    bar(id: "0x584cd161a2263b62b5d3d267440328b7d2abf319") {
      ratio
    }
}`

const fetcher = (query) => request('https://thegraph.mintswap.cash/subgraphs/name/mistswap/bar', query)

// Returns ratio of XSushi:Sushi
export default function useSushiPerXSushi(parse = true) {
  const { data } = useSWR(QUERY, fetcher)
  return parse ? parseFloat(data?.bar?.ratio) : data?.bar?.ratio
}
