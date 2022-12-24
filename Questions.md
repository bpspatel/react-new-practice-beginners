# Question

1. Waht is Emmet ?

Ans: Emmet is a built-in feature of VS Code, it helps you write Html and css fatser by using simple abbtreviations that are then converted into code block.

2. DIfference between library and Framework ?

Ans :

3. Why is react known as react ?

4. What is cross origin in script tag ?

Ans: The purpose of crossorigion attribute is used to share the resources from one domain to another demain.
Basically, it is used to handle CORS request.It is used to handle CORS request whether it is safe to allow for sharing the resources from other domain.The resources may be audio, video, images, link or external script that specifies whether to support the a cross-origin request or not.

    CORS: It stands for cross-origin resource sharing.It is a mechanism by which one webpage requests to another domain for fetching out the resource like audio, video, script etc. from third party server without leaking their credentials information.

    VALUES : This attribute contains two values as given :

    Anonymous : It has a default value.It defines a CORS request which will be sent without passing he credentail informations.

    Use-credentials: A cross-origin request will be sent with credemntials, cookies and certificate.

    Example of cross-origin attribute in script tag

        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Purpose of CORS -(Cross-origin)</title>
        </head>
        <body>

        <h1>Purpose of cross origin attribute tag in html.</>
        <script id="checkCors" type="text/javascript">  scr="my_cors.js"  crossorigin="anonymous"
        </script>
        <br><br>
        <button>Test</button>
        </body>
        </html>


5. What is the difference between React vs ReactDOM ?
Ans:  
React : React library is responsible for creating views.

ReactDOM : ReactDOM library is responsible to actually render UI in browser.

** Why spread them ?

    The reason React and ReactDOM were split into two libraries was due to arrival of React Native (A react platform for mobile platform).

    React component are such a great way to origanize the UI that it has now spread to mobile to react is used in web and mobile. react-dom is used only in web apps.

6. What is ASync  and Defer ? https://flaviocopes.com/javascript-async-defer/
Ans :  Async and Defer is boolean attributes used in script tags.

No attributes : A plain script tag without using attribute. This implement the defaultss browser behaviour. The HTML will be parsed until the script tag is encountered. At this point, the HTML will be paused and the script will be loaded. The script will then be executed before the HTML parsing can resume.This method can cause a long pause in HTML parsing, resulting in a degraded userv experience.
Example 
        HTML                    
        <script src="script.js" async></script>

Async attribute :  The script is fetched asynchronously, and when it's ready the HTML parsing is 
paused to execute the script, then it's resumed parsing the HTML.

Example 
        HTML
        <script src="script.js" async></script>


Defer attribute :  The script is fetched asynchronously and it's executed only after the  HTML parsing is done.

Parsing is finishes just like when we put script at the end of  the body tag, but overall the execution finihes well before, because the script has been downloaded in parallel with hTML parsing.









