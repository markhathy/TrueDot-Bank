
export interface Account {
  index: number;
  address: string;
  privateKey: string;
  balance: string; // in ETH
}

export interface ChainConfig {
  mnemonic: string;
  hdPath: string;
  gasPrice: string;
  blockGasLimit: string;
  callGasLimit: string;
  hardfork: string;
  chainId: number;
  rpcUrl: string;
}

export interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: number;
  blockNumber: number;
  timestamp: number;
}

export interface Block {
  number: number;
  hash: string;
  parentHash: string;
  timestamp: number;
  transactions: Transaction[];
  gasUsed: number;
  gasLimit: number;
}
