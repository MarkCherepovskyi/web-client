import { computed, ref } from 'vue'
import {
  EthProviderRpcError,
  TokenContractV2__factory,
  TransactionResponse,
} from '@/types'
import { useWeb3ProvidersStore } from '@/store'
import { handleEthError } from '@/helpers'

export const useTokenContact = (address: string) => {
  const web3ProvidersStore = useWeb3ProvidersStore()
  const provider = computed(() => web3ProvidersStore.provider)

  const contractAddress = ref(address || '')

  const contractInstance = computed(
    () =>
      (!!provider.value &&
        !!provider.value.currentSigner &&
        !!contractAddress.value &&
        TokenContractV2__factory.connect(
          contractAddress.value,
          provider.value.currentSigner,
        )) ||
      undefined,
  )

  const contractInterface = TokenContractV2__factory.createInterface()

  const init = (address: string) => {
    console.log('init address', address)
    if (!address) return

    contractAddress.value = address
  }

  const mintBatch = async (addresses: string[], URIs: string[]) => {
    if (!provider.value) return
    console.log('mint')
    try {
      const data = contractInterface.encodeFunctionData('mintBatch', [
        addresses,
        URIs,
      ])

      console.log('data: ', data)
      console.log('ontractAddress.value ', contractAddress.value)
      return (await provider.value.signAndSendTx({
        to: contractAddress.value,
        data,
      })) as TransactionResponse
    } catch (error) {
      handleEthError(error as EthProviderRpcError)
    }
  }

  return {
    init,
    mintBatch,
  }
}
