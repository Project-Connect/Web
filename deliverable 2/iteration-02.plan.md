# Group 20 - Project-Collab

## Iteration 02

 * Start date: October 16th
 * End date: November 1st

## Process

For this iteration, we plan to do a two week sprint.
First week is a test sprint as many of us are busy with midterm, we will mostly working on setup of the projects, task will be oriented around establishing frameworks and tools. Task in this iteration involves:
  - Database setup
  - Front-end routing setup
  - Continuous integration setup with basic tests


The Second week will focus on completing the core functionalities for deliverable 2, this includes items in the backlog such as:

Front end:  
  - component for creating new projects
  - component that displays an existing project in a small, condensed form with only important information
  - component that displays an existing project in large expanded view with all information
  - page to display all projects the user owns
  - dashboard to display user information
  - navigation bar for application
  
Back end:
  - API endpoints for fetching, updating and removing data for users, projects and their associations
  - Design database schema
  - setup and integrate sequelize with postgres
  - create python script to create sql files for populating the database

Other:
  - Setup yml file for travis build

#### Roles & responsibilities

Scrum Master (Richard)
- 	Coming up with meeting agenda each week
- 	Guiding discussions, ensuring on track with meeting agenda
- 	Assign issues to individual members

Product Owner (Daniel)
- 	Engaging with the product, engaging with end users.
- 	Engage with Scrum Master to come up meeting agenda.
- 	Actively collecting data on user needs.

Project Facilitator (Nathaniel)
- 	Reach out to individuals to ensure tasks are done on time
- 	Keep track of project progress
-   Taking meeting minutes

Development Front-End (Alex, Ryan, Richard and Nathaniel)
- 	team covering all of the front-end developement, overseen by Richard

Development Back-End (Sheeha, Daniel and Sohail)
- 	team covering all of the front-end developement, overseen by Daniel


#### Events
 
 - We plan to have the front-end and back-end teams both meet separately on Saturday (the 27th). We will need to see what tools are working and make sure that everyone on each team has learned the tools by then. During this meeting we will continue to divide work to be done and meet after everyone has completed their midterms Monday and Tuesday with a plan of everyone meeting in BA3200 whenever they have free time to work.
 
 - Between the tutorial on Tuesday the 30th and our weekly 6pm meeting almost everyone is free and each team (front-end and back-end) will be meeting in Bahen so we can hopefully meet to connect the two at the 6pm weekly Tuesday meeting 
 
 - On Thursday November First we are planning on whoever is available to be in Bahen to help with the video and any final touches that are needed before D2 is due. By then everyone will be done their midterms and free to finish whatever parts of the deliverables that have yet to be completed. 

#### Artifacts

   -  We will have an additional meeting at 6pm every Tuesday in person at BA3200, the purpose of the meeting will be to wrap up discussion during tutorial meeting, discussions on project workflow, roadblocks and issues that may come up before the next meeting.
   - On top of our additional in person meeting, we will have an optional meeting at 6pm every Saturday online. The purpose of the meeting will be to discussion any issue or changes that have come up as members were working on the project and will be a time for members to get insite/help on any issues they have before the next in person meeting.
   - lastly, we are planning to have a kind of paired programming/review system where each week via the scrum master, members would decide who they have matching schedules/free-time with and would be willing to having a coding session and/or code review session, if possible.

#### Git / GitHub workflow


1. issues are assigned to users via github issues from team discussions.
2. issues are tagged to different projects and milestones depending on the nature of the issue.
3. issue is assigned to a member in the group who will take on the work, assignment is derived from meetings.
4. Whenever an issue fixed and code is being checked it, it must be done via a Pull Request(PR) to the master branch, tagging the issue the code solves.
5. We enabled branch protection on the master branch(Thanks to Carson) so that all PR to the master branch can only be merged if there is at least 1 review who approved the PR.
6. In addition to approval, we've setup Travis CI to test all code that is coming in, build must pass for every PR before it is allowed to be merged.
7. Once both steps 5 and 6 has passed then the code is allowed to be merged in, anyone involved in the PR (Developer and review) may then merge the PR into the master branch.

## Product

#### Goals and tasks

- We have three categories of goals for this deliverable, each of these is described in an issue on GitHub with more information: 

  - General
    1) Set up Travis before anyone starts committing
    2) Add branch protection as a safety measure
    
  - Back-end
    1) Database design
    2) Set up javascript linter 
    3) Initial project setup:
        - set up PostgresSQL, Node, and Sequelize Project
    4) Implement our planned file structure
    5) Create sample data
    6) Design and implement endpoints for projects
    7) Design and implement endpoints for users 
    
  - Front-end
    1) Set up javascript linter 
    2) Initial project setup:
       - set up react project
    3) Create projects page
        - displays miniature views of numerous project, allows users to go into a project or a button for creating new a project
    4) Project overview page
        - Each page connects to the backend to fetch and display data about one project
    5) Create new project page
        - Allows users to add a new project, sends data to back-end to form a new project
    6) Login page
        - Allows users to login, possibly authenticate using GitHub
    7) User Page
        - Displays a user's profile
    
    
#### Artifacts

  - Code:
    - All of our code will be on GitHub in our team repository, instructions to run it will be in the README files
  - Interactive mock-ups:
    - Our orignal mock-ups is still relevant however if our front-end is working we may not update it (available via the link below: https://xd.adobe.com/view/32527a67-5e67-4048-6f9a-01cbefa7bc59-4463/?fullscreen)
  - Video:
    - We will give a demonstration of what we have accomplished in a short video at the end of D2
  
