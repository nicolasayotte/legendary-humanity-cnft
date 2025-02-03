export const SERIES = ['MAGO MUSEUM Early Bird Pass'] as const;
export type Series = (typeof SERIES)[number];

export type PolicyInfo = {
  profitsAddr: string;
  price: bigint;
  maxPerTx: number;
  network: string;
  fungible: boolean;
  lockDate: Date;
  slot?: string; // BigInt
  accountIndex: number;
  keyIndex: number;
};

export type Policy = {
  policyId: string;
  forgingScript: string;
};

type File = {
  src: string | string[];
  name: string;
  mediaType: string;
};

export type AssetInfo = {
  assetName: string;
  metadata: {
    series: string;
    description: string | string[];
    name: string;
    files?: File[];
    image: string | string[];
    mediaType: string;
    X: string;
  };
};
