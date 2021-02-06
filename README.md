# helper-debugger

Thanks to https://gist.github.com/tkadlec/683b26344cde774170b94c0fcf0088b4  For help 

- If image is green there is a `loading="lazy"` attribute
- if image is outlined in red 
   - No Alt Tag, or No Width and Height Set 
- Scripts that are blocking rendering the links are displayed on the page 


To make this a bookmarklet 

```js
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/johnsiwicki/helper-debugger@latest/perf-debugger.js';var iframes=document.getElementsByTagName('iframe');for(i=0;i<iframes.length;i++) {iframes[i].contentDocument.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/johnsiwicki/helper-debugger@latest/perf-debugger.js';}})();
```


## Todo 
- Out tel links and whatever is inside the a tag into console
- Look for a form on the page and have a little message does this work? 
