import {
  ForgeScript,
  NativeScript,
  resolveNativeScriptHash,
  resolveSlotNo,
} from '@meshsdk/core';

import { NETWORK } from '../consts';
import { GetPolicyInfo } from '../series';
import type { Policy, PolicyInfo, Series } from '../types';
import { getPaymentKeyHash } from './wallet';

console.warn('Loading server/policies')

const Policies: Record<Series, Policy> = {
  'MAGO MUSEUM Early Bird Pass': GeneratePolicy(GetPolicyInfo('MAGO MUSEUM Early Bird Pass')),
};

export function GetPolicy(series: Series): Policy {
  const policy = Policies[series];
  console.log('GetPolicy', { series, policy })
  return policy
}

export function GeneratePolicy(info: PolicyInfo): Policy {
  const { lockDate, keyIndex, accountIndex, slot: pSlot } = info
  const slot = pSlot ?? resolveSlotNo(NETWORK, lockDate.valueOf());
  const keyHash = getPaymentKeyHash(accountIndex, keyIndex);
  if (keyHash === undefined) {
    throw new Error('Payment Key Hash not found for policy key');
  }
  const nativeScript: NativeScript = {
    type: 'all',
    scripts: [
      { type: 'before', slot },
      { type: 'sig', keyHash },
    ],
  };
  const policyId = resolveNativeScriptHash(nativeScript);
  console.log('GeneratePolicy', { ...info, slot, keyHash });
  const forgingScript = ForgeScript.fromNativeScript(nativeScript);
  return { policyId, forgingScript };
}
