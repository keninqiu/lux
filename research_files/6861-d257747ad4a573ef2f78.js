(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6861],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a},e.exports.default=e.exports,e.exports.__esModule=!0},22858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},13884:function(e){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,l=!1,o=void 0;try{for(var n,s=e[Symbol.iterator]();!(a=(n=s.next()).done)&&(r.push(n.value),!t||r.length!==t);a=!0);}catch(i){l=!0,o=i}finally{try{a||null==s.return||s.return()}finally{if(l)throw o}}return r}},e.exports.default=e.exports,e.exports.__esModule=!0},80521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},63038:function(e,t,r){var a=r(22858),l=r(13884),o=r(60379),n=r(80521);e.exports=function(e,t){return a(e)||l(e,t)||o(e,t)||n()},e.exports.default=e.exports,e.exports.__esModule=!0},60379:function(e,t,r){var a=r(67228);e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},13876:function(e,t,r){"use strict";var a=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.getLogoUrl=void 0;var l=a(r(87757)),o=a(r(48926)),n=a(r(63144)),s={},i={},c=function(){var e=(0,o.default)(l.default.mark((function e(t,r,a,c){var u,d,p;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s[r]){e.next=2;break}return e.abrupt("return",s[r]||i[r]);case 2:if(!i[r]){e.next=4;break}return e.abrupt("return",i[r]);case 4:return"col"===a?u="https://cdn-payscale.com/content/costofliving-icons/".concat(r,"_City.svg"):(d=encodeURIComponent(r.replace(" - Main Campus","").replace(" Campus","")),u="".concat(t,"/Logo?entity=").concat(d,"&source=crunchbase")),p=(0,n.default)(u).then(function(){var e=(0,o.default)(l.default.mark((function e(t){var o;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=9;break}if(i[r]=t.data,"col"!==a){e.next=4;break}return e.abrupt("return",new Promise((function(e){return e(u)})));case 4:return e.next=6,t.json();case 6:o=e.sent,e.next=10;break;case 9:o=c?c():void 0;case 10:return delete s[r],e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){c&&c()})),s[r]=p,e.abrupt("return",p);case 8:case"end":return e.stop()}}),e)})));return function(t,r,a,l){return e.apply(this,arguments)}}();t.getLogoUrl=c},35740:function(e,t,r){"use strict";var a=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(63804)),o=a(r(45697)),n=function(e){var t=e.closeHighlights,r=e.rightPosOfArrow;return l.default.createElement("div",{className:"highlights"},l.default.createElement("div",{className:"highlights__arrow",style:{right:r}}),l.default.createElement("a",{className:"highlights__close"},l.default.createElement("i",{className:"icon-cancel",onClick:t})),l.default.createElement("div",{className:"highlights__text"},l.default.createElement("div",{className:"highlights__text-header"},"What's in a personalized salary report?"),l.default.createElement("ul",null,l.default.createElement("li",{className:"highlights__text-list"},"Your market worth over time and trends in pay"),l.default.createElement("li",{className:"highlights__text-list"},"Skill and course recommendations to boost your pay"),l.default.createElement("li",{className:"highlights__text-list"},"Job listings tailored to you"))),l.default.createElement("div",{className:"highlights__image-cont"},l.default.createElement("img",{className:"highlights__image",src:"https://cdn-payscale.com/content/salary-reports-promo.png",alt:"Salary reports"})))};n.propTypes={closeHighlights:o.default.func.isRequired,rightPosOfArrow:o.default.string.isRequired},n.__docgenInfo={description:"",methods:[],displayName:"Highlights",props:{closeHighlights:{type:{name:"func"},required:!0,description:""},rightPosOfArrow:{type:{name:"string"},required:!0,description:"'right' value of the the arrowhead position"}}};var s=n;t.default=s},71216:function(e,t,r){"use strict";var a=r(20862),l=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(r(63038)),n=a(r(63804)),s=l(r(45697)),i=r(13876),c={employer:"https://cdn-payscale.com/content/placeholder-images/employer-placeholder.png",school:"https://cdn-payscale.com/content/placeholder-images/school-placeholder.png",job:"https://cdn-payscale.com/content/placeholder-images/job-placeholder.png",degree:"https://cdn-payscale.com/content/logos/degree-placeholder-light.png",col:"https://cdn-payscale.com/content/col-skyline-empty-state-graphic.png",certification:"https://cdn-payscale.com/content/placeholder-images/certification-placeholder.png",industry:"https://cdn-payscale.com/content/placeholder-images/industry-placeholder.png",skill:"https://cdn-payscale.com/content/placeholder-images/skill-placeholder.png",state:"https://cdn-payscale.com/content/placeholder-images/state-placeholder.jpg",country:"https://cdn-payscale.com/content/placeholder-images/country-placeholder.jpg"},u=function(e){var t,r=(0,n.useState)(""),a=(0,o.default)(r,2),l=a[0],s=a[1],u=e.baseEndpointUrl,d=e.entity,p=e.handleNotFound,f=e.url,m=e.entityType,g=e.className,h=e.placeholder;return(0,n.useEffect)((function(){!f&&d&&m.match(/^(employer|school|country)$/)&&(0,i.getLogoUrl)(u,d,m,p).then((function(e){return s(e)}))}),[]),t=l||(f||(h||(m&&c[m]?c[m]:""))),n.default.createElement("img",{className:"conux-logo ".concat(g),src:t,alt:d||""})};u.propTypes={baseEndpointUrl:s.default.string,className:s.default.string,entity:s.default.string,entityType:s.default.oneOf(["employer","job","school","degree","col","industry","skill","state","country","certification"]),handleNotFound:s.default.func,placeholder:s.default.string,url:s.default.string},u.defaultProps={baseEndpointUrl:"https://fact-service.rho.payscale.com/v1",className:""},u.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{baseEndpointUrl:{defaultValue:{value:"'https://fact-service.rho.payscale.com/v1'",computed:!1},type:{name:"string"},required:!1,description:"The base url of the endpoint for fetching logo urls"},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Optional custom class name."},entity:{type:{name:"string"},required:!1,description:"Name of the page entity (e.g. Amazon.com Inc, AirBnB, University of Washington)."},entityType:{type:{name:"enum",value:[{value:"'employer'",computed:!1},{value:"'job'",computed:!1},{value:"'school'",computed:!1},{value:"'degree'",computed:!1},{value:"'col'",computed:!1},{value:"'industry'",computed:!1},{value:"'skill'",computed:!1},{value:"'state'",computed:!1},{value:"'country'",computed:!1},{value:"'certification'",computed:!1}]},required:!1,description:"Page type required to determine placeholder image."},handleNotFound:{type:{name:"func"},required:!1,description:"A function the parent can specify to handle when the API does not return a logo."},placeholder:{type:{name:"string"},required:!1,description:"Image url to specify your own placeholder, overrides page type placeholder image."},url:{type:{name:"string"},required:!1,description:"The image src. If this is given, no request will be made to fetch the src url."}}};var d=u;t.default=d},33032:function(e,t,r){"use strict";var a=r(20862),l=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(r(63038)),n=a(r(63804)),s=l(r(45697)),i=l(r(76188)),c=l(r(88359)),u=l(r(35740)),d=r(85116),p=function(e){var t=e.id,r=e.urlHost,a=e.trackingCode,l=e.className,s=e.job,p=e.country,f=e.location,m=e.geotargetUrl,g=e.askForJobTitle,h=void 0!==g&&g,y=(0,n.useState)(!1),v=(0,o.default)(y,2),_=v[0],b=v[1],w=(0,n.useRef)(null),E=function(){b(!_)},x=h?"Enter job title & years of experience":"Enter city & years of experience";return n.default.createElement("div",{id:t,className:"single-row-start ".concat(l)},n.default.createElement("div",{className:"single-row-start__header"},s?"Is ".concat(s," your job title? "):"","Find out what you should be paid",n.default.createElement("div",{className:"single-row-start__sub-header"},"Use our tool to get a personalized report on your market worth.",n.default.createElement("span",{className:"single-row-start__highlights",ref:w,onClick:E},"What's this?"),_&&function(){var e="".concat(w.current.parentNode.offsetWidth-w.current.offsetLeft-w.current.offsetWidth/1.5,"px");return n.default.createElement(u.default,{closeHighlights:E,rightPosOfArrow:e})}())),n.default.createElement(c.default,{className:"single-row-start__form",country:p,geotargetUrl:m,urlHost:r,location:f,trackingCode:a,type:"singlerow"},n.default.createElement("div",{className:"single-row-start__form-container"},h?n.default.createElement(i.default,{text:"Job Title:"},n.default.createElement(d.Job,null)):n.default.createElement(n.default.Fragment,null,n.default.createElement(i.default,{className:"single-row-start__form-group single-row-start__form-group--location",text:"Location:"},n.default.createElement(d.CityState,{id:t})),n.default.createElement(d.Country,null)),n.default.createElement(i.default,{className:"single-row-start__form-group single-row-start__form-group--yoe",text:"Years in Field/Career:"},n.default.createElement(d.YearsExperience,null),n.default.createElement("div",{className:"single-row-start__btn"},n.default.createElement("input",{type:"submit",className:"single-row-start__btn-input",value:"Find your market worth \xbb"})))),n.default.createElement("div",{className:"single-row-start__right-bullets"},n.default.createElement("div",{className:"single-row-start__header"},"How it works:"),n.default.createElement("div",{className:"single-row-start__right-bullets-list"},n.default.createElement("div",{className:"single-row-start__right-bullets-item"},n.default.createElement("span",null,"1"),n.default.createElement("div",null,x)),n.default.createElement("div",{className:"single-row-start__right-bullets-item"},n.default.createElement("span",null,"2"),n.default.createElement("div",null,"Add pay factors like skills & education")),n.default.createElement("div",{className:"single-row-start__right-bullets-item"},n.default.createElement("span",null,"3"),n.default.createElement("div",null,"Find your market worth with a report tailored to you"))))))};p.propTypes={className:s.default.string,country:s.default.string,geotargetUrl:s.default.string,id:s.default.string,job:s.default.string,location:s.default.string,trackingCode:s.default.shape({source:s.default.string.isRequired,section:s.default.string,detail:s.default.string}).isRequired,urlHost:s.default.string,askForJobTitle:s.default.bool},p.defaultProps={className:"",country:"United States",geotargetUrl:"https://www.payscale.com/geotarget/v1/City",id:"",trackingCode:{},urlHost:""},p.__docgenInfo={description:"",methods:[],displayName:"SingleRowSurveyStart",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Class applied to root element"},country:{defaultValue:{value:"'United States'",computed:!1},type:{name:"string"},required:!1,description:"Default answer for country"},geotargetUrl:{defaultValue:{value:"'https://www.payscale.com/geotarget/v1/City'",computed:!1},type:{name:"string"},required:!1,description:"URL of geotarget service"},id:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"ID applied to root element"},trackingCode:{defaultValue:{value:"{}",computed:!1},type:{name:"shape",value:{source:{name:"string",required:!0},section:{name:"string",required:!1},detail:{name:"string",required:!1}}},required:!1,description:"Tracking code object used to generate the TK code query parameter"},urlHost:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Optional prefix for the link urls."},job:{type:{name:"string"},required:!1,description:"Default answer for job title"},location:{type:{name:"string"},required:!1,description:"Default answer for city/state"},askForJobTitle:{type:{name:"bool"},required:!1,description:"Determine whether to show location or job title"}}};var f=p;t.default=f}}]);