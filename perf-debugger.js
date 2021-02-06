const perfcss = `
:root {
 --violation-color: red; /* used for clear issues */
 --warning-color: orange; /* used for potential issues we should look into */
 --check-color: green; /* used for potential issues we should look into */
}

/* IMAGES */

/*
 * Lazy-Loaded  Check
 * ====
 * Highlight any lazy loaded images so we can see if any are inside the viewport
 * 
 * Uses an outline so it can pair with Unsized Images and Legacy Format checks
 * Credit: https://twitter.com/csswizardry/status/1346477682544951296
 */
img[loading=lazy] {
    outline: 10px solid var(--check-color) !important;
}

iframe[loading=lazy] {
   outline: 10px solid var(--check-color) !important;
}

img:not([alt]) {
    outline: 10px solid var(--warning-color) !important;
}

/*
 * Unsized Images Check
 * ====
 * Highlight images that don't have a height or width attribute set
 * 
 * Uses a border so it can pair with Lazy-Loaded and Legacy Format checks
 */
img:not([height]), img:not([width]) {
    border: 10px solid var(--violation-color) !important;
}

/* SCRIPTS */

/* Synchronous Scripts Check
 * ====
 * Display any blocking synchronous scripts
 * 
 * Credit: https://twitter.com/csswizardry/status/1336007323337285633
 */
head,
script[src] {
    display: block;
    border: 10px solid var(--warning-color);;
}
    /*
    * Display the URL/filepath of external scripts
    */
    script[src]::before {
        content: attr(src);
        font-size: 1rem;
    }

    /**
    * Hide other head content and non-blocking scripts
    */
    head *,
    script[src][async], script[src][defer], script[src][type=module] {
       // display: none;
    }

#debugmode {
    position: sticky;
    background: #cacaca;
    opacity: 0.7;
}
`


document.head.appendChild(document.createElement('style')).textContent = perfcss;''

 // create a new div element
  const newDiv = document.createElement("div");
  newDiv.id = 'debugmode';
  newDiv.innerHTML = "<h3>Debug Mode</h3><p>Check Console For More Info</p>";
  // add the newly created element and its content into the DOM
  document.body.insertBefore(newDiv, document.body.firstChild);

var phoneNumbers = [];
const tels = document.querySelectorAll("a[href^='tel:']"),
        l = tels.length;
    for (var i = 0; i < l; ++i) {
          let tellinks = tels[i].getAttribute("href");
          let telHtml = tels[i].innerHTML;
          phoneNumbers.push([tellinks, telHtml]);
  };
   console.table(phoneNumbers);
