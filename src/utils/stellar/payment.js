import {Asset, Keypair, Memo, Operation, TransactionBuilder} from 'stellar-sdk';
import {getServer} from './server';

export default async (
  destination,
  secretKey,
  amount,
  memo = '',
  asset = Asset.native()
) => {

  const keypair = Keypair.fromSecret(secretKey);

  const account = await getServer().loadAccount(keypair.publicKey());

  const transaction = new TransactionBuilder(account)
    .addOperation(Operation.payment({
      destination,
      asset,
      amount
    }))
    .addMemo(Memo.text(memo))
    .build();

  transaction.sign(keypair);

  return getServer().submitTransaction(transaction);
};
