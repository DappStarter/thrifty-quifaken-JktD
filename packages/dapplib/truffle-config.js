require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note shift pudding grid area sun symbol'; 
let testAccounts = [
"0xfa87d68048ac6f4ebae5683e611a529d2039b6942937cbd87c2a59fe5d27af80",
"0x5c8ed696202f8b3c0d78ed85d48511b58318fa88901ef3860f33f94efd236e99",
"0x48e4ac1442360ee52af6a51c69d5cd0d6c49934e3f9acb145d00fd87963cb5bd",
"0xd75c9d9ce697ca8cc6ff83d265d335853037501d3ed2a9f082ca427a9757117b",
"0xe2983a7e55c703f7187f85606ba3320db9e020d1cc2298ca72ad47cf51ee89c3",
"0x4f1f0efb198efd4d84acb57e149c3546518420d96c3c3be812d302622d623076",
"0x6866091d2bea190673ba63e447c57535d53ff81e1577ec87f349d371975b901f",
"0xb844bd99f202b5e09379610dcbe689e67efee96ecf92f619bae2eb9fac6ac7a9",
"0xe21d676d058ecdec02fb12e40e6a5b6e864da2a98c4ab622a31b124016cfc147",
"0x1ff48db7b3dfcafde5cefe40bf2eb515eb5c8b3ff8e74f126467677541f6fd32"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

