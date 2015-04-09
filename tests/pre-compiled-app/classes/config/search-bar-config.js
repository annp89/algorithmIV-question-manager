  /**
   * -----------------------------------------------------
   * Public Class (SearchBarConfig)
   * -----------------------------------------------------
   * @desc The configuration settings for the search bar in this app.
   * @param {Object} config - The user's search bar config settings.
   * @constructor
   */
  var SearchBarConfig = function(config) {

    // $s$
    /**
     * ---------------------------------------------------
     * Public Property (SearchBarConfig.debug)
     * ---------------------------------------------------
     * @desc The Debug instance for the SearchBarConfig class.
     * @type {Debug}
     */
    this.debug = aIV.debug('SearchBarConfig');

    this.debug.start('init', config);
    this.debug.args('init', config, 'object');
    // $e$
    /**
     * ----------------------------------------------- 
     * Protected Property (SearchBarConfig.stage)
     * -----------------------------------------------
     * @desc Whether to display the stage search option.
     * @type {boolean}
     * @private
     */
    var stage;

    /**
     * ----------------------------------------------- 
     * Protected Property (SearchBarConfig.source)
     * -----------------------------------------------
     * @desc Whether to display the source search option.
     * @type {boolean}
     * @private
     */
    var source;

    /**
     * ----------------------------------------------- 
     * Protected Property (SearchBarConfig.category)
     * -----------------------------------------------
     * @desc Whether to display the category search option.
     * @type {boolean}
     * @private
     */
    var category;

    /**
     * ----------------------------------------------- 
     * Protected Property (SearchBarConfig.subCat)
     * -----------------------------------------------
     * @desc Whether to display the sub category search option.
     * @type {boolean}
     * @private
     */
    var subCat;

    /**
     * ----------------------------------------------- 
     * Public Property (SearchBarConfig.defaults)
     * -----------------------------------------------
     * @desc The default search options to display upon app init.
     * @type {DefaultsSearchBarConfig}
     */
    this.defaults;

    /**
     * ----------------------------------------------- 
     * Public Method (SearchBarConfig.get)
     * -----------------------------------------------
     * @desc Gets a config setting.
     * @param {string} prop - The name of the setting to get.
     * @return {boolean}
     */
    this.get = function(prop) {

      var debugMsg;
      this.debug.start('get', prop);
      this.debug.args('get', prop, 'string');

      /** @type {Object<string, boolean>} */
      var settings = {
        stage   : stage,
        source  : source,
        category: category,
        subCat  : subCat
      };

      debugMsg = 'Error: The given property does not exist. property= $$';
      this.debug.fail('get', settings.hasOwnProperty(prop), debugMsg, prop);

      return settings[prop];
    };
    Object.freeze(this.get);


    // Setup the properties
    stage    = true;
    source   = true;
    category = true;
    subCat   = true;

    if (config.hasOwnProperty('stage') && config.stage === false) {
      stage = false;
    }
    if (config.hasOwnProperty('source') && config.source === false) {
      source = false;
    }
    if (config.hasOwnProperty('category') && config.category === false) {
      category = false;
    }
    if (config.hasOwnProperty('subCat') && config.subCat === false) {
      subCat = false;
    }

    this.defaults = new DefaultsSearchBarConfig();
    Object.freeze(this.defaults);
  };

  // Ensure constructor is set to this class.
  SearchBarConfig.prototype.constructor = SearchBarConfig;
