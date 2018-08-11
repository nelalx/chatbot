const request =  require('./requestPromise')

module.exports = class methods {
    constructor(access_token) {
        this.ACCESS_TOKEN = access_token

    }

    async sendText(text, id) {

        const json =  {
            recipient  : {id},
            message : {text}
        }

        const res = await request({
            url : 'https://graph.facebook.com/v3.1/me/messages',
            qs : {
                access_token : this.ACCESS_TOKEN
            },
            json,
            method : 'POST'
        })

        console.log('Facebook Says: ', res)
    }

    getMessageObject(json) {
        var intent = 'None'
        const message = json.entry[0].messaging[0].message.text
        const id = json.entry[0].messaging[0].sender.id
//      if (_.has(json, json.entry[0].messaging[0].message.nlp)) {
        if ('intent' in json.entry[0].messaging[0].message.nlp.entities ){
            intent = json.entry[0].messaging[0].message.nlp.entities.intent[0].value
        }
        return{message,id,intent}
    }
}