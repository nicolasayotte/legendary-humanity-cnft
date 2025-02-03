import { Series } from '@/lib/types';
import type { UTxO } from '@meshsdk/core';
import axios from 'axios';

const instance = axios.create({
  baseURL: `/api/`,
  withCredentials: true,
});

export async function post<T>(route: string, body = {}): Promise<T> {
  return await instance
    .post(`${route}`, body)
    .then(({ data }: any) => {
      return data as T;
    })
    .catch((error: unknown) => {
      throw error as Error;
    });
}

export type IMintTxRequest = {
  recipientAddress: string;
  series: Series;
  quantity: number;
  utxos: UTxO[];
};

export type IMintTxResponse = {
  tx: string;
};

export async function createTransaction(
  req: IMintTxRequest,
): Promise<IMintTxResponse> {
  return await post(`mint-tx`, req);
}
