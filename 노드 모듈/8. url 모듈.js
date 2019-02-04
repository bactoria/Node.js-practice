// url 모듈 추가
const url = require('url')

const blog = 'https://bactoria.me?search=안녕&id=123'

/* Case 1. url.parse*/
const myURL_BASIC = url.parse(blog); // 도메인이 생략하여 사용 가능 ( ex. bactoria.me/post/73 => /post/73  단, 자기자신)
/* myURL_BASIC ::
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'bactoria.me',
  port: null,
  hostname: 'bactoria.me',
  hash: null,
  search: '?search=안녕&id=123',
  query: 'search=안녕&id=123',
  pathname: '/',
  path: '/?search=안녕&id=123',
  href: 'https://bactoria.me/?search=안녕&id=123' }
*/

// querystring 모듈 추가
const querystring = require('querystring');

console.log(querystring.parse(myURL_BASIC.query)); // { search: '안녕', id: '123' }


/* Case 2. url.URL*/
const myURL_WHATWG = new url.URL(blog); // 쿼리스트링 다루기 편리함
/* myURL_WHATWG ::
URL {
  href: 'https://bactoria.me/?search=%EC%95%88%EB%85%95&id=123',
  origin: 'https://bactoria.me',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'bactoria.me',
  hostname: 'bactoria.me',
  port: '',
  pathname: '/',
  search: '?search=%EC%95%88%EB%85%95&id=123',
  searchParams: URLSearchParams { 'search' => '안녕', 'id' => '123' },
  hash: '' }
*/

console.log(myURL_WHATWG.searchParams)                  // URLSearchParams { 'search' => '안녕', 'id' => '123' }
console.log(myURL_WHATWG.searchParams.toString())   // search=%EC%95%88%EB%85%95&id=123
console.log(myURL_WHATWG.searchParams.keys())        // URLSearchParams Iterator { 'search', 'id' }
console.log(myURL_WHATWG.searchParams.values())     // URLSearchParams Iterator { '안녕', '123' }
myURL_WHATWG.searchParams.delete('search')             // [ '안녕' ]
console.log(myURL_WHATWG.searchParams)                  // URLSearchParams { 'id' => '123' }


////////


