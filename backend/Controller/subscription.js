const axios = require("axios");
const Subscription = require("../Model/subscription");

exports.get = async (req, res) => {
  try {
    const all_subscriptions = await Subscription.find();
    res.status(200).send({"message":"request successfull","subscription":all_subscriptions});
  } catch (err) {
    res.send({ message: err.message });
    throw err;
  }
};
exports.single_subscription = async (req, res) => {
  try {
    var emailId = req.params.email;
    const getsubscription = await Subscription.find({ email: emailId });
    if (getsubscription.length > 0) {
      res.send(getsubscription);
    } else {
      res.send({ message: "No subscription exist with that email id" });
    }
  } catch (err) {
    res.send({ message: err.message });
  }
};

exports.post = (req, res) => {
  var data = req.body;
  let email = data.email;
  Subscription.findOne({ email: email })
    .then((result) => {
      if (result == null) {
        var newSubscription = new Subscription({
          date: new Date().toISOString(),
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
        });
        newSubscription
          .save()
          .then((result) => {
            res
              .status(200)
              .send({ message: "You subscribed successfully", res: result });
          })
          .catch((error) => {
            res.status(400).send({ "message": error.message });
          });
      } else {
        res.send({"message":"You are already subscribed to our newsletter"});
      }
    })
    .catch((error) => {
      console.log({ "message": error.message });
    });
};

exports.remove_subscription = async (req, res) => {
  var data = req.body;
  let email = data.email;
  Subscription.findOne({ email: email })
    .then((result) => {
      if (result != null) {
        Subscription.deleteOne({ email: email }, function (err, obj) {
          if (err) {
            res.send({ error: err });
          }
          res.send({ message: "you are unsubscribed from our mailing list" });
        });
      } else {
        res.send({ message: "Your are not subscribed to our list" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.send({ error: error });
    });
};
