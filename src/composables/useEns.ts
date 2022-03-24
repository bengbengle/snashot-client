import { ref } from 'vue';
// import { useApolloQuery } from '@/composables/useApolloQuery';
import { ENS_QUERY } from '@/helpers/queries';
import { useWeb3 } from '@/composables/useWeb3';

export function useEns() {
  const validEnsTlds = ['eth', 'xyz', 'com', 'org', 'io', 'app', 'art'];

  // const { ensApolloQuery } = useApolloQuery();
  const { web3Account } = useWeb3();

  let nfts: any = [
    { name: 'metopia-club-nft-1', value: "4-0x2AE5f53EA60d98c88B31Eb4c3A35298DF62EE8cd-1" },
    { name: 'metopia-club-nft-2', value: "4-0x2AE5f53EA60d98c88B31Eb4c3A35298DF62EE8cd-2" },
    { name: 'metopia-club-nft-3', value: "4-0x2AE5f53EA60d98c88B31Eb4c3A35298DF62EE8cd-3" },
    { name: 'metopia-club-nft-4', value: "4-0x2AE5f53EA60d98c88B31Eb4c3A35298DF62EE8cd-4" },
    // ...res.account?.domains
  ]

  for (let i = 16; i < 20; i++) {
    nfts.push({ name: 'metopia-nft-v2-' + i })
  }

  const ownedEnsDomains = ref(nfts);

  const loadOwnedEnsDomains = async () => {
    if (web3Account.value) {
      // const res = await ensApolloQuery({
      //   query: ENS_QUERY,
      //   variables: {
      //     id: web3Account.value.toLowerCase()
      //   }
      // });
      // let nfts: any = [
      //   {name: 'metopia-club-nft-1', value: "4-0x2AE5f53EA60d98c88B31Eb4c3A35298DF62EE8cd-1"},
      //   {name: 'metopia-club-nft-2', value: "4-0x2AE5f53EA60d98c88B31Eb4c3A35298DF62EE8cd-2"},
      //   {name: 'metopia-club-nft-3', value: "4-0x2AE5f53EA60d98c88B31Eb4c3A35298DF62EE8cd-3"},
      //   {name: 'metopia-club-nft-4', value: "4-0x2AE5f53EA60d98c88B31Eb4c3A35298DF62EE8cd-4"},
      //   // ...res.account?.domains
      // ]
      // console.log('ownedEnsDomains.value::', res.account?.domains)
      ownedEnsDomains.value = nfts;
    } else {
      ownedEnsDomains.value = [];
    }
  };

  function isValidEnsDomain(domain) {
    // if (!domain.includes('.')) return false;
    // return validEnsTlds.includes(domain.split('.').pop());
    return true;
  }

  return {
    loadOwnedEnsDomains,
    ownedEnsDomains,
    validEnsTlds,
    isValidEnsDomain
  };
}
