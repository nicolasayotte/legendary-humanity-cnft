import { useWallet } from '@meshsdk/react';

export const MintButton = ({ txHash, loading, setModal }: any) => {
  const { connected } = useWallet();
  return (
    <div className="mint-button">
      {txHash ? (
        <div>
          <h1>Successful, transaction hash:</h1>
          <code>{txHash}</code>
        </div>
      ) : (
        <div>
          <button
            type="button"
            onClick={() => setModal(true)}
            disabled={!connected || loading}
          >
            {loading ? 'Minting...' : 'MINT NOW'}
          </button>
          <h2> to enter... </h2>
        </div>
      )}
    </div>
  );
};
