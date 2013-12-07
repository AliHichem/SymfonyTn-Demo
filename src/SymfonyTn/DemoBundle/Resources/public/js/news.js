/**
 * News class
 * @param {object} parameters
 * @returns {Dashboard}
 */
var News = function(parameters) {
    var $__s = this,
            params = parameters,
            obj = {
                page: {
                    /**
                     * initializer
                     * @returns {undefined}
                     */
                    _init: function() {
                        this._bind();
                        this._initCountries();
                    },
                    /**
                     * add html element binders
                     * @returns {undefined}
                     */
                    _bind: function() {

                    },
                    /**
                     * init countries tab
                     * @returns {undefined}
                     */
                    _initCountries: function() {
                        var countries = new ddtabcontent("countrytabs");
                        countries.setpersist(true);
                        countries.setselectedClassTarget("link");
                        countries.init();
                    },
                    /**
                     * show global notification
                     * 
                     * @param {string} msg
                     * @param {string} title
                     * @returns {undefined}
                     */
                    _notify: function(msg,title){
                        $.bigBox({
                            title: title,
                            content: msg,
                            color: "#fa6800 ",
                            timeout: 8000,
                            img: "static/img/cloud.png ",
                        });
                    }

                },
                socket: {
                    /**
                     * initializer
                     * @returns {undefined}
                     */
                    _init: function() {
                        var socket = io.connect('http://localhost:8001/');
                        socket.on('socketio_news',function(data){
                            var news = $.parseJSON(data) ;
                            obj.page._notify(news.description,news.title);
                        });
                    }
                }
            };
    return {
        /**
         * page intializer :
         *  intialize binders and listener 
         * 
         * @returns {undefined}
         */
        init: function() {
            obj.page._init();
            obj.socket._init();
        }
    }
};
News.prototype = new News({});