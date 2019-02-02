# LifeTrack

Demo: https://life-track.herokuapp.com/

This is a browser application that tracks longterm progress towards life goals. The user gains experience based on the time they devote to each goal. When a user gains 100 experience, they reach a new level. At level 6000, the user will have put 10,000 hours into a goal. 

The application is based on the pomodoro technique, which involves short periods of focused work on a single task with regular breaks. 

# Usage

On the main selection page, a new focus can be added by clicking the + symbol at the top left of the screen, and an individual focus can be selected by clicking anywhere on the item's description.

As the user hovers over an item, a delete icon will appear at the far right which allows them to permanently remove the focus from the list.

At the top right of the selection page is a gear wheel icon that will bring the user to a settings page where they can adjust the Work Period, Break Period, and Goal for all their focuses.

After selecting a focus, the user is brought to a page that displays all the information related to that focus. It has a button at the center of the screen initially labeled "Start", which allows them to begin the countdown timer. While this timer is running, the user gains experience towards this focus.

After each Work Period is completed, the user advances towards the current goal they've set. If they meet the goal, they can click on the progress bar to reset the current count of work periods.

At the end of each work period, the timer will change color to represent a new timer for a break period that can also be adjusted on the settings screen. No experience is gained during this break period. The user can choose to skip a break by clicking on the central button. After the break period completes, the timer will reset with another Work Period.

# Contributing

Bug reports and pull requests are welcome at https://github.com/ecssiah/lifetrack

# License

This work is licensed under the [MIT License](https://github.com/ecssiah/lifetrack/blob/master/LICENSE.txt)

