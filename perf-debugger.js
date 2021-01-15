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
`


document.head.appendChild(document.createElement('style')).textContent = perfcss;


 
