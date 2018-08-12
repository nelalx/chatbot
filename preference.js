var preference;

exports.setPreference = function(pref) {
   preference = pref;
}

exports.getPreference = function () {
    return {
        preference : preference
    }
}

var suggestedOffer;
var subscriberNo;

exports.setSuggestedOffer = function(offer) {
    suggestedOffer = offer;
}

exports.getSuggestedOffer = function() {
    return {
        suggestedOffer : suggestedOffer
    }
}

exports.setSubscriberNo = function(no) {
    subscriberNo = no;
}

exports.getSubscriberNo = function () {
    return {
        subscriberNo : subscriberNo
    }
}

var roamstate;

exports.setRoamedState =  function (state) {
        roamstate = state
}

exports.getRoamedState = function () {
       return {
           roamstate : roamstate
       }
}