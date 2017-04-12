/*
 * node-timeago
 * Cam Pedersen
 * <diffference@gmail.com>
 * Oct 6, 2011
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 0.10.0
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2011, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
 */
module.exports = function (timestamp) {
    if (timestamp instanceof Date) {
        return inWords(timestamp);
    } else if (typeof timestamp === "string") {
        return inWords(parse(timestamp));
    } else if (typeof timestamp === "number") {
        return inWords(new Date(timestamp))
    }
};

var settings = {
    allowFuture: false,
    _strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        numbers: []
    },
    strings: {
        prefixAgo: null,
        prefixFromNow: "现在",
        suffixAgo: "前",
        suffixFromNow: null,
        seconds: "1分钟",
        minute: "1分钟",
        minutes: "%d分钟",
        hour: "1小时",
        hours: "%d小时",
        day: "1天",
        days: "%d天",
        month: "1个月",
        months: "%d月",
        year: "1年",
        years: "%d年",
        numbers: [],
        wordSeparator: ""
    }
};

var $l = settings.strings;

module.exports.settings = settings;

$l.inWords = function (distanceMillis) {
    var prefix = $l.prefixAgo;
    var suffix = $l.suffixAgo;
    if (settings.allowFuture) {
        if (distanceMillis < 0) {
            prefix = $l.prefixFromNow;
            suffix = $l.suffixFromNow;
        }
    }

    var seconds = Math.abs(distanceMillis) / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    var years = days / 365;

    function substitute(stringOrFunction, number) {
        var string = typeof stringOrFunction === 'function' ? stringOrFunction(number, distanceMillis) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
    }

    var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 48 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.floor(days)) ||
        days < 60 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.floor(days / 30)) ||
        years < 2 && substitute($l.year, 1) ||
        substitute($l.years, Math.floor(years));

    return [prefix, words, suffix].join("").toString().trim();
};

function parse(iso8601) {
    if (!iso8601) return;
    var s = iso8601.trim();
    s = s.replace(/\.\d\d\d+/, ""); // remove milliseconds
    s = s.replace(/-/, "/").replace(/-/, "/");
    s = s.replace(/T/, " ").replace(/Z/, " UTC");
    s = s.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
    return new Date(s);
}

$l.parse = parse;

function inWords(date) {
    return $l.inWords(distance(date));
}

function distance(date) {
    return (new Date().getTime() - date.getTime());
}
