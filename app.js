const express = require('express');
const app = express();

//middleware
app.use((req, res, next) => {
    console.log('In the middle-ware');
    next();//used to transfer from one middleware to another from top to bottom
})

//middleware
app.use((req, res, next) => {
    console.log('In the another middle-ware');
    res.send('<h1>Send method in express</h1>');//used to send any response back to client
})

app.listen(3000);

//questions
// Why are we using Express JS ? Any reasons?
// Express.js is a popular and widely used web application framework for Node.js, and there are several reasons why it is chosen for building web applications:

// Simplicity: Express.js is known for its minimalist and unopinionated design, making it easy to get started with. It provides just enough structure to build web applications without being overly prescriptive.

// Middleware: Express allows you to use middleware functions to process incoming requests. This makes it easy to handle tasks such as parsing request bodies, authentication, logging, and more. There is a wide range of middleware available, and you can also create custom middleware to suit your specific needs.

// Routing: Express has a straightforward and flexible routing system that allows you to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and handle them accordingly. This makes it easy to create RESTful APIs and organize your application's logic.


// What are middlewares  in express?
// middleware functions are a fundamental concept used to process and manipulate incoming HTTP requests before they reach the route handlers or are sent as responses. Middleware functions are essentially functions that have access to the request and response objects (usually denoted as req and res) and can modify these objects, terminate the request-response cycle, or pass control to the next middleware function in the stack.


// What is next used for.
// In Express.js, the next function is used to pass control from one middleware function to the next middleware function in the middleware stack. It is a callback function that tells Express to continue processing the request-response cycle and move on to the next middleware or route handler.
// Calling next(): When you call next() within a middleware function, it signals to Express that the current middleware has completed its processing, and control should be passed to the next middleware function in the stack. 
// Skipping Middleware: In some cases, you might want to conditionally skip certain middlewares based on specific conditions. By not calling next(), you effectively skip the remaining middleware functions in the stack, preventing them from executing for the current request.
// Error Handling: next can also be used to handle errors in middleware. If you pass an error object to next, Express will skip the regular middleware execution and jump to an error-handling middleware defined with four parameters (i.e., (err, req, res, next)). This allows you to centralize error handling in your application.

// What is res.send used for?
// res.send() method is used to send a response to an HTTP request. It is commonly used to send data back to the client, and the data can be in various formats, such as HTML, JSON, plain text, or other content types. The specific usage of res.send() depends on the type of content you want to send.

// If i do res.send('<h1> hello to node js </h1>') . What will be the content-type header equal to.
// "text/html" by default

// If I do res.send( { key1: value }) . What will be the content-type header equal to.
// Express will set the Content-Type header to "application/json"

// What does app.listen(3000) do behind the scenes ?
// In Express.js, the app.listen(3000) method is used to start a web server that listens for incoming HTTP requests on a specified port, in this case, port 3000. However, there are several things that happen behind the scenes when you call app.listen(3000):