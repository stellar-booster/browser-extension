import { Keypair } from 'stellar-sdk'

export default () => {
  const keypair = Keypair.random()

  const url = `https://horizon-testnet.stellar.org/friendbot?addr=${keypair.publicKey()}`

  return fetch(url).then(() => keypair)
}
