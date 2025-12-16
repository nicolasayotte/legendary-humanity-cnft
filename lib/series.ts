import { NETWORK, PROFITS_ADDR } from './consts';
import { SERIES, Series, AssetInfo, PolicyInfo } from './types';

export function ParseSeries(s: string): Series | undefined {
  return SERIES.find((_s) => _s === s);
}

const PoliciesInfo: Record<Series, PolicyInfo> = {
  'MAGO MUSEUM Early Bird Pass': {
    profitsAddr: PROFITS_ADDR || 'obfuscated',
    price: 2_000_000n,
    maxPerTx: 10,
    network: NETWORK,
    fungible: true,
    lockDate: new Date('2025-01-10T15:00:00.000Z'),
    slot: NETWORK === 'mainnet' ? '144954909' : '80838000', // harcorde the slots in case
    accountIndex: 0,
    keyIndex: 0,
  },
};

export function GetPolicyInfo(series: Series): PolicyInfo {
  return PoliciesInfo[series];
}

const Assets: Record<Series, AssetInfo> = {
  'MAGO MUSEUM Early Bird Pass': {
    assetName: 'MAGOEarlyBirdPass',
    metadata: {
      series: 'Legendary Humanity - MAGO MUSEUM',
      name: 'MAGO MUSEUM - Early Bird Pass',
      description: [
        'This is an EARLY BIRD PASS that grands β testing for the MAGO ',
        "Museum, Mago Nagasaka's first online museum.",
        ' ',
        'Mago is a Japanese contemporary artist who transforms e-waste ',
        "from Agbogbloshie, Ghana, known as the world's largest ",
        'electronic waste graveyard, into powerful works of art. Through ',
        'his proceeds, he not only donates but actively builds ',
        'sustainable infrastructure, including schools and farms, ',
        'striving to create a self-sufficient community for the people ',
        'living there. For more information and the latest updates, ',
        'follow the official LEGENDARY HUMANITY X @lh_vivi_',
        ' ',
        'Other than granting access to the MAGO Museum β test, the pass ',
        'will be eligible to receive 100% of the mint price back in ',
        '$VIVI, the token used within the LEGENDARY HUMANITY ecosystem. ',
        '※ Claimable after $VIVI is listed in Q1 2025. Unlocks 1/12 of ',
        'the amount monthly over a year at the listing price.',
      ],
      files: [
        {
          name: 'MAGO MUSEUM - Early Bird Pass',
          src: [
            'ipfs://',
            'bafybeiflkvyrdjtv67kl26zfh245ihipso77q3gg2vl6kwir4lak3mhypy',
          ],
          mediaType: 'video/mp4',
        },
      ],
      image: [
        'ipfs://',
        'bafkreidwwtg6pmla52jpffhptzpdiq4vddbxic6m7zaeh7e3sfvledggv4',
      ],
      mediaType: 'image/webp',
      X: 'https://x.com/@lh_vivi_',
    },
  },
};

export function GetAssetInfo(series: Series): AssetInfo {
  return Assets[series];
}
