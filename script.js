// 🐺 LOONA WOLF MEMBER COUNTER

const memberCount = 19;

// Membership milestones
const milestones = [
  25,
  50,
  100,
  250,
  500,
  1000
];

// Display current members
document.getElementById("member-count").textContent =
  memberCount;

// Find next milestone
const nextMilestone = milestones.find(
  milestone => memberCount < milestone
);

document.getElementById("next-milestone").textContent =
  nextMilestone
    ? `${nextMilestone} members — Next milestone! 🐺`
    : "All milestones achieved! 💜";

// Update progress bar
const previousMilestone =
  [...milestones].reverse().find(m => memberCount >= m) || 0;

const progress =
  ((memberCount - previousMilestone) /
  (nextMilestone - previousMilestone)) * 100;

document.getElementById("milestone-progress").style.width =
  `${progress}%`;
