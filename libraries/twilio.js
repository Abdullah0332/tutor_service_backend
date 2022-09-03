const twilio = require("twilio");
const config = require("../config");

const AccessToken = twilio.jwt.AccessToken;
const { ChatGrant } = AccessToken;

const generateToken = () => {
  return new AccessToken(
    config.TWILIO_ACCOUNT_SID,
    config.TWILIO_API_KEY,
    config.TWILIO_API_SECRET
  );
};

exports.chatToken = async identity => {
  const token = generateToken();
  token.identity = identity;

  token.addGrant(
    new ChatGrant({
      serviceSid: config.TWILIO_CHAT_SERVICE_SID
    })
  );

  return token;
};
