# Project-Collab

## Iteration 02 - Review & Retrospect

 * When: October 30th
 * Where: BA3200

## Process - Reflection

Overall this deliverable went very well, apart from everyone having insanely busy and different schedules there is really not much that we'd change in retrospect. We changed our plans as we go to adapt to the different situations we encountered, this is the first time we've all planned to work on a piece of software at this scale.

#### Decisions that turned out well

  - Splitting into front-end and back-end teams helped in a few key ways:
      - Given the difficulty of scheduling, this allowed for more in person meetings with entire teams and allowed us to have different group chats for each team for better communication.
      - This also allowed work to be broken down much more easily as it was only 3 or 4 people working together, instead of coordinating for 7 people.
  - GitHub Usage
      - Our team certainly benefited from the branch protection and Travis testing before pull requests that we set up, which avoided inefficient and buggy code from being added to the repository.
      - Performing code review was also a great benefit to the team learning. This was facilitated via the Github review/comment feature.
      - We tagged all of our commits with issues and it made it easy to see exactly why different things were added and checking that they satisfied the given specifications.
      - Our Github workflow specified in our planning phase was a key reason for this success.

#### Decisions that did not turn out as well as we hoped

  - Social coding experiment
      - we tried to code in a more relaxed environment due to the stress of midterms, we went out to a coffee shop and had a cute coding date. It turned out to be more effective to code in small groups back in Bahen.
  - Even with the ticket system which worked well for the most part, we had two people doing the same component. Perhaps we could have put more emphasis in the meetings on making sure to use the ticket system.
  - Using Slack to communicate turned out to be an awful idea as people kept missing notifications, we ended up switching to three Facebook group chats, a general chat with the whole team and separate chats for the front-end and back-end teams. Slack by default turns off notifications during off hours, which was not the best for our team as many of us worked during the nights.

#### Planned changes

- For the next phase of our project, we will strongly focus on Test Driven Development. We have enough project setup to start integrating with testing frameworks such as Jest.

## Product - Review

#### Goals and/or tasks that were met/completed:

Referring back to the Goals and tasks section in our planning phase, we have completed the following list of items:

- General
1) Set up Travis before anyone starts committing

- Back-end
  1) Database design
  2) Create sample data
  3) Design and implement endpoints for projects
  4) Design and implement endpoints for users

- Front-end
  1) Create projects page
      - displays miniature views of numerous project, allows users to go into a project or a button for creating new a project
  2) Project overview page
      - Each page connects to the backend to fetch and display data about one project
  3) Create new project page
      - Allows users to add a new project, sends data to back-end to form a new project
  4) Login page
      - Allows users to login, authentication using GitHub
  5) User Page
      - Displays a user's profile


#### Goals and/or tasks that were planned but not met/completed:

 - Continuous integration setup with basic tests
      - Setting up tests was difficult to do as we did not have specific enough plans on what was being built before, and then after we decided it did not make sense to add them in at the end of D2 since by then they would not be as useful. We plan to add tests during reading week to be ready for D3.
 - Smooth navigation
      - transition between pages was not coordinated well in the final stages of D2. We plan to setup the navigation bar for D3 to fully integrate all the features that we have implemented.

## Meeting Highlights

- We will implement Test Driven Development for the next Deliverable now that the team is somewhat familiar with the entire tech stack.
- Interface design will also be a core focus of the next Deliverable, as we want the MVP to be functional and user friendly.
- Additional features such as search and filtering are required to enhance usability of our product.
