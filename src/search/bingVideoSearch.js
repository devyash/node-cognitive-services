const commonService = require('../commonService');

/**
 * The Video Search API lets you send a search query to Bing and get back a list of videos that are relevant to the search query. 
 * @augments commonService
 * {@link https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v5-reference|documentation}
 */
class bingVideoSearch extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.serviceId = "56b43f3ccf5ff8098cef3809"
        this.endpoints = [
            "api.cognitive.microsoft.com"
        ];
    }

    /**
	Get videos relevant for a given query.
	Example Parameters: {
        "q": "cats",
        "count": "10",
        "offset": "0",
        "mkt": "en-us",
        "safeSearch": "Moderate"
    }
    @returns {Promise.<object>}
*/
    search({ parameters }) {
        const operation = {
            "path": "bing/v5.0/videos/search",
            "method": "GET",
            "operationId": "56b440d2cf5ff8098cef380b",
            "parameters": [{
                "name": "id",
                "description": "An ID that uniquely identifies a video. The Video object's videoId field contains the ID that you set this parameter to.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "q",
                "description": "The user's search query string",
                "value": "",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "cc",
                "description": "A 2-character country code of the country where the results come from.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of video results to return in the response. The actual number delivered may be less than requested.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "freshness",
                "description": "Filter news articles by age. Age refers to the date and time that Bing discovered the article. ",
                "value": "",
                "options": [
                    "Day",
                    "Week",
                    "Month"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of video results to skip before returning results.",
                "value": "0",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}.",
                "value": "",
                "options": [
                    "es-AR", "en-AU", "de-AT", "nl-BE", "fr-BE", "pt-BR", "en-CA", "fr-CA", "es-CL", "da-DK", "fi-FI", "fr-FR", "de-DE", "zh-HK", "en-IN", "en-ID", "en-IE", "it-IT", "ja-JP", "ko-KR", "en-MY", "es-MX", "nl-NL", "en-NZ", "no-NO", "zh-CN", "pl-PL", "pt-PT", "en-PH", "ru-RU", "ar-SA", "en-ZA", "es-ES", "sv-SE", "fr-CH", "de-CH", "zh-TW", "tr-TR", "en-GB", "en-US", "es-US"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "safeSearch",
                "description": "A filter used to filter results for adult content.",
                "value": "Moderate",
                "options": [
                    "Off",
                    "Moderate",
                    "Strict"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "setLang",
                "description": "The language to use for user interface strings.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "textDecorations",
                "description": "A Boolean value that determines whether display strings should contain decoration markers such as hit highlighting characters.",
                "value": "false",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "textFormat",
                "description": "The type of markers to use for text decorations (see the textDecorations query parameter).",
                "value": "false",
                "options": [
                    "Raw",
                    "HTML"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "pricing",
                "description": "Filter videos by price.",
                "value": "",
                "options": [
                    "Free",
                    "Paid",
                    "All"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "resolution",
                "description": "Filter videos by resolution.",
                "value": "",
                "options": [
                    "480p",
                    "720p",
                    "1080p",
                    "All"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "videoLength",
                "description": "Filter videos by length.",
                "value": "",
                "options": [
                    "Short",
                    "Medium",
                    "Long",
                    "All"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
    Get currently trending videos.
    @returns {Promise.<object>}
    */
    trending() {

        const operation = {
            "path": "bing/v5.0/videos/trending",
            "method": "GET",
            "operationId": "56b44c36cf5ff81038d15ce1",
            "parameters": [{
                "name": "id",
                "description": "An ID that uniquely identifies a video. The Video object's videoId field contains the ID that you set this parameter to.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "cc",
                "description": "A 2-character country code of the country where the results come from.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "freshness",
                "description": "Filter news articles by age. Age refers to the date and time that Bing discovered the article. ",
                "value": "",
                "options": [
                    "Day",
                    "Week",
                    "Month"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}.",
                "value": "",
                "options": [
                    "es-AR", "en-AU", "de-AT", "nl-BE", "fr-BE", "pt-BR", "en-CA", "fr-CA", "es-CL", "da-DK", "fi-FI", "fr-FR", "de-DE", "zh-HK", "en-IN", "en-ID", "en-IE", "it-IT", "ja-JP", "ko-KR", "en-MY", "es-MX", "nl-NL", "en-NZ", "no-NO", "zh-CN", "pl-PL", "pt-PT", "en-PH", "ru-RU", "ar-SA", "en-ZA", "es-ES", "sv-SE", "fr-CH", "de-CH", "zh-TW", "tr-TR", "en-GB", "en-US", "es-US"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "safeSearch",
                "description": "A filter used to filter results for adult content.",
                "value": "Moderate",
                "options": [
                    "Off",
                    "Moderate",
                    "Strict"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "setLang",
                "description": "The language to use for user interface strings.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "textDecorations",
                "description": "A Boolean value that determines whether display strings should contain decoration markers such as hit highlighting characters.",
                "value": "false",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "textFormat",
                "description": "The type of markers to use for text decorations (see the textDecorations query parameter).",
                "value": "false",
                "options": [
                    "Raw",
                    "HTML"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "modulesRequested",
                "description": "A comma-delimited list of one or more insights to request. (When you URL encode the query string, the commas change to %2C.)",
                "value": "false",
                "options": [
                    "All",
                    "RelatedVideos",
                    "VideoResult"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
        })

    };

    /**
    Get details about a video.
    Example Parameters: {
        "id": "cats",
        "modulesRequested": 
        }
    @returns {Promise.<object>}
    */
    details({ parameters }) {

        const operation = {
            "path": "bing/v5.0/videos/details",
            "method": "GET",
            "operationId": "56b440d2cf5ff8098cef380b",
            "parameters": [{
                "name": "id",
                "description": "An ID that uniquely identifies a video. The Video object's videoId field contains the ID that you set this parameter to.",
                "value": "",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "cc",
                "description": "A 2-character country code of the country where the results come from.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}.",
                "value": "",
                "options": [
                    "es-AR", "en-AU", "de-AT", "nl-BE", "fr-BE", "pt-BR", "en-CA", "fr-CA", "es-CL", "da-DK", "fi-FI", "fr-FR", "de-DE", "zh-HK", "en-IN", "en-ID", "en-IE", "it-IT", "ja-JP", "ko-KR", "en-MY", "es-MX", "nl-NL", "en-NZ", "no-NO", "zh-CN", "pl-PL", "pt-PT", "en-PH", "ru-RU", "ar-SA", "en-ZA", "es-ES", "sv-SE", "fr-CH", "de-CH", "zh-TW", "tr-TR", "en-GB", "en-US", "es-US"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "safeSearch",
                "description": "A filter used to filter results for adult content.",
                "value": "Moderate",
                "options": [
                    "Off",
                    "Moderate",
                    "Strict"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "setLang",
                "description": "The language to use for user interface strings.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "textDecorations",
                "description": "A Boolean value that determines whether display strings should contain decoration markers such as hit highlighting characters.",
                "value": "false",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "textFormat",
                "description": "The type of markers to use for text decorations (see the textDecorations query parameter).",
                "value": "false",
                "options": [
                    "Raw",
                    "HTML"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "modulesRequested",
                "description": "A comma-delimited list of one or more insights to request. (When you URL encode the query string, the commas change to %2C.)",
                "value": "false",
                "options": [
                    "All",
                    "RelatedVideos",
                    "VideoResult"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "pricing",
                "description": "Filter videos by price.",
                "value": "",
                "options": [
                    "Free",
                    "Paid",
                    "All"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "resolution",
                "description": "Filter videos by resolution.",
                "value": "",
                "options": [
                    "480p",
                    "720p",
                    "1080p",
                    "All"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "videoLength",
                "description": "Filter videos by length.",
                "value": "",
                "options": [
                    "Short",
                    "Medium",
                    "Long",
                    "All"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };
}

module.exports = bingVideoSearch;