// Uses CommonJS, AMD or browser globals to create a jQuery plugin.
;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery')
                }
                else {
                    jQuery = require('jquery')(root)
                }
            }
            factory(jQuery)
            return jQuery
        }
    } else {
        // Browser globals
        factory(jQuery)
    }
}(function ($) {
  /*
  *  _parseOptions
  *  handle plugin options
  */
  var _parseOptions = function(opts) {
    var options = {
      localized: true,
      decimal: true,
    }

    if (typeof opts === 'object') {
      return $.extend(options, opts)
    }

    return options
  }

  var _localizedIDR = function(value, opts) {
    if (window.Intl && typeof window.Intl === "object"){
      return Number(value).
        toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: (opts.decimal) ? 2 : 0
        })
    }

    var _rupiah = '',
        _valrev = value.toString().split('').reverse().join('')
  	for(var i = 0; i < _valrev.length; i++){
      if(i%3 === 0){
        _rupiah += _valrev.substr(i,3) + '.' + (opts.decimal) ? ',00' : null
      }
    }
  	return 'Rp' + _rupiah.split('', _rupiah.length - 1).reverse().join('')
  }

  var _unlocalizedIDR = function(value) {
    return parseInt(value.replace(/,.*|\D/g,''),10)
  }

  // Number and String Elements
  Number.prototype.rupiah = String.prototype.rupiah = function(opts) {
    var $options = _parseOptions(opts), $value = parseInt(this)

    if(!$options.localized){
      if(!isNaN($value)){
        return $value
      }

      return _unlocalizedIDR(this)
    }

    if(isNaN($value)){
      return String(this)
    }

    return _localizedIDR($value, $options)
  }

  // Object Elements
  var rupiah = Object.prototype.rupiah = $.fn.rupiah = function(opts) {
    var $options = _parseOptions(opts), $elem = $(this), $value, $preval

    // opts.localized = false
    if(!$options.localized){
      if($elem.val()){
        $elem.val(_unlocalizedIDR($elem.val()))
      }

      if($elem.text()){
        $elem.text(_unlocalizedIDR($elem.text()))
      }

      return this
    }

    // opts.localized = true
    if($elem.val()){
      $preval = parseInt($elem.val())
      if(isNaN($preval)) {
        return this
      }

      $value = $preval
      $elem.val(_localizedIDR($value, $options))
    }

    if($elem.text()){
      $preval = parseInt($elem.text())
      if(isNaN($preval)) {
        return this
      }

      $value = $preval
      $elem.text(_localizedIDR($value, $options))
    }

    return this
  }
}))
