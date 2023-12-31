import packageJson from '../package.json'
import { LogLevelDesc } from 'loglevel'
import { pickBy, mapKeys } from 'lodash-es'

export const config = {
  API_URL: import.meta.env.VITE_API_URL,
  APP_NAME: import.meta.env.VITE_APP_NAME,
  IPFS_KEY: import.meta.env.VITE_APP_IPFS_KEY,
  TOKEN_CONTRACT_ADDR: import.meta.env.VITE_APP_TOKEN_CONTRACT_ADDR,
  SUPPORTED_CHAIN_ID: import.meta.env.VITE_APP_SUPPORTED_CHAIN_ID,
  LOG_LEVEL: 'trace' as LogLevelDesc,
  BUILD_VERSION: packageJson.version || import.meta.env.VITE_APP_BUILD_VERSION,
  METADATA_FILE_NAME: 'metadata.json',
} as const

Object.assign(config, _mapEnvCfg(import.meta.env))
Object.assign(config, _mapEnvCfg(document.ENV))

function _mapEnvCfg(env: ImportMetaEnv | typeof document.ENV): {
  [k: string]: string | boolean | undefined
} {
  return mapKeys(
    pickBy(env, (v, k) => k.startsWith('VITE_APP_')),
    (v, k) => k.replace(/^VITE_APP_/, ''),
  )
}
