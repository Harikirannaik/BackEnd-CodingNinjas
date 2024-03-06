import { UserEvents } from "./userEvents.mjs";

const userEvents = new UserEvents();


function saveToDatabase() {
  console.log("Saving post to databse");
}

function sendNotifications() {
  console.log("Sending Notification");
}

function updateTimeline() {
  console.log("updating timeline");
}

userEvents.addListener("postCreated", saveToDatabase);

userEvents.addListener("postCreated", sendNotifications);

userEvents.addListener("postCreated", updateTimeline);

userEvents.createPost("This is my first post");
