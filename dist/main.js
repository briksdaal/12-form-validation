(()=>{"use strict";var e={660:(e,a,n)=>{var o=n(463),t={},i={};o.forEach((function(e){t[e.name.toLowerCase()]=e.code,i[e.code.toLowerCase()]=e.name})),a.e3=function(){return o.map((function(e){return e.name}))}},426:(e,a,n)=>{n.d(a,{Z:()=>d});var o=n(81),t=n.n(o),i=n(645),r=n.n(i)()(t());r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]),r.push([e.id,':root {\n  font-size: 18px;\n}\n\n*,\nbutton {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-size: 1rem;\n  font-family: "Roboto", sans-serif;\n}\n\nh1 {\n  font-size: 1.4rem;\n  margin-bottom: 40px;\n  text-align: center;\n}\n\nh2 {\n  font-size: 1.2rem;\n  color: white;\n  margin-bottom: 20px;\n  padding: 12px 50px;\n  background: linear-gradient(to right, #00a9be, #00bca9);\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  background: #f2f7f9;\n}\n\n.main-container {\n  padding: 60px;\n}\n\n#contact-form {\n  background: #fff;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 3px 3px 0 3px #e3e6e6;\n}\n\n.form-row {\n  min-height: 80px;\n  padding: 0 50px;\n  margin-bottom: 10px;\n}\n\n.form-row:last-of-type {\n  margin-top: 40px;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 4px;\n}\n\ninput {\n  width: 100%;\n  background: #e8f0f6;\n  padding: 4px;\n  border: none;\n  border-radius: 5px;\n}\n\ninput:focus-visible {\n  outline: solid 2px #b4d6f1;\n}\n\ninput:valid {\n  outline-color: #b4d6f1;\n}\n\ninput:invalid {\n  outline: solid 2px #f00;\n}\n\nbutton[type="submit"] {\n  background: #ff6346;\n  color: #fff;\n  width: 100%;\n  border: none;\n  padding: 6px;\n  border-radius: 5px;\n}\n\n.error,\n.submit-msg {\n  max-width: 300px;\n  font-size: 0.8rem;\n  padding: 4px 0;\n}\n\n.error,\n.submit-msg.error {\n  color: red;\n}\n\n.submit-msg {\n  color: green;\n}\n\n.error[data-correction] {\n  cursor: pointer;\n}\n',""]);const d=r},645:e=>{e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var n="",o=void 0!==a[5];return a[4]&&(n+="@supports (".concat(a[4],") {")),a[2]&&(n+="@media ".concat(a[2]," {")),o&&(n+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),n+=e(a),o&&(n+="}"),a[2]&&(n+="}"),a[4]&&(n+="}"),n})).join("")},a.i=function(e,n,o,t,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(r[c]=!0)}for(var m=0;m<e.length;m++){var s=[].concat(e[m]);o&&r[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),t&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=t):s[4]="".concat(t)),a.push(s))}},a}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var a=[];function n(e){for(var n=-1,o=0;o<a.length;o++)if(a[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},r=[],d=0;d<e.length;d++){var c=e[d],m=o.base?c[0]+o.base:c[0],s=i[m]||0,u="".concat(m," ").concat(s);i[m]=s+1;var l=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)a[l].references++,a[l].updater(p);else{var h=t(p,o);o.byIndex=d,a.splice(d,0,{identifier:u,updater:h,references:1})}r.push(u)}return r}function t(e,a){var n=a.domAPI(a);return n.update(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap&&a.supports===e.supports&&a.layer===e.layer)return;n.update(e=a)}else n.remove()}}e.exports=function(e,t){var i=o(e=e||[],t=t||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var d=n(i[r]);a[d].references--}for(var c=o(e,t),m=0;m<i.length;m++){var s=n(i[m]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}i=c}}},569:e=>{var a={};e.exports=function(e,n){var o=function(e){if(void 0===a[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}a[e]=n}return a[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var a=document.createElement("style");return e.setAttributes(a,e.attributes),e.insert(a,e.options),a}},565:(e,a,n)=>{e.exports=function(e){var a=n.nc;a&&e.setAttribute("nonce",a)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var a=e.insertStyleElement(e);return{update:function(n){!function(e,a,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var t=void 0!==n.layer;t&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,t&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),a.styleTagTransform(o,e,a.options)}(a,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)}}}},589:e=>{e.exports=function(e,a){if(a.styleSheet)a.styleSheet.cssText=e;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(e))}}},463:e=>{e.exports=JSON.parse('[{"code":"AD","name":"Andorra"},{"code":"AE","name":"United Arab Emirates"},{"code":"AF","name":"Afghanistan"},{"code":"AG","name":"Antigua and Barbuda"},{"code":"AI","name":"Anguilla"},{"code":"AL","name":"Albania"},{"code":"AM","name":"Armenia"},{"code":"AO","name":"Angola"},{"code":"AQ","name":"Antarctica"},{"code":"AR","name":"Argentina"},{"code":"AS","name":"American Samoa"},{"code":"AT","name":"Austria"},{"code":"AU","name":"Australia"},{"code":"AW","name":"Aruba"},{"code":"AX","name":"Åland Islands"},{"code":"AZ","name":"Azerbaijan"},{"code":"BA","name":"Bosnia and Herzegovina"},{"code":"BB","name":"Barbados"},{"code":"BD","name":"Bangladesh"},{"code":"BE","name":"Belgium"},{"code":"BF","name":"Burkina Faso"},{"code":"BG","name":"Bulgaria"},{"code":"BH","name":"Bahrain"},{"code":"BI","name":"Burundi"},{"code":"BJ","name":"Benin"},{"code":"BL","name":"Saint Barthélemy"},{"code":"BM","name":"Bermuda"},{"code":"BN","name":"Brunei Darussalam"},{"code":"BO","name":"Bolivia, Plurinational State of"},{"code":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BR","name":"Brazil"},{"code":"BS","name":"Bahamas"},{"code":"BT","name":"Bhutan"},{"code":"BV","name":"Bouvet Island"},{"code":"BW","name":"Botswana"},{"code":"BY","name":"Belarus"},{"code":"BZ","name":"Belize"},{"code":"CA","name":"Canada"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CD","name":"Congo, Democratic Republic of the"},{"code":"CF","name":"Central African Republic"},{"code":"CG","name":"Congo"},{"code":"CH","name":"Switzerland"},{"code":"CI","name":"Côte d\'Ivoire"},{"code":"CK","name":"Cook Islands"},{"code":"CL","name":"Chile"},{"code":"CM","name":"Cameroon"},{"code":"CN","name":"China"},{"code":"CO","name":"Colombia"},{"code":"CR","name":"Costa Rica"},{"code":"CU","name":"Cuba"},{"code":"CV","name":"Cabo Verde"},{"code":"CW","name":"Curaçao"},{"code":"CX","name":"Christmas Island"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czechia"},{"code":"DE","name":"Germany"},{"code":"DJ","name":"Djibouti"},{"code":"DK","name":"Denmark"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"DZ","name":"Algeria"},{"code":"EC","name":"Ecuador"},{"code":"EE","name":"Estonia"},{"code":"EG","name":"Egypt"},{"code":"EH","name":"Western Sahara"},{"code":"ER","name":"Eritrea"},{"code":"ES","name":"Spain"},{"code":"ET","name":"Ethiopia"},{"code":"FI","name":"Finland"},{"code":"FJ","name":"Fiji"},{"code":"FK","name":"Falkland Islands (Malvinas)"},{"code":"FM","name":"Micronesia, Federated States of"},{"code":"FO","name":"Faroe Islands"},{"code":"FR","name":"France"},{"code":"GA","name":"Gabon"},{"code":"GB","name":"United Kingdom of Great Britain and Northern Ireland"},{"code":"GD","name":"Grenada"},{"code":"GE","name":"Georgia"},{"code":"GF","name":"French Guiana"},{"code":"GG","name":"Guernsey"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GL","name":"Greenland"},{"code":"GM","name":"Gambia"},{"code":"GN","name":"Guinea"},{"code":"GP","name":"Guadeloupe"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"GR","name":"Greece"},{"code":"GS","name":"South Georgia and the South Sandwich Islands"},{"code":"GT","name":"Guatemala"},{"code":"GU","name":"Guam"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HK","name":"Hong Kong"},{"code":"HM","name":"Heard Island and McDonald Islands"},{"code":"HN","name":"Honduras"},{"code":"HR","name":"Croatia"},{"code":"HT","name":"Haiti"},{"code":"HU","name":"Hungary"},{"code":"ID","name":"Indonesia"},{"code":"IE","name":"Ireland"},{"code":"IL","name":"Israel"},{"code":"IM","name":"Isle of Man"},{"code":"IN","name":"India"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"IQ","name":"Iraq"},{"code":"IR","name":"Iran, Islamic Republic of"},{"code":"IS","name":"Iceland"},{"code":"IT","name":"Italy"},{"code":"JE","name":"Jersey"},{"code":"JM","name":"Jamaica"},{"code":"JO","name":"Jordan"},{"code":"JP","name":"Japan"},{"code":"KE","name":"Kenya"},{"code":"KG","name":"Kyrgyzstan"},{"code":"KH","name":"Cambodia"},{"code":"KI","name":"Kiribati"},{"code":"KM","name":"Comoros"},{"code":"KN","name":"Saint Kitts and Nevis"},{"code":"KP","name":"Korea, Democratic People\'s Republic of"},{"code":"KR","name":"Korea, Republic of"},{"code":"KW","name":"Kuwait"},{"code":"KY","name":"Cayman Islands"},{"code":"KZ","name":"Kazakhstan"},{"code":"LA","name":"Lao People\'s Democratic Republic"},{"code":"LB","name":"Lebanon"},{"code":"LC","name":"Saint Lucia"},{"code":"LI","name":"Liechtenstein"},{"code":"LK","name":"Sri Lanka"},{"code":"LR","name":"Liberia"},{"code":"LS","name":"Lesotho"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"LV","name":"Latvia"},{"code":"LY","name":"Libya"},{"code":"MA","name":"Morocco"},{"code":"MC","name":"Monaco"},{"code":"MD","name":"Moldova, Republic of"},{"code":"ME","name":"Montenegro"},{"code":"MF","name":"Saint Martin, (French part)"},{"code":"MG","name":"Madagascar"},{"code":"MH","name":"Marshall Islands"},{"code":"MK","name":"North Macedonia"},{"code":"ML","name":"Mali"},{"code":"MM","name":"Myanmar"},{"code":"MN","name":"Mongolia"},{"code":"MO","name":"Macao"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MS","name":"Montserrat"},{"code":"MT","name":"Malta"},{"code":"MU","name":"Mauritius"},{"code":"MV","name":"Maldives"},{"code":"MW","name":"Malawi"},{"code":"MX","name":"Mexico"},{"code":"MY","name":"Malaysia"},{"code":"MZ","name":"Mozambique"},{"code":"NA","name":"Namibia"},{"code":"NC","name":"New Caledonia"},{"code":"NE","name":"Niger"},{"code":"NF","name":"Norfolk Island"},{"code":"NG","name":"Nigeria"},{"code":"NI","name":"Nicaragua"},{"code":"NL","name":"Netherlands"},{"code":"NO","name":"Norway"},{"code":"NP","name":"Nepal"},{"code":"NR","name":"Nauru"},{"code":"NU","name":"Niue"},{"code":"NZ","name":"New Zealand"},{"code":"OM","name":"Oman"},{"code":"PA","name":"Panama"},{"code":"PE","name":"Peru"},{"code":"PF","name":"French Polynesia"},{"code":"PG","name":"Papua New Guinea"},{"code":"PH","name":"Philippines"},{"code":"PK","name":"Pakistan"},{"code":"PL","name":"Poland"},{"code":"PM","name":"Saint Pierre and Miquelon"},{"code":"PN","name":"Pitcairn"},{"code":"PR","name":"Puerto Rico"},{"code":"PS","name":"Palestine, State of"},{"code":"PT","name":"Portugal"},{"code":"PW","name":"Palau"},{"code":"PY","name":"Paraguay"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RS","name":"Serbia"},{"code":"RU","name":"Russian Federation"},{"code":"RW","name":"Rwanda"},{"code":"SA","name":"Saudi Arabia"},{"code":"SB","name":"Solomon Islands"},{"code":"SC","name":"Seychelles"},{"code":"SD","name":"Sudan"},{"code":"SE","name":"Sweden"},{"code":"SG","name":"Singapore"},{"code":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"SI","name":"Slovenia"},{"code":"SJ","name":"Svalbard and Jan Mayen"},{"code":"SK","name":"Slovakia"},{"code":"SL","name":"Sierra Leone"},{"code":"SM","name":"San Marino"},{"code":"SN","name":"Senegal"},{"code":"SO","name":"Somalia"},{"code":"SR","name":"Suriname"},{"code":"SS","name":"South Sudan"},{"code":"ST","name":"Sao Tome and Principe"},{"code":"SV","name":"El Salvador"},{"code":"SX","name":"Sint Maarten, (Dutch part)"},{"code":"SY","name":"Syrian Arab Republic"},{"code":"SZ","name":"Eswatini"},{"code":"TC","name":"Turks and Caicos Islands"},{"code":"TD","name":"Chad"},{"code":"TF","name":"French Southern Territories"},{"code":"TG","name":"Togo"},{"code":"TH","name":"Thailand"},{"code":"TJ","name":"Tajikistan"},{"code":"TK","name":"Tokelau"},{"code":"TL","name":"Timor-Leste"},{"code":"TM","name":"Turkmenistan"},{"code":"TN","name":"Tunisia"},{"code":"TO","name":"Tonga"},{"code":"TR","name":"Türkiye"},{"code":"TT","name":"Trinidad and Tobago"},{"code":"TV","name":"Tuvalu"},{"code":"TW","name":"Taiwan, Province of China"},{"code":"TZ","name":"Tanzania, United Republic of"},{"code":"UA","name":"Ukraine"},{"code":"UG","name":"Uganda"},{"code":"UM","name":"United States Minor Outlying Islands"},{"code":"US","name":"United States of America"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VA","name":"Holy See"},{"code":"VC","name":"Saint Vincent and the Grenadines"},{"code":"VE","name":"Venezuela, Bolivarian Republic of"},{"code":"VG","name":"Virgin Islands, British"},{"code":"VI","name":"Virgin Islands, U.S."},{"code":"VN","name":"Viet Nam"},{"code":"VU","name":"Vanuatu"},{"code":"WF","name":"Wallis and Futuna"},{"code":"WS","name":"Samoa"},{"code":"YE","name":"Yemen"},{"code":"YT","name":"Mayotte"},{"code":"ZA","name":"South Africa"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}]')}},a={};function n(o){var t=a[o];if(void 0!==t)return t.exports;var i=a[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return n.d(a,{a}),a},n.d=(e,a)=>{for(var o in a)n.o(a,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),n.nc=void 0,(()=>{var e=n(660),a=n(379),o=n.n(a),t=n(795),i=n.n(t),r=n(569),d=n.n(r),c=n(565),m=n.n(c),s=n(216),u=n.n(s),l=n(589),p=n.n(l),h=n(426),f={};f.styleTagTransform=p(),f.setAttributes=m(),f.insert=d().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),o()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;class b{constructor(){this.form=document.querySelector("#contact-form"),this.submitMsg=document.querySelector(".submit-msg"),this.setEventListeners()}static countries=(0,e.e3)();static getErrorDiv(e){return e.parentNode.querySelector(".error")}validateEmail(){const{email:e}=this.form,a=b.getErrorDiv(e);b.checkEmpty(e)||(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.value)?(e.setCustomValidity(""),a.textContent=""):(e.setCustomValidity("Email is not in correct format"),a.textContent="Email is not in correct format")),this.clearSubmit()}validateCountry(){const{country:e}=this.form,a=b.getErrorDiv(e);let n,o=!1,t=!1;b.checkEmpty(e)||(b.countries.forEach((a=>{!o&&a.toLowerCase().includes(e.value.toLowerCase())&&(n=a,o=!0,a.toLowerCase()===e.value.toLowerCase()&&(t=!0))})),t?(e.setCustomValidity(""),a.textContent="",e.value=n,delete a.dataset.correction):o?(e.setCustomValidity(`Did you mean ${n}?`),a.textContent=`Did you mean ${n}?`,a.dataset.correction=n):(e.setCustomValidity("Doesn't seem to be a real country"),a.textContent="Doesn't seem to be a real country",delete a.dataset.correction)),this.clearSubmit()}updateCountry(){const{country:e}=this.form,a=b.getErrorDiv(e);a.dataset.correction&&(e.value=a.dataset.correction,this.validateCountry())}validateZip(){const{zipcode:e}=this.form,a=b.getErrorDiv(e);b.checkEmpty(e)||(/^\d+$/.test(e.value)?/^\d{5,7}$/.test(e.value)?(e.setCustomValidity(""),a.textContent=""):(e.setCustomValidity("Zipcode must be 5 to 7 digits"),a.textContent="Zipcode must be 5 to 7 digits"):(e.setCustomValidity("Zipcode must digits only"),a.textContent="Zipcode must digits only")),this.clearSubmit()}validatePwd(){const{password:e}=this.form,a=this.form["password-confirm"],n=b.getErrorDiv(e);b.checkEmpty(e)||(/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(e.value)?(e.setCustomValidity("Password must be eight characters minimum, and include at least one lowercase letter, one uppercase letter, one digit, and one special character"),n.textContent="Password must be eight characters minimum, and include at least one lowercase letter, one uppercase letter, one digit, and one special character"):(e.setCustomValidity(""),n.textContent=""),a.value.length&&this.validatePwdConfirm()),this.clearSubmit()}validatePwdConfirm(){const e=this.form["password-confirm"],{password:a}=this.form,n=b.getErrorDiv(e);b.checkEmpty(e)||(e.value===a.value?(e.setCustomValidity(""),n.textContent=""):(e.setCustomValidity("Passwords don't match"),n.textContent="Passwords don't match")),this.clearSubmit()}static checkEmpty(e){const a=b.getErrorDiv(e);return 0===e.value.length&&(e.setCustomValidity("Field can't be empty"),a.textContent="Field can't be empty",!0)}clearSubmit(){this.form.checkValidity()&&(this.submitMsg.classList.remove("error"),this.submitMsg.textContent="")}onSubmit(e){e.preventDefault(),this.validateEmail(),this.validateCountry(),this.validateZip(),this.validatePwd(),this.validatePwdConfirm(),this.clearSubmit(),this.form.checkValidity()?this.submitMsg.textContent="Everything looks good ✋":(this.submitMsg.classList.add("error"),this.submitMsg.textContent="Please fix errors and submit again")}setEventListeners(){this.form.email.addEventListener("focusout",this.validateEmail.bind(this)),this.form.country.addEventListener("focusout",this.validateCountry.bind(this)),b.getErrorDiv(this.form.country).addEventListener("click",this.updateCountry.bind(this)),this.form.zipcode.addEventListener("focusout",this.validateZip.bind(this)),this.form.password.addEventListener("focusout",this.validatePwd.bind(this)),this.form["password-confirm"].addEventListener("focusout",this.validatePwdConfirm.bind(this)),Object.values(this.form).filter((e=>"INPUT"===e.tagName)).forEach((e=>{e.addEventListener("focusin",this.clearSubmit.bind(this))})),this.form.addEventListener("submit",this.onSubmit.bind(this))}}new b})()})();