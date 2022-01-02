## Part One: Solidify Terminology

In your own terms, define the following terms:

1. What is HTTP?
HTTP stands for hypertext transfer protocol.

2. What is a URL?
URL stands for universal resource locator, and they're not exclusive to webpages. They're also used with FTP but are frequently associated with HTTP requests. According to MDN, URL is the mechanism used by browsers to retrieve any published resource on the web.


3. What is DNS? 
DNS takes a hostname and translates it into the corresponding IP address. It can also do reverse lookup.

4. What is a query string?
It is an optional part of a URL that is added at the end. Different queries are separated by ampersands. Search is a common use case for a query.

5. What are two HTTP verbs and how are they different?
HTTP and HTTPS are different in that the latter is a secure protocol. They use different dedicated ports on a server, 80 and 443 respectively.

6. What is an HTTP request?
The request the browser makes to the server.

7. What is an HTTP response?
The response a server sends back to the browser, often rendered as a webpage if everything is functioning properly.

8. What is an HTTP header? Give a couple examples of request and response headers you have seen.
A header is included in a request and a response. In a request, the hostname we're asking for and the language our browser expects are examples in what is included in an HTTP header. Content type (text/html, JSON, etc.), caching information and cookies the server sets are examples of what is included in an HTTP response header.

9. What are the processes that happen when you type [http://somesite.com/some/page.html](http://somesite.com/some/page.html) into a browser?
The request / response cycle happens.

## Part Two: Practice Tools

Use dig to find the IP address for icanhazdadjoke.com. 
There are two: 104.21.37.176 and 172.67.211.64.
