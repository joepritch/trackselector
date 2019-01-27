# _Track Selector Quiz_

#### _This project is an exercise in JavaScript, jQuery, and Branching, it is a multiple choice quiz that will give different results based on a point system, where each answer of each question fits in to one of four categories. It can even handle a tie between two of the answer categories. 18 January 2019_

#### By _**Joe Pritchett**_

## Description

  The purpose of this project is to help prospective students figure out which track would fit them best at Epicodus. However, while all of the logic and functionality is there, most of the questions are placeholder. I had a lot of ideas I wanted to implement, and may end up coming back to this to do so.

Currently, the website assigns an id to each answer of each question, those id's are then grouped together based on order of appearance after each question (the first answer of each question is a group, the second answer of each question is another group, etc..). The site then calculates the total value of each group, by giving every answer that was selected + 1 'point' to its group. Then, information about the track that corresponds with the 'winning' group (group with the highest value) is displayed on the screen to the user. However, due to the amount of questions, and options per question, it is entirely possible that you may end up with two groups that have the same highest value. In this case, the website detects this and then shows the user a hidden bonus question, that only appears if there is a tie. This question has one answer that corresponds to each of the four groups but it will only display the two answers that correspond to the two currently tied groups. This is done to prevent the user from selecting an option that does not break the tie, or from selecting an option that may tie a third group with the two already tied groups.

If I come back to this project, I had planned a secondary track selector using regular buttons and a simple branching tree that I would like add, as well as a name input for the user so that the track selector recommendation feels more personalized. I'd also like to flesh out the rest of the selector questions, and add additional styling to really make the project look like the real Epicodus site.

## Setup/Installation Requirements

* _Clone this repo and open index.html_
* _Or go to https://joepritch.github.io/trackselector/_

## Known Bugs

_Not choosing any answers and then submitting takes you to the bonus question since all groups are tied, I didn't plan for this and the code reflects that because it only shows the first two tiebreaker buttons. ("a1 === a2" so it doesn't check if the others are equal as well)._

## Support and contact details

_If you would like to get in touch with me regarding this project, or any other projects from my repos, email me @ joempritchett@gmail.com_

## Technologies Used

_HTML, CSS, JavaScript, BootStrap, jQuery, and as always, Atom and GitBash_

### MIT License


Copyright (c) 2019 **_Joe Pritchett_**
