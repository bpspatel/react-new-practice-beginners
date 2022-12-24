# Question

#1. Waht is Emmet ?

#Ans: Emmet is a built-in feature of VS Code, it helps you write Html and css fatser by using simple abbtreviations that are then converted into code block.

#2. DIfference between library and Framework ?

#Ans :

#3. Why is react known as react ?

#4. What is cross origin in script tag ?

#Ans: The purpose of crossorigion attribute is used to share the resources from one domain to another demain.
Basically, it is used to handle CORS request.It is used to handle CORS request whether it is safe to allow for sharing the resources from other domain.The resources may be audio, video, images, link or external script that specifies whether to support the a cross-origin request or not.

#CORS: It stands for cross-origin resource sharing.It is a mechanism by which one webpage requests to another domain for fetching out the resource like audio, video, script etc. from third party server without leaking their credentials information.

#VALUES : This attribute contains two values as given :

        #Anonymous : It has a default value.It defines a CORS request which will be sent without passing he credentail informations.

        #Use-credentials: A cross-origin request will be sent with credemntials, cookies and certificate.

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
