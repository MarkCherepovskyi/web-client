import { computed, ref } from 'vue'
import {
  TokenContractDeployer__factory,
  TokenContract__factory,
  TransactionResponse,
} from '@/types'
import { useWeb3ProvidersStore } from '@/store'
import { ethers } from 'ethers'

export const useTokenContactDeployer = (address: string) => {
  const web3ProvidersStore = useWeb3ProvidersStore()

  const contractAddress = ref(address || '')

  const contractInterface = TokenContractDeployer__factory.createInterface()

  const signer = web3ProvidersStore.provider.currentSigner

  const contractInstance = computed(
    () =>
      (!!address &&
        !!signer &&
        TokenContractDeployer__factory.connect(address, signer)) ||
      undefined,
  )

  const createFunctionsParams = async (
    tokenName: string,
    tokenContract: string,
    baseUri: string,
  ): Promise<{
    inputs: string
    salt: string
  }> => {
    if (!signer) return { inputs: '', salt: '' }

    const userAddr = await signer.getAddress()

    return {
      inputs: TokenContract__factory.createInterface()
        .getSighash('__TokenContract_init')
        .concat(
          ethers.utils.defaultAbiCoder
            .encode(
              ['string', 'string', 'string', 'address'],
              [tokenName, tokenContract, baseUri, userAddr],
            )
            .substring(2),
        ),

      salt: ethers.utils.keccak256(
        ethers.utils.hexConcat([
          userAddr,
          ethers.utils.hexlify(Date.now()),
          ethers.utils.hexZeroPad(
            ethers.BigNumber.from(ethers.utils.randomBytes(32)).toHexString(),
            32,
          ),
        ]),
      ),
    }
  }

  const deployTokenContract = async (
    inputs: string,
    salt: string,
  ): Promise<TransactionResponse> => {
    return web3ProvidersStore.provider.signAndSendTx({
      to: contractAddress.value,
      data: contractInterface.encodeFunctionData('deployTokenContract', [
        inputs,
        salt,
      ]),
    })
  }

  const predictTokenAddress = async (
    inputs: string,
    salt: string,
  ): Promise<string> => {
    if (!contractInstance.value) return ''

    return contractInstance.value.predictTokenAddress(inputs, salt)
  }

  return {
    createFunctionsParams,
    deployTokenContract,
    predictTokenAddress,
  }
}
