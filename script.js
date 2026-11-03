
/* 🐺 LOONA WOLF - MEMBER MILESTONES */

// Current Wolf Pack members
const memberCount = 19;

// Membership milestones
const milestones = [25, 50, 100, 250, 500, 1000];

// Get website elements
const counter = document.getElementById("member-count");
const nextText = document.getElementById("next-milestone");
const progressBar = document.getElementById("milestone-progress");

// Display member count
if (counter) {
  counter.textContent = memberCount;
}

// Find next milestone
const nextMilestone = milestones.find(
  milestone => memberCount < milestone
);

if (nextMilestone) {
  const previousMilestone =
    [...milestones].reverse().find(
      milestone => memberCount >= milestone
    ) || 0;

  const progress =
    ((memberCount - previousMilestone) /
    (nextMilestone - previousMilestone)) * 100;

  if (nextText) {
    nextText.textContent =
      `${nextMilestone} members — Next milestone! 🐺`;
  }

  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }

} else {
  if (nextText) {
    nextText.textContent =
      "All milestones achieved! 🐺💜";
  }

  if (progressBar) {
    progressBar.style.width = "100%";
  }
}
