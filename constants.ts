
import { Account, ChainConfig } from './types';

export const INITIAL_ACCOUNTS: Account[] = [
  { index: 0, address: "0x5746Dc77c45a04025Bea52c86B9d3281FE955901", privateKey: "0x00a28121d33d74e2bcf88a34565493857c14708faa071d3db64937671f7ce560", balance: "1000" },
  { index: 1, address: "0xbe77a8f4EFCF5ac9F9AbC063cea8478638B5a86c", privateKey: "0x2ba10620ffe5ac0114af058b17338c64147b4ab92458b563d2fa342e5c053bc7", balance: "1000" },
  { index: 2, address: "0xc54066590626E0fce6ec0F9f5e18dc44dEAdD6e7", privateKey: "0x557f14a6ed55e3380c80e1208a923087cf3cf352a8d710491dac0b317657453a", balance: "1000" },
  { index: 3, address: "0xB98Da3dA575828951D2aA9b0544706F9C2BD8876", privateKey: "0x00c57340fb9ed2f58f180feef3ba35293b24041ee89f3f7486eb229ad1210814", balance: "1000" },
  { index: 4, address: "0xA8Ae249B7f8F9AD6286480B7f451E8da026D2291", privateKey: "0x60ee54e00ca6c836f76d33554fe6720564a10e8b9559d250186ae98760217585", balance: "1000" },
  { index: 5, address: "0x4eA1fA529C59f014e6447bE6dB32878c25E5E872", privateKey: "0xb0c18fb4a64d139c3229a6952a3cac6fcfe93752c35cf3831916a9ab40caaa6c", balance: "1000" },
  { index: 6, address: "0xdD67E1912C553936Ab792088Bf5619F4Cf060ee2", privateKey: "0x6283b0f8a43072f888f94b5c82472890f47f449e8bae8927f14fa77ecc85c940", balance: "1000" },
  { index: 7, address: "0xf4d6C2FfDdf229a1DEcaa1cdd372Ee6bB74742ec", privateKey: "0x514a4f0a27673112e2ee1e730640135553bbdac8c76ad6c1b6c242a6c4707ebb", balance: "1000" },
  { index: 8, address: "0x5eD4986D73863e4aDf30D6683eca5BF59E673e6b", privateKey: "0xc03cafc64989c2b2d3816c2b3ea26d8620416d1936b6d99a3f219cc0bb168bf8", balance: "1000" },
  { index: 9, address: "0x261f4aE3c7CFA020F0F321a64e156F0206a78fC4", privateKey: "0xced0bccbad783e5fd02de665b23d76f25d5b405c7b62ef76daf41d612dde6da7", balance: "1000" },
];

export const CHAIN_CONFIG: ChainConfig = {
  mnemonic: "comfort laundry decide topple ten grief sunny elevator fit chef consider fault",
  hdPath: "m/44'/60'/0'/0/{account_index}",
  gasPrice: "2000000000",
  blockGasLimit: "30000000",
  callGasLimit: "50000000",
  hardfork: "shanghai",
  chainId: 1337,
  rpcUrl: "127.0.0.1:8545"
};
