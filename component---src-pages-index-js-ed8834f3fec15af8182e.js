webpackJsonp([35783957827783],{330:function(e,t){e.exports={common__less_bmargin:"src-assets-styles-base----_common-typography-module---common__less_bmargin---tbckW",blog__date:"src-assets-styles-base----_common-typography-module---blog__date---MDKNQ",common__no_bullets:"src-assets-styles-base----_common-typography-module---common__no_bullets---21kVg",inline_list:"src-assets-styles-base----_common-typography-module---inline_list---1a4of",common__link:"src-assets-styles-base----_common-typography-module---common__link---2x-Ez"}},333:function(e,t){e.exports={blog_list__container:"src-assets-styles-modules----blog-list-module---blog_list__container---3WFkX",bloglist__sub_link:"src-assets-styles-modules----blog-list-module---bloglist__sub_link---24XVu",blog_list__blog:"src-assets-styles-modules----blog-list-module---blog_list__blog---3_QZP"}},245:function(e,t,l){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=l(2),o=s(a),n=l(48),_=s(n),m=l(333),r=l(330),c=function(e){var t=e.data,l=t.allMarkdownRemark.edges;return o.default.createElement("div",{className:m.blog_list__container},l.map(function(e){var t=e.node,l=t.frontmatter;return o.default.createElement("div",{className:m.blog_list__blog},o.default.createElement("h2",{className:r.common__less_bmargin},o.default.createElement(_.default,{to:l.path},l.title)),o.default.createElement("p",{className:r.blog__date},l.date),o.default.createElement("p",null,l.excerpt," ",o.default.createElement(_.default,{to:l.path,className:m.bloglist__sub_link},"Read more...")),o.default.createElement("ul",{className:r.common__no_bullets},o.default.createElement("strong",null,o.default.createElement(_.default,{to:"/tags"},"Tags:"))," ","[",t.frontmatter.tags.map(function(e){return o.default.createElement("li",{className:r.inline_list},o.default.createElement(_.default,{className:r.common__link,to:"/tags/"+e},e))}),"]"))}))};t.query="** extracted graphql fragment **";t.default=c}});
//# sourceMappingURL=component---src-pages-index-js-ed8834f3fec15af8182e.js.map