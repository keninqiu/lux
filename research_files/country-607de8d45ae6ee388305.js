(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9384],{89349:function(e){"use strict";e.exports=JSON.parse('{"appInsightsId":"d1bff452-16c0-4f15-9744-223f27abe717","cdn":"https://cdn-payscale.com/content/research-center-web/prod/2021.0818.1622.286-master","contentCdn":"https://cdn-payscale.com","identity":"https://accounts.payscale.com","rcPagesEndpoint":"https://research-center-pages.rho.payscale.com","ffqServiceEndpoint":"https://free-form-question.rho.payscale.com","factServiceEndpoint":"https://fact-service.rho.payscale.com","colEndpoint":"https://cost-of-living-api.rho.payscale.com","blogsEndpoint":"https://www.payscale.com/career-news/wp-json/wp/v2/posts?_embed","psIndexEndpoint":"https://index-api.rho.payscale.com","jobListingsEndpoint":"https://joblistings.myps.payscale.com","geolocateUrl":"https://www.payscale.com/geotarget/v1/City","rcApiEndpoint":"https://api.payscale.com","collegeROIEndpoint":"https://college-roi.rho.payscale.com","collegeSalaryEndpoint":"https://college-salary-report.rho.payscale.com","vwoAccountId":"268416","gtmContainerId":"GTM-P3CVWR","siteUrl":"https://www.payscale.com","secret":"barged-inequity-zGhfLJ","launchDarklySdkKey":"sdk-db91f829-330b-49c6-b0fd-df2672bf0c8f"}')},61425:function(e,t,a){"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.StatesList=t.CardsList=t.JobsList=void 0;var o=n(a(63804)),r=n(a(61350)),l=n(a(47098)),s=a(89977),i=a(83656),c=n(a(45697)),d=function(e,t){if(!Array.isArray(e)||0===e.length)return null;for(var a=[],n=e.length<=9?e.length:9,r=0;r<n;r+=3)a.push(o.default.createElement("div",{className:"location__row",key:"job-card-".concat(r)},e[r]&&o.default.createElement("a",{className:"location__item location__card location__card--job",href:e[r].url},o.default.createElement("div",{className:"location--weighted"},e[r].name),o.default.createElement("div",{className:"location__card--range-text"},(0,s.buildMedianRange)(e[r],t||"USD",!0))),e[r+1]&&o.default.createElement("a",{className:"location__item location__card location__card--job",href:e[r+1].url},o.default.createElement("div",{className:"location--weighted"},e[r+1].name),o.default.createElement("div",{className:"location__card--range-text"},(0,s.buildMedianRange)(e[r+1],t||"USD",!0))),e[r+2]&&o.default.createElement("a",{className:"location__item location__card location__card--job",href:e[r+2].url},o.default.createElement("div",{className:"location--weighted"},e[r+2].name),o.default.createElement("div",{className:"location__card--range-text"},(0,s.buildMedianRange)(e[r+2],t||"USD",!0)))));return a};t.JobsList=d,d.PropTypes={data:c.default.array,currencyCode:c.default.string};var u=function(e,t,a,n){return Array.isArray(e)&&0!==e.length?e.map((function(e,c){var d=n&&n[e.name]&&n[e.name]["Overall Employee Satisfaction"]&&n[e.name]["Overall Employee Satisfaction"].score,u=d?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"location--employer-type"},"salary"===e.type?"Median Salary":"Median Hourly Rate"),o.default.createElement("div",null,(0,s.buildMedianRange)(e,t||"USD",!1)),o.default.createElement("div",null,o.default.createElement(l.default,{value:d}),o.default.createElement("span",{className:"location--rating"},(0,i.FormatNumber)(d,"0.0")))):(0,s.buildMedianRange)(e,t||"USD",!1);return o.default.createElement(r.default,{key:"".concat(c).concat(e.name),title:e.name,titleLink:e.url,subtitle:u,logoProps:{entityType:a,entity:e.name}})})):null};t.CardsList=u,u.PropTypes={data:c.default.array,currencyCode:c.default.string,entityType:c.default.oneOf(["school","employer"])};var m=function(e){return e&&e.locations&&e.locations.data&&e.locations.data.some((function(e){return e.location&&e.location.state||e.location&&e.location.city}))?e.locations.data.sort((function(e,t){return e.location.state&&t.location.state?e.location.state.toLowerCase()>t.location.state.toLowerCase()?1:e.location.state.toLowerCase()<t.location.state.toLowerCase()?-1:0:e.location.city&&t.location.city?e.location.city.toLowerCase()>t.location.city.toLowerCase()?1:e.location.city.toLowerCase()<t.location.city.toLowerCase()?-1:0:0})).map((function(e){var t=e.location.state||e.location.city;return t&&o.default.createElement("div",{key:"category-".concat(t),className:"location__col location__col--full"},o.default.createElement("a",{href:e.url},t))})):null};t.StatesList=m,m.PropTypes={pageData:c.default.object}},85101:function(e,t,a){"use strict";var n=a(95318);t.Z=void 0;var o=n(a(63804)),r=n(a(45697)),l=n(a(1216)),s=n(a(11786)),i=n(a(84422)),c=n(a(30300)),d=n(a(61977)),u=n(a(16881)),m=n(a(33227)),f=n(a(33032)),p=a(89977),y=a(61425),h=function(e){var t=e.getBlogPosts,a=e.pageData,n=e.ratings,r=e.countryCategories,h={source:"ps",section:"rc",detail:"country"},g=(0,p.getCategoryPageDetails)(a&&a.category),b=a&&a.dimensions&&a.dimensions[a.category.toLowerCase()],v=a&&a.country,w=a&&a.currencyCode,E=a&&a.refs&&a.refs.url,_=[{label:"Countries",url:"/research/Country"},{label:b}],N=r&&r.map((function(e){return o.default.createElement("div",{key:"category-".concat(e.text),className:"location__col"},o.default.createElement("a",{href:e.url},e.text))})),k=(0,y.JobsList)((0,p.sortAndFilterReportList)(a,"Job",9),w),C=(0,y.CardsList)((0,p.sortAndFilterReportList)(a,"Employer",5),w,"employer",n),S=(0,y.CardsList)((0,p.sortAndFilterReportList)(a,"School",5),w,"school"),L=(0,p.sortAndFilterReportList)(a,"Degree Major",9),$=L&&L.map((function(e,t){return o.default.createElement("div",{key:"degree-".concat(e.name,"-").concat(t),className:"location__col location__col--full"},o.default.createElement("a",{href:e.url},e.name))})),j=(0,y.StatesList)(a);return j&&0!==j.length||console.error("RCW | States for ".concat(E||b," were invalid")),o.default.createElement(s.default,{className:"rc-directory",headerProps:{bgColor:"transparent"},showFooterSurveyStart:!0,country:b,trackingCode:h,countryCode:v,hero:o.default.createElement(c.default,{id:"rclandinghero",className:"rclanding__hero",header:"Salary Data & Career Research Center (".concat(b,")"),style:{background:"linear-gradient(rgba(45,103,185,.8),rgba(45,103,185,.8)), url(".concat(g.heroImage,")")},centerContent:o.default.createElement(d.default,{default:g.defaultSearch,country:b}),lowerContent:o.default.createElement("a",{href:"/research/Country"},"Looking for another country?")})},o.default.createElement(i.default,null,o.default.createElement(m.default,{items:_}),o.default.createElement("div",{className:"page-section"},o.default.createElement("h2",{className:"page-subtitle"},"Browse All Categories"),o.default.createElement("div",{className:"section-description"},"Do career research and find in-depth salary data for specific jobs, employers, schools, and more. Know what you\u2019re looking for? Start a search above, browse to discover, or"," ",o.default.createElement("a",{href:"/wizards/choose.aspx?tk=categorieslink-ps-rc-country"},"get a free, personalized salary report \xbb")),o.default.createElement("div",{className:"location__row location--top-spaced"},N)),o.default.createElement(f.default,{className:"page-section",id:"singleRow",trackingCode:h}),k?o.default.createElement("div",{className:"page-section",id:"jobs-section"},o.default.createElement("h2",{className:"page-subtitle"},"Browse Popular Jobs"),o.default.createElement("div",{className:"section-description"},"Dive into the most extensive database of job salaries available. In addition, see detailed job descriptions and get information on job satisfaction, job demographics, common job skills and how pay varies over time and between locations."),k,o.default.createElement("div",{className:"location--weighted location--top-spaced"},o.default.createElement("a",{href:"/research/".concat(v,"/Job")},"Browse All Jobs \xbb"))):null,C?o.default.createElement("div",{className:"page-section",id:"employer-section"},o.default.createElement("h2",{className:"page-subtitle"},"Learn About Employers"),o.default.createElement("div",{className:"section-description"},"Before you show up for a job interview, do your homework. See how different employers pay, how satisfied their employees are and what it\u2019s really like to work there."),o.default.createElement("div",{className:"location__row location__country-card--related-sizing"},C),o.default.createElement("div",{className:"location--weighted location--top-spaced"},o.default.createElement("a",{href:"/research/".concat(v,"/Employer")},"Browse All Employers \xbb"))):null,S||$?o.default.createElement("div",{className:"page-section"},o.default.createElement("h2",{className:"page-subtitle"},"Research Schools and Degrees"),o.default.createElement("div",{className:"section-description"},"Whether you\u2019re choosing a school, degree, or are simply curious about your alma mater, we\u2019ll show you career outcomes by either college or major."),S?o.default.createElement(o.default.Fragment,null,o.default.createElement("h3",{className:"page-subheader"},"Salary Ranges for Popular Schools"),o.default.createElement("div",{className:"location__row location__country-card--related-sizing",id:"school-list"},S),o.default.createElement("div",{className:"location--weighted location--top-spaced"},o.default.createElement("a",{href:"/research/".concat(v,"/School")},"Browse All Schools \xbb"))):null,$?o.default.createElement(o.default.Fragment,null,o.default.createElement("h3",{className:"page-subheader"},"Browse Popular Degrees"),o.default.createElement("div",{className:"location__row location--top-spaced",id:"degree-list"},$),o.default.createElement("div",{className:"location--weighted location--top-spaced"},o.default.createElement("a",{href:"/research/".concat(v,"/Degree")},"Browse All Degrees \xbb"))):null):null,t?o.default.createElement("div",{className:"page-section",id:"blog-section"},o.default.createElement("h2",{className:"page-subtitle"},"Get Career Tips and Advice"),o.default.createElement("div",{className:"section-description"},"We\u2019ve got serious career advice, with a side of sass, on careers, salary negotiation and professional growth \u2013 and the data to back it up. The world of work has changed dramatically. The same old career advice just doesn\u2019t cut it."),o.default.createElement("h3",{className:"page-subheader"},"Recent Blog Posts on Career News"),o.default.createElement(l.default,{once:!0,height:362,offset:800},o.default.createElement(u.default,{noSpacing:!0,fetch:t,header:null})),o.default.createElement("div",{className:"location--weighted location--top-spaced"},o.default.createElement("a",{href:"/career-news"},"See More Career News \xbb"))):null,j&&j.length>0?o.default.createElement("div",{className:"page-section",id:"state-section"},o.default.createElement("h2",{className:"page-subtitle"},"Browse by States"),o.default.createElement("div",{className:"location__row location--top-spaced"},j)):null))};h.propTypes={countryCategories:r.default.arrayOf(r.default.shape({name:r.default.string,url:r.default.string})),getBlogPosts:r.default.func,pageData:r.default.object,ratings:r.default.object};var g=h;t.Z=g},33227:function(e,t,a){"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(63804)),r=n(a(45697)),l=function(e){return o.default.createElement("div",{key:e.label,className:"breadcrumbs__item"},e.onClick?o.default.createElement("span",{key:e.label,onClick:e.onClick},e.label):e.url?o.default.createElement("a",{key:e.label,href:e.url},e.label):e.label)},s=function(e){var t=e.items,a=e.className;return t&&0!==t.length?o.default.createElement("div",{className:"breadcrumbs ".concat(a)},t.map(l)):null};s.propTypes={className:r.default.string,items:r.default.arrayOf(r.default.shape({label:r.default.string,onClick:r.default.func,url:r.default.string}))},s.defaultProps={className:""},s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Optional class name"},items:{type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",description:"The text for the breadcrumb",required:!1},onClick:{name:"func",description:"Optional onClick function instead of a url",required:!1},url:{name:"string",description:"Url for the link",required:!1}}}},required:!1,description:"Ordered array of links"}}};var i=s;t.default=i},47098:function(e,t,a){"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(63804)),r=n(a(45697)),l=function(e){for(var t=e.icon,a=e.value,n=e.className,r=e.onClick,l=e.onMouseEnter,s=e.onMouseLeave,i=[],c=1;c<=5;c++)i.push(o.default.createElement("i",{key:c,className:t,onMouseEnter:l&&l.bind(null,c),onMouseLeave:s&&s.bind(null,c),onClick:r&&r.bind(null,c)}));return o.default.createElement("div",{className:"rating ".concat(n),title:a},o.default.createElement("div",{className:"rating__background"},i),o.default.createElement("div",{className:"rating__fill",style:{width:"".concat(Math.round(a/5*100),"%")}},i))};l.propTypes={className:r.default.string,icon:r.default.string,onMouseEnter:r.default.func,onMouseLeave:r.default.func,onClick:r.default.func,value:r.default.number},l.defaultProps={className:"",icon:"icon-star",value:0},l.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Optional class name"},icon:{defaultValue:{value:"'icon-star'",computed:!1},type:{name:"string"},required:!1,description:"The icon name to use"},value:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:"Number between 1 and 5, rating."},onMouseEnter:{type:{name:"func"},required:!1,description:"Function to handle entering hover state"},onMouseLeave:{type:{name:"func"},required:!1,description:"Function to handle exiting hover state"},onClick:{type:{name:"func"},required:!1,description:"Function to handle click"}}};var s=l;t.default=s},61350:function(e,t,a){"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.getAcronym=g,t.default=void 0;var o=n(a(67154)),r=n(a(34575)),l=n(a(93913)),s=n(a(81506)),i=n(a(2205)),c=n(a(78585)),d=n(a(29754)),u=n(a(59713)),m=n(a(63804)),f=n(a(45697)),p=n(a(1216)),y=n(a(71216));function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return(0,c.default)(this,a)}}function g(e,t){var a=e;return-1!==a.indexOf(",")&&(a=a.substr(0,a.indexOf(","))),1!==a.indexOf("and")&&(a=a.replace(new RegExp(/and/g,"i"),"")),-1!==a.indexOf("(")&&(a=a.substr(0,a.indexOf("("))+a.substr(a.indexOf(")"),a.length)),a.match(/\b(\w)/g).join("").toUpperCase().substr(0,t)}var b=function(e){(0,i.default)(a,e);var t=h(a);function a(e){var n;(0,r.default)(this,a),n=t.call(this,e),(0,u.default)((0,s.default)(n),"handleNotFound",(function(){n.setState({showAcronym:!0})})),(0,u.default)((0,s.default)(n),"renderImage",(function(e){return e?m.default.createElement(p.default,{height:70,once:!0},m.default.createElement(y.default,(0,o.default)({className:"related-content-card__image-container__image"},e))):null}));var l=e.showAcronym,i=e.logoProps;return n.state={showAcronym:!(i||!l)},n}return(0,l.default)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.numLetters,n=e.className,o=e.titleLink,r=e.subtitle,l=e.hideLogo,s=this.state.showAcronym?g(t,a):"",i=this.props.logoProps;return i&&(i.handleNotFound=this.props.showAcronym?this.handleNotFound:null),t&&o?m.default.createElement("a",{"data-instant":!0,className:"related-content-card".concat(n?" ".concat(n):""),href:o},m.default.createElement("div",{className:"related-content-card__image-container"},s&&m.default.createElement("div",{className:"related-content-card__image-container__text"},s),!l&&this.renderImage(i)),m.default.createElement("div",{className:"related-content-card__title"},t),m.default.createElement("div",{className:"related-content-card__subtitle"},r)):null}}]),a}(m.default.Component);b.propTypes={className:f.default.string,hideLogo:f.default.bool,logoProps:f.default.shape({entity:f.default.string,entityType:f.default.oneOf(["employer","job","school","degree","col","industry","skill","state","country"]),handleNotFound:f.default.func,placeholder:f.default.string,url:f.default.string}),numLetters:f.default.number,showAcronym:f.default.bool,subtitle:f.default.any,title:f.default.string,titleLink:f.default.string},b.defaultProps={className:"",numLetters:3},b.__docgenInfo={description:"",methods:[{name:"handleNotFound",docblock:null,modifiers:[],params:[],returns:null},{name:"renderImage",docblock:null,modifiers:[],params:[{name:"logoProps",type:null}],returns:null}],displayName:"RelatedContentCard",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Optional class name"},numLetters:{defaultValue:{value:"3",computed:!1},type:{name:"number"},required:!1,description:"Number of letters to display in the acronym"},hideLogo:{type:{name:"bool"},required:!1,description:"Force hiding of the logo image (for perf)"},logoProps:{type:{name:"shape",value:{entity:{name:"string",required:!1},entityType:{name:"enum",value:[{value:"'employer'",computed:!1},{value:"'job'",computed:!1},{value:"'school'",computed:!1},{value:"'degree'",computed:!1},{value:"'col'",computed:!1},{value:"'industry'",computed:!1},{value:"'skill'",computed:!1},{value:"'state'",computed:!1},{value:"'country'",computed:!1}],required:!1},handleNotFound:{name:"func",required:!1},placeholder:{name:"string",required:!1},url:{name:"string",required:!1}}},required:!1,description:"Set of props for logo displayed in component."},showAcronym:{type:{name:"bool"},required:!1,description:"Boolean for whether to show the acronym generated from the title"},subtitle:{type:{name:"any"},required:!1,description:"Optional subtitle for the card"},title:{type:{name:"string"},required:!1,description:"The title of the card"},titleLink:{type:{name:"string"},required:!1,description:"The URL that the title will link to"}}};var v=b;t.default=v},1194:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(63804),o=a.n(n),r=a(9008),l=a(89349),s=o().createElement;const i=({favicons:e})=>e&&e.length?s(r.default,null,e.map((e=>s("link",{key:e.href,rel:e.rel||"icon",href:e.href,sizes:e.sizes,type:e.type})))):null,c=({containerId:e})=>s(r.default,null,s("script",{key:"gtm",dangerouslySetInnerHTML:{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n  })(window,document,'script','dataLayer','${e}');`}})),d=({families:e})=>{if(!e||!e.length)return null;const t=e.map((e=>`${e.fontName}:${e.weights.join(",")}`)).join("|");return s(r.default,null,s("script",{key:"webfont",crossOrigin:"anonymous",dangerouslySetInnerHTML:{__html:`\n          (function(e){var t=new XMLHttpRequest;t.open("GET",e,!0),t.onreadystatechange=(function(){if(4==t.readyState&&200==t.status){let e=t.responseText;e=e.replace(/}/g,"font-display: swap; }");const a=document.getElementsByTagName("head")[0],n=document.createElement("style");n.appendChild(document.createTextNode(e)),a.appendChild(n)}}),t.send()})("https://fonts.googleapis.com/css?family=${t}");\n          `}}))},u=({jsonLdObjects:e})=>e&&0!==e.length?s(r.default,null,e.map(((e,t)=>e?s("script",{crossOrigin:"anonymous",type:"application/ld+json",key:`jsonld-${t}`,dangerouslySetInnerHTML:{__html:JSON.stringify(e)}}):null))):null;d.defaultProps={families:[{fontName:"Roboto",weights:[300,400,700,900]}]};var m=a(55154),f=o().createElement;const{gtmContainerId:p,siteUrl:y}=l,h=e=>{const{title:t,description:a,canonicalUrl:n,paginationProps:l,jsonld:s,specialCaseFirstPageUrl:h,includeNextAndPrev:g,rcSection:b}=e;let v,w;if(l){const{totalItems:e,pageSize:t}=l;v=l.activePage,w=t>0?Math.ceil(e/t):1}const E=(0,m.Jj)(y,n,v),_=(0,m.J2)(y,n,v,w),N=(0,m.Kk)(y,n,v,w,h);return f(o().Fragment,null,f(r.default,null,f("title",{key:"title"},t||"PayScale"),f("meta",{key:"description",name:"description",content:a})),f(r.default,null,f("link",{key:"canonical",rel:"canonical",href:E})),l&&g&&_&&f(r.default,null,f("link",{key:"rel-next",rel:"next",href:_})),l&&g&&N&&f(r.default,null,f("link",{key:"rel-prev",rel:"prev",href:N})),f(r.default,null,b&&f("script",{key:"rcSection",dangerouslySetInnerHTML:{__html:`\n              if (typeof window !== 'undefined' && window !== null) {\n                window.dataLayer = window.dataLayer || [];\n                window.dataLayer.push({\n                  rcSection: '${b}',\n                  cacheControl: 'public',\n                  origin: 'payscale'\n                });\n              }`}})),f(d,{families:[{fontName:"Roboto",weights:[300,400,700,900]}]}),f(i,{favicons:[{href:"https://cdn-payscale.com/content/favicon/favicon-32x32.png",sizes:"32x32",type:"image/png"}]}),f(r.default,null,f("script",{key:"cookies",dangerouslySetInnerHTML:{__html:'!function(t){var o={};function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=17)}({0:function(e,n,t){"use strict";t.r(n),t.d(n,"hasAcceptedCookiePolicy",function(){return r}),t.d(n,"createNecessaryCookie",function(){return c}),t.d(n,"createCookie",function(){return i}),t.d(n,"readCookie",function(){return o}),t.d(n,"eraseCookie",function(){return u});var r=function(){var e=o("accept-cookie"),n=o("client-origin");return"yes"===e||"na"===e||"non-eu"===n&&(c("accept-cookie","na",".payscale.com",365),!0)},c=function(e,n,t,o){var r="";if(o){var c=new Date;c.setTime(c.getTime()+24*o*60*60*1e3),r="; expires=".concat(c.toGMTString())}var i=t?"".concat(e,"=").concat(n).concat(r,"; domain=").concat(t,"; path=/"):"".concat(e,"=").concat(n).concat(r,"; path=/");document.cookie=i},i=function(e,n,t,o){(r()||-1===o)&&c(e,n,t,o)},o=function(e){for(var n="".concat(e,"="),t=document.cookie.split(";"),o=0;o<t.length;o++){for(var r=t[o];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return null},u=function(e,n){if(n)i(e,"",n,-1);else for(var t=document.domain.split("."),o=0;o<t.length;o++){var r="".concat(t.slice(o,t.length).join("."));i(e,"",r,-1),i(e,"",".".concat(r),-1)}}},17:function(e,n,t){"use strict";t.r(n);var o=t(0);"undefined"!=typeof window&&Object.keys(o).forEach(function(e){window[e]=o[e]})}});'}})),f(c,{containerId:p}),s&&f(u,{jsonLdObjects:s}),f("style",{dangerouslySetInnerHTML:{__html:"\n      .__react_component_tooltip { background: #222; color: #fff }\n    "}}))};h.defaultProps={includeNextAndPrev:!0,pagination:{}};var g=h},55398:function(e,t,a){"use strict";a.d(t,{I2:function(){return n},Bj:function(){return o},z$:function(){return r},kd:function(){return l}});const n=(e,t)=>{const a=t&&"United States"!==t?` in ${t}`:"";return{Employer:{title:`Company Salaries${a} | PayScale`,description:"Learn how much companies pay their employees. Browse company salaries, reviews, benefits, bonuses, and more from data provided by real employees."},Job:{title:`Job Salaries${a} | PayScale`,description:"Learn how much employees earn by their job title. Browse job salaries by company, location, experience and more from data provided by real employees."},Degree:{title:`Degree Salaries${a} | PayScale`,description:"Learn how much employees earn by the degrees they have received. Browse degree salaries, hourly pay, bonuses, and more from data provided by real employees."},Certification:{title:`Certification Salaries${a} | PayScale`,description:"Learn how much employees earn based on the certification they have received. Browse certification salaries, hourly pay, bonuses, and more from data provided by real employees."},Industry:{title:`Industry Salaries${a} | PayScale`,description:"Learn how much employees earn based on their industry. Browse industry salaries, hourly pay, bonuses, and more from data provided by real employees."},Skill:{title:`Salaries By Skill${a} | PayScale`,description:"Learn how much employees earn by the skills they have gained. Browse degree salaries, hourly pay, bonuses, and more from data provided by real employees."},School:{title:`Salaries By School${a} | PayScale`,description:"Learn how much employees earn based on the schools they attended. Browse school salaries, hourly pay, bonuses, and more from data provided by real employees."},Country:{title:"Salaries By Country | PayScale",description:"Learn how much employees earn based on the country they live in. Browse country salaries, hourly pay, bonuses, and more from data provided by real employees."}}[e]},o={Employer:{blogCategory:6320},Job:{blogCategory:6321},Degree:{blogCategory:6322},Certification:{blogCategory:6322},Industry:{blogCategory:6320},Skill:{blogCategory:6322},School:{blogCategory:6322},State:{blogCategory:6321},Country:{blogCategory:6321}},r=(e,t,a)=>{const n=t.toLowerCase(),o=e.toLowerCase(),r=a?` (starting with ${a})`:"";switch(e){case"Employer":return`Learn how much ${n} companies${r} pay their employees. Browse ${n} companies${r} salaries, reviews, benefits, bonuses, and more from data provided by real employees.`;case"Job":return`Learn how much employees earn by their job title${r} in the ${n} industry. Browse job${a?`s${r}`:""} salaries in the ${n} industry by company, location, experience and more from data provided by real employees.`;case"Industry":return`Learn how much employees earn based on the ${n} ${s(o)}${r} they work in. Browse ${n} ${s(o)}${r} salaries, hourly pay, bonuses, and more from data provided by real employees.`;case"Skill":return`Learn how much employees earn based on the ${n} ${o}s${r} they gained. Browse ${n} ${o}s${r} salaries, hourly pay, bonuses, and more from data provided by real employees.`;case"School":return`Learn how much employees earn based on the ${n} ${o}s${r} they attended. Browse ${n} ${o}s${r} salaries, hourly pay, bonuses, and more from data provided by real employees.`;default:return`Learn how much employees earn based on the ${n} ${s(o)}${r} they have received. Browse ${n} ${s(o)}${r} salaries, hourly pay, bonuses, and more from data provided by real employees.`}},l=(e,t,a,n,o)=>`${t} ${s(e)}${"United States"!==n?` in ${n}`:""}${a?`: Begins with ${a}`:""}${o&&o>1?` - Page ${o}`:""} | PayScale`,s=e=>"y"===e.slice(-1)?`${e.substring(0,e.length-1)}ies`:`${e}s`},48460:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return u}});var n=a(63804),o=a.n(n),r=a(1194),l=a(85101),s=a(43661),i=a(89349),c=a(55398),d=(a(98455),a(48014),o().createElement);var u=!0;t.default=({pageData:e,ratings:t,countryCategories:a})=>{const n=e&&e.dimensions&&e.dimensions.country;return d(o().Fragment,null,d(r.Z,{canonicalUrl:e.refs?e.refs.url:e.url,title:`${n} | PayScale`,description:`${n} - Get a free salary comparison based on job title, skills, experience and education. Accurate, reliable salary and compensation comparisons for ${n}`}),d(l.Z,{pageData:e,getBlogPosts:()=>(0,s.Tf)(i.blogsEndpoint,c.Bj.Country.blogCategory,"content-carousel-280"),ratings:t,countryCategories:a}))}},45970:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/location/country",function(){return a(48460)}])},98455:function(){},63804:function(e){"use strict";e.exports=React},27196:function(e){"use strict";e.exports=ReactDOM}},function(e){e.O(0,[9774,2763,1216,3661,6861,1555,1977,1581,802],(function(){return t=45970,e(e.s=t);var t}));var t=e.O();_N_E=t}]);