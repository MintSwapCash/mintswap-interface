import { ChainId } from '@mintswapcash/sdk'
import { GRAPH_HOST } from '../constants'
import { request } from 'graphql-request'

export const status = async (chainId = ChainId.MINTME, subgraphName) =>
  request(
    `${GRAPH_HOST[chainId]}/index-node/graphql`,
    `
        indexingStatusForCurrentVersion(subgraphName: "${subgraphName}") {
            synced
            health
            fatalError {
              message
              block {
                number
                hash
              }
              handler
            }
            chains {
              chainHeadBlock {
                number
              }
              latestBlock {
                number
              }
            }
          }
        `
  )
