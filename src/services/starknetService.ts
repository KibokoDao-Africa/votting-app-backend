import { Contract, defaultProvider,
    //  Account,
      Abi } from 'starknet';
import { Abi as ContractAbi } from './abi';

const provider = defaultProvider;
const privateKey = process.env.STARKNET_PRIVATE_KEY || '';
const publicKey = process.env.STARKNET_PUBLIC_KEY || '';
const accountAddress = process.env.STARKNET_ACCOUNT_ADDRESS || '';

// const starknetAccount = new Account(provider, accountAddress, privateKey, publicKey);

export const makeVote = async (userId: string, vote: string) => {
//   const contract = new Contract(ContractAbi as Abi[], process.env.STARKNET_CONTRACT_ADDRESS || '', starknetAccount);

  try {
    // const tx = await contract.invoke('makeVote', [userId, vote === 'yes' ? '1' : '0']);
    // await provider.waitForTransaction(tx.transaction_hash);
  } catch (error) {
    throw new Error('Failed to make vote on Starknet');
  }
};
