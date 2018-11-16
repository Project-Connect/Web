# Group 20 - Project-Collab

## Iteration 3

 * Start date: November 13th 2018
 * End date: November 30th 2018

## Process

(Optional:) Quick introduction

#### Changes from previous iteration

List the most significant changes you made to your process (if any).

 * At most 3 items
 * Start with the most significant change
 * For each change, explain why you are making it and what you are hoping to achieve from it
 * Ideally, for each change, you will define a clear success metric (i.e. something you can measure at the end of the iteration to determine whether the change you made was successful)

    
 > *Note:* If you are not making any changes to your process, it means that you are happy with all of the decisions you made in the previous iterations.
 > In this case, list what you consider to be the most significant process decisions your team made. For each decision, explain why you consider it successful, and what success metric you are using (or could use) to assert that the decision is successful.
 * We are only making one main change this deliverable and that is to start our video much earlier. In the previous iteration the video was an afterthought and we focused solely on getting components working not thinking about how to make them presentable or look good in a video until the final day. For this iteration we are starting to think about what we want in the video from the first meeting and are allowing three days from November 28th to 30th for the video.
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
- 	team covering all of the back-end developement, overseen by Daniel
#### Events

Describe meetings (and other events) you are planning to have:
 
 * November 13th Tutorial: Planning, we need to figure out exactly what we want to do to accomodate David's user story
 * November 13th at 6pm in BA 3200: Dividing work and creating tickets
 * November 16th in BA3200: 

#### Artifacts

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be to-do lists, task boards, schedule(s), etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * How do you prioritize tasks?
   * How do tasks get assigned to team members?

 - We will use Github issues to manage and maintain current tasks.
 - We will use Github project's scrum-board to produce a streamlined workflow, where we will be able to see progress of all users, and assign instance when needed via scrum master. We use tags to prioritize issues.
 - We will produce meeting notes every Tuesday for everyone to review decisions and discussion on upcoming week's progress, and high level view of what we aim to achieve.


#### Git / GitHub workflow

Describe your Git / GitHub workflow.     
Essentially, we want to understand how your team members share a codebase and avoid conflicts.

 * Be concise, yet precise.      
For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Don't forget to **explain why** you chose this workflow.

1. issues are assigned to users via github issues from team discussions.
2. issues are tagged to different projects and milestones depending on the nature of the issue.
3. issue is assigned to a member in the group who will take on the work, assignment is derived from meetings.
4. Whenever an issue fixed and code is being checked it, it must be done via a Pull Request(PR) to the master branch, tagging the issue the code solves.
5. We enabled branch protection on the master branch(Thanks to Carson) so that all PR to the master branch can only be merged if there is at least 1 review who approved the PR.
6. In addition to approval, we've setup Travis CI to test all code that is coming in, build must pass for every PR before it is allowed to be merged.
7. Once both steps 5 and 6 has passed then the code is allowed to be merged in, anyone involved in the PR (Developer and review) may then merge the PR into the master branch.


## Product

#### Goals and tasks

 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.
 
 * After discussing with David, we are changing our plan for this deliverable and purely focusing on making our project to be used by him for next semester's CSC301 class
 
  - General
     1) Set up hosting
 
   - Back-end
     1) Add three different levels of user, student, admin, organization 
     2) Create wikis
     3) Add approval statuses for applications and projects
     4) Add in update project
 
   - Front-end
     1) Create an admin section
        * Needs to be able to approve/disapprove every project
        * Needs to be able to approve/disapprove every application
     2) Create organization and admin login
     3) Create a form for students to apply to project
     4) 
     5)
 
 


#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

  - Code:
    - All of our code will be on GitHub in our team repository, instructions to run it will be in the README files
  - Website: 
    - We will host our product on AWS so it can be used
  - Interactive mock-ups:
    - We have created a new mock-ups for this deliverable to accomdate the new changes, it is available here. 
    ### TODO INSERT IT HERE
    (This is includes numerous changes from our original: https://xd.adobe.com/view/32527a67-5e67-4048-6f9a-01cbefa7bc59-4463/?fullscreen)
  - Video:
    - We will give a demonstration of what we have accomplished in a short video at the end of D3