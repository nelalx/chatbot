const Restify = require('restify')
const methods = require('./methods')

var packPref = require('./preference.js')

const app = Restify.createServer({
    name : "MTNChatApp"
})

const token = 'abc1234'

const bot = new methods('EAAMuiR0c56wBAOkyEy5BHCfuJuyuZBjx8gB0gVGzJu9bFMo3pVc9T4mFMZCkaJYrdpdm5Cv3fHyhfo9ZBZBSrcMHZALxigZBZC8dHAmusopN7KhowLtHJ6PK5fOU1FaLJuzzS95iAhKZC0xa5tZCwZC8EKfOjSZBvOaWinY8A6PNQDhFyq3uyveFCloXDNZCCV8XgcoZD')


app.use(Restify.plugins.jsonp())
app.use(Restify.plugins.bodyParser())

app.get('/',(req,res,next) => {
    if (req.query['hub.mode'] == 'subscribe' && req.query['hub.verify_token'] == token) {
        res.end(req.query['hub.challenge'])
    }
    else {
        next();
    }
})

app.post('/',(req, res , next) => {
    const response = req.body
    if (response.object === 'page') {
        const messageObj = bot.getMessageObject(response)
        //     bot.sendText(`You Said : ${messageObj.message},${messageObj.intent}`, messageObj.id )

        switch (`${messageObj.intent}`) {
            case 'greeting':
                bot.sendText('How can i help you today?', messageObj.id)
                break;
            case 'showoffer' :
                bot.sendText('May i know what type of offer are you looking for?', messageObj.id)
                break;
            case 'voicepacks' :
                packPref.setPreference('voice');
                bot.sendText('Can you please provide your subscriber number so that i can fetch your best offers ?', messageObj.id)
                break;
            case 'datapacks' :
                packPref.setPreference('data');
                bot.sendText('Can you please provide your subscriber number so that i can fetch your best offers ?', messageObj.id)
                break;
            case 'messagepacks' :
                packPref.setPreference('sms');
                bot.sendText('Can you please provide your subscriber number so that i can fetch your best offers ?', messageObj.id)
                break;
            case 'roamingpacks':
                packPref.setPreference('roaming');
                bot.sendText('Can you please provide your subscriber number so that i can fetch your best offers ?', messageObj.id)
                break;

            case 'highvalue' :
                packPref.setSubscriberNo('9846010001');
                switch (packPref.getPreference().preference) {
                    case 'voice' :
                    bot.sendText('Top Calling pack offer for you is : USD 500 gives you 2000 minutes free a month along with 5 GB data. To activate this pack on your line, please type activate', messageObj.id)
                    packPref.setSuggestedOffer('USD 500 gives you 2000 minutes free a month along with 5 GB data');
                    break;
                    case 'data' :
                    bot.sendText(' Top Data pack offer for you is : USD 502 gives you 1000 minutes free a month along with 10 GB data. To activate this pack on your line, please type activate', messageObj.id)
                    packPref.setSuggestedOffer('USD 502 gives you 1000 minutes free a month along with 10 GB data');
                    break;
                    case 'sms' :
                    bot.sendText(' Top SMS pack offer for you is : USD 505 gives you 1000 minutes free a month along with 1 GB data and 1000 sms free. To activate this pack on your line, please type activate', messageObj.id)
                    packPref.setSuggestedOffer('USD 505 gives you 1000 minutes free a month along with 1 GB data and 1000 sms free');
                    break;
                    case 'roaming' :
                        bot.sendText(' May I know which continent are you headed for ?', messageObj.id)
                        break;

                }
            break;
            case 'roamdesteurope' :
                bot.sendText('The top roaming pack for Europe is the USD 1000 plan, which gives you free incoming calls and texts, and outgoing calls at 50 cents a minute. To activate this pack on your line, please type activate', messageObj.id)
                packPref.setSuggestedOffer('The top roaming pack for Europe is the USD 1000 plan, which gives you free incoming calls and texts, and outgoing calls at 50 cents a minute');
                break;
            case 'roamdestamerica' :
                bot.sendText('The top roaming pack for Americas is the USD 1200 plan, which gives you free incoming calls and texts, and outgoing calls at 60 cents a minute. To activate this pack on your line, please type activate', messageObj.id)
                packPref.setSuggestedOffer(' USD 1200 plan, which gives you free incoming calls and texts, and outgoing calls at 60 cents a minute');
                break;
            case 'roamdestasia' :
                bot.sendText('The top roaming pack for Asia is the USD 1500 plan, which gives you free incoming calls and texts, and outgoing calls at 40 cents a minute. To activate this pack on your line, please type activate', messageObj.id)
                packPref.setSuggestedOffer(' USD 1500 plan, which gives you free incoming calls and texts, and outgoing calls at 40 cents a minute');
                break;
            case 'roamdestafrica' :
                bot.sendText('The top roaming pack for Africa is the USD 2000 plan, which gives you free incoming calls and texts, and outgoing calls at 80 cents a minute. To activate this pack on your line, please type activate', messageObj.id)
                packPref.setSuggestedOffer(' USD 2000 plan, which gives you free incoming calls and texts, and outgoing calls at 80 cents a minute');
                break;

            case 'mediumvalue' :
            packPref.setSubscriberNo('9846010002');
                switch (packPref.getPreference().preference) {
                    case 'voice' :
                    bot.sendText(' Top Calling pack offer for you is : USD 300 gives you 1000 minutes free a month along with 2 GB data. To activate this pack on your line, please type activate', messageObj.id)
                    packPref.setSuggestedOffer('USD 300 gives you 1000 minutes free a month along with 2 GB data');
                    break;
                    case 'data' :
                    bot.sendText(' Top Data pack offer for you is : USD 302 gives you 500 minutes free a month along with 5 GB data. To activate this pack on your line, please type activate', messageObj.id)
                    packPref.setSuggestedOffer('USD 302 gives you 500 minutes free a month along with 5 GB data');
                    break;
                    case 'sms' :
                    bot.sendText(' Top SMS pack offer for you is : USD 305 gives you 500 minutes free a month along with 1 GB data and 500 sms free. To activate this pack on your line, please type activate', messageObj.id)
                    packPref.setSuggestedOffer('USD 305 gives you 500 minutes free a month along with 1 GB data and 500 sms free');
                    break;
                    case 'roaming' :
                        bot.sendText(' May I know which continent are you headed for ?', messageObj.id)
                        break;

                }
            break;
            case 'lowvalue' :
            packPref.setSubscriberNo('9846010003');
                switch (packPref.getPreference().preference) {
                    case 'voice' :
                    bot.sendText(' Top Calling pack offer for you is : USD 100 gives you 400 minutes free a month along with 1 GB data. To activate this pack on your line, please type activate', messageObj.id)
                    packPref.setSuggestedOffer('USD 100 gives you 400 minutes free a month along with 1 GB data');
                    break;
                    case 'data' :
                    bot.sendText(' Top Data pack offer for you is : USD 102 gives you 200 minutes free a month along with 3 GB data. To activate this pack on your line, please type activate', messageObj.id)
                    packPref.setSuggestedOffer('USD 102 gives you 200 minutes free a month along with 3 GB data');
                    break;
                    case 'sms' :
                    bot.sendText(' Top SMS pack offer for you is : USD 105 gives you 200 minutes free a month along with 1 GB data and 100 sms free. To activate this pack on your line, please type activate', messageObj.id)
                    packPref.setSuggestedOffer('USD 105 gives you 200 minutes free a month along with 1 GB data and 100 sms free');
                    break;
                    case 'roaming' :
                        bot.sendText(' May I know which continent are you headed for ?', messageObj.id)
                        break;
                }
            break;

            // case 'roamdesteurope' :
            //     bot.sendText('The top roaming pack for Europe is the USD 1000 plan, which gives you free incoming calls and texts, and outgoing calls at 50 cents a minute. To activate this pack on your line, please type activate', messageObj.id)
            //     packPref.setSuggestedOffer('The top roaming pack for Europe is the USD 1000 plan, which gives you free incoming calls and texts, and outgoing calls at 50 cents a minute');
            //     break;
            // case 'roamdestamerica' :
            //     bot.sendText('The top roaming pack for Americas is the USD 1200 plan, which gives you free incoming calls and texts, and outgoing calls at 60 cents a minute. To activate this pack on your line, please type activate', messageObj.id)
            //     packPref.setSuggestedOffer('The top roaming pack for Americas is the USD 1200 plan, which gives you free incoming calls and texts, and outgoing calls at 60 cents a minute');
            //     break;
            // case 'roamdestasia' :
            //     bot.sendText('The top roaming pack for Asia is the USD 1500 plan, which gives you free incoming calls and texts, and outgoing calls at 40 cents a minute. To activate this pack on your line, please type activate', messageObj.id)
            //     packPref.setSuggestedOffer('The top roaming pack for Asia is the USD 1500 plan, which gives you free incoming calls and texts, and outgoing calls at 40 cents a minute');
            //     break;
            // case 'roamdestafrica' :
            //     bot.sendText('The top roaming pack for Africa is the USD 2000 plan, which gives you free incoming calls and texts, and outgoing calls at 80 cents a minute. To activate this pack on your line, please type activate', messageObj.id)
            //     packPref.setSuggestedOffer('The top roaming pack for Africa is the USD 2000 plan, which gives you free incoming calls and texts, and outgoing calls at 80 cents a minute');
            //     break;

            case 'packactivation':
                bot.sendText('For your number  '+ packPref.getSubscriberNo().subscriberNo + " " + 'I am activating this pack' + "  " + packPref.getSuggestedOffer().suggestedOffer, messageObj.id)
                break;
            case 'postactivation' :
                bot.sendText('I have activated this pack for you , Do remeber to pop up sometime. I ll make sure i have interesting offers for you', messageObj.id)
                break;
            case 'lowdenomination' :
                switch (packPref.getPreference().preference) {
                    case 'voice' :
                        bot.sendText(' Here is a lower pack : USD 100 gives you 400 minutes free a month along with 1 GB data. To activate this pack on your line, please type activate', messageObj.id)
                        packPref.setSuggestedOffer('USD 100 gives you 400 minutes free a month along with 1 GB data');
                        break;
                    case 'data' :
                        bot.sendText(' Here is a lower pack : USD 102 gives you 200 minutes free a month along with 3 GB data. To activate this pack on your line, please type activate', messageObj.id)
                        packPref.setSuggestedOffer('USD 102 gives you 200 minutes free a month along with 3 GB data');
                        break;
                    case 'sms' :
                        bot.sendText(' Here is a lower pack : USD 105 gives you 200 minutes free a month along with 1 GB data and 100 sms free. To activate this pack on your line, please type activate', messageObj.id)
                        packPref.setSuggestedOffer('USD 105 gives you 200 minutes free a month along with 1 GB data and 100 sms free');
                        break;
                }
                break;
            default :
                bot.sendText('You need to train me on that', messageObj.id)

        }

    }
    res.send(200)
})

app.listen(8081)
