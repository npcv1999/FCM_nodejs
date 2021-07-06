const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Send a message to the device corresponding to the provided
// registration token.

exports.sendPushNotification = functions.database
  .ref("/job") // Put your path here with the params.
  .onWrite(() => {
    const message = {
      notification: {
        title: "Cổng tìm việc",
        body: "Đã có việc mới mời bạn vào xem"
        // imageUrl: "https://my-cdn.com/app-logo.png"
      },
      topic: "job"
    };
    return admin
      .messaging()
      .send(message)
      .then((response) => {
        console.log("Successfully sent message:", response);
      })
      .catch((error) => {
        console.log("Error sending message:", error);
      });
  });
