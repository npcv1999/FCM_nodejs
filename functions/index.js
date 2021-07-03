const admin = require("firebase-admin");

admin.initializeApp();

const registrationToken =
  "dhOy2bxKS-OiMi3GpYZEIX:APA91bF05HxrjA72yfmEhi5uwkg3n2pFRrOcvm_tF83_DfJ-d-nLfFGq4lYYVpxN0kzPrjGx_nq2fteVEYKMkJmyUJgD4FyeVqhrhxoEVEI652_bNU1Ep5txXsrUf2D1n9DfilkSMWSK";

const message = {
  notification: {
    title: "Basic Notification",
    body: "This is a basic notification sent from the server!",
    imageUrl: "https://my-cdn.com/app-logo.png"
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin
  .messaging()
  .send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log("Successfully sent message:", response);
  })
  .catch((error) => {
    console.log("Error sending message:", error);
  });
