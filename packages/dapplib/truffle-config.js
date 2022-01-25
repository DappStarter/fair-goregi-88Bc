require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food ivory rice night unfold coral light army gate'; 
let testAccounts = [
"0xbcc93dd0c094f7bf10b9de46e480997df23fb2b6fe81b419aae352977e13ab46",
"0x32f312a1d12819202bf74c0ebe46485418d84e019f8e635f0c22e751082b83b8",
"0x2cb7dae2a12ffdf4395247f2bac7f790f387dcd39fa98352dd418cab7da178cd",
"0x4790229becae650ad7f53c784c4e51cf4d84b578631ee815885acbf2d52a65b6",
"0x1394c9dfd99694cf44654c1a5b5f15e281636a9782de5dcd6b798d7dffd6e4cb",
"0x0d1cbf29deb0db9ccc7984849e6e9174f9f4e494855c2dd2b4c41841e6d94860",
"0x230040b6824b3e8627cfe782f238addfd4a9c2f0a839b32205d096db07f6b534",
"0x602176c4c996e9f32e556b8a5c81053b0b292b41846b72419012afc0e0dcc9d8",
"0x2bc330cf36e8c84cdf6d653a1d13f7314f2191cfe2937538642b5d29496ba5c6",
"0x35bbaad162a26ea2a79ddc59ccd64c491cecb6e29144aa1da681b49889964fef"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


