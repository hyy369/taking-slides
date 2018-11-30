Original assignment:

# Assignment 3: Taking Slides
Your third assignment is designed to help you feel more comfortable with JavaScript and jQuery, while giving you a chance to demonstrate what you have learned about user interface design.
You will be designing, building, and documenting, by yourself, a widget inspired by the work described in ​T. Moscovich, Contact Area Interaction with Sliding Widgets, ​Proc. UIST 2009​, Victoria, BC, 2009, 13–22​ (and associated ​video​), which we discussed in class on October 23. You will then be showing off multiple instances of your widget in a webpage that you will design and implement in HTML/CSS/JavaScript to demonstrate the advantages of your widget when applied to a task of your choosing.

## Design
The widget that you design should be ​inspired​ by the “Sliding Widgets” work and the ideas that it embodies. That is, we would like you to develop a widget that is not merely a copy of something in the paper or video. Rather, the goal is to apply, in your own design, some of the paper's ideas about issues such as easy acquisition and disambiguation of small targets, simultaneous interaction with multiple widgets whose active areas can overlap, or determination of function based on a directional gesture. You should begin by reading through the paper and watching the video again. Then, start thinking about possible ideas and trying them out by using some of the lo-fi prototyping techniques discussed in class and used in Assignment 2. In other words, you should sketch and explore your ideas ​before​ you begin coding!

## Widget and Application
Your new widget should use one of the ​jQuery UI widgets​ and ​extend it​ using the ​jQuery UI Widget Factory​. Your new widget class should be implemented as a separate .js file in your directory. From a UI design perspective, you will need to figure out how you want your widget to function and look, and how to make it work.

To demonstrate the advantages of your widget, you should create a webpage that uses multiple instances of your widget class. If at all possible, one of your goals in building the application is to show the advantages of your widget over currently available jQuery widgets for some specific task.

When designing your application, please consider carefully how you will lay out the display, and how it might change over time. You should also aim to make your application as "self-disclosing" as you can. That is, your goal is to make it as easy as you can for a computer-knowledgeable user who has never seen your program before to be able to determine quickly how to use it.
In addition to jQuery, you are welcome to use any of the frameworks we allowed in Assignment 1:
- ​HTML5 Boilerplate ● ​Bootstrap
- ​Foundation

## Documentation
As part of your submission, you should include a pdf file with embedded images that
- Documents your widget design and explains how it developed, using images of your
initial sketches or paper prototypes.
- Documents your finished widget class. In addition to class name and inheritance, you
should specify each method signature, and describe what the method does.This should be similar in spirit to the documentation provided for the jQuery widgets; however, you are not expected to have the same amount of detail. In general, you should provide enough information for someone else to understand how to use your widget. Please include examples, with screenshots.
- Explains how to use your application, using screenshots.
- Justifies your user interface design decisions for both your widget and your application.

## Submission
First, make sure that you include in the ​src folder​​ of your project the pdf documentation mentioned above as well as a README.txt file that describes instructions how to run your file and any problems/bugs there are(if there are any).

Then create a .zip file containing your ​entire project.​

You will submit this assignment on CourseWorks in response to Assignment 3.

Just to make sure you've done this right, please inspect your submission folder carefully to check whether everything is there. And, after you upload your file to CourseWorks, please download it to a different directory on your computer and extract the files in it to make sure that they are the specific files you wanted to upload. Your IAs are not going to be sympathetic to explanations that something accidentally got left out or that you accidentally zipped up the wrong files or uploaded the wrong zip file. They will grade only what you uploaded, not what you intended to upload!!!

Note:​​ If you wish to resubmit before the deadline, you can do that the same way you did for your first submission. (CourseWorks will not clobber your original submissions, even though your later submission has the same name. Each submission is time-stamped by CourseWorks, and we will grade the latest submission you turn in within the number of late days you have left.)

## Hints
Please do not implement or use any kind of server-side technology that your application will require to run. This means that no PHP, Ruby, .NET, or similar augmentation should be added to your code, and we should not be required to set up any kind of tool to run it. This does not mean that your application should not communicate with a server (this is how you make API calls, by sending requests); it means only that we should not need to set up a server to run your code. To reiterate, you and we should be able to run your application using only the files you provide, on a modern browser (e.g., Mozilla Firefox or Google Chrome). Please bear in mind that the runtime environment of your IDE may end up using a local server for debugging purposes. So, just to make sure, please also test your application outside of your IDE, without running such a server. Please be sure to read (and practice) the last paragraph of the Submission section.