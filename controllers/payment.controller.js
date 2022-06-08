const stripe = require("stripe")(process.env.secret_key);

// ---------------------------------------------------------------
// --------------------- GET PUSBLISH KEY -----------------------------
// ---------------------------------------------------------------
exports.publish_key = async (req, res, next) => {
    try {
        const publish_key = process.env.publish_key;
        res.status(200).json({ publish_key });
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
};

// ---------------------------------------------------------------
// --------------------- CREATE PAYMENT INTENT -----------------------------
// ---------------------------------------------------------------
exports.payment_intent = async (req, res, next) => {
    try {
        const { amount } = req.body
        if (!amount) return res.status(404).message({ message: 'Amount is required' })
        let updated_amount = Number(req.body.amount) * 100
        const paymentIntent = await stripe.paymentIntents.create({
            amount: updated_amount,
            currency: "usd",
            payment_method_types: ["card"],
            metadata: { integration_check: "accept_a_payment" },
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
};
