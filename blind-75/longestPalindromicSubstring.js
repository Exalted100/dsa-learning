// https://leetcode.com/problems/longest-palindromic-substring/description/

/**
 * @param {string} s
 * @return {string}
 */
// TOO SLOW
var longestPalindrome = function(s) {
    const startTime = new Date();
    s = s.split("");
    let longestSub = [s[0]];

    for (let i = 0; i < s.length; i++) {
        for (let e = 0; e < s.length; e++) {
            const str = s.slice(i, e + 1);

            for (let a = 0, b = str.length - 1; a < str.length; a++, b--) {
                if (str[a] !== str[b]) {
                    break;
                } else {
                    if (str.length - 1 === a && str.length > longestSub.length) {
                        longestSub = str;
                    }
                }
            }
        }
    }

    const endTime = new Date();

    console.log((endTime - startTime) / 1000)

    return longestSub.join("");
};

// var longestPalindrome = function(s) {
//     const startTime = new Date();
//     if(s.length===1) return s[0];
//     let count = 0, ans = s[0];
//     for(let i=0; i<=s.length-2; i++){
//         for(let j=s.length-1;j>i; j--){
//             if(isPallindrome(s,i,j)){
//                 if(j-i > count){
//                     count = j-i;
//                     ans = str(s,i,j);
//                 }
                
//             }
//         }
//     }
//     const endTime = new Date();

//     console.log((endTime - startTime) / 1000)
//     return ans;
// };

// function str(string, s,e){
//     let res = "";
//     for(let i=s; i<=e; i++){
//         res += string[i];
//     }

//     console.log(res)
//     return res;
// }

// function isPallindrome(str,s,e){
//     while(s<e){
//         if(str[s]!==str[e]) return false;
//         s++,e--;
//     }
//     return true;
// }

// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"))
// console.log(longestPalindrome("zbkksfgesmfyuedjxdtknclymgskfjduhfocipzjqnmvcodjlvlagmhokqfeudickyeoobmkerjdeloxfbauryanltprloaeboavxzltgcurgbtgtpygpjizoopwmwjixaowppdvkferupefhwombszifyliidrxpxgcpbfzqtxdfiwfmtgvjiccrigwljrlvhaegvbitngckdnsfcnqlgykwjmsifcttcbeummaoidrrhkxmxctugcrlpbiolzqnjtwhzreruglrdvzioewcgvjjwfyqmhupusktptvfpcqxkvpbrlzchtacmlzgeejnvjzzhcegwtwqhimwooflzeiomeqyrnaeiquolmsunqrgffkpljewyritkivdrfnovbatdstypzsmbjdrromcqexnmjcuqpjzzjpqucjmnxeqcmorrdjbmszpytsdtabvonfrdviktirywejlpkffgrqnusmlouqieanryqemoiezlfoowmihqwtwgechzzjvnjeegzlmcathczlrbpvkxqcpfvtptksupuhmqyfwjjvgcweoizvdrlgurerzhwtjnqzloibplrcgutcxmxkhrrdioammuebcttcfismjwkyglqncfsndkcgntibvgeahvlrjlwgirccijvgtmfwifdxtqzfbpcgxpxrdiilyfizsbmowhfepurefkvdppwoaxijwmwpoozijpgyptgtbgrucgtlzxvaobeaolrptlnayruabfxoledjrekmbooeykciduefqkohmgalvljdocvmnqjzpicofhudjfksgmylcnktdxjdeuyfmsegfskkbz"))
// console.log(longestPalindrome("txzokgefxajgkrlhllbqmcrtbjpppdzugzketdvlaxametkejdfbcwxijjjywjzoedqduensgouechpbdthevggtdelqyejxvybvmttbkheqfyiartxmmuxbkixgslcmjondweiyuvztqntkmvkxqqlfxgotaexzejnmfrhvkgaxyxdxasxrjevzwfvwvmxqikvsfbhhznjsvrlzkwionopahxhcetbsacwrazeciknyczsrxpbblvskzfaimaoyxfcwcsfxlulcezkbiszclkcfawqefwbhalyqjtvedlwigklrkuzyfamqjgjmytxytrlwhttelgttxlizpypwccfhwhwtzyawxyjqnynfdgrqixbwfahrjvvoowehmhyllnfhnnaswfmjitjbftpyvbfgtywcvhcziempcmxlgfuktengaakiwbovlfdtkropqvntuawouofuebfqojpmbodeaaedobmpjoqfbeufouowautnvqporktdflvobwikaagnetkufglxmcpmeizchvcwytgfbvyptfbjtijmfwsannhfnllyhmhewoovvjrhafwbxiqrgdfnynqjyxwayztwhwhfccwpypzilxttgletthwlrtyxtymjgjqmafyzukrlkgiwldevtjqylahbwfeqwafcklczsibkzeclulxfscwcfxyoamiafzksvlbbpxrszcynkicezarwcasbtechxhaponoiwkzlrvsjnzhhbfsvkiqxmvwvfwzvejrxsaxdxyxagkvhrfmnjezxeatogxflqqxkvmktnqtzvuyiewdnojmclsgxikbxummxtraiyfqehkbttmvbyvxjeyqledtggvehtdbphceuogsneudqdeozjwyjjjixwcbfdjektemaxalvdtekzguzdpppjbtrcmqbllhlrkgjaxfegkozxt"))
// console.log(longestPalindrome("qbmhukucteihghldwdobtvgwwnhflpceiwhbkmvxavmqxedfndegztlpjptpdowwavemasyrjxxnhldnloyizyxgqlhejsdylvkpdzllrzoywfkcamhljminikvwwvqlerdilrdgzifojjlgeayprejhaequyhcohoeonagsmfrqhfzllobwjhxdxzadwxiglvzwiqyzlnamqqsastxlojpcsleohgtcuzzrvwzqugyimaqtorkafyebrgmrfmczwiexdzcokbqymnzigifbqzvfzjcjuugdmvegnvkgbmdowpacyspszvgdapklrhlhcmwkwwqatfswmxyfnxkepdotnvwndjrcclvewomyniaefhhcqkefkyovqxyswqpnysafnydbiuanqphfhfbfovxuezlovokrsocdqrqfzbqhntjafzfjisexcdlnjbhwrvnyabjbshqsxnaxhvtmqlfgdumtpeqzyuvmbkvmmdtywquydontkugdayjqewcgtyajofmbpdmykqobcxgqivmpzmhhcqiyleqitojrrsknhwepoxawpsxcbtsvagybnghqnlpcxlnshihcjdjxxjjwyplnemojhodksckmqdvnzewhzzuswzctnlyvyttuhlreynuternbqonlsfuchxtsyhqlvifcxerzqepthwqrsftaquzuxwcmjjulvjrkatlfqshpyjsbaqwawgpabkkjrtchqmriykbdsxwnkpaktrvmxjtfhwpzmieuqevlodtroiulzgbocrtiuvpywtcxvajkpfmaqckgrcmofkxynjxgvxqvkmhdbvumdaprijkjxxvpqnxakiavuwnifvyfolwlekptxbnctjijppickuqhguvtoqfgepcufbiysfljgmfepwyaxusvnsratn"))