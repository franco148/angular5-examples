// What is SPA?
// - Q1: What is SPA?

/**
 * SPA means that we don't have anything on the backend but just client JavaScript, this client
 * is being loaded inside client browser and is executed and then everything is rendered on the
 * screen just with the help of JavaScript
 * 
 * BENEFIT?
 * We don't have roots like we have inside server side, so we don't have something like: /foo
 * we just build the content with the help of JavaScript based on the root where we are, which
 * actually means our server doesn't do anything at all, it simply delivers an empty HTML page with
 * injected JavaScript and our JavaScript does this heavy loading.
 */

// - Q2: How it is difference to server side rendering?

/**
 * Previous we had just server side rendering. What does it mean? Our server rendered an HTML page and delivered
 * it to the client and we had routing inside backend, which actually means when we are jumping in another route,
 * then server delivers us another page. Inside SPA everything is done with JavaScript.
 */

// - Q3: What are pros and cons of SPA?

/**
 * 1. Server Side Rendering is easy. We simply deliver an HTML page to the client and this is it. But
 *    the main is that this HTML page is fully static to make something on it.
 *    We still need JavaScript, which actually means at the end we have a mix between server side rendering
 *    ans some JavaScript which we are applying on top of it.
 * 
 * 2. Inside SPA it is different, but don't do anything on the server and we do everything on the client.
 *    We are building our state on the client which means we are not mixing things and it is easier to support.
 * 
 * 3. Additionally to that, nowadays a lot of websites are really dynamic. This is really efficient and 
 *    comfortable for the user, but there are some problems here where doing everything on the client, which means
 *    doesn't do a lot, but the client machine does a lot of heavy lifting and it is not always efficient.
 * 
 * 4. We are building the whole page by using JavaScript, which actually means it is really bad for search engine
 *    optimization because for example, Google Search can't really access our page and sacan it to use inside 
 *    Google Search because the whole content is only applied afterwards by JavaScript.
 */





