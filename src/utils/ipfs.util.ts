import { Web3Storage } from 'web3.storage'
import { config } from '@config'

export class IpfsUtil {
  private static makeStorageClient() {
    return new Web3Storage({ token: config.APP_IPFS_KEY })
  }

  static async storeFile(file: File) {
    const files: File[] = []
    files.push(file)
    const client = IpfsUtil.makeStorageClient()
    return await client.put(files)
  }
}
