import amqp from 'amqplib/callback_api.js'
import sendMail from '../sendMail.js'

export const queue = 'lunarloom_auth_email'
export var emailChannel = null
export default function configureMq() {

    amqp.connect(process.env.AMQP_URL, function (error0, connection) {

        if (error0) {
            throw error0
        }
        connection.createChannel(function (error1, channel) {

            if (error1) {
                throw error1
            }

            channel.assertQueue(queue, {
                durable: false
            })

            emailChannel = channel

            emailChannel.consume('lunarloom_auth_email', function (msq) {
                const req = JSON.parse(msq.content);
                sendMail(req.email,req.otp)
            }, {
                noAck: true
            })
        })

    })
    return emailChannel

}