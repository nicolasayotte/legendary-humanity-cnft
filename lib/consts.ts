console.log(
  'NEXT_PUBLIC_CARDANO_NETWORK',
  process.env.NEXT_PUBLIC_CARDANO_NETWORK,
);

const _NETWORK = process.env.NEXT_PUBLIC_CARDANO_NETWORK || 'preprod';
if (_NETWORK === undefined || !['mainnet', 'preprod'].includes(_NETWORK)) {
  throw new Error(
    "NEXT_PUBLIC_CARDANO_NETWORK env var must be 'mainnet' or 'preprod'",
  );
}

export const NETWORK = _NETWORK as 'mainnet' | 'preprod';
export const IS_SERVER = process.env.IS_SERVER === 'true';
export const PROFITS_ADDR = process.env.PROFITS_ADDR;

// Server-side only -> validate the profits address is not empty and valid
if (IS_SERVER) {
  if (PROFITS_ADDR === undefined || PROFITS_ADDR.trim().length === 0) {
    throw new Error('PROFITS_ADDR env var must be defined');
  }

  if (!PROFITS_ADDR.startsWith('addr')) {
    throw new Error(
      'PROFITS_ADDR must be a bech32 valid Shelley type Cardano address',
    );
  }
  console.debug('Server-side only: PROFITS_ADDR', PROFITS_ADDR);
}
