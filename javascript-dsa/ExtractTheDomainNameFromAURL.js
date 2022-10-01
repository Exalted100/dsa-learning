/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
    //your code here
    if (url.includes("www")) {
    let arr = url.split(".")
    return arr[1]
    } else if (url.includes("//")) {
      let arr = url.split("//")
      return arr[1].split(".")[0]
    } else {
      let arr = url.split(".")
      return arr[0]
    }
  }