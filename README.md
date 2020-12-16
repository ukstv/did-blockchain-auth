# did-blockchain-auth

Utility functions for linking blockchain accounts to DID.

## Overview

Linking blockchain accounts could mean two things:

1. Provide entropy based on owned blockchain account for Ceramic-managed keys,
2. Prove that you own blockchain account.

This boils down to making a signature by a blockchain key. Currently, the keys are managed by a so called provider, be it MetaMask, FilSnap, or something else.
Linking a blockchain account then means requesting a signature from the provider.

To abstract over all bunch of providers, the package introduces a notion of `AuthProvider` (see corresponding interface), that does three things:

- translate blockchain account to form of CAIP AccountID (`AuthProvider.accountId`)
- provide entropy (`AuthProvider.authenticate`),
- provide proof-of-ownership data structure (`AuthProvider.createLink`).

For every blockchain (and provider) supported, there is one class implementing AuthProvider:

| Blockchain | CAIP-2 namespace                                                             | Supported providers                                                                  |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Ethereum   | [eip155](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-3.md) | metamask-like ethereum provider                                                      |
| Filecoin   | fil                                                                          | [Filecoin Wallet Provider](https://github.com/openworklabs/filecoin-wallet-provider) |
| EOS        | eosio                                                                        | [EOSIO Provider](https://github.com/sebastianmontero/eosio-local-provider#readme)    |

## Intallation

```shell
npm add did-blockchain-auth
```

## Usage

Depends on blockchain you intend to use. For Ethereum:

```typescript
import * as auth from "did-blockchain-auth";
const authProvider = new auth.ethereum.EthereumAuthProvider(metamask, address);
const entropy = await authProvider.authenticate("message");
const linkProof = await authProvider.createLink(`did:3:identifier`);
```

## Test

```shell
npm run test
```

## License

Apache-2.0 or MIT.
