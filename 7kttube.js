// ==UserScript==
// @name			7ktTube | 2016 REDUX
// @namespace STILL_ALIVE
// @version 3.2.1
// @description Modification interface(API) included | Customizable thumbnail size | Customizable video player size | Grey-out + Blur watched video thumbnails | Hide suggestions blocks | Hide  all video-filter bars (tags) | And much more!
// @author 7KT-SWE
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAACnVBMVEUAAAD////////94+PX19f+8fH/////////+fn83Nz////////////////////////////////////////////////////////////829vS0tL////////////////////////////////////////////////y8vLp6en95+f////////////sKCgAAADpCQnqDg7pBgbqCwvsHh7sICDsIyPtKirsJibrGhr1kZHyaGjrGBjnAAD81tbrHBz3oqLsJSXxX1/qEBDp6enxZGSysrIVFRX2k5PxWVnqEhK0tLT1gYHtLCzqFBTybW3wUlLtMDDtMjLz8/PuOzvqFxcHBwf95eX0iIjxYGDvQEDpAQF/f3/wU1PuNTX+7e394+PuODgfHx///f3+9PT6xMT4qKilpaX1i4v82dnvR0f/+vr+8vLj5OT2nJzzcnLzcHDwS0vvRETrFRXx8fH7z8/5urrsk5N2dnbxVlbwT08iIiL83d380dH7ycmqqqr1jo70fHx0dHT7JSX6+vr39/f/9vb+8/P+6ur83Nz71NTR0dH5tLT3paX2mZn1iIj1hYXxXFwFBQXNzc33r6/3n5+JiYmFhYV6enrzeHhJSUkiPDzpDw8LDAz95+f7zc36vr68vLyUlJTzdXVra2vyamo0NDTrJib8ICD5Hh4dHR0RERHf39/Y2Nj7zs7Gxsb6v7+2trbvra2Xl5eQkJDybGxeXl5XV1dMTExHR0c7OzsdNjYuLi4SLS38KiopKSn9/Pzv+vr839+8yMj5wMDxuLi4uLj4qqruqqqgoKB8fHwGICDyFxfsFhbV4uL7y8vyx8f6wMCvvb3tt7e3t7eur6+Yr6+OpaXuoKA2U1NRUVE0UVEYMTETMDDyKSkMJye13jY6AAAALHRSTlMAavLy8vJi9PLy4vru2L6UhGs1JRAI5VEb8vLo3qyqfHpIRUA/Eg/y8vJTHBug3AoAAAhOSURBVGjevZqF39JAGIDt7u5uD7fBSoeIM1GwwADBDmzB7u7u7u7u7u7Ov8WLsaAUnD4/f+x27rvnu727947vlkOlTL6qRYvkzxWjQaU8eirVz/WH5C9StFq+ejniKVsiPzDQu8ma7hpNmnQAmZC/RFlj+6UKgTg2NTHSBmRG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
// @icon64 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACNFBMVEUAAAD////////4rKyYmJj////3pqb7zMz4trb////////////////////////819f5wMD////////////83d36xMT5urqOjo7/////////////+Pj+8vL96+v95+f95eX84+O6urr4r6+qqqr3qKj////////////////sKCgAAADsJCTsKSnrICDpCgrrHh7qERHsIiLpBQX+8PDrGxvrGBjqDg7pBwfrFRURERH/+fn82Nh7e3vtLS3809PwXFztLi7pAADs7e381tb7zs7uMzPqDAz96urvR0f82trtMDD+8/PwUVHwS0v95+f3o6P4qan3oKDyamr/+/v+7u7zbW3xV1fvQ0M5OTnqCgrmAADn5+f7yMj6wcH6vLz2mZn2kZHzdHRhYWFaWlruPj7uOzvuODguLi7+9/f/9fXx8fH95ub95eX84OD7y8vExMT7w8O6urr3nJz0gIDwVFT/NDQJCwv94uL83t7V1dX70NC+vr62trb4rq6ZmZn2lZWKiopqampoaGjyZGTxXFxPT0//QUHuQEDtFhbe3t73trb1s7Nzi4v1iYmIiIj0g4N5eXmjc3PzcnJCQkL/OTkpKSkdHR39///t///u7u7q6urf39/IyMj6vr7NpaWkpKSQkJCBgYHzd3ewcnJubm7xZWWiZGTxYWFXV1cAGRkYGBjd+fn19fXh4eGsrKzQl5fHlpatgoKkfHy0dnaqa2tiYmJdXV3/RkYjPDwXMzP/MDD+KSmHIHNsAAAAKHRSTlMAv/Dw8Ljw8PDj05JnMQbw8NxdR/Dw8PC5Q0Lw8PDw8PDw8PDw3V5JgcnJaAAABWxJREFUWMOl14dX00AcB3D33nvvcZdc1tE0EUQboQXBKqVIbQUBBVRERMC999577733+uf8XdKkDa/aoN/3SJMr9+nl7jKum5khg3r372Fl+theVsbO7PGX9O89aEg3JyOHIyeXODsv0d8zfKRdf0R68REHWIuyZYRVfzD6VwANNoEBrrIdu3ft2rXpIAArsgMDWP0JKEMeA3AAZc94AAaiDLkCwF4PwEAAemcoX8lBdqADzw80odtrjmw+sWa1meebkDvjAOieAdgM9eeha7BtQis47sRuLpn7yJ3ufwD2m334eh4oizjuCLpnA/c8Amvgfw+iRQx4wHG30Y0dtw5Aya0dTR6BtawPGXBl5dXkcJ7luLPwkRVI9eEmBlw6y3ZY5nPcfM8A68OtNxhw9SqchXfA3YcMgHhvgbsPvzjAg64Da9mIO8ClLgMrt0K1XRaw4gq3tckj4O7DmxZwAi6r3V0F9ls3A2si7eW4896BVB9+tYE3cBregVQf7k8CUfSS4256BlLzcHMSaGLteds1wLx2VyaBRawTDsLBeegLj8BpqP8dQa6/4F5cR6+2cj+umaWnswLrSis2bNx+9+OHC+9bq6vvnHr09NGpVXc+Pf18srr63YULdxcUbN/YXJSzLjNwanm4viEYIPjyt6NHt6i6qh/fcnnLcdnc6vqvo0d/SgomgWBjQ/GhSG5nYHGYUllXVZ9PkgRBYeHTYhYIgiRJPlXVZc0IrnIDO30GT7DnEBynZelAEdas6t4JXWxJAx4aAcUv2/HrhKR+S/bL9rFLoMUpoIhX+WC42E74GI/t8KQ4bB+7w8dbHWBPHPuXoFRadAUnowZLEcqTBJyhCeccoEbD/nAasCAdgAHbngnAYrkD1Go43pEGNKcDOQgVZAYOOUC7htX6SKT2JFSuaKtZdk7iPQChSge4qOF8RdMSMdZ8w9BkNnEwUSAWIEi6jmEkoEyX1eSMkcMOsFy02rQQgDxBwsQH883a6gzIo7S+URRgMDW1IRb0+wkj9FjUBp7EXYAi7NlZWB2Qy3YWVmEegNZAWXR9rczztLwwF1WcjGkmUL/OBg6HXIDgK4KdErqNbSUAlkYR5KFGLyIz0ZgIgtqYYwOV/k7AAoRyAmIhQrn5Qo4zuEYJgmyAvwJZYf1bYQNLsgDrKw/DbNhmtMP3dWIZsmr4Soq8AgsSWjNc8XQZjLKUYHN2Of0rILkBaDG/AQANfnsjb3QwQCNdBJaaLQBATMSyA74/A6Vlbav+B7Bzkf4zUMqSWy66gErvwIbG/CDPJ6+zitRM9AxsUzUfD4J7Jh4SPQPNxKhcX7qOnYLeUGoD5RmAihJa5Uwkv9KcmgeVbD5SAI7l2kBdJ0AqgBaEEgU2kJegRQDQCPShkmBAOXXdD9q1TkAe7OwrQzYQPVOL2LVQB9tIfRVsYzLG/g4HqHUDvGY9txzASpXB24/VVRoMRPxZ+l2ZhZYjuPIkiYTCCHJmO2wCEiurQpCOkNhhPVN3KjpJ3ZV7w3NBtAa2uGZfzTk2RuKzlpYnRl2kbR/h97VF6uT2wqpDcUK0+pqWgtYzkpzPngvt1oJjIMwOxceAfIlSKhKCCQmpqohlSjVMNEplicIxgchUlWTqg/qYF+FEByYXXcsNknwSWp/sjpzccx8TrAi8tacdi8KiK7nsWyqFAO1KiEqrYdnnLDxbZQq658C5GG1s4Zla+hY2GJpuv57wfwh7S5EkeFyIBr8HKs1xLb4jhxtK8jEvwPc6e0lgCZkxd6FI11WfBF0QaFxSCzNz9lyrdmr5P3Hy1FFDh/btO3rYmH79ZvSEzOrD0pOlX78xw4aN7tt36KhpUyalLf9/A5nj/LZRV7kLAAAAAElFTkSuQmCC
// @license      GPL-3.0-only
// @homepageURL     https://7kttube.tk/
// @downloadURL	    https://7kttube.tk/install/7ktTube.user.js
// @supportURL      https://discord.gg/UQHSEsUW4S
// @contributionURL https://www.paypal.com/donate/?hosted_button_id=2EJR4DLTR4Y7Q
// @require https://unpkg.com/vue@2.6.12/dist/vue.js
// @require https://unpkg.com/xfetch-js@0.5.0/dist/xfetch.min.js
// @match *://*.youtube.com/*
// @match *://*.youtu.be/*
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM.getValue
// @grant GM.setValue
// @grant GM_setValue
// @grant GM_registerMenuCommand
// @grant unsafeWindow
// @run-at document-start
// @compatible Chrome >=55 + Tampermonkey + Violentmonkey
// @compatible Firefox >=56 + Tampermonkey + Violentmonkey
// @compatible Opera + Tampermonkey + Violentmonkey
// @compatible Edge + Tampermonkey + Violentmonkey
// ==/UserScript==
/*jshint esversion: 6 */
// fix GM_addStyle

if (typeof GM_addStyle !== "function") {
   function GM_addStyle(css) {
      let style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));
      const head = document.getElementsByTagName('head')[0];
      if (head) head.appendChild(style);
      else document.documentElement.appendChild(style);
   }
}

const yt_lib_custom = {
   removeEl: selector => {
      let e = document.querySelector(selector);
      e && e.parentNode.removeChild(e);
   },
   getQueryURL: (query, url) => new URLSearchParams((url ? new URL(url) : location).search).get(query),
}

// remove el
window.addEventListener('load', () => {
   document.querySelectorAll("#masthead-ad").forEach(e => e.remove()); // ad
   document.body.addEventListener("yt-navigate-finish", () => {
      yt_lib_custom.removeEl('ytp-miniplayer');
      yt_lib_custom.removeEl('.ytp-miniplayer-button');
      if (window.location.pathname != "/watch") yt_lib_custom.removeEl('#movie_player video');
     
   });
});

function restore_appbar_links() {
	var trendingData = {
	  "navigationEndpoint": {
		"clickTrackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
		"commandMetadata": {
		  "webCommandMetadata": {
			"url": "/feed/trending",
			"webPageType": "WEB_PAGE_TYPE_BROWSE",
			"rootVe": 6827,
			"apiUrl": "/youtubei/v1/browse"
		  }
		},
		"browseEndpoint": {
		  "browseId": "FEtrending"
		}
	  },
	  "icon": {
		"iconType": "TRENDING"
	  },
	  "trackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
	  "formattedTitle": {
		"simpleText": "Trending"
	  },
	  "accessibility": {
		"accessibilityData": {
		  "label": "Trending"
		}
	  },
	  "isPrimary": true
	};

	var guidetemplate = `<ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" is-primary="" line-end-style="none"><!--css-build:shady--><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="tablist"><tp-yt-paper-item role="tab" class="style-scope ytd-guide-entry-renderer" tabindex="0" aria-disabled="false"><!--css-build:shady--><yt-icon class="guide-icon style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-img-shadow><yt-formatted-string class="title style-scope ytd-guide-entry-renderer"><!--css-build:shady--></yt-formatted-string><span class="guide-entry-count style-scope ytd-guide-entry-renderer"></span><yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div></tp-yt-paper-item></a><yt-interaction class="style-scope ytd-guide-entry-renderer"><!--css-build:shady--><div class="stroke style-scope yt-interaction"></div><div class="fill style-scope yt-interaction"></div></yt-interaction></ytd-guide-entry-renderer>`;
	document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(1)`).insertAdjacentHTML("afterend", guidetemplate);
	document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(2)`).data = trendingData;
	document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(3)`).remove();

	document.querySelector("ytd-guide-section-renderer.style-scope:nth-child(1)").data.items[1].guideEntryRenderer = trendingData;


/*	if (yt.config_.LOGGED_IN)
	{
		function getAccountId()
		{
			var yourVideosIndex = document.querySelector("ytd-guide-collapsible-section-entry-renderer.style-scope #section-items");

			for (i = 0; i < yourVideosIndex.children.length; i++)
			{
				if (yourVideosIndex.children[i].querySelector("yt-icon path").getAttribute("d") == "M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.9h12.8a1.8 1.8 0 0 0 1.9-1.9V5.6a1.8 1.8 0 0 0-1.9-1.8z")
				{
					return yourVideosIndex.children[i].querySelector("#endpoint").href.replace(/(https:\/\/)|(studio.youtube.com)|(\/channel\/)|(\/videos)/g, "");
				}
			}
		}

		var channelData = {
		  "navigationEndpoint": {
			"clickTrackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
			"commandMetadata": {
			  "webCommandMetadata": {
				"url": "/channel/",
				"webPageType": "WEB_PAGE_TYPE_CHANNEL",
				"rootVe": 6827,
				"apiUrl": "/youtubei/v1/browse"
			  }
			},
			"browseEndpoint": {
			  "browseId": 
			}
		  },
		  "icon": {
			"iconType": "ACCOUNT_BOX"
		  },
		  "trackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
		  "formattedTitle": {
			"simpleText": "My channel"
		  },
		  "accessibility": {
			"accessibilityData": {
			  "label": "My channel"
			}
		  },
		  "isPrimary": true
		};

		var guidetemplate = `<ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" is-primary="" line-end-style="none"><!--css-build:shady--><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="tablist"><tp-yt-paper-item role="tab" class="style-scope ytd-guide-entry-renderer" tabindex="0" aria-disabled="false"><!--css-build:shady--><yt-icon class="guide-icon style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-img-shadow><yt-formatted-string class="title style-scope ytd-guide-entry-renderer"><!--css-build:shady--></yt-formatted-string><span class="guide-entry-count style-scope ytd-guide-entry-renderer"></span><yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div></tp-yt-paper-item></a><yt-interaction class="style-scope ytd-guide-entry-renderer"><!--css-build:shady--><div class="stroke style-scope yt-interaction"></div><div class="fill style-scope yt-interaction"></div></yt-interaction></ytd-guide-entry-renderer>`;
		document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(1)`).insertAdjacentHTML("afterend", guidetemplate);
		document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(2)`).data = channelData;
		document.querySelector("ytd-guide-section-renderer.style-scope:nth-child(1)").data.items[1].guideEntryRenderer = channelData;
  }*/
}

function gen_aspect_fix() {
  "use strict";
  var vidfix = {
    inject: function(is_user_script) {
      var modules;
      var vidfix_api;
      var user_settings;
      var default_language;
      var send_settings_to_page;
      var receive_settings_from_page;
      modules = [];
      vidfix_api = {
        initializeBypasses: function() {
          var ytd_watch;
          var sizeBypass;
          if (ytd_watch = document.querySelector("ytd-watch, ytd-watch-flexy")) {
            sizeBypass = function() {
              var width;
              var height;
              var movie_player;
              if (!ytd_watch.theater && !document.querySelector(".iri-full-browser") && (movie_player = document.querySelector("#movie_player"))) {
                width = movie_player.offsetWidth;
                height = Math.round(movie_player.offsetWidth / (16 / 9));
                if (ytd_watch.updateStyles) {
                  ytd_watch.updateStyles({
                    "--ytd-watch-flexy-width-ratio": 1,
                    "--ytd-watch-flexy-height-ratio": 0.5625
                  });
                  ytd_watch.updateStyles({
                    "--ytd-watch-width-ratio": 1,
                    "--ytd-watch-height-ratio": 0.5625
                  });
                }
              }
              else {
                width = window.NaN;
                height = window.NaN;
              }
              return {
                width: width,
                height: height
              };
            };
            if (ytd_watch.calculateCurrentPlayerSize_) {
              if (!ytd_watch.calculateCurrentPlayerSize_.bypassed) {
                ytd_watch.calculateCurrentPlayerSize_ = sizeBypass;
                ytd_watch.calculateCurrentPlayerSize_.bypassed = true;
              }
              if (!ytd_watch.calculateNormalPlayerSize_.bypassed) {
                ytd_watch.calculateNormalPlayerSize_ = sizeBypass;
                ytd_watch.calculateNormalPlayerSize_.bypassed = true;
              }
            }
          }
        },
        initializeSettings: function(new_settings) {
          var i;
          var j;
          var option;
          var options;
          var loaded_settings;
          var vidfix_settings;
          if (vidfix_settings = document.getElementById("vidfix-settings")) {
            loaded_settings = JSON.parse(vidfix_settings.textContent || "null");
            receive_settings_from_page = vidfix_settings.getAttribute("settings-beacon-from");
            send_settings_to_page = vidfix_settings.getAttribute("settings-beacon-to");
            vidfix_settings.remove();
          }
          user_settings = new_settings || loaded_settings || user_settings || {};
          for (i = 0; i < modules.length; i++) {
            for (options in modules[i].options) {
              if (modules[i].options.hasOwnProperty(options)) {
                option = modules[i].options[options];
                if (!(option.id in user_settings) && "value" in option) {
                  user_settings[option.id] = option.value;
                }
              }
            }
          }
        },
        initializeModulesUpdate: function() {
          var i;
          for (i = 0; i < modules.length; i++) {
            if (modules[i].onSettingsUpdated) {
              modules[i].onSettingsUpdated();
            }
          }
        },
        initializeModules: function() {
          var i;
          for (i = 0; i < modules.length; i++) {
            if (modules[i].ini) {
              modules[i].ini();
            }
          }
        },
        initializeOption: function() {
          var key;
          if (this.started) {
            return true;
          }
          this.started = true;
          for (key in this.options) {
            if (this.options.hasOwnProperty(key)) {
              if (!(key in user_settings) && this.options[key].value) {
                user_settings[key] = this.options[key].value;
              }
            }
          }
          return false;
        },
        initializeBroadcast: function(event) {
          if (event.data) {
            if (event.data.type === "settings") {
              if (event.data.payload) {
                if (event.data.payload.broadcast_id === this.broadcast_channel.name) {
                  this.initializeSettings(event.data.payload);
                  this.initializeModulesUpdate();
                }
              }
            }
          }
        },
        ini: function() {
          this.initializeSettings();
          this.broadcast_channel = new BroadcastChannel(user_settings.broadcast_id);
          this.broadcast_channel.addEventListener("message", this.initializeBroadcast.bind(this));
          document.documentElement.addEventListener("load", this.initializeSettingsButton, true);
          document.documentElement.addEventListener("load", this.initializeBypasses, true);
          if (this.isSettingsPage) {
            this.initializeModules();
          }
        }
      };
      vidfix_api.ini();
    },
    isAllowedPage: function() {
      var current_page;
      if (current_page = window.location.pathname.match(/\/[a-z-]+/)) {
        current_page = current_page[0];
      }
      else {
        current_page = window.location.pathname;
      }
      return ["/tv", "/embed", "/live_chat", "/account", "/account_notifications", "/create_channel", "/dashboard", "/upload", "/webcam"].indexOf(current_page) < 0;
    },
    generateUUID: function() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
        .replace(/[018]/g, function(point) {
          return (point ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> point / 4)
            .toString(16);
        });
    },
    saveSettings: function() {
      if (this.is_user_script) {
        this.GM.setValue(this.id, JSON.stringify(this.user_settings));
      }
      else {
        chrome.storage.local.set({
          vidfixSettings: this.user_settings
        });
      }
    },
    updateSettingsOnOpenWindows: function() {
      this.broadcast_channel.postMessage({
        type: "settings",
        payload: this.user_settings
      });
    },
    settingsUpdatedFromOtherWindow: function(event) {
      if (event.data && event.data.broadcast_id === this.broadcast_channel.name) {
        this.user_settings = event.data;
        this.saveSettings();
      }
    },
    contentScriptMessages: function(custom_event) {
      var updated_settings;
      if ((updated_settings = custom_event.detail.settings) !== undefined) {
        this.saveSettings();
      }
    },
    initializeScript: function(event) {
      var holder;
      this.user_settings = event[this.id] || event;
      if (!this.user_settings.broadcast_id) {
        this.user_settings.broadcast_id = this.generateUUID();
        this.saveSettings();
      }
      this.broadcast_channel = new BroadcastChannel(this.user_settings.broadcast_id);
      this.broadcast_channel.addEventListener("message", this.settingsUpdatedFromOtherWindow.bind(this));
      event = JSON.stringify(this.user_settings);
      holder = document.createElement("vidfix-settings");
      holder.id = "vidfix-settings";
      holder.textContent = event;
      holder.setAttribute("style", "display: none");
      holder.setAttribute("settings-beacon-from", this.receive_settings_from_page);
      holder.setAttribute("settings-beacon-to", this.send_settings_to_page);
      document.documentElement.appendChild(holder);
      holder = document.createElement("script");
      holder.textContent = "(" + this.inject + "(" + this.is_user_script.toString() + "))";
      document.documentElement.appendChild(holder);
      holder.remove();
      this.inject = null;
      delete this.inject;
    },
    main: function(event) {
      var now;
      var context;
      now = Date.now();
      this.receive_settings_from_page = now + "-" + this.generateUUID();
      this.send_settings_to_page = now + 1 + "-" + this.generateUUID();
      window.addEventListener(this.receive_settings_from_page, this.contentScriptMessages.bind(this), false);
      if (!event) {
        if (this.is_user_script) {
          context = this;
          // javascript promises are horrible
          this.GM.getValue(this.id, "{}")
            .then(function(value) {
              event = JSON.parse(value);
              context.initializeScript(event);
            });
        }
      }
      else {
        this.initializeScript(event);
      }
    },
    ini: function() {
      if (this.isAllowedPage()) {
        this.is_settings_page = window.location.pathname === "/vidfix-settings";
        this.id = "vidfixSettings";
        if (typeof GM === "object" || typeof GM_info === "object") {
          this.is_user_script = true;
          // GreaseMonkey 4 polly fill
          // https://arantius.com/misc/greasemonkey/imports/greasemonkey4-polyfill.js
          if (typeof GM === "undefined") {
            this.GM = {
              setValue: GM_setValue,
              info: GM_info,
              getValue: function() {
                return new Promise((resolve, reject) => {
                  try {
                    resolve(GM_getValue.apply(this, arguments));
                  }
                  catch (e) {
                    reject(e);
                  }
                });
              }
            };
          }
          else {
            this.GM = GM;
          }
          this.main();
        }
        else {
          this.is_user_script = false;
          chrome.storage.local.get(this.id, this.main.bind(this));
        }
      }
    }
 };

  vidfix.ini();

  function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
      return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  }
  addGlobalStyle('.html5-video-player { background-color: #000!important; }');

   }

function gen_history() {
   /*
     - Grey out watched video thumbnails info:
     - Use ALT+LeftClick or ALT+RightClick on a video list item to manually toggle the watched marker. The mouse button is defined in the script and can be changed.
     - For restoring/merging history, source file can also be a YouTube's history data JSON (downloadable from https://support.google.com/accounts/answer/3024190?hl=en). Or a list of YouTube video URLs (using current time as timestamps).
   */
  //=== config start ===
  var maxWatchedVideoAge   = 5 * 365; //number of days. set to zero to disable (not recommended)
  var contentLoadMarkDelay = 600;     //number of milliseconds to wait before marking video items on content load phase (increase if slow network/browser)
  var markerMouseButtons   = [0, 1];  //one or more mouse buttons to use for manual marker toggle. 0=left, 1=right, 2=middle. e.g.:
                                      //if `[0]`, only left button is used, which is ALT+LeftClick.
                                      //if `[1]`, only right button is used, which is ALT+RightClick.
                                      //if `[0,1]`, any left or right button can be used, which is: ALT+LeftClick or ALT+RightClick.
  //=== config end ===
 
  var watchedVideos, ageMultiplier = 24 * 60 * 60 * 1000, xu = /\/watch(?:\?|.*?&)v=([^&]+)/;
 
  function getVideoId(url) {
    var vid = url.match(xu);
    if (vid) vid = vid[1] || vid[2];
    return vid;
  }
 
  function watched(vid) {
    return !!watchedVideos.entries[vid];
  }
 
  function processVideoItems(selector) {
    var items = document.querySelectorAll(selector), i, link;
    for (i = items.length-1; i >= 0; i--) {
      if (link = items[i].querySelector("A")) {
        if (watched(getVideoId(link.href))) {
          items[i].classList.add("watched");
        } else items[i].classList.remove("watched");
      }
    }
  }
 
  function processAllVideoItems() {
    //home page
    processVideoItems(".yt-uix-shelfslider-list>.yt-shelf-grid-item");
    processVideoItems("#contents.ytd-rich-grid-renderer>ytd-rich-item-renderer,#contents.ytd-rich-shelf-renderer ytd-rich-item-renderer.ytd-rich-shelf-renderer");
    //subscriptions page
    processVideoItems(".multirow-shelf>.shelf-content>.yt-shelf-grid-item");
    //history:watch page
    processVideoItems('ytd-section-list-renderer[page-subtype="history"] .ytd-item-section-renderer>ytd-video-renderer');
    //channel/user home page
    processVideoItems("#contents>.ytd-item-section-renderer>.ytd-newspaper-renderer,#items>.yt-horizontal-list-renderer"); //old
    processVideoItems("#contents>.ytd-channel-featured-content-renderer,#contents>.ytd-shelf-renderer>#grid-container>.ytd-expanded-shelf-contents-renderer"); //new
    //channel/user video page
    processVideoItems(".yt-uix-slider-list>.featured-content-item,.channels-browse-content-grid>.channels-content-item,#items>.ytd-grid-renderer");
    //channel/user playlist page
    processVideoItems(".expanded-shelf>.expanded-shelf-content-list>.expanded-shelf-content-item-wrapper,.ytd-playlist-video-renderer");
    //channel/user playlist item page
    processVideoItems(".pl-video-list .pl-video-table .pl-video,ytd-playlist-panel-video-renderer");
    //channel/user search page
    if (/^\/(?:c|channel|user)\/.*?\/search/.test(location.pathname)) {
      processVideoItems(".ytd-browse #contents>.ytd-item-section-renderer"); //new
    }
    //search page
    processVideoItems("#results>.section-list .item-section>li,#browse-items-primary>.browse-list-item-container"); //old
    processVideoItems(".ytd-search #contents>ytd-video-renderer,.ytd-search #contents>ytd-playlist-renderer,.ytd-search #items>ytd-video-renderer"); //new
    //video page
    processVideoItems(".watch-sidebar-body>.video-list>.video-list-item,.playlist-videos-container>.playlist-videos-list>li"); //old
    processVideoItems(".ytd-compact-video-renderer,.ytd-compact-radio-renderer"); //new
  }
 
  function addHistory(vid, time, noSave, i) {
    if (!watchedVideos.entries[vid]) {
      watchedVideos.index.push(vid);
    } else {
      i = watchedVideos.index.indexOf(vid);
      if (i >= 0) watchedVideos.index.push(watchedVideos.index.splice(i, 1)[0])
    }
    watchedVideos.entries[vid] = time;
    if (!noSave) GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
  }
 
  function delHistory(index, noSave) {
    delete watchedVideos.entries[watchedVideos.index[index]];
    watchedVideos.index.splice(index, 1);
    if (!noSave) GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
  }
 
  var dc, ut;
  function parseData(s, a, i, j, z) {
    try {
      dc = false;
      s = JSON.parse(s);
      //convert to new format if old format.
      //old: [{id:<strVID>, timestamp:<numDate>}, ...]
      //new: {entries:{<stdVID>:<numDate>, ...}, index:[<strVID>, ...]}
      if (Array.isArray(s) && (!s.length || (("object" === typeof s[0]) && s[0].id && s[0].timestamp))) {
        a = s;
        s = {entries: {}, index: []};
        a.forEach(o => {
          s.entries[o.id] = o.timestamp;
          s.index.push(o.id);
        });
      } else if (("object" !== typeof s) || ("object" !== typeof s.entries) || !Array.isArray(s.index)) return null;
      //reconstruct index if broken
      if (s.index.length !== (a = Object.keys(s.entries)).length) {
        s.index = a.map(k => [k, s.entries[k]]).sort((x, y) => x[1] - y[1]).map(v => v[0]);
        dc = true;
      }
      return s;
    } catch(z) {
      return null;
    }
  }
 
  function parseYouTubeData(s, a) {
    try {
      s = JSON.parse(s);
      //convert to native format if YouTube format.
      //old: [{titleUrl:<strUrl>, time:<strIsoDate>}, ...] (excludes irrelevant properties)
      //new: {entries:{<stdVID>:<numDate>, ...}, index:[<strVID>, ...]}
      if (Array.isArray(s) && (!s.length || (("object" === typeof s[0]) && s[0].titleUrl && s[0].time))) {
        a = s;
        s = {entries: {}, index: []};
        a.forEach((o, m, t) => {
          if (o.titleUrl && (m = o.titleUrl.match(xu))) {
            if (isNaN(t = (new Date(o.time)).getTime())) t = (new Date()).getTime();
            s.entries[m[1]] = t;
            s.index.push(m[1]);
          }
        });
        s.index.reverse();
        return s;
      } else return null;
    } catch(a) {
      return null;
    }
  }
 
  function mergeData(o, a) {
    o.index.forEach(i => {
      if (watchedVideos.entries[i]) {
        if (watchedVideos.entries[i] < o.entries[i]) watchedVideos.entries[i] = o.entries[i];
      } else watchedVideos.entries[i] = o.entries[i];
    });
    a = Object.keys(watchedVideos.entries);
    watchedVideos.index = a.map(k => [k, watchedVideos.entries[k]]).sort((x, y) => x[1] - y[1]).map(v => v[0]);
  }
 
  function getHistory(a, b) {
    a = GM_getValue("watchedVideos");
    if (a === undefined) {
      a = '{"entries": {}, "index": []}';
    } else if ("object" === typeof a) a = JSON.stringify(a);
    if (b = parseData(a)) {
      watchedVideos = b;
      if (dc) b = JSON.stringify(b);
    } else b = JSON.stringify(watchedVideos = {entries: {}, index: []});
    GM_setValue("watchedVideos", b);
  }
 
  function doProcessPage() {
    //get list of watched videos
    getHistory();
 
    //remove old watched video history
    var now = (new Date()).valueOf(), changed, vid;
    if (maxWatchedVideoAge > 0) {
      while (watchedVideos.index.length) {
        if (((now - watchedVideos.entries[watchedVideos.index[0]]) / ageMultiplier) > maxWatchedVideoAge) {
          delHistory(0, false);
          changed = true;
        } else break;
      }
      if (changed) GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
    }
 
    //check and remember current video
    if ((vid = getVideoId(location.href)) && !watched(vid)) addHistory(vid, now);
 
    //mark watched videos
    processAllVideoItems();
  }
 
  function processPage() {
    setTimeout(doProcessPage, Math.floor(contentLoadMarkDelay / 2));
  }
 
  function delayedProcessPage() {
    setTimeout(doProcessPage, contentLoadMarkDelay);
  }
 
  function toggleMarker(ele, i) {
    if (ele) {
      if (ele.href) {
        i = getVideoId(ele.href);
      } else {
        ele = ele.parentNode;
        while (ele) {
          if (ele.tagName === "A") {
            i = getVideoId(ele.href);
            break;
          }
          ele = ele.parentNode;
        }
      }
      if (i) {
        if ((ele = watchedVideos.index.indexOf(i)) >= 0) {
          delHistory(ele);
        } else addHistory(i, (new Date()).valueOf());
        processAllVideoItems();
      }
    }
  }
 
  var rxListUrl = /\/\w+_ajax\?|\/results\?search_query|\/v1\/v1\/(browse|next|search)\?/;
  var xhropen = XMLHttpRequest.prototype.open, xhrsend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function(method, url) {
    this.url_mwyv = url;
    return xhropen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function(method, url) {
    if (rxListUrl.test(this.url_mwyv) && !this.listened_mwyv) {
      this.listened_mwyv = 1;
      this.addEventListener("load", delayedProcessPage);
    }
    return xhrsend.apply(this, arguments);
  };
 
  var fetch_ = unsafeWindow.fetch;
  unsafeWindow.fetch = function(opt) {
    let url = opt.url || opt;
    if (rxListUrl.test(opt.url || opt)) {
      return fetch_.apply(this, arguments).finally(delayedProcessPage);
    } else return fetch_.apply(this, arguments);
  };
 
  addEventListener("DOMContentLoaded", sty => {
    sty = document.createElement("STYLE");
    sty.innerHTML = `
`;
    document.head.appendChild(sty);
    var nde = Node.prototype.dispatchEvent;
    Node.prototype.dispatchEvent = function(ev) {
      if (ev.type === "yt-service-request-completed") {
        clearTimeout(ut);
        ut = setTimeout(doProcessPage, contentLoadMarkDelay / 2)
      }
      return nde.apply(this, arguments)
    };
  });
 
  var lastFocusState = document.hasFocus();
  addEventListener("blur", () => {
    lastFocusState = false;
  });
  addEventListener("focus", () => {
    if (!lastFocusState) processPage();
    lastFocusState = true;
  });
  addEventListener("click", (ev) => {
    if ((markerMouseButtons.indexOf(ev.button) >= 0) && ev.altKey) toggleMarker(ev.target);
  });
 
  if (markerMouseButtons.indexOf(1) >= 0) {
    addEventListener("contextmenu", (ev) => {
      if (ev.altKey) toggleMarker(ev.target);
    });
  }
  if (window["body-container"]) { //old
    addEventListener("spfdone", processPage);
    processPage();
  } else { //new
    var t = 0;
    function pl() {
      clearTimeout(t);
      t = setTimeout(processPage, 300);
    }
    (function init(vm) {
      if (vm = document.getElementById("visibility-monitor")) {
        vm.addEventListener("viewport-load", pl);
      } else setTimeout(init, 100);
    })();
    (function init2(mh) {
      if (mh = document.getElementById("masthead")) {
        mh.addEventListener("yt-rendererstamper-finished", pl);
      } else setTimeout(init2, 100);
    })();
    addEventListener("load", delayedProcessPage);
    addEventListener("spfprocess", delayedProcessPage);
  }
 
  GM_registerMenuCommand("Display History Statistics", () => {
    function sum(r, v) {
      return r + v;
    }
    function avg(arr) {
      return arr && arr.length ? Math.round(arr.reduce(sum, 0) / arr.length) : "(n/a)";
    }
    var pd, pm, py, ld = [], lm = [], ly = [];
    getHistory();
    Object.keys(watchedVideos.entries).forEach((k, t) => {
      t = new Date(watchedVideos.entries[k]);
      if (!pd || (pd !== t.getDate())) {
        ld.push(1);
        pd = t.getDate();
      } else ld[ld.length - 1]++;
      if (!pm || (pm !== (t.getMonth() + 1))) {
        lm.push(1);
        pm = t.getMonth() + 1;
      } else lm[lm.length - 1]++;
      if (!py || (py !== t.getFullYear())) {
        ly.push(1);
        py = t.getFullYear();
      } else ly[ly.length - 1]++;
    });
    if (watchedVideos.index.length) {
      pd = (new Date(watchedVideos.entries[watchedVideos.index[0]])).toLocaleString();
      pm = (new Date(watchedVideos.entries[watchedVideos.index[watchedVideos.index.length - 1]])).toLocaleString();
    } else {
      pd = "(n/a)";
      pm = "(n/a)";
    }
    alert(`\
Number of entries: ${watchedVideos.index.length}
Oldest entry: ${pd}
Newest entry: ${pm}
 
Average viewed videos per day: ${avg(ld)}
Average viewed videos per month: ${avg(lm)}
Average viewed videos per year: ${avg(ly)}\
`);
  });
 
  GM_registerMenuCommand("Backup History Data", (a, b) => {
    document.body.appendChild(a = document.createElement("A")).href = URL.createObjectURL(new Blob([JSON.stringify(watchedVideos)], {type: "application/json"}));
    a.download = `MarkWatchedYouTubeVideos_${(new Date()).toISOString()}.json`;
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  });
 
  GM_registerMenuCommand("Restore History Data", (a, b) => {
    function askRestore(o) {
      if (confirm(`Selected history data file contains ${o.index.length} entries.\n\nRestore from this data?`)) {
        if (mwyvrhm_ujs.checked) {
          mergeData(o);
        } else watchedVideos = o;
        GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
        a.remove();
        doProcessPage();
      }
    }
    if (window.mwyvrh_ujs) return;
    (a = document.createElement("DIV")).id = "mwyvrh_ujs";
      a.innerHTML = `<style>
       #mwyvrh_ujs {display:flex;position:fixed;z-index:99999;left:0;top:0;right:0;bottom:0;margin:0;border:none;padding:0;background:rgb(0,0,0,0.5);color:#000;font-family:sans-serif;font-size:12pt;line-height:12pt;font-weight:normal;cursor:pointer}
       #mwyvrhb_ujs {margin:auto;border:.3rem solid #007;border-radius:.3rem;padding:.5rem .5em;background-color:#fff;cursor:auto}
       #mwyvrht_ujs {margin-bottom:1rem;font-size:14pt;line-height:14pt;font-weight:bold}
       #mwyvrhmc_ujs {margin:.5em 0 1em 0;text-align:center}
       #mwyvrhi_ujs {display:block;margin:1rem auto .5rem auto;overflow:hidden}
       </style>
<div id="mwyvrhb_ujs">
  <div id="mwyvrht_ujs">Mark Watched YouTube Videos</div>
  Please select a file to restore history data from.
  <div id="mwyvrhmc_ujs"><label><input id="mwyvrhm_ujs" type="checkbox" checked /> Merge history data instead of replace.</label></div>
  <input id="mwyvrhi_ujs" type="file" multiple />
</div>`;
    a.onclick = e => {
      (e.target === a) && a.remove();
    };
    (b = a.querySelector("#mwyvrhi_ujs")).onchange = r => {
      r = new FileReader();
      r.onload = (o, t) => {
        if (o = parseData(r = r.result)) { //parse as native format
          if (o.index.length) {
            askRestore(o);
          } else alert("File doesn't contain any history entry.");
        } else if (o = parseYouTubeData(r)) { //parse as YouTube format
          if (o.index.length) {
            askRestore(o);
          } else alert("File doesn't contain any history entry.");
        } else { //parse as URL list
          o = {entries: {}, index: []};
          t = (new Date()).getTime();
          r = r.replace(/\r/g, "").split("\n");
          while (r.length && !r[0].trim()) r.shift();
          if (r.length && xu.test(r[0])) {
            r.forEach(s => {
              if (s = s.match(xu)) {
                o.entries[s[1]] = t;
                o.index.push(s[1]);
              }
            });
            if (o.index.length) {
              askRestore(o);
            } else alert("File doesn't contain any history entry.");
          } else alert("Invalid history data file.");
        }
      };
      r.readAsText(b.files[0]);
    };
    document.documentElement.appendChild(a);
    b.click();
  });
}

function gen_setting_page() {
   let fix_version = '3.1.1';	// as close to header as possible: in hopes to not forget
   if (window.YTEngine2) return; // in-development kill-switch
   if (document.location.pathname == '/error') return;


   // Test storage for saving user-settings
  
   let settings = {}, ls;

   try {
      function lsTest(st, v) {
         st.setItem('__storage_test__', v);
         return st.getItem('__storage_test__') == v;
        
      };
      let _s = window.localStorage;
      if (lsTest(_s, 'qwe') && lsTest(_s, 'rty')) { 
         ls = _s;
         settings = JSON.parse(ls.getItem('__storage__settings__')) || {};
      }
   }
   catch (e) { }
   // delete old settings
   if ("default_player_640" in settings) {
      settings.default_player = settings.default_player_640 ? 3 : 0;
      delete settings.default_player_640;
   }
   if ("reduce_thumbnail" in settings) {
      settings.thumbnail_size = settings.reduce_thumbnail ? 2 : 0;
      delete settings.reduce_thumbnail;
   }
   // set script default values
   if (!("inst_ver" in settings)) settings.inst_ver = fix_version;
   if (!("old_player" in settings)) settings.old_player = false;
   if (!("classic_logo" in settings)) settings.classic_logo = true;
   if (!("smaller_search" in settings)) settings.smaller_search = true;
   if (!("thumb_preview" in settings)) settings.thumb_preview = false;
   if (!("profile_picture" in settings)) settings.profile_picture = true;
   if (!("grey_watched" in settings)) settings.grey_watched = true;
   if (!("blur_watched" in settings)) settings.blur_watched = false;
   if (!("hide_filters" in settings)) settings.hide_filters = true;
   if (!("hide_queue" in settings)) settings.hide_queue = false;
   if (!("default_player" in settings)) settings.default_player = 2;
   if (!("hide_guide" in settings)) settings.hide_guide = false;
   if (!("hide_yt_suggested_blocks" in settings)) settings.hide_yt_suggested_blocks = true;
   if (!("logo_target" in settings)) settings.logo_target = "";
   if (!("thumbnail_size" in settings)) settings.thumbnail_size = 0;
   if (!("thumbnail_size_m" in settings)) settings.thumbnail_size_m = 720;
   if (!("search_thumbnail" in settings)) settings.search_thumbnail = 0;
   if (!("clear_search" in settings)) settings.clear_search = false;
   if (!("channel_top" in settings)) settings.channel_top = 0;
   if (!("video_quality" in settings)) settings.video_quality = 0;
   // catch "settings" page
   console.log('fix settings:', settings);
   if (document.location.pathname == '/7kttube-settings') {

      let back = document.createElement('div');
      back.className = 'ytfixback';
      let e1, e2, e3, e4, plane = document.createElement('div');
      plane.className = 'ytfix';
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = [
         'ytfix_line2 {background: #575757;color: white;padding: 5px;}.ytfix_line span, .ytfix_line checkbox {text-transform: full-size-kana; border-bottom: 1px dotted;}.ytfix{font-size: 13px;position:absolute;left:0;top:0;right:0;padding:3em;background: #eee url(https://i.ibb.co/jgXjyZn/7kttube.png) no-repeat;background-size:570px;background-repeat-y: no-repeat;background-position-x: 300px;background-position-y: 20px;}', '.ytfix_line{margin-bottom: 9px;text-shadow: 1px 0px 0px #b0b0b0;}', '.ytfix_line span,.ytfix_line input,.ytfix_line select{margin-right:0.3em}', 'form{padding-left: 10px;}', '.ytfix_field{font-size:13px; padding:0.2em;border:1px solid #888}', '.ytfix_button{color: #fff;font-weight: bold;background: #ec2828;padding:0.6em;border:1px solid #fff;margin-bottom: 10px;}', '.ytfix_button:hover {background: #525252;cursor: pointer}', '.ytfix_hide{display:none}', '.ytfixback{position:absolute;left:0;top:0;right:0;height:100%;background:#eee}', '.ytfix donate{padding:0;border:1px solid #888}', 'h2{text-decoration: underline; font-variant: all-petite-caps; font-family: YouTube Noto, Roboto, arial, sans-serif !important; font-size:24px;}', 'h5{font-style: italic}', 'paypal{padding-left: 60px; font-size: 13px; font-weight: bold;}'
      ].join('');
      plane.appendChild(style);
    e4 = document.createElement('br')
         e4 = document.createElement('ytfix_line2')
         e4.appendChild(document.createTextNode('7ktTube Video Downloader & 7ktTube old icons script now available!'));
     AddLine(e4);
         e4 = document.createElement('br')
         e4 = document.createElement('span')
         e2 = document.createElement('input');
         e2.type = 'button';
         e2.className = 'ytfix_button';
         e2.value = 'DOWNLOAD PAGE';
         e2.addEventListener('click', () => location.href = 'https://7kttube.tk/downloads');
         e3 = document.createElement('input');
         AddLine(e2);
      e1 = document.createElement('h2');
      e1.appendChild(document.createTextNode('7ktTube²⁰¹⁶ REDUX settings'));
      AddLine(e1);

      if (!ls) {
         e1 = document.createElement('span');
         e1.style = 'color:red';
         e1.appendChild(document.createTextNode('Cannot edit settings: no access to local storage.'));
         AddLine(e1);
         e1 = document.createElement('span');
         e1.appendChild(document.createTextNode('If you are using Firefox, allow cookies for this site.'));
         AddLine(e1);
      }
     
      else {
         let ess = {};

         function MakeDesc(desc) {
            let e = document.createElement('span');
            e.appendChild(document.createTextNode(desc));
            return e;
         }

         function MakeBoolElement(nm) {
            let e = document.createElement('input');
            e.type = 'checkbox';
            e.checked = settings[nm];
            ess[nm] = e;
            return e;
         }

         function MakeListElement(nm, opts) {
            let e = document.createElement('select');
            e.className = 'ytfix_field';
            ess[nm] = e;
            for (let i = 0, L = opts.length; i < L; ++i) {
               let o = document.createElement('option');
               o.appendChild(document.createTextNode(opts[i]));
               //if (i == val)
               //  o.setAttribute ('selected', '');
               e.appendChild(o);
            }
            e.selectedIndex = settings[nm];
            return e;
         }
var delayInMilliseconds = 0; //1 second

setTimeout(function() {
window.parent.document.title = "𝟳𝗸𝘁𝗧𝘂𝗯𝗲 𝗥𝗘𝗗𝗨𝗫 : sᴇᴛᴛɪɴɢs";
}, delayInMilliseconds);
         function MakeTextElement(nm) {
            let e = document.createElement('input');
            e.className = 'ytfix_field';
            e.value = settings[nm];
            ess[nm] = e;
            return e;
         }
         AddLine(MakeBoolElement("old_player"), MakeDesc("Use YouTube's old player(smaller buttons and menu)"));
         AddLine(MakeBoolElement("classic_logo"), MakeDesc("Use YouTube's classic logo"));
         AddLine(MakeBoolElement("search_center"), MakeDesc('Align searchbar to the left '));
         AddLine(MakeBoolElement("hide_guide"), MakeDesc('Auto-close navigation-bar to compact mode when a page opens'));
         AddLine(MakeBoolElement("profile_picture"), MakeDesc("Make profile pictures square again"));
         AddLine(MakeBoolElement("thumb_preview"), MakeDesc("Disable video previews when mouse-over thumbnails"));
         AddLine(MakeBoolElement("hide_queue"), MakeDesc("Hide queue button when when mouse-over thumbnails"));
         AddLine(MakeBoolElement("hide_filters"), MakeDesc("Hide filter bars on home & watch-page + hover-overlays on video thumbnails"));
         AddLine(MakeBoolElement("hide_yt_suggested_blocks"), MakeDesc('Hide suggestion blocks on main page (recommended playlists, latest posts, etc.)'));
         AddLine(MakeBoolElement("clear_search"), MakeDesc("Hide suggestion blocks on search page (for you, people also watched, etc.)"));
         AddLine(MakeBoolElement("grey_watched"), MakeDesc("Add grayscale to already watched video thumbnails and make them less visible"));
         AddLine(MakeBoolElement("blur_watched"), MakeDesc("+ Add blur to greyscale thumbnails"));

         let tsm = MakeTextElement("thumbnail_size_m");
         tsm.className = settings.thumbnail_size == 5 ? 'ytfix_field' : 'ytfix_hide';
         let tsi = MakeListElement("thumbnail_size", ['default', '180px', '240px', '360px', '480px', 'manual']);
         tsi.addEventListener('change', function () {
            ess.thumbnail_size_m.className = ess.thumbnail_size.selectedIndex == 5 ? 'ytfix_field' : 'ytfix_hide';
         });
         AddLine(MakeDesc('Set thumbnails width for front page'), tsi, tsm);
         AddLine(MakeDesc('Set thumbnails width for search page'), MakeListElement("search_thumbnail", ['default', '240px', '360px']));
         AddLine(MakeDesc('Set video player size:'), MakeListElement("default_player", ['Flexible', '640x360px', '853x480px', '1280x720px']));
         AddLine(MakeDesc('Force video quality'), MakeListElement('video_quality', ['Auto (default)', '144p', '240p', '360p', '480p', '720p', '1080p (HD)', '1440p (HD)', '2160p (4K)']));
         AddLine(MakeDesc("Modify channels' pages behaviour"), MakeListElement('channel_top', ['default', 'hide banner with scrolling', 'hide banner on load']));
         AddLine(MakeDesc("Change YT logo target to https://www.youtube.com/..."), MakeTextElement("logo_target"));
         e1 = document.createElement('input');
         e1.type = 'button';
         e1.className = 'ytfix_button';
         e1.value = 'Save settings and close tab';
         e1.addEventListener('click', function () {
            settings.old_player = ess.old_player.checked;
            settings.classic_logo = ess.classic_logo.checked;
            settings.search_center = ess.search_center.checked;
            settings.thumb_preview = ess.thumb_preview.checked;
            settings.profile_picture = ess.profile_picture.checked;
            settings.grey_watched = ess.grey_watched.checked;
            settings.blur_watched = ess.blur_watched.checked;
            settings.hide_filters = ess.hide_filters.checked;
            settings.hide_queue = ess.hide_queue.checked;
            settings.hide_guide = ess.hide_guide.checked;
            settings.thumbnail_size = ess.thumbnail_size.selectedIndex;
            if (settings.thumbnail_size == 5) {
               let v = ess.thumbnail_size_m.value;
               if (!/^\d+$/.test(v)) return alert('Error: invalid value for thumbnails size');
               settings.thumbnail_size_m = parseInt(v);
            }
            settings.search_thumbnail = ess.search_thumbnail.selectedIndex;
            settings.default_player = ess.default_player.selectedIndex;
            settings.hide_yt_suggested_blocks = ess.hide_yt_suggested_blocks.checked;
            settings.channel_top = ess.channel_top.selectedIndex;
            settings.logo_target = ess.logo_target.value;
            settings.clear_search = ess.clear_search.checked;
            settings.video_quality = ess.video_quality.selectedIndex;
            ls.setItem('__storage__settings__', JSON.stringify(settings));
            alert('Settings saved');
            window.close();
         });
         e2 = document.createElement('input');
         e2.type = 'button';
         e2.className = 'ytfix_button';
         e2.value = 'Close tab & Return to YouTube without saving';
         e2.addEventListener('click', () => window.close());
         e3 = document.createElement('input');
         e3.type = 'button';
         e3.className = 'ytfix_button';
         e3.value = 'DONATE PayPal';
         e3.addEventListener('click', () => location.href = 'https://www.paypal.com/donate?hosted_button_id=2EJR4DLTR4Y7Q');
         AddLine(e1, e2);
         e4 = document.createElement('b');
         e4.appendChild(document.createElement("br"));
         e4.appendChild(document.createTextNode('Do you like this script?'));
         AddLine(e4);
         e4 = document.createElement('h5');
         e4.appendChild(document.createTextNode('Please donate to support this project & the developer!'));

         AddLine(e4);
         e4 = document.createElement('paypal');
         e4.appendChild(document.createTextNode('PayPal'));
         AddLine(e4);
         e4.innerHTML += "<form action='https://www.paypal.com/donate' method='post' target='_top'><input type='hidden' name='hosted_button_id' value='2EJR4DLTR4Y7Q' /><input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' border='0' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Donate with PayPal button' /><img alt='' border='0' src='https://www.paypal.com/en_US/i/scr/pixel.gif' width='1' height='1' /></form>";
      }

      let int = setInterval(function () {
         if (!document.body) return;
         clearInterval(int);
         document.body.appendChild(back);
         document.body.appendChild(plane);
      }, 1);

      function AddLine() {
         let q = document.createElement('div');
         q.className = 'ytfix_line';
         for (let i = 0, L = arguments.length; i < L; ++i) q.appendChild(arguments[i]);
         plane.appendChild(q);
         return q;
      }
   }
   // apply settings
  let styles = [], intervals = [];

   function addInterval(period, func, params) {
      if (!period) period = 1;

      intervals.push({
         cnt: period,
         period: period,
         call: func,
         params: params || []
      });
   }
   if (settings.hide_guide)
      addInterval(1, function (info) {
         if (info.act == 0) { // observe location change
            let url = document.location.toString();
            if (url != info.url) info.act = 1;
         }
         if (info.act == 1) { // wait for sorp page load completion
            let Q = document.querySelector('yt-page-navigation-progress');
            if (!Q) return;
            if (Q.hasAttribute('hidden')) info.act = 2;
         }
         if (info.act == 2) { // wait for button and press it if necessary
            let guide_button = document.getElementById('guide-button');
            if (!guide_button) return;

            let tmp = guide_button.querySelector('button');
            if (!tmp || !tmp.hasAttribute('aria-pressed')) return;

            if (tmp.attributes['aria-pressed'].value == 'true') guide_button.click();
            else {
               info.url = document.location.toString();
               info.act = 0;
            }
         }
      }, [{ act: 2 }]);
   // old engine:
   //if (document.getElementById ('appbar-guide-button'))
   //  document.documentElement.classList.remove ('show-guide');
    /*player*/

   if (settings.old_player) {
      styles.push(`
      .ytp-chrome-bottom {
          height:36px!important
      }
      .ytp-big-mode .ytp-chrome-bottom {
          height:48px!important
      }
      .ytp-progress-bar-container, .ytp-exp-bigger-button-like-mobile.ytp-small-mode .ytp-progress-bar-container {
          bottom:35px!important
      }
      .ytp-big-mode .ytp-progress-bar-container {
          bottom:44px!important
      }
      .ytp-button[data-tooltip-target-id="ytp-autonav-toggle-button"], .ytp-miniplayer-button {
          display:none!important
      }
      .ytp-chrome-controls .ytp-button {
          height:36px!important
      }
      .ytp-big-mode .ytp-chrome-controls .ytp-button {
          height:54px!important
      }
      .ytp-time-display, .ytp-exp-bigger-button-like-mobile.ytp-small-mode .ytp-time-display {
          line-height:35px!important
      }
      .ytp-big-mode .ytp-time-display {
          line-height:54px!important
      }
          /*volume*/
      .ytp-volume-slider-handle {
          width: 4px!important;
          height: 13px!important;
          background: #fff;
          border-radius:0!important;
          margin-top:-8px!important
      }
      .ytp-big-mode .ytp-volume-slider-handle {
          width:6px!important;
          height:20px!important;
          margin-top:-10px!important
      }
      .ytp-volume-slider-handle::before {
          background:#f12b24!important
      }
      .ytp-volume-slider-handle::before, .ytp-volume-slider-handle::after {
          width:58px!important
      }
      .ytp-big-mode .ytp-volume-slider-handle::before, .ytp-big-mode .ytp-volume-slider-handle::after {
          height:5px!important
      }
      .ytp-big-mode .ytp-volume-slider-handle::before {
          width:86px!important
      }
      .ytp-volume-slider-active .ytp-volume-panel {
          width:44px!important
      }
      .ytp-big-mode .ytp-volume-slider-active .ytp-volume-panel {
          width:66px!important
      }
      /*settings*/
      .ytp-popup {
          background: rgba(28,28,28,0.8)!important;
          text-shadow: 0 0 2px rgb(0 0 0 / 50%)!important;
          border-radius: 0!important
      }
      .ytp-settings-menu {
          bottom:40px!important
      }
      .ytp-big-mode .ytp-settings-menu {
          bottom:50px!important
      }
      .ytp-panel-menu {
          padding:0!important;
          font-weight:normal!important
      }
      .ytp-settings-menu, .ytp-panel-menu {
          color:#bbb!important
      }
      .ytp-menuitem-icon {
          display:none
      }
      .ytp-panel-header {
          padding:0!important
      }
      .ytp-menuitem-label {
          padding:0 10px!Important;
          font-size:100%!important
      }
      .ytp-menuitem, .ytp-panel-header {
          height:27px!important
      }
      .ytp-big-mode .ytp-menuitem, .ytp-big-mode .ytp-panel-header {
          height:37px!important
      }
      .ytp-menuitem[aria-haspopup=true] .ytp-menuitem-content {
          padding-left:0!important
      }
      .ytp-menuitem[role=menuitemradio] .ytp-menuitem-label {
          padding-left:35px!important
      }
      .ytp-big-mode .ytp-menuitem[role=menuitemradio] .ytp-menuitem-label {
          padding-left:45px!important
      }
      .ytp-panel {
          min-width:100px!important
      }
      .ytp-big-mode .ytp-panel {
          min-width:115px!important
      }
          /*slider handle*/
      .ytp-slider-handle {
          border-radius:0!important;
          width:6px!important
      }
      .ytp-slider-handle:before {
          width:150px!important
      }
      .ytp-slider-handle:before {
          left:-150px!important;
          background-color:#f12b24!important
      }
      .ytp-slider-handle:after {
          left:0!important
      }`);
   }
   if (settings.thumb_preview) {
      styles.push(`
      #avatar-link.ytd-rich-grid-media, #avatar-link.ytd-rich-grid-video-renderer, #avatar.ytd-c4-tabbed-header-renderer, #masthead-ad, #offer-module, #play.fade-in.ytd-moving-thumbnail-renderer, #play.show.ytd-moving-thumbnail-renderer, #selectionBar.paper-tabs, #thumbnail.ytd-moving-thumbnail-renderer, .not-visible.paper-tabs, .ytp-miniplayer-button, [id*=skeleton], paper-ripple, ytd-compact-movie-renderer.ytd-watch-next-secondary-results-renderer, ytd-compact-promoted-item-renderer, ytd-search ytd-video-renderer[use-prominent-thumbs] #channel-info.ytd-video-renderer>a>yt-img-shadow.ytd-video-renderer {
         display: none!important
      }

      #details.ytd-rich-grid-video-renderer {
         cursor: auto!important;
         pointer-events: none!important
      }

      #details.ytd-rich-grid-video-renderer *>a, #details.ytd-rich-grid-video-renderer *>button.yt-icon-button {
         cursor: pointer!important;
         pointer-events: initial!important
      }`);
   }
   if (settings.classic_logo) {
      styles.push(`
      ytd-masthead #logo-icon-container, #contentContainer #logo-icon-container, ytd-topbar-logo-renderer>#logo {
         content:var(--logo-light-header) !important;
         width: 71px !important;
         height: 30px !important;
         padding:0px 15px 0px!important;
      }

      ytd-masthead[dark] #logo-icon-container, html[dark] #contentContainer #logo-icon-container, ytd-masthead[dark] ytd-topbar-logo-renderer>#logo, html[dark] ytd-topbar-logo-renderer>#logo {
         content:var(--logo-dark-header) !important;
         width: 71px !important;
         height: 30px !important;
      }

      #start>#masthead-logo, #masthead>#masthead-logo {
         content:var(--logo-dark-header) !important;
         width: 71px !important;
         height: 30px !important;
      }

      html[dark] #start>#masthead-logo, html[dark] #masthead>#masthead-logo {
         content:var(--logo-dark-header) !important;
         width: 71px !important;
         height: 30px !important;
      }

      html:not([dark]) ytd-guide-entry-renderer[active]>#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer, html:not([dark]) ytd-guide-entry-renderer[active]>#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover {
         background-color: #cc181e !important
      }

      #country-code.ytd-topbar-logo-renderer {
         padding: 0px!important;
         margin: 0px -10px 0px !important;   
      }
      
      html:not([dark]) #guide-section-title.ytd-guide-section-renderer {
         color: #cc181e!important;
      }   
      ytd-mini-guide-entry-renderer[is-active] .guide-icon.ytd-mini-guide-entry-renderer {
      color: #cc181e!important;
      } 
      html:not([dark]) ytd-guide-collapsible-section-entry-renderer.ytd-guide-section-renderer:not(:first-child):before {
      color: #cc181e!important; 
      }`);
   }
   if (settings.profile_picture) {
      styles.push(`
      #thumbnail.ytd-profile-column-user-info-renderer,
      yt-img-shadow.ytd-topbar-menu-button-renderer,
      yt-img-shadow.ytd-channel-renderer,
      #avatar.ytd-active-account-header-renderer,
      #avatar.ytd-video-owner-renderer,
      #avatar.ytd-c4-tabbed-header-renderer,
      yt-img-shadow.ytd-channel-avatar-editor,
      yt-img-shadow.ytd-guide-entry-renderer,
      #author-thumbnail.ytd-commentbox,
      #author-thumbnail.ytd-comment-renderer yt-img-shadow.ytd-comment-renderer,
      #author-thumbnail.ytd-comment-simplebox-renderer,
      #avatar.ytd-video-owner-renderer, .ytd-comment-action-buttons-renderer:nth-of-type(2),
      #hearted-thumbnail.ytd-creator-heart-renderer,
      .thumbnail.ytd-notification-renderer,
      ytd-commentbox[is-reply][is-backstage-comment] #author-thumbnail.ytd-commentbox, #author-thumbnail.ytd-backstage-post-renderer yt-img-shadow.ytd-backstage-post-renderer {
         border-radius: 0%!important;
      }`);
   }
   if (settings.hide_filters) {
      styles.push(`
      ytd-thumbnail-overlay-endorsement-renderer {
         visibility: hidden !important;
      }

      #header.ytd-rich-grid-renderer {
         display: none!important
      }

      yt-related-chip-cloud-renderer {
         display: none!important
      }`);
   }
   if (settings.hide_queue) {
      styles.push(`
      .ytd-thumbnail[top-right-overlay] ~ .ytd-thumbnail[top-right-overlay] {
         display:none;
      } `);
   }
     if (settings.search_center) {
      styles.push(`
      #center.ytd-masthead {
         margin-right: auto;    

      } `);
   }
   if (settings.blur_watched) {
      styles.push(`
      .watched yt-img-shadow.ytd-thumbnail {
         transition: ease-in;
         transition-duration: 0.2s;
         filter: blur(2.2px) grayscale(1)!important;
         }
         .watched yt-img-shadow.ytd-thumbnail:hover {
         transition: ease-out;
         transition-duration: 0.7s;
         filter: blur(0px) grayscale(0)!important;
      }`);
   }
   if (settings.grey_watched) {
      styles.push(`
      .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail {
         transition: ease-in;
         transition-duration: 0.2s;
         opacity: 0.4 !important;
         filter: grayscale(1);
      }

      .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail:hover {
         transition: ease-out;
         transition-duration: 0.7s;
         opacity: 1.0 !important;
         filter: grayscale(0);
      }`);
   }
   if (settings.thumbnail_size)
      styles.push(`ytd-rich-item-renderer {
         width: ${[0, 180, 240, 360, 480, settings.thumbnail_size_m][settings.thumbnail_size]}px !important
      }`);
   if (settings.hide_yt_suggested_blocks)
      styles.push(`div#contents.ytd-rich-grid-renderer ytd-rich-section-renderer {
         display: none!important
      }`);

   if (settings.search_thumbnail) {
      let sz = [1, 240, 360][settings.search_thumbnail] + 'px !important';
      // min-width defaults to 240px, max-width defaults to 360px
      // sizes for: videos, playlists, channels, mixes
      styles.push(`ytd-video-renderer[use-prominent-thumbs] ytd-thumbnail.ytd-video-renderer, ytd-playlist-renderer[use-prominent-thumbs] ytd-playlist-thumbnail.ytd-playlist-renderer, ytd-channel-renderer[use-prominent-thumbs] #avatar-section.ytd-channel-renderer, ytd-radio-renderer[use-prominent-thumbs] ytd-thumbnail.ytd-radio-renderer {
         min-width: ${sz}!important;
         max-width: ${sz}important!;
      }`);
   }
   if (settings.clear_search) {
      styles.push(`
      ytd-two-column-search-results-renderer ytd-shelf-renderer.style-scope.ytd-item-section-renderer, ytd-two-column-search-results-renderer ytd-horizontal-card-list-renderer.style-scope.ytd-item-section-renderer {
         display: none!important
      }`);
   }

   const sizes = [undefined, { w: 640, h: 360 }, { w: 854, h: 480 }, { w: 1280, h: 720 }];
   let size_norm = sizes[settings.default_player];
   if (size_norm) {
      styles.push(`
      #primary.ytd-watch-flexy, #player-container-outer {
         --ytd-watch-flexy-min-player-width: ${size_norm.h}px !important;
         min-width: --ytd-watch-flexy-min-player-width: 100% !important;
         max-width: ${size_norm.w}px !important
      }

      ytd-watch-flexy[flexy_][is-two-columns_][is-extra-wide-video_] #primary.ytd-watch-flexy, ytd-watch-flexy[flexy_][is-two-columns_][is-four-three-to-sixteen-nine-video_] #primary.ytd-watch-flexy {
         min-width: ${size_norm.w}px!important
      }

      ytd-watch-flexy[flexy_][flexy-large-window_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][transcript-opened_][is-two-columns_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][playlist][is-two-columns_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][should-stamp-chat][is-two-columns_]:not([is-extra-wide-video_]) {
         --ytd-watch-flexy-min-player-height: ${size_norm.h}px !important;`);

      addInterval(1, function (sn, st) {
         let eq = document.getElementsByTagName("ytd-watch-flexy");
         if (!eq.length) return;
         let s = eq[0].hasAttribute('size_norm') ? st : sn;
         if (!s) return;
         let ep = document.getElementById("movie_player");
         if (ep && ep.setInternalSize && ep.isFullscreen && ep.getPlayerSize && !ep.isFullscreen() && ep.getPlayerSize()
            .width != s[0])
            ep.setInternalSize(s[0], s[1]);
      }, [size_norm]);
   }
   if (settings.logo_target) {
      let X = settings.logo_target;
      if (X[0] != '/') X = '/' + X;
      X = document.location.origin + X;
      addInterval(1, function (url) {
         let l = document.querySelectorAll('a#logo');
         for (let i = l.length; --i >= 0;) {
            let Q = l[i];
            let D = Q.data;
            if (D && D.commandMetadata && Q.href != url) {
               Q.href = url;
               D.commandMetadata.webCommandMetadata.url = url;
            }
         }
      }, [X]);
   }
   if (settings.channel_top)
      styles.push('app-header#header.style-scope.ytd-c4-tabbed-header-renderer{transform:none!important;position:absolute;left:0px!important;top:0px;margin-top:0px}');
   if (settings.channel_top > 1) {
      styles.push('div#contentContainer.style-scope.app-header-layout{padding-top:148px!important}');
      styles.push('div#contentContainer.style-scope.app-header{height:148px!important}');
      styles.push('div.banner-visible-area.style-scope.ytd-c4-tabbed-header-renderer{display:none!important}');
   }
   if (settings.video_quality) {
      const qv = ['', 'tiny', 'small', 'medium', 'large', 'hd720', 'hd1080', 'hd1440', 'hd2160'];
      function IsQualityAvailable(qq, q) {
         for (let i = qq.length; --i >= 0;) if (q == qq[i]) return true;
         return false;
      }
      function UpdateVideoQuality(st) {
         let ep = document.getElementById("movie_player");
         if (!ep || !ep.getPreferredQuality || !ep.getAvailableQualityLevels || !ep.setPlaybackQualityRange || !ep.getVideoData || ep.getPreferredQuality() != 'auto') return;
         let vid = ep.getVideoData().video_id;
         if (st.fail == vid) return;	// last time on this video we've issues

         let qq = ep.getAvailableQualityLevels();
         if (!qq || !qq.length) return;
         let det = settings.video_quality;
         while (det < qv.length && !IsQualityAvailable(qq, qv[det])) ++det;
         if (det == qv.length) {
            console.log('Unknown video qualities in list: ', qq);
            st.fail = vid;
            return;
         }
         ep.setPlaybackQualityRange(qv[det], qv[det]);
      };
      addInterval(1, UpdateVideoQuality, [{}]);
   }
  
   // "settings" button
  
     let settingsButtonMark;

     function createSettingsButton() {
      if (settingsButtonMark && settingsButtonMark.parentNode) return;
      let toolBar = document.getElementsByTagName('ytd-topbar-menu-button-renderer');
      let _1st = toolBar[0];
      if (!_1st) return;
      toolBar = _1st.parentNode;
      let sb = document.createElement('ytd-topbar-menu-button-renderer');
      sb.className = 'style-scope ytd-masthead style-default';
      sb.setAttribute('use-keyboard-focused', '');
      sb.setAttribute('is-icon-button', '');
      sb.setAttribute('has-no-text', '');
      toolBar.insertBefore(sb, toolBar.childNodes[0]);
      let mark = document.createElement('fix-settings-mark');
      mark.style = 'display:none';
      toolBar.insertBefore(mark, sb); // must be added to parent node of buttons in order to Polymer dropped it on soft reload
      let icb = document.createElement('yt-icon-button');
      icb.id = 'button';
      icb.className = 'style-scope ytd-topbar-menu-button-renderer style-default';
      let aa = document.createElement('a');
      aa.className = 'yt-simple-endpoint style-scope ytd-topbar-menu-button-renderer';
      aa.setAttribute('tabindex', '-1');
      aa.href = '/7kttube-settings';
      aa.target = '_blank';
      aa.appendChild(icb);
      sb.getElementsByTagName('div')[0].appendChild(aa); // created by YT scripts
      let bb = icb.getElementsByTagName('button')[0]; // created by YT scripts
      bb.setAttribute('aria-label', 'fixes settings');
      let ic = document.createElement('yt-icon');
      ic.className = 'style-scope ytd-topbar-menu-button-renderer';
      bb.appendChild(ic);
      let gpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      gpath.className.baseVal = 'style-scope yt-icon';
      gpath.setAttribute('d', 'M1 20l6-6h2l11-11v-1l2-1 1 1-1 2h-1l-11 11v2l-6 6h-1l-2-2zM13 15l2-2 8 8v1l-1 1h-1zM9 11l2-2-2-2 1.5-3-3-3h-2l3 3-1.5 3-3 1.5-3-3v2l3 3 3-1.5z');
      let svgg = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      svgg.className.baseVal = 'style-scope yt-icon';
      svgg.appendChild(gpath);
      let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.className.baseVal = 'style-scope yt-icon';
      svg.setAttributeNS(null, 'viewBox', '0 0 24 24');
      svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false');
      svg.setAttribute('style', 'pointer-events: none; display: block; width: 100%; height: 100%;');
      svg.appendChild(svgg);
      ic.appendChild(svg); // YT clears *ic
      settingsButtonMark = mark;
   }
   addInterval(1, createSettingsButton, []);

   GM_addStyle(styles.join(''));
   // intervals
   setInterval(function () {
      for (let i = intervals.length; --i >= 0;) {
         let Q = intervals[i];
         if (--Q.cnt > 0) continue;
         Q.call.apply(this, Q.params);
         Q.cnt = Q.period;
      }
   }, 1000);
   console.log('Fixed loaded');
}

function patch_css() {
   // patch css
   GM_addStyle(`
   f:root {
      --dgyt-bg-color-dark: rgb(15, 15, 15);
      --dgyt-bg-color-medium: rgb(33, 33, 33);
      --dgyt-cell-bg-color: rgba(0, 0, 0, 0.2);
      --dgyt-menu-bg-color: rgba(21, 21, 21, 0.8);
      --dgyt-button-color: rgba(255, 255, 255, 0.1);
      --dgyt-button-color-hover: rgba(255, 255, 255, 0.22);
      --dgyt-border-color: rgba(0, 0, 0, 0.2);
      --dgyt-text-main: rgb(192, 192, 192);
      --dgyt-text-secondary: rgb(142, 142, 142);
      --dgyt-text-highlight: rgb(255, 255, 255);
      --dgyt-color-red: rgb(204, 24, 30);
      --dgyt-color-blue: rgb(22, 122, 198);
      --dgyt-color-yellow: rgb(245, 213, 98);
      --dgyt-color-orange: rgb(255, 85, 0);
      --dgyt-color-purple: rgb(156, 39, 176);
      --dgyt-color-green: rgb(76, 175, 80);
   }

   :root {
      --yt-link-letter-spacing: 0!important;
      --ytd-user-comment_-_letter-spacing: 0!important;
   }

   tp-yt-paper-tabs.ytd-c4-tabbed-header-renderer {
      letter-spacing: 0
   }

   html:not(.style-scope)[typography-spacing] {
      --yt-subheadline-letter-spacing: 0;
      --yt-subheadline-link-letter-spacing: 0;
      --yt-link-letter-spacing: .25px;
      --yt-thumbnail-attribution-letter-spacing: 0;
      --yt-user-comment-letter-spacing: 0;
      --yt-guide-highlight-letter-spacing: 0;
      --yt-caption-letter-spacing: 0;
      --yt-badge-letter-spacing: 0;
      --yt-tab-system-letter-spacing: 0;
     
   }
   .html5-video-player {
      background-color: #000!important; 
   }
   
   #avatar-link.ytd-rich-grid-media {
      height: 0px!important;
      margin-top: 0px!important;
      margin-right: 0px!important;
      visibility: hidden!important;
      position: fixed!important;
   }

   yt-live-chat-message-input-renderer {
      margin-bottom: -1px;
   }

   #chat.ytd-watch-flexy {
      margin-bottom: var(--ytd-margin-3x)!important;
      margin-left: -14px;
      margin-right: 14px;
   }

   #chat-container.ytd-watch-flexy:not([chat-collapsed]) {
      width: var(--ytd-watch-flexy-chat-max-width);
      margin-left: -14px;
      margin-right: 14px;
      margin-bottom: 10px;
   }

   ytd-watch-flexy[flexy] #chat.ytd-watch-flexy:not([collapsed]).ytd-watch-flexy, ytd-watch-flexy[flexy] #chat-container.ytd-watch-flexy:not([chat-collapsed]).ytd-watch-flexy {
      min-height: 591px !important;
   }

   ytd-watch-flexy[flexy][theater] #columns.ytd-watch-flexy {
      min-width: 100%!important
   }

   ytd-watch-flexy[is-two-columns_][theater] #columns.ytd-watch-flexy {
      min-width: 100%;
   }

   ytd-watch-flexy[flexy][is-two-columns_][theater] #primary.ytd-watch-flexy, ytd-watch-flexy[flexy][is-two-columns_] #primary.ytd-watch-flexy {
      justify-content: flex-start;
      max-width: var(--ytd-watch-flexy-max-player-width);
      min-width: 80%;
   }

   ytd-watch-flexy[flexy][is-two-columns_][theater][is-four-three-to-sixteen-nine-video_] #primary.ytd-watch-flexy {
      justify-content: flex-start;
      min-width: 70%;
   }

   yt-icon.style-scope.ytd-badge-supported-renderer, ytd-author-comment-badge-renderer:not([m]) #icon.ytd-author-comment-badge-renderer {
      color: transparent;
      fill: transparent!important;
      background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-2x-vflbdpYum.webp) -146px -556px;
      height: 9px;
      margin-bottom: 0px;
   }

   yt-icon.style-scope.ytd-badge-supported-renderer:hover, ytd-author-comment-badge-renderer #icon.ytd-author-comment-badge-renderer:hover {
      background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-2x-vflbdpYum.webp) -732px -646px
   }

   #contents.ytd-rich-metadata-row-renderer *.ytd-rich-metadata-row-renderer {
      
      visibility: hidden!important;
      height: 0px
   }

   a {
      color: #167ac6
   }

   a:visited {
      color: #167ac6
   }

   ytd-banner-promo-renderer.banner-promo-style-type-masthead-v2 .ytd-banner-promo-renderer-background.ytd-banner-promo-renderer {
      visibility: hidden;
      height: 0px!important
   }

   ytd-action-companion-ad-renderer {
      display: none!important
   }

   #expander.ytd-comment-renderer>paper-button.ytd-expander {
      text-align: left;
   }

   .title.style-scope.ytd-video-primary-info-renderer yt-formatted-string.ytd-video-primary-info-renderer {
      font-size: 20px;
   }

   ytd-toggle-button-renderer {
      font-weight: normal !important;
   }

   #like-bar.ytd-sentiment-bar-renderer {
      background: #167ac6 !important;
   }

   author-text.yt-simple-endpoint.ytd-comment-renderer {
      border-radius: 0px!important
   }

   ytd-author-comment-badge-renderer {
      border-radius: 0px!important;
   }

   html:not([dark]) ytd-author-comment-badge-renderer {
      --ytd-author-comment-badge-name-color: #187ac6 ;
      color: #187ac6 ;
   }

   html:not([dark]) #name.ytd-author-comment-badge-renderer {
      color: #187ac6;
   }
   ytd-author-comment-badge-renderer {
      --ytd-author-comment-badge-name-color: #fff;
      color: #fff;
   }

    #name.ytd-author-comment-badge-renderer {
      color: #fff;
   }

   html:not([dark]) .more-button.ytd-comment-replies-renderer, html:not([dark]) .less-button.ytd-comment-replies-renderer {
      color: #2793e6 !important;
   }

   ytd-watch-flexy:not([theater]):not([fullscreen]) #primary.ytd-watch-flexy, ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.ytd-watch-flexy {
      padding-top: 12px !important;
   }

   ytd-expander.ytd-video-secondary-info-renderer {
      font-size: 13px !important;
      --ytd-expander-collapsed-height: 66px!important;
   }

   html:not([dark]) #vote-count-middle.ytd-comment-action-buttons-renderer {
      color: #128ee9 !important;
   }

   html[dark] #vote-count-middle.ytd-comment-action-buttons-renderer {
      color: #3ea6ff !important;
   }

   .content.ytd-metadata-row-header-renderer {
      display: none !important;
   }

   ytd-metadata-row-renderer {
      margin: 0 !important;
   }

   #title.ytd-metadata-row-renderer {
      font-size: 11px !important;
      margin: 0 !important;
   }

   .content.ytd-metadata-row-renderer {
      font-size: 11px !important;
      font-weight: normal !important;
   }

   #primary-inner.ytd-watch-flexy #title.ytd-rich-metadata-renderer, #primary-inner.ytd-watch-flexy #subtitle.ytd-rich-metadata-renderer, #primary-inner.ytd-watch-flexy #call-to-action.ytd-rich-metadata-renderer {
      font-size: 11px !important;
      line-height: 13px !important;
      margin-top: 0px !important;
   }

   #primary-inner.ytd-watch-flexy #call-to-action.ytd-rich-metadata-renderer {
      align-items: normal !important;
   }

   #primary-inner.ytd-watch-flexy #call-to-action.ytd-rich-metadata-renderer yt-icon {
      display: none;
   }

   #primary-inner.ytd-watch-flexy ytd-thumbnail.ytd-rich-metadata-renderer {
      max-width: 40px !important;
      max-height: 56px !important;
      margin: 0px 10px 0 0 !important;
   }

   #primary-inner.ytd-watch-flexy ytd-rich-metadata-renderer {
      max-width: min-content !important;
      min-width: max-content !important;
   }

   #always-shown ytd-rich-metadata-renderer {
      background: none;
   }

   ytd-watch-flexy[is-two-columns_][fullscreen] #columns.ytd-watch-flexy {
      min-width: 100%
   }

   ytd-watch-flexy[flexy][is-two-columns_][fullscreen] #primary.ytd-watch-flexy, ytd-watch-flexy[flexy][is-two-columns_] #primary.ytd-watch-flexy {
      justify-content: flex-start;
      max-width: var(--ytd-watch-flexy-max-player-width);
      min-width: 80%;
   }

   ytd-watch-flexy[flexy][is-two-columns_][fullscreen][is-four-three-to-sixteen-nine-video_] #primary.ytd-watch-flexy {
      justify-content: flex-start;
      min-width: 70%;
   }

   ytd-watch-flexy[flexy][fullscreen] #columns.ytd-watch-flexy {
      min-width: 100%!important
   }

   html {
      font-family: 'YouTube Noto', Roboto, arial, sans-serif!important
   }

   html:not(.style-scope) {
      --paper-font-common-base_-_font-family: 'YouTube Noto', Roboto, arial, sans-serif !important;
      --paper-font-body1_-_font-size: 13px !important;
      --paper-font-body2_-_font-size: 13px !important;
      --paper-font-caption_-_font-size: 12px !important;
      --paper-font-menu_-_font-size: 13px !important;
      --paper-font-button_-_font-size: 13px !important;
      --ytd-thumbnail-attribution_-_font-size: 11px !important;
      --ytd-user-comment_-_font-size: 13px !important;
      --ytd-caption_-_font-size: 11px !important;
      --ytd-tab-system_-_font-size: 13px !important;
      --ytd-comment-link_-_font-size: 13px !important;
      --ytd-subheadline_-_font-size: 13px !important;
      --ytd-grid-video-title_-_font-size: 13px !important;
      --paper-font-body1_-_font-weight: 500 !important;
      --ytd-thumbnail-attribution_-_font-weight: 400 !important;
      --ytd-user-comment_-_font-weight: 400 !important;
      --ytd-subheadline_-_font-weight: 400 !important;
      --ytd-thumbnail-attribution_-_line-height: 1.4em !important;
      --ytd-user-comment_-_line-height: 1.3em !important;
      --ytd-comment-link_-_line-height: 1.3em !important;
      --ytd-subheadline_-_line-height: 1.3em !important;
      --paper-font-button_-_text-transform: none !important;
      --yt-endpoint-hover_-_text-decoration: underline !important;
      /* --ytd-rich-grid-item-margin: 10px !important --paper-tooltip_-_letter-spacing:0;  TODO*/
      --ytd-grid-video-title_-_letter-spacing: 0!important;
      --ytd-masthead-height: 49px !important;
      --ytd-toolbar-height: 49px !important;
                              
      --logo-dark-header: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAeCAMAAABJ7/MSAAAAaVBMVEUAAADbKBv////hKB/////////////hKCD////////eKBzfOCD////////jJh7////////jKST////////aRiH////////RKxz////aNCX/b2L/xL7/sKn/iH7/2tfwSjv/9/b/o5v/6eebHW/LAAAAF3RSTlMA+VbUhb4+sdFx7CD2rokqDmTjjj4anxy61LcAAAHISURBVEjHvZaJboMwDIZNuWnKsbbLT4BwvP9DzuZQUbuNaJv2SSUxKp+MDSR0yC3P49j3/SzzGD0jsyzjk3Gc5zdy4OzrQ/zzscbTDniHolg7ER+lox05U6JUSRQpdaVXKv4LVlq90gEvnooC4ETL8ZXc1ZNTAbwThVDlF+UZxxaw42i+88RECd6IFC70CUvT6yWZ7zw+UQoUEZASlVH0lFS28/R9L4d69tSGA80Dj0JGdGdHANzppADFVToBkRSMPd7O06CRmRGPAQaxTlvdPJIbuyRIKMJM4eLBAIxa23nSrZ4ACgjoClUUPNl79Beevp446iVqYDVDRMWSRoiE6A0XF4/WLUcGkGoNi0culpaFCIkSd4/dPNg8F+D6Q4+108OTAqefeYQ/8ZieOfZ4x/Wp61r6/muPRHvPU9/fZ0/25Ok3j0Ti6fU49z17eAIgTfknnoADPL2nLQZjV89ohiW71kzzc+g/PHcFRpXLc5nMnnjnGQE0q4d96EQtmOW7sXmoCIGwoPkOo6U++eKxli/q7dTxzGhjbd0OjZS3swOfYHISypI+p9KOVH/1nf+Xdcd9HfyvdVlM1bxP2G8UZMy2fUJ1I+YDE+J/OoVjUQ0AAAAASUVORK5CYII=);
      --logo-light-header: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAeCAMAAABJ7/MSAAAAbFBMVEUAAADbKBs4MjLhKB8yNjQyMDA6OjrhKCA0NDM0NjTeKBzfOCA3NjY1MzPjJh4MDAwSEhLjKSRmZmY4NzcxMzLaRiEUFBTRKxz///8zMzPaNCX/b2L/xL7/sKn/iH7/2tfwSjv/9/b/o5v/6efD6vgAAAAAF3RSTlMA+VbUhb4+sdFx7CD2rokqDmQF45U+Gst17Z4AAAHZSURBVEjHvZaLkqowDIaDyEWsXFy1DQVa4P3f8SStjBxdl87uzv4z0sSx36R/sC1s6lqWWRbHcVFEJOnEUVHQl1lWllcI0DGWm4qP25hIBijaBGUySNlWOTJQR8iFqAFSIS7wqoZ+ou7qlzmDUi+cBvaIO/DPV5WhnBIqRKokQVG/sWeaeqXMNOm3HG9Qjh9wFniCT+Sb3vpivuLEAAfEKkU8ANRp+lRUseJYa/nROk6rKZE0+FEWADdikD032AlEQS7tEFM2jDjRitOpjiPNHK3UyNR58S0CXtgpxxxSdKoCOERRapLSuGDwHJoiEPdwQVFVFKw58g3HtjNllrNOGUkCgMqXkVBN8IGnEI6UPWW0OnZr9ByeTC0jTgKQh3PMwlEL54R4+SbHmHnhuM7vvsdh/QpHW9I2J9r2p21b7vuPOZytOU99vzhO8cSxC4cz5lg5ub4XDw5VcDjQhzl7SvDpf9qrUZs7Z9Kjr67Xs3sP4wfnJpAkav9e5o6TrTgTdaa7cwzFA6NZmveNBweqBDGpwK0w9f6UnmMMTbJmHijSUhvT9mPH9g5mNNrvY6RzXZ/BBTzw+NhXA9X81j7/J+dO+Dn4V+cykxq+J/x3UeCxWO4JzRVI/wDdeYEehJSX4AAAAABJRU5ErkJggg==);
   }

   #channel-container *>#text.ytd-channel-name {
      font-size: 20px!important
   }

   #title.ytd-rich-grid-renderer, #title.ytd-rich-shelf-renderer, #title.ytd-vertical-channel-section-renderer {
      font-size: 15px!important
   }

   #video-title.ytd-playlist-renderer, #video-title.ytd-radio-renderer, #video-title.ytd-video-renderer, ytd-compact-video-renderer #video-title.ytd-compact-video-renderer {
      font-size: 14px!important
   }

   #author-text.yt-simple-endpoint.ytd-comment-renderer, #content-text.ytd-backstage-post-renderer, #content-text.ytd-comment-renderer, #expander.ytd-comment-replies-renderer, #video-title.ytd-rich-grid-video-renderer, .title.ytd-guide-entry-renderer, .title.ytd-mini-channel-renderer, h3.ytd-rich-grid-media, ytd-comment-action-buttons-renderer:not([use-comment-icon]) #reply-button-end.ytd-comment-action-buttons-renderer ytd-button-renderer.ytd-comment-action-buttons-renderer:not([is-icon-button]).ytd-comment-action-buttons-renderer, ytd-comment-action-buttons-renderer:not([use-comment-icon]) #reply-button.ytd-comment-action-buttons-renderer ytd-button-renderer.ytd-comment-action-buttons-renderer:not([is-icon-button]).ytd-comment-action-buttons-renderer, ytd-grid-video-renderer #video-title.yt-simple-endpoint.ytd-grid-video-renderer, ytd-guide-entry-renderer[active], ytd-rich-grid-media[mini-mode] #video-title.ytd-rich-grid-media {
      font-size: 13px!important
   }

   .less-button.ytd-video-secondary-info-renderer, .more-button.ytd-video-secondary-info-renderer {
      font-size: 13px!important
   }

   #guide-section-title.ytd-guide-section-renderer, .badge.ytd-badge-supported-renderer, ytd-mini-channel-renderer a.yt-simple-endpoint.ytd-button-renderer, ytd-video-meta-block[rich-meta] #channel-name.ytd-video-meta-block, ytd-video-meta-block[rich-meta] #metadata-line.ytd-video-meta-block {
      font-size: 12px!important
   }

   .less-button.ytd-comment-renderer, .more-button.ytd-comment-renderer {
      font-size: 13px!important;
      text-transform: uppercase!important
   }

   #upnext.ytd-compact-autoplay-renderer, #video-title.ytd-playlist-renderer, #video-title.ytd-radio-renderer, #video-title.ytd-video-renderer {
      font-weight: 500!important
   }

   .badge.ytd-badge-supported-renderer {
      font-weight: 400!important
   }
    ytd-guide-entry-renderer[active] {
      background: transparent!important;  
   }
   .title.ytd-guide-entry-renderer, ytd-guide-entry-renderer[active] .title.ytd-guide-entry-renderer {
      line-height: 20px!important;
   }

   #author-text.yt-simple-endpoint.ytd-comment-renderer:hover, #video-title.ytd-playlist-renderer:hover, #video-title.ytd-radio-renderer:hover, #video-title.ytd-rich-grid-video-renderer:hover, #video-title.ytd-video-renderer:hover, yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string:hover, ytd-comment-replies-renderer *>ytd-button-renderer yt-formatted-string.ytd-button-renderer:hover, ytd-grid-video-renderer #video-title.yt-simple-endpoint.ytd-grid-video-renderer:hover, ytd-rich-grid-media[mini-mode] #video-title.ytd-rich-grid-media:hover {
      text-decoration: underline!important
   }

   #autoplay.ytd-compact-autoplay-renderer, #title.ytd-vertical-channel-section-renderer, paper-tabs.ytd-c4-tabbed-header-renderer, ytd-comment-action-buttons-renderer:not([use-comment-icon]) #reply-button-end.ytd-comment-action-buttons-renderer ytd-button-renderer.ytd-comment-action-buttons-renderer:not([is-icon-button]).ytd-comment-action-buttons-renderer, ytd-comment-action-buttons-renderer:not([use-comment-icon]) #reply-button.ytd-comment-action-buttons-renderer ytd-button-renderer.ytd-comment-action-buttons-renderer:not([is-icon-button]).ytd-comment-action-buttons-renderer {
      text-transform: initial!important
   }

   @media (min-width:900px) {
      ytd-rich-grid-renderer {
         --ytd-rich-grid-items-per-row: 4 !important
      }
   }

   @media (min-width:1200px) {
      ytd-rich-grid-renderer {
         --ytd-rich-grid-items-per-row: 5 !important
      }
   }

   @media (min-width:1800px) {
      ytd-rich-grid-renderer {
         --ytd-rich-grid-items-per-row: 6 !important
      }
   }

   @media (min-width:2500px) {
      ytd-rich-grid-renderer {
         --ytd-rich-grid-items-per-row: 9 !important
      }
   }

   ytd-two-column-browse-results-renderer {
      margin-top: 10px!important
   }

   @media (min-width:900px) {
      ytd-two-column-browse-results-renderer {
         max-width: 850px!important
      }
   }

   @media (min-width:1200px) {
      ytd-two-column-browse-results-renderer {
         max-width: 1056px!important
      }
   }

   @media (min-width:1800px) {
      ytd-two-column-browse-results-renderer {
         max-width: 1262px!important
      }
   }

   @media (min-width:2500px) {
      ytd-two-column-browse-results-renderer {
         max-width: 2200px!important
      }
   }

   @media (min-width:900px) {
      html:not(.style-scope) {
         --ytd-grid-video-item_-_width: 196px !important;
         --ytd-grid-thumbnail_-_width: 196px !important;
         --ytd-grid-thumbnail_-_height: 110px !important;
         --ytd-thumbnail-height: 110px !important
      }
   }

   @media (min-width:2500px) {
      html:not(.style-scope) {
         --ytd-grid-video-item_-_width: 210px !important;
         --ytd-grid-thumbnail_-_width: 210px !important;
         --ytd-grid-thumbnail_-_height: 118px !important;
         --ytd-thumbnail-height: 118px !important
      }
   }

   ytd-two-column-browse-results-renderer {
      margin-top: 10px!important
   }

   #grid-title.ytd-rich-grid-renderer {
      margin: 10px 0 0 10px!important
   }

   ytd-thumbnail.ytd-grid-video-renderer, ytd-thumbnail.ytd-rich-grid-media, ytd-thumbnail.ytd-rich-grid-video-renderer {
      margin-bottom: 4px!important
   }

   ytd-rich-grid-media[mini-mode] h3.ytd-rich-grid-media {
      margin-bottom: 1px!important;
      padding-right: 24px!important
   }

   h3.ytd-rich-grid-media {
      margin: 0!important
   }

   #rich-shelf-header.ytd-rich-shelf-renderer {
      margin: 10px 0!important
   }

   #meta.ytd-grid-video-renderer, #meta.ytd-rich-grid-media, #meta.ytd-rich-grid-video-renderer {
      padding-right: 0!important
   }

   ytd-rich-item-renderer {
      margin-bottom: 12px!important
   }

   h3.ytd-grid-video-renderer, h3.ytd-rich-grid-video-renderer {
      margin: 0 20px 0 0!important
   }

   html:not([dark]) paper-button.ytd-expander, html:not([dark]) ytd-rich-shelf-renderer {
      border-top: 1px solid #e2e2e2!important
   }

   html:not([dark]) #show-more-button.ytd-rich-shelf-renderer, html:not([dark]) ytd-rich-shelf-renderer[is-show-more-hidden] #dismissable.ytd-rich-shelf-renderer {
      border-bottom: 1px solid #e2e2e2!important
   }

   html[dark] ytd-rich-shelf-renderer {
      border-top: 1px solid #1a1a1a!important
   }

   html[dark] #show-more-button.ytd-rich-shelf-renderer, html[dark] ytd-rich-shelf-renderer[is-show-more-hidden] #dismissable.ytd-rich-shelf-renderer {
      border-bottom: 1px solid #1a1a1a!important
   }

   ytd-section-list-renderer[page-subtype=subscriptions] #items.ytd-grid-renderer>ytd-grid-video-renderer.ytd-grid-renderer {
      width: 196px!important;
      margin-right: 10px!important;
      margin-bottom: 12px!important
   }

   ytd-section-list-renderer[page-subtype=subscriptions] ytd-thumbnail.ytd-grid-video-renderer {
      height: 110px!important;
      width: 196px!important;
      margin-bottom: 4px!important
   }

   ytd-section-list-renderer[page-subtype=channels] #items.ytd-grid-renderer, ytd-section-list-renderer[page-subtype=subscriptions] #items.ytd-grid-renderer {
      margin-right: -15px!important
   }

   ytd-browse[page-subtype=channels] app-header {
      transform: unset!important;
      position: static!important;
      margin-top: 0!important
   }

   #contentContainer.app-header-layout {
      padding-top: 0!important
   }

   #header.ytd-c4-tabbed-header-renderer {
      --app-header-background-front-layer_-_background-position: center 0 !important
   }

   @media (min-width:900px) {
      #header.ytd-c4-tabbed-header-renderer {
         --app-header-background-front-layer_-_background-size: 100% 175px !important
      }
   }

   @media (min-width:1800px) {
      #header.ytd-c4-tabbed-header-renderer {
         --app-header-background-front-layer_-_background-size: 100% 209.1382614px !important
      }
   }

   @media (min-width:2500px) {
      #header.ytd-c4-tabbed-header-renderer {
         --app-header-background-front-layer_-_background-size: 100% 245px !important
      }
   }

   @media (min-width:900px) {
      ytd-c4-tabbed-header-renderer[has-channel-art] .banner-visible-area.ytd-c4-tabbed-header-renderer, ytd-c4-tabbed-header-renderer[has-channel-art][guide-persistent-and-visible] .banner-visible-area.ytd-c4-tabbed-header-renderer {
         height: 175px!important
      }
   }

   @media (min-width:1800px) {
      ytd-c4-tabbed-header-renderer[has-channel-art] .banner-visible-area.ytd-c4-tabbed-header-renderer, ytd-c4-tabbed-header-renderer[has-channel-art][guide-persistent-and-visible] .banner-visible-area.ytd-c4-tabbed-header-renderer {
         height: 209.1382614px!important
      }
   }

   @media (min-width:2500px) {
      ytd-c4-tabbed-header-renderer[has-channel-art] .banner-visible-area.ytd-c4-tabbed-header-renderer, ytd-c4-tabbed-header-renderer[has-channel-art][guide-persistent-and-visible] .banner-visible-area.ytd-c4-tabbed-header-renderer {
         height: 245px!important
      }
   }

   @media (min-width:900px) {
      #header.ytd-browse {
         width: 850px!important
      }
      ytd-browse-feed-actions-renderer.ytd-two-column-browse-results-renderer {
         padding: 0!important;
      }
   }

   @media (min-width:1200px) {
      #header.ytd-browse {
         width: 1056px!important
      }
      ytd-browse-feed-actions-renderer.ytd-two-column-browse-results-renderer {
         padding: 0 15px!important;
      }
   }

   @media (min-width:1800px) {
      #header.ytd-browse {
         width: 1262px!important;
         padding: 0 15px!important;
      }
      ytd-browse-feed-actions-renderer.ytd-two-column-browse-results-renderer {
         padding: 0 15px!important;
      }
      ytd-browse-feed-actions-renderer.ytd-two-column-browse-results-renderer {
         padding: 0 15px!important;
      }
   }

   @media (min-width:2500px) {
      #header.ytd-browse {
         width: 2200px!important
      }
      ytd-browse-feed-actions-renderer.ytd-two-column-browse-results-renderer {
         padding: 0 15px!important;
      }
      ytd-browse-secondary-contents-renderer.ytd-two-column-browse-results-renderer {
         margin-left: 10px!important;
         padding: 15px!important;
      }
   }

   ytd-section-list-renderer {
      padding: 0 15px!important;
   }

   ytd-browse[page-subtype~=channels] ytd-two-column-browse-results-renderer.ytd-browse *>#items.ytd-grid-renderer>ytd-grid-video-renderer.ytd-grid-renderer {
      margin-right: 10px!important;
      margin-bottom: 20px!important
   }

   #tabs-container.ytd-c4-tabbed-header-renderer, app-toolbar.ytd-c4-tabbed-header-renderer, paper-tabs.ytd-c4-tabbed-header-renderer {
      height: 32px!important
   }

   tp-yt-app-toolbar.ytd-c4-tabbed-header-renderer, #tabs-container.ytd-c4-tabbed-header-renderer, #tabs-inner-container.ytd-c4-tabbed-header-renderer, tp-yt-paper-tabs.ytd-c4-tabbed-header-renderer, #tabsContainer.tp-yt-paper-tabs {
      height: 32px
   }

   #tabsContent.tp-yt-paper-tabs> :not(#selectionBar) {
      padding-left: 3px;
      padding-right: 3px;
      margin-left: 20px
   }

   #selectionBar.tp-yt-paper-tabs {
      display: none
   }

   tp-yt-paper-tab.ytd-c4-tabbed-header-renderer {
      padding-bottom: 3px;
      height: 29px!important
   }

   tp-yt-paper-tab.ytd-c4-tabbed-header-renderer:hover, tp-yt-paper-tab.iron-selected.ytd-c4-tabbed-header-renderer {
      border-bottom: 3px solid #cc181e;
      padding: 0
   }

   ytd-c4-tabbed-header-renderer[guide-persistent-and-visible] tp-yt-paper-tabs.ytd-c4-tabbed-header-renderer {
      margin-left: calc(50% - 642px - -56px)!important;
   }

   ytd-c4-tabbed-header-renderer[guide-persistent-and-visible] tp-yt-paper-tabs.ytd-c4-tabbed-header-renderer {
      margin-left: -56px!important
   }

   .tab-content.tp-yt-paper-tab {
      color: #666;
      font-size: 13px;
      font-weight: normal;
      font-family: roboto
   }

   tp-yt-paper-tab.iron-selected.ytd-c4-tabbed-header-renderer .tab-content.tp-yt-paper-tab {
      color: var(--yt-lightsource-primary-title-color);
      font-weight: 500
   }

   #tabs-container.ytd-c4-tabbed-header-renderer {
      margin-left: 0!important
   }

   yt-icon-button.ytd-expandable-tab-renderer {
      opacity: .33;
      background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfluKv9vH.png) 0 -738px;
      background-size: auto;
      width: 15px!important;
      height: 15px!important;
      color: transparent
   }

   yt-icon-button.ytd-expandable-tab-renderer:hover {
      opacity: 1
   }

   .input-content.tp-yt-paper-input-container>label, .input-content.tp-yt-paper-input-container>iron-input {
      height: 15px;
      padding-top: 5px;
      padding-bottom: 6px;
      margin-bottom: 3px
   }

   paper-tab.ytd-c4-tabbed-header-renderer {
      padding: 0 12px!important
   }

   paper-tabs.ytd-c4-tabbed-header-renderer {
      margin-left: 0!important;
      padding-bottom: 0!important
   }

   #channel-header.ytd-c4-tabbed-header-renderer {
      padding: 15px!important
   }

   html:not([dark]) ytd-c4-tabbed-header-renderer {
      --yt-lightsource-section1-color: #fff !important
   }

   html:not([dark]) app-toolbar.ytd-c4-tabbed-header-renderer {
      background-color: #fff!important
   }

   html:not([dark]) paper-tabs.ytd-c4-tabbed-header-renderer {
      --paper-tabs-selection-bar-color: #cc181e
   }

   html:not([dark]) paper-tab.iron-selected.ytd-c4-tabbed-header-renderer>.tab-content.paper-tab, html:not([dark]) paper-tab:not(.iron-selected)>.tab-content.paper-tab:hover {
      box-shadow: inset 0 -3px red
   }

   html:not([dark]) paper-tab:not(.iron-selected)>.tab-content.paper-tab {
      opacity: .8!important;
      font-weight: normal!important
   }

   html[dark] ytd-c4-tabbed-header-renderer {
      --yt-lightsource-section1-color: #212121 !important
   }

   html[dark] app-toolbar.ytd-c4-tabbed-header-renderer {
      background-color: #212121!important
   }

   html[dark] paper-tabs.ytd-c4-tabbed-header-renderer {
      --paper-tabs-selection-bar-color: #cd1821 !important
   }

   html[dark] paper-tab.iron-selected.ytd-c4-tabbed-header-renderer>.tab-content.paper-tab, html[dark] paper-tab:not(.iron-selected)>.tab-content.paper-tab:hover {
      box-shadow: inset 0 -3px #cd1821!important
   }

   ytd-section-list-renderer[page-subtype=channels] #items.ytd-grid-renderer>ytd-grid-video-renderer.ytd-grid-renderer {
      width: 196px!important
   }

   ytd-section-list-renderer[page-subtype=channels] #items.ytd-grid-renderer ytd-thumbnail.ytd-grid-video-renderer {
      width: 196px!important;
      height: 110px!important
   }

   #content.ytd-rich-section-renderer>.ytd-rich-section-renderer, #title.ytd-vertical-channel-section-renderer {
      margin-bottom: 10px!important
   }

   #metadata-container.ytd-channel-video-player-renderer, #title.ytd-channel-video-player-renderer {
      margin-bottom: 3px!important
   }

   #description.ytd-channel-video-player-renderer {
      margin-top: 7px!important
   }

   ytd-browse[page-subtype~=channels] #contents.ytd-shelf-renderer, ytd-browse[page-subtype~=channels] .grid-subheader.ytd-shelf-renderer {
      margin-top: 15px!important
   }

   #items.ytd-watch-next-secondary-results-renderer, ytd-comments {
      padding: 15px!important
   }

   ytd-watch-flexy:not([theater]):not([fullscreen]) #primary.ytd-watch-flexy, ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.ytd-watch-flexy {
      padding-top: 10px!important
   }

   ytd-watch-next-secondary-results-renderer {
      position: relative!important;
      right: 14px!important
   }

   ytd-watch-flexy[fullscreen] #secondary.ytd-watch-flexy, ytd-watch-flexy[theater] #secondary.ytd-watch-flexy {
      margin-top: 10px!important
   }

   ytd-comments-header-renderer div#placeholder-area:before {
      content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQAgMAAABfD3aUAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRF6urq1dXVAAAA////mznMegAAAAR0Uk5T//8A//4MuwsAAAAxSURBVHicTcMxEQAwCATBd0AVPahAEUYoCSbJldmZ1YlQ7qrYvhpjstiuGWOyeDn/B8lCHqYQvMJxAAAAAElFTkSuQmCC);
      z-index: 1;
      float: left;
      margin-right: -11px;
      margin-left: -22px;
      margin-top: -9px;
   }

   ytd-comments-header-renderer div.input-wrapper.style-scope.tp-yt-paper-input-container:before,
   #action-buttons.ytd-comment-renderer div.input-wrapper.style-scope.tp-yt-paper-input-container:before {
      content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQAgMAAABfD3aUAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRFaZzSaZ3SAAAA////cFz/SQAAAAR0Uk5To/8A/3/XCxEAAAAxSURBVHicTcOxDQAwCANBL5E6UzEPJXPQIS9JvsxJpxOh2lVzcuXLYnNS9mWxOfT/AeULH1SnsbcQAAAAAElFTkSuQmCC) !important;
      z-index: 1;
      position: absolute;
      width: 11px;
      height: 11px;
      top: 0%;
      right: 100%;
   }

   ytd-comments-header-renderer {
      margin-top: 0!important;
      position: relative;
   }

   #top-row.ytd-video-secondary-info-renderer {
      padding-top: 0!important
   }

   ytd-app[mini-guide-visible_] ytd-page-manager.ytd-app, ytd-expander.ytd-video-secondary-info-renderer {
      margin-left: 0!important
   }

   ytd-video-secondary-info-renderer {
      margin: 10px 0!important;
      padding: 15px!important
   }

   ytd-rich-metadata-row-renderer {
      margin-top: 0px!important;
   }

   ytd-video-primary-info-renderer {
      padding: 15px!important;
      margin-top: 10px!important;
      --yt-button-icon-size: 30px !important;
      font-weight: normal;
   }

   #expander.ytd-comment-renderer>paper-button.ytd-expander {
      padding: 8px!important;
      margin-top: 8px!important
   }

   ytd-sentiment-bar-renderer {
      padding-top: 13px!important
   }

   #menu.ytd-video-primary-info-renderer {
      top: 13px!important
   }

   html:not([dark]) #like-bar.ytd-sentiment-bar-renderer {
      background: #167ac6!important
   }

   html[dark] #like-bar.ytd-sentiment-bar-renderer {
      background: #1879c6!important
   }

   #container.ytd-playlist-panel-renderer {
      position: relative!important;
      right: 14px!important
   }

   #playlist.ytd-watch-flexy {
      margin-bottom: 10px!important
   }

   html:not([dark]) app-drawer#guide {
      border-right: 1px solid #e8e8e8!important
   }

   html:not([dark]) #guide-section-title.ytd-guide-section-renderer {
      color: red
   }

   html:not([dark]) ytd-guide-entry-renderer[active] .guide-icon.ytd-guide-entry-renderer, html:not([dark]) ytd-guide-entry-renderer[active] .title.ytd-guide-entry-renderer {
      color: #fff!important
   }

   html:not([dark]) ytd-guide-entry-renderer[active]>#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer, 
  html:not([dark]) ytd-guide-entry-renderer[active]>#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover {
      background-color: #cc181e;
   }

   html:not([dark]) #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover {
      background-color: #444!important;
      color: unset!important
   }

   html:not([dark]) .guide-icon.ytd-guide-entry-renderer {
      color: unset!important
   }

   html:not([dark]) .guide-icon.ytd-guide-entry-renderer:hover, html:not([dark]) .title.ytd-guide-entry-renderer:hover {
      color: #fff
   }

   tp-yt-paper-item.ytd-guide-entry-renderer {
      color: #878787
   }

   tp-yt-paper-item.ytd-guide-entry-renderer:hover {
      color: #fff!important
   }

   html:not([dark]) ytd-guide-entry-renderer[active] *>.title.ytd-guide-entry-renderer 
   html:not([dark]) ytd-guide-entry-renderer[active] .guide-icon.ytd-guide-entry-renderer {
      text-shadow: -1px -1px 0 rgba(0, 0, 0, .25)!important
   }

   ytd-app {
      --app-drawer-width: 230px !important
   }

   app-drawer.ytd-app:not([persistent]).ytd-app, ytd-guide-renderer.ytd-app {
      width: 230px!important
   }

   app-drawer.ytd-app:not([persistent]).ytd-app {
      border-right: none!important;
      box-shadow: 5px 10px 15px 5px rgba(0, 0, 0, .1)!important;
      transition-duration: 0ms!important
   }

   #contentContainer.app-drawer, #scrim {
      transition-duration: 0ms!important
   }

   paper-item.ytd-guide-entry-renderer {
      height: 28px!important;
      padding: 0 8px!important
   }

   tp-yt-paper-item.ytd-guide-entry-renderer {
      height: 28px!important;
      padding: 0px 8px!important;
   }

   #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer, #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer>paper-item {
      min-height: 28px!important
   }

   .guide-icon.ytd-guide-entry-renderer {
      --iron-icon-height: 20px !important;
      --iron-icon-width: 20px !important;
      margin-right: 6px!important
   }

   #sections.ytd-guide-renderer>.ytd-guide-renderer {
      padding: 13px 22px!important
   }

   #guide-spacer.ytd-app {
      margin-top: 50px!important
   }

   yt-img-shadow.ytd-guide-entry-renderer {
      margin-right: 6px!important;
   }

   #guide-section-title.ytd-guide-section-renderer {
      padding: 1px 0 8px!important;
      margin: 0 5px!important
   }

   ytd-guide-section-renderer {
      --paper-item-min-height: 20px!important;
   }

   #container.ytd-masthead, #header.ytd-app, ytd-masthead.shell {
      height: 49px!important
   }

   #container.ytd-masthead {
      max-height: 49px!important
   }

   ytd-masthead.shell, ytd-masthead:not([dark]) #container.ytd-masthead {
      border-bottom: 1px solid #e8e8e8!important
   }

   html[dark] #container.ytd-searchbox, html[dark] #search-icon-legacy.ytd-searchbox {
      box-shadow: none!important;
      background-color: #383838!important;
      border: 0!important;
      border-radius: 0px!important;
   }

   #container.ytd-searchbox, #search-icon-legacy.ytd-searchbox {
      border-radius: 0px!important;
      border-color: #ccc;
   }

   ytd-searchbox[desktop-search-bar-big-tap-target] #search-form.ytd-searchbox,
   ytd-searchbox[desktop-search-bar-big-tap-target] #search-icon-legacy.ytd-searchbox {
      height:30px!important; 
   }

   ytd-searchbox[desktop-search-bar-big-tap-target] #search-icon-legacy.ytd-searchbox yt-icon.ytd-searchbox {
      width: 24px;
      height: 24px;
      color: transparent!important;
      background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfluKv9vH.png) 4px -733px;
      filter: none;
   }

    html[dark] ytd-searchbox[desktop-search-bar-big-tap-target] #search-icon-legacy.ytd-searchbox yt-icon.ytd-searchbox {
      width: 24px;
      height: 24px;
      color: transparent!important;
      background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfluKv9vH.png) 4px -733px;
      filter: brightness(185%);
   }
   ytd-searchbox[system-icons] #search-icon-legacy.ytd-searchbox yt-icon.ytd-searchbox {
      width: 24px;
      height: 24px;
      color: transparent!important;
      background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfluKv9vH.png) 4px -733px;
      filter: none;
   }

   html[dark] ytd-searchbox[system-icons] #search-icon-legacy.ytd-searchbox yt-icon.ytd-searchbox {
      width: 24px;
      height: 24px;
      color: transparent!important;
      background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfluKv9vH.png) 4px -733px;
      filter: brightness(185%);
   }

   ytd-searchbox[has-focus] #container.ytd-searchbox {
      border: 1px solid #1c62b9;
   }
   #search-icon-legacy.ytd-searchbox:hover {
      background-color: #f0f0f0!important;
   }

   #search-icon-legacy.ytd-searchbox {
      background-color: #f6f6f6!important;
  
   }
   #voice-search-button.ytd-masthead {
      display:none!important;
   }
   #masthead-container.ytd-app {
      transition: none!important
   }

   html:not([dark]) #sign-in-button #button.ytd-button-renderer, html:not([dark]) ytd-button-renderer.style-suggestive.ytd-masthead #button.ytd-button-renderer {
      height: 28px!important;
      padding: 0 10px!important;
      font-size: 11px!important;
      background-color: #167ac6!important;
      margin-top: 5px!important
   }
   #sign-in-button #button.ytd-button-renderer, ytd-button-renderer.style-suggestive.ytd-masthead #button.ytd-button-renderer {
      
      padding: 0 11px!important;
      font-size: 11px!important;
      background-color: var(--yt-spec-badge-chip-background)!important;
      margin-top: 8px!important
   }
   html:not([dark]) #sign-in-button #button.ytd-button-renderer:active, html:not([dark]) #sign-in-button #button.ytd-button-renderer:hover, html:not([dark]) ytd-button-renderer.style-suggestive.ytd-masthead #button.ytd-button-renderer:active, html:not([dark]) ytd-button-renderer.style-suggestive.ytd-masthead #button.ytd-button-renderer:hover {
      background-color: #126db3!important
   }
   #sign-in-button #button.ytd-button-renderer>yt-formatted-string.ytd-button-renderer, ytd-button-renderer.style-suggestive.ytd-masthead #button.ytd-button-renderer>yt-formatted-string.ytd-button-renderer {
      margin-left: 0!important
   }
   html:not([dark]) #sign-in-button #button.ytd-button-renderer>yt-formatted-string.ytd-button-renderer, html:not([dark]) ytd-button-renderer.style-suggestive.ytd-masthead #button.ytd-button-renderer>yt-formatted-string.ytd-button-renderer {
      margin-left: 0!important
   }

   html:not([dark]) #sign-in-button #button.ytd-button-renderer>yt-icon, html:not([dark]) ytd-button-renderer.style-suggestive.ytd-masthead #button.ytd-button-renderer>yt-icon {
      display: none!important
   }

   #sign-in-button #button.ytd-button-renderer>yt-icon, ytd-button-renderer.style-suggestive.ytd-masthead #button.ytd-button-renderer>yt-icon {
      display: none!important
   }

   html:not([dark]) .ytd-masthead button.yt-icon-button>yt-icon {
      opacity: .75!important
   }

   html:not(.style-scope):not([dark]) {
      --yt-spec-brand-background-primary: #fff !important;
      --yt-spec-general-background-a: #f1f1f1 !important;
      --yt-lightsource-section1-color: #fff !important;
      --yt-spec-text-secondary: #767676 !important;
      --yt-spec-call-to-action: #167ac6 !important;
      --yt-spec-text-primary: #333 !important
   }

   html:not([dark]) #header.ytd-c4-tabbed-header-renderer, html:not([dark]) #info.ytd-watch-flexy, html:not([dark]) #items.ytd-watch-next-secondary-results-renderer, html:not([dark]) #meta.ytd-watch-flexy, html:not([dark]) #primary.ytd-two-column-browse-results-renderer, html:not([dark]) ytd-browse-secondary-contents-renderer.ytd-two-column-browse-results-renderer, html:not([dark]) ytd-comments, html:not([dark]) ytd-two-column-search-results-renderer[center-results] #primary.ytd-two-column-search-results-renderer {
      box-shadow: 0 1px 2px rgba(0, 0, 0, .1)!important;
      background-color: #fff!important
   }

   html:not([dark]) ytd-comments, html:not([dark]) ytd-expander.ytd-video-secondary-info-renderer, html:not([dark]) ytd-video-primary-info-renderer, html:not([dark]) ytd-video-secondary-info-renderer {
      border: 0!important
   }

   html:not([dark]) #title.ytd-rich-grid-renderer, html:not([dark]) #title.ytd-rich-shelf-renderer, html:not([dark]) #title.ytd-vertical-channel-section-renderer, html:not([dark]) paper-tabs.ytd-c4-tabbed-header-renderer {
      color: #333!important
   }

   html:not([dark]) #author-text.yt-simple-endpoint.ytd-comment-renderer, html:not([dark]) #title.ytd-channel-video-player-renderer a, html:not([dark]) #video-title-link.ytd-rich-grid-media, html:not([dark]) #video-title.ytd-playlist-renderer, html:not([dark]) #video-title.ytd-rich-grid-video-renderer, html:not([dark]) #video-title.ytd-video-renderer, html:not([dark]) .title.ytd-mini-channel-renderer:hover, html:not([dark]) h3.ytd-rich-grid-media, html:not([dark]) yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string:hover, html:not([dark]) ytd-compact-playlist-renderer #video-title.ytd-compact-playlist-renderer:hover, html:not([dark]) ytd-compact-radio-renderer.use-ellipsis #video-title.ytd-compact-radio-renderer:hover, html:not([dark]) ytd-compact-video-renderer #video-title.ytd-compact-video-renderer:hover, html:not([dark]) ytd-grid-video-renderer #video-title.yt-simple-endpoint.ytd-grid-video-renderer, html:not([dark]) ytd-rich-grid-media[mini-mode] #video-title.ytd-rich-grid-media {
      color: #167ac6!important
   }

   html:not([dark]) ytd-comment-action-buttons-renderer:not([use-comment-icon]) #reply-button-end.ytd-comment-action-buttons-renderer ytd-button-renderer.ytd-comment-action-buttons-renderer:not([is-icon-button]).ytd-comment-action-buttons-renderer:hover, html:not([dark]) ytd-comment-action-buttons-renderer:not([use-comment-icon]) #reply-button.ytd-comment-action-buttons-renderer ytd-button-renderer.ytd-comment-action-buttons-renderer:not([is-icon-button]).ytd-comment-action-buttons-renderer:hover {
      color: #555!important
   }

   html[dark]:not(.style-scope) {
      --yt-spec-brand-background-primary: #212121 !important;
      --yt-spec-general-background-a: #0f0f0f !important;
      --yt-lightsource-section1-color: #212121 !important;
      --yt-spec-text-secondary: #8f8f8f !important;
      --yt-spec-call-to-action: #1879c6 !important
   }

   html[dark] #header.ytd-c4-tabbed-header-renderer, html[dark] #info.ytd-watch-flexy, html[dark] #items.ytd-watch-next-secondary-results-renderer, html[dark] #meta.ytd-watch-flexy, html[dark] #primary.ytd-two-column-browse-results-renderer, html[dark] ytd-browse-secondary-contents-renderer.ytd-two-column-browse-results-renderer, html[dark] ytd-comments, html[dark] ytd-two-column-search-results-renderer[center-results] #primary.ytd-two-column-search-results-renderer {
      box-shadow: 0 1px 2px rgba(0, 0, 0, .1)!important;
      background-color: #212121!important
   }

   #submenu.ytd-multi-page-menu-renderer ytd-multi-page-menu-renderer.ytd-multi-page-menu-renderer, html[dark] ytd-comments, html[dark] ytd-expander.ytd-video-secondary-info-renderer, html[dark] ytd-video-primary-info-renderer, html[dark] ytd-video-secondary-info-renderer {
      border: 0!important
   }

   html[dark] #title.ytd-rich-grid-renderer, html[dark] #title.ytd-rich-shelf-renderer, html[dark] paper-tabs.ytd-c4-tabbed-header-renderer {
      color: #c1c1c1!important
   }

   html[dark] #author-text.yt-simple-endpoint.ytd-comment-renderer, html[dark] #video-title.ytd-rich-grid-video-renderer, html[dark] #video-title.ytd-video-renderer, html[dark] .title.ytd-mini-channel-renderer:hover, html[dark] yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string:hover, html[dark] ytd-compact-video-renderer #video-title.ytd-compact-video-renderer:hover, html[dark] ytd-grid-video-renderer #video-title.yt-simple-endpoint.ytd-grid-video-renderer {
      color: #fff!important
   }

   html[dark] ytd-comment-action-buttons-renderer:not([use-comment-icon]) #reply-button-end.ytd-comment-action-buttons-renderer ytd-button-renderer.ytd-comment-action-buttons-renderer:not([is-icon-button]).ytd-comment-action-buttons-renderer:hover, html[dark] ytd-comment-action-buttons-renderer:not([use-comment-icon]) #reply-button.ytd-comment-action-buttons-renderer ytd-button-renderer.ytd-comment-action-buttons-renderer:not([is-icon-button]).ytd-comment-action-buttons-renderer:hover {
      color: #909090!important
   }

   body[style='overflow: hidden;'] {
      overflow-y: auto!important
   }

   #details.ytd-rich-grid-video-renderer {
      cursor: auto!important;
      pointer-events: none!important
   }

   #details.ytd-rich-grid-video-renderer *>a, #details.ytd-rich-grid-video-renderer *>button.yt-icon-button {
      cursor: pointer!important;
      pointer-events: initial!important
   }

   tp-yt-paper-button.ytd-expander {
      margin: 0px 0 -15px!important
   }

   html:not([dark]) paper-button.keyboard-focus.ytd-subscribe-button-renderer, html:not([dark]) ytd-button-renderer.style-destructive[is-paper-button] {
      border-color: transparent!important;
      box-shadow: none!important
   }

   #subscribe-button paper-button.ytd-button-renderer, paper-button.keyboard-focus.ytd-subscribe-button-renderer, paper-button.ytd-subscribe-button-renderer[subscribed], ytd-button-renderer.style-destructive[is-paper-button] {
      text-transform: none!important
   }

   html:not([dark]) paper-button.ytd-subscribe-button-renderer[subscribed], html:not([dark]) ytd-button-renderer.style-compact-gray[is-paper-button], html:not([dark]) ytd-button-renderer.style-suggestive[is-paper-button] paper-button.ytd-button-renderer {
      border: 1px solid #d3d3d3!important;
      background-color: #f8f8f8!important;
      color: #333!important;
      box-shadow: 0 1px 0 rgba(0, 0, 0, .05)!important;
      border-radius: 2px!important;
      text-transform: none!important
   }

   html:not([dark]) paper-button.ytd-subscribe-button-renderer[subscribed]:hover, html:not([dark]) ytd-button-renderer.style-compact-gray[is-paper-button]:hover, html:not([dark]) ytd-button-renderer.style-suggestive[is-paper-button] paper-button.ytd-button-renderer:hover {
      background-color: #f0f0f0!important;
      border-color: #c6c6c6!important;
      box-shadow: 0 1px 0 rgba(0, 0, 0, .1)!important
   }

   html:not([dark]) paper-button.ytd-subscribe-button-renderer[subscribed]:active, html:not([dark]) ytd-button-renderer.style-compact-gray[is-paper-button]:active, html:not([dark]) ytd-button-renderer.style-suggestive[is-paper-button] paper-button.ytd-button-renderer:active {
      background-color: #e9e9e9!important;
      border-color: #c6c6c6!important;
      box-shadow: inset 0 1px 0 #ddd!important
   }

   .toggle-container.paper-toggle-button {
      width: 37px!important;
      height: 15px!important;
      cursor: pointer!important
   }

   .toggle-button.paper-toggle-button {
      width: 13px!important;
      height: 13px!important;
      box-shadow: none!important;
      top: 1px!important;
   }

   #background.paper-ripple, #waves.paper-ripple, .wave-container.paper-ripple, .wave.paper-ripple {
      display: none!important;
      visibility: hidden;
   }

   paper-toggle-button {
      left: 7px!important;
      display: none!important;
      visibility: hidden;
   }

   html:not([dark]) paper-toggle-button[checked]:not([disabled]) .toggle-bar.paper-toggle-button {
      background-color: #167ac6!important;
      opacity: unset!important;
      display: none!important;
   }

   yt-interaction {
      visibility: hidden !important;
      display: none!important;
   }

   paper-toggle-button[checked] .toggle-button.paper-toggle-button {
      left: 7px!important;
      display: none!important;
   }

   html:not([dark]) paper-toggle-button[checked]:not([disabled]) .toggle-bar.paper-toggle-button {
      background-color: #167ac6!important;
      opacity: unset!important;
      display: none!important;
   }

   html:not([dark]) .toggle-bar.paper-toggle-button {
      background-color: #b8b8b8!important;
      opacity: unset!important;
   }

   html:not([dark]) .toggle-button.paper-toggle-button {
      background-color: #fbfbfb!important
   }

   .dropdown-content.paper-menu-button, html:not([dark]) ytd-multi-page-menu-renderer {
      border: 1px solid #c5c5c5!important;
      border-top: 1px solid #c5c5c5!important;
      box-shadow: 0 0 15px rgba(0, 0, 0, .18)!important;
   }

   html:not([dark]) ytd-menu-popup-renderer {
      border: 1px solid #d3d3d3!important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .2)!important;
      border-radius: 0!important
   }

   ytd-radio-renderer[use-prominent-thumbs] ytd-thumbnail.ytd-radio-renderer, ytd-search ytd-playlist-renderer[use-prominent-thumbs] ytd-playlist-thumbnail.ytd-playlist-renderer, ytd-search ytd-video-renderer[use-prominent-thumbs] ytd-thumbnail.ytd-video-renderer {
      max-width: 196px!important;
      min-width: 196px!important
   }

   ytd-radio-renderer.ytd-item-section-renderer ytd-thumbnail-overlay-side-panel-renderer, ytd-search ytd-playlist-thumbnail #thumbnail.ytd-playlist-thumbnail ytd-thumbnail-overlay-side-panel-renderer {
      width: 70px!important
   }

   ytd-search #channel-name.ytd-video-renderer {
      padding-left: 0!important
   }

   #notification-count {
      width: 10px!important;
      height: 18px!important;
      border: solid var(--yt-spec-brand-background-primary)!important;
      font-size: 10px;
      text-align: center !important;
      border-radius: 10px !important;
      border: solid #0f0f0f !important;
      line-height: 18px!important;
      top: 2px !important;
      right: -1px !important;
      background-clip: padding-box!important;
      border-radius: 10px !important;
      border: solid #0f0f0f !important;
      border-width: 0px 0px 1px 1px !important;
   }
   html:not([dark]) #notification-count {
      width: 10px!important;
      height: 18px!important;
      border: solid var(--yt-spec-brand-background-primary)!important;
      font-size: 10px;
      text-align: center !important;
      border-radius: 10px !important;
      border: solid #fff !important;
      line-height: 18px!important;
      border: solid #fff !important;
      border-width: 0px 0px 1px 1px !important;
      top: 2px !important;
      right: -1px !important;
      background-clip: padding-box!important;
   }

   ytd-channel-renderer[use-prominent-thumbs] #avatar-section.ytd-channel-renderer {
      min-width: 136px!important;
      max-width: 136px!important
   }

   #tabsContent.tp-yt-paper-tabs> :not(#selectionBar) {
      height: 29px;
      padding-bottom: 0;
      padding-left: 0px;
      padding-right: 0px;
      margin-left: 20px;
      text-transform: none
   }

   tp-yt-paper-tab.iron-selected.ytd-c4-tabbed-header-renderer {
      border-bottom: 3px solid;
      border-color: #cc181e;
   }

   ytd-c4-tabbed-header-renderer[guide-persistent-and-visible] tp-yt-paper-tabs.ytd-c4-tabbed-header-renderer, #tabsContent.scrollable.tp-yt-paper-tabs, #tabsContainer.tp-yt-paper-tabs {
      height: 49px;
      margin-left: 0px !important;
   }
   .ytp-spinner-circle {
    left: -100%;
    right: 0;
    border-left-color: transparent;
    -webkit-animation: none!important;
    animation:none!important;
   }

   #spinnerContainer {
      transform: rotate(0deg) !important;
      -webkit-animation: none !important;
      animation: none !important;
   }
    ytp-spinner-right{
      transform: rotate(0deg) !important;
      -webkit-animation: none !important;
      animation: none !important;

   }  
    ytp-spinner-left {
      transform: rotate(0deg) !important;
      -webkit-animation: none !important;
      animation: none !important;

   }  
   .ytp-spinner-rotator {
      width: 50%;
      height: 50%;
      -webkit-animation:none!important;
      animation: none!important;
      content:url(https://i.imgur.com/DLLjUig.png);
       
      }  

   .ytp-spinner-container{
      animation: none!important;
      content:url(https://i.imgur.com/DLLjUig.png);
     
   }

   ytd-button-renderer.style-suggestive[is-paper-button] paper-button.ytd-button-renderer {
      height: 24px;
      font-size: 12px;
      outline: 1px solid transparent;
      border-radius: 2px;
      box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
   }

   ytd-subscription-notification-toggle-button-renderer #button.ytd-subscription-notification-toggle-button-renderer {
      height: 24px;
      width: 24px;
      padding: 0px;
      outline: 1px solid transparent;
      border-radius: 2px;
      box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
      border: 1px solid transparent!important;
      background-color: transparent;
   }

   html:not([dark]) ytd-subscription-notification-toggle-button-renderer #button.ytd-subscription-notification-toggle-button-renderer {
      height: 24px;
      width: 24px;
      padding: 0px;
      outline: 1px solid transparent;
      border-radius: 2px;
      box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
      border: 1px solid #d3d3d3!important;
      background-color: #f8f8f8;
   }

   /*subscribe*/

   tp-yt-paper-button.ytd-subscribe-button-renderer, paper-button.keyboard-focus.ytd-subscribe-button-renderer {
      background-color: #e62117;
      color: #fefefe;
      height: 24px;
      text-transform: none !important;
      font-family: 'YouTube Noto', Roboto, arial, sans-serif;
      outline: 1px solid transparent;
      border-radius: 2px;
      box-shadow: 0 1px 0 rgb(0 0 0 / 15%);
      border-color: #d6d6d6;
      white-space: nowrap!important;
      font-size: 12px!important;
      font-weight: normal!important;
      letter-spacing: normal!important;
   }

   #subscribe-button.ytd-channel-renderer {
      display: initial;
      position: absolute;
      height: 30px;
      margin-top: 110px
   }

   tp-yt-paper-button.ytd-subscribe-button-renderer:hover {
      background-image: linear-gradient(to top, #dc2f2c 0, #fa362a 100%);
      box-shadow: inset 0 1px 0 rgb(0 0 0 / 20%);
   }

   tp-yt-paper-button.ytd-subscribe-button-renderer:active {
      background-image: linear-gradient(to top, #b01d13 0, #c6282c 100%);
      box-shadow: inset 0 1px 0 rgb(0 0 0 / 30%);
   }

   tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed] {
      background-image: linear-gradient(to top, #1c1c1c, #1c1c1c 100%);
      box-shadow: none;
      border: 1px solid #333;
   }

   html:not([dark]) tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed] {
      background-image: linear-gradient(to top, #f6f6f6 0, #fcfcfc 100%);
      border: 1px solid #ccc;
      color: #737373;
      box-shadow: none
   }

   tp-yt-paper-button.ytd-subscribe-button-renderer:active {
      background-color: #1c1c1c
   }

   tp-yt-paper-button.ytd-subscribe-button-renderer:before {
      content: ' . ..,';
      color: transparent;
      background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfl-Nn88d.png) -721px -88px;
      position: relative;
      right: 7px;
      width: 16px;
      height: 12px;
      white-space: nowrap!important;
      font-size: 12px!important;
      font-weight: normal!important;
      letter-spacing: normal!important;
   }

   /* unsubscribe */

   tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed], paper-button.ytd-subscribe-button-renderer[subscribed]:focus {
      margin-right: 0px;
   }

   tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]:before {
      background: no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfl-Nn88d.png) -898px -128px;
      
   }

   ytd-button-renderer.style-primary[is-paper-button] {
      border-color: transparent!important;
      border: 1px solid #1b7fcc;
      background: #1c1c1c;
      color: #fff;
      white-space: nowrap!important;
      font-size: 12px!important;
      font-weight: normal!important;
      letter-spacing: normal!important;
   }

   ytd-button-renderer.style-primary[is-paper-button]:hover {
      border-color: #333
   }

   ytd-button-renderer.style-primary[is-paper-button]:active {
      box-shadow: inset 0 1px 0 rgb(0 0 0 / 50%);
   }

   ytd-button-renderer.style-suggestive[is-paper-button] tp-yt-paper-button.ytd-button-renderer {
      background-image: linear-gradient(#1c1c1c, #1c1c1c);
      border-color: transparent!important;
      height: 24px;
      outline: 1px solid transparent;
      border-radius: 2px;
      box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
      text-transform: none!important;
      color: var(--yt-spec-text-secondary)!important;
      white-space: nowrap!important;
      font-size: 12px!important;
      font-weight: normal!important;
      letter-spacing: normal!important;
       border: 1px solid #333 !important;
   }

   html:not([dark]) ytd-button-renderer.style-suggestive[is-paper-button] tp-yt-paper-button.ytd-button-renderer {
      background-image: linear-gradient(to top, #f6f6f6 0, #fcfcfc 100%);
      border-color: #d3d3d3!important;
      height: 24px;
      font-size: 12px!important;
      outline: 1px solid transparent;
      border-radius: 2px;
      box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
      text-transform: none!important;
      color: var(--yt-spec-text-secondary)!important;
   }
  ytd-comments-header-renderer #label.yt-dropdown-menu, ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button {
    border-color: #333!important;
}
  html:not([dark]) ytd-comments-header-renderer #label.yt-dropdown-menu, ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button {
    border-color: #d3d3d3!important;
}
   /* like bar option - problem: also replaces the continuous play and shuffle icon with the thumb icon 
  
   ytd-toggle-button-renderer.style-scope:nth-child(1)>a:nth-child(1)>yt-icon-button:nth-child(1)>button:nth-child(1)>yt-icon:nth-child(1) {
      content: url("data:image/svg+xml,%3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' id='SVGRoot' version='1.1' transform='scale(1 -1)' viewBox='0 0 1500 1500' height='24px' width='24px'%3E%3Cdefs id='defs855'%3E%3Cstyle id='style2' /%3E%3C/defs%3E%3Cmetadata id='metadata858'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=''%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E%3Cdc:title%3E%3C/dc:title%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cg id='layer1'%3E%3Cg transform='translate(0,0.36)' data-name='Layer 2' id='Layer_2'%3E%3Cg data-name='Layer 1' id='Layer_1-2'%3E%3Cpath style='fill:%23909090' id='path6' d='M 965 1326 c-57 -57 -160 -142 -275 -226 -102 -73 -203 -149 -226 -167 -23 -18 -46 -33 -53 -33 -8 0 -11 -92 -11 -345 0 -269 3 -345 13 -345 6 0 175 -45 374 -102 200 -56 364 -100 366 -97 2 2 52 177 111 389 59 212 109 392 112 401 4 13 -35 27 -223 80 -125 35 -221 65 -213 67 22 5 119 122 149 178 20 39 25 64 25 124 1 127 -12 173 -49 168 -5 0 -51 -42 -100 -92 z' /%3E%3Cpath style='fill:%23909090' id='path8' d='M30 550 l0 -370 130 0 130 0 0 370 0 370 -130 0 -130 0 0 -370z' /%3E%3Cpath style='fill:%23909090' id='path10' d='' /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A") !important;
   }

   ytd-toggle-button-renderer.style-scope:nth-child(1)>a:nth-child(1)>yt-icon-button.style-default-active:nth-child(1)>button:nth-child(1)>yt-icon:nth-child(1) {
      content: url("data:image/svg+xml,%3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' id='SVGRoot' version='1.1' transform='scale(1 -1)' viewBox='0 0 1500 1500' height='24px' width='24px'%3E%3Cdefs id='defs855'%3E%3Cstyle id='style2' /%3E%3C/defs%3E%3Cmetadata id='metadata858'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=''%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E%3Cdc:title%3E%3C/dc:title%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cg id='layer1'%3E%3Cg transform='translate(0,0.36)' data-name='Layer 2' id='Layer_2'%3E%3Cg data-name='Layer 1' id='Layer_1-2'%3E%3Cpath style='fill:%231879c6' id='path6' d='M 965 1326 c-57 -57 -160 -142 -275 -226 -102 -73 -203 -149 -226 -167 -23 -18 -46 -33 -53 -33 -8 0 -11 -92 -11 -345 0 -269 3 -345 13 -345 6 0 175 -45 374 -102 200 -56 364 -100 366 -97 2 2 52 177 111 389 59 212 109 392 112 401 4 13 -35 27 -223 80 -125 35 -221 65 -213 67 22 5 119 122 149 178 20 39 25 64 25 124 1 127 -12 173 -49 168 -5 0 -51 -42 -100 -92 z' /%3E%3Cpath style='fill:%231879c6' id='path8' d='M30 550 l0 -370 130 0 130 0 0 370 0 370 -130 0 -130 0 0 -370z' /%3E%3Cpath style='fill:%231879c6' id='path10' d='' /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A") !important;
   }

   ytd-toggle-button-renderer.style-scope:nth-child(2)>a:nth-child(1)>yt-icon-button:nth-child(1)>button:nth-child(1)>yt-icon:nth-child(1) {
      content: url("data:image/svg+xml,%3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' id='SVGRoot' version='1.1' transform='scale(-1 1)' viewBox='0 -150 1500 1500' height='24px' width='24px'%3E%3Cdefs id='defs855'%3E%3Cstyle id='style2' /%3E%3C/defs%3E%3Cmetadata id='metadata858'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=''%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E%3Cdc:title%3E%3C/dc:title%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cg id='layer1'%3E%3Cg transform='translate(0,0.36)' data-name='Layer 2' id='Layer_2'%3E%3Cg data-name='Layer 1' id='Layer_1-2'%3E%3Cpath style='fill:%23909090' id='path6' d='M 965 1326 c-57 -57 -160 -142 -275 -226 -102 -73 -203 -149 -226 -167 -23 -18 -46 -33 -53 -33 -8 0 -11 -92 -11 -345 0 -269 3 -345 13 -345 6 0 175 -45 374 -102 200 -56 364 -100 366 -97 2 2 52 177 111 389 59 212 109 392 112 401 4 13 -35 27 -223 80 -125 35 -221 65 -213 67 22 5 119 122 149 178 20 39 25 64 25 124 1 127 -12 173 -49 168 -5 0 -51 -42 -100 -92 z' /%3E%3Cpath style='fill:%23909090' id='path8' d='M30 550 l0 -370 130 0 130 0 0 370 0 370 -130 0 -130 0 0 -370z' /%3E%3Cpath style='fill:%23909090' id='path10' d='' /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A") !important;
   }

   ytd-toggle-button-renderer.style-scope:nth-child(2)>a:nth-child(1)>yt-icon-button.style-default-active:nth-child(1)>button:nth-child(1)>yt-icon:nth-child(1) {
      content: url("data:image/svg+xml,%3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' id='SVGRoot' version='1.1' transform='scale(-1 1)' viewBox='0 -150 1500 1500' height='24px' width='24px'%3E%3Cdefs id='defs855'%3E%3Cstyle id='style2' /%3E%3C/defs%3E%3Cmetadata id='metadata858'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=''%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E%3Cdc:title%3E%3C/dc:title%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cg id='layer1'%3E%3Cg transform='translate(0,0.36)' data-name='Layer 2' id='Layer_2'%3E%3Cg data-name='Layer 1' id='Layer_1-2'%3E%3Cpath style='fill:%231879c6' id='path6' d='M 965 1326 c-57 -57 -160 -142 -275 -226 -102 -73 -203 -149 -226 -167 -23 -18 -46 -33 -53 -33 -8 0 -11 -92 -11 -345 0 -269 3 -345 13 -345 6 0 175 -45 374 -102 200 -56 364 -100 366 -97 2 2 52 177 111 389 59 212 109 392 112 401 4 13 -35 27 -223 80 -125 35 -221 65 -213 67 22 5 119 122 149 178 20 39 25 64 25 124 1 127 -12 173 -49 168 -5 0 -51 -42 -100 -92 z' /%3E%3Cpath style='fill:%231879c6' id='path8' d='M30 550 l0 -370 130 0 130 0 0 370 0 370 -130 0 -130 0 0 -370z' /%3E%3Cpath style='fill:%231879c6' id='path10' d='' /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A") !important;
   }

   */

  /* menu icon */
   #guide-button.ytd-masthead {
       margin-right:5px
   }
    #guide-button.ytd-app , #guide-icon.ytd-masthead {
       fill:transparent;
       background:no-repeat url(https://s.ytimg.com/yts/imgbin/www-hitchhiker-vflEoWid_.png) -18px -202px;
   }
   #guide-button.ytd-app:hover, #guide-icon.ytd-masthead:hover {
       background-position: -36px -370px
   }
   #guide-button.ytd-app {
       padding:0!important;
       height:23px!important;
       width:22px!important;
       margin-left:8px!important;
       margin-right:8px!important
   }
   
   /* home icon */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAAhoaGZmZmhoaGh4eHmYh3iYmJiIiIlpaPh4eHbXdth4eH6O0+XAAAAAx0Uk5TAJQFp/8Ptcwi3S/pAvLsZQAAAEJJREFUeJxjYCAGMArAWEwmzgpQZpiLSxKExVri4uIeAGZ2ugDBDBCLawuI6b0AyOR0AYMJIGEWFwYGFwcGCphEAwAS9g9mWUXrfQAAAABJRU5ErkJggg==);
       width: 20px;
       height: 20px;
   }
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/"]:hover .guide-icon.ytd-guide-entry-renderer, ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpQTFRFAAAA////ZmZm/f39/////f397u7u////////////////////////////f1ju7gAAAA50Uk5TAJAFqf+eD7QYxyTYMuQQcbMsAAAAQklEQVR4nGNgIAYwCsBYTCauClBmuotLGYTFMcXFxbMBzFztAgQ7QCyeKyCm7wEgk9cFDDaAhFlcGBhcHBgoYBINALEuEIz8W58TAAAAAElFTkSuQmCC);
       width: 20px;
       height: 20px;
   }
   
   /* explore */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/explore"] {
       display: none;
   }
   
   /* subscriptions icon */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/subscriptions"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpQTFRFAAAAgIOAiIiIp4BsnZ2dh4eHh4eHh4eHh4eHhoaGiIiIVVVVi4uLhoaGnxQEiwAAAA50Uk5TAE7/GidkoOyx0j4GfYeKF/N5AAAASklEQVR4nGNgIAIIKSkpCUCYhoKCggZgFksoEISAmWzlQFCGrqtzJgg0gJhKYKAAYaoVwZlae4rgTFu4qAZCLVxbEZhZQIxr4QAA2kYRqrDO3BAAAAAASUVORK5CYII=);
       height: 20px;
       width: 20px;
   }
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/subscriptions"]:hover .guide-icon.ytd-guide-entry-renderer, ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/subscriptions"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAH5JREFUeJxjYBgFMPD//3+/v3///scD/Eg1UAWkCQ9WIcUwIyDOJAIbEWUg0KvzgIqfEMIgdSR5myoAaPMWID5LAt5CyECSAckGQsP0HdUMBAKjd+/e8QPpRmwGk2UgEEsA8QQg/kYNA7dgM4gSA/ECQgY+IdG8J3gNHAUkAwDMuiTgroDKPQAAAABJRU5ErkJggg==);
       height: 20px;
       width: 20px;
   }
   
   /* library */

   #guide-section-title.ytd-guide-section-renderer {
       font-weight:normal;
       font-size:11px;
       height:10px;
       padding-bottom:6px!important
   }
    #guide #header yt-icon {
       display:none
   }
   #guide #header .title {
       font-size:11px!important;
       text-transform:uppercase;
   }
   #guide #header:hover .title {
       text-shadow:none!important
   }
   #guide #header .title:hover {
       text-decoration:underline;
   }
   html:not([dark]) #guide #header .title {
       color: #cc181e!important;
     font-weight: var(--ytd-tab-system_-_font-weight);
     letter-spacing: var(--ytd-tab-system_-_letter-spacing);
   }
   html[dark] #guide #header .title {
       color:#8f8f8f!important;
     font-weight: var(--ytd-tab-system_-_font-weight);
     letter-spacing: var(--ytd-tab-system_-_letter-spacing);
   }
   #guide #header #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer {
       background:transparent!important;
       min-height:0px!important;
       height:12px!important;
       padding-bottom:6px
   }
   html:not([dark]) ytd-guide-entry-renderer[active] .guide-icon.ytd-guide-entry-renderer,html:not([dark]) ytd-guide-entry-renderer[active] .title.ytd-guide-entry-renderer{
       color:#fff!important
   }

   /* history icon */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/history"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKhJREFUeJxjYBgFINDe3v6fGEy0gW1tbcuBGl7iMewlSA1Jruzs7Nza0dFxBl0cJAaSI8kwEGhoaKgDuuLLzI5yfpgYiA0SA8mRbOC0af1KIK+BXANigzCIDRIDsUk2EMnQu0hhd5dsw2CgtbXRGWYgiE2RYdhcmFueq0+JYRhJBxQpZHkbFJO40iFZsQyNUawGkpwOQYEPSsC4DATJkRRBVM/Lo4AkAACcGemuiDZzGgAAAABJRU5ErkJggg==);
       height: 20px;
       width: 20px;
   }
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/history"]:hover .guide-icon.ytd-guide-entry-renderer, ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/history"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAJlJREFUeJxjYBgFIPCfSEC0gX///l0JVP8Oj1nvQGpIdeUWID6ORfw4SI4kw6AaG4H427t37/hhYiA21OWN5BgoAcRPoC5VgeItUDEJkg2EGgoy5AZS2IHYKmQZhmSoH5KBfpQapgL1IgyA2EbkGiaBZhg8yZAVhtBYxgXIiuV9eAwkLR1CI+IsHgNvkBRBeAxCAaT6ehQQBwBPdHJ7egtCiAAAAABJRU5ErkJggg==);
       height: 20px;
       width: 20px;
   }
   
   /* your videos icon */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="https://studio.youtube.com/channel"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAOFJREFUeJztlL0Ng0AMhWlSZ5QMkU0o6KjpIlLAHSNkgkyQLbICA6RPT/hEAk8WxwWJKoolS5Z/3vnZhiT5y0cuvtiXZXny3t/run6i2PiIrQKrqvPROdf22gW0JWcN2FhMV3mRH1BsjUVBoaKd9TQ7pYeNTztdpM98tAPmZnPwaQ41QUBLaaDl0mkcLrVxaoKA9nUtmnssxCIG2DZNc0PnNr8IqF0AwGZtDr43eJyyLOWRZdkulEeMnOhS9Gx0GVZkOctnMyRPh93P5wpFOkKx8X192AZ0m09P6W/2c/hteQFIL1T2NRIk0wAAAABJRU5ErkJggg==);
       height: 20px;
       width: 20px;
   }
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="https://studio.youtube.com/channel"]:hover .guide-icon.ytd-guide-entry-renderer, ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="https://studio.youtube.com/channel"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMhJREFUeJztVDEKwzAMzNK5a96RF/g1Bj/Dz+neOT/wngdk9ujNqFKREyNsBUOm0oODkJNPkqVkmv4oiDE+AcAjAzIx6dmTNmSGhwxyhz5IMyNmNVbkwlyFpptym7KyuUo2y0rV9vnOaqRGTBIxXjMMjftyle4aetAMZfbjUCdZs4srww35Zm6jhnUV3+k2YuS01ZbLUHZr7aMXRxqc29Afilgb14uDczj62nDwsdg55xe1SBVxVQu/KzCqmTC959MruPXn8Nv4ADy6IMvnpMUsAAAAAElFTkSuQmCC);
       height: 20px;
       width: 20px;
   }
   
   /* watch later icon */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=WL"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKRJREFUeJxjYBgFyCC3PFe/ra1teXt7+0sg/QVKLweJk2RQWloaa0NDQx3QgP+4MEgepI4oAwkZhmwoUd7EphnkGmziBL0PDTMMjTM7yvmxiYPU4zUQFPCkGAhST8iFX3AZ2NnZuRWLC7+Q5UKQ16ZN61dqbW10RjOYoAuxhiHMNa2t7UnIEUcwDHHFMnq4ER3LIEDVdAgCVM8pyN6nSl4eBSQBALbqYVP/7ExDAAAAAElFTkSuQmCC) !important;
       height: 20px !important;
       width: 20px !important;
   }
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=WL"]:hover .guide-icon.ytd-guide-entry-renderer, ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=WL"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAJtJREFUeJxjYBgFyOD///9Gf//+XQmknwDxNxAN5RuRY1gjUPN/bAAq3kiSYVhNwgSEDYV6E0NnWloaKw6X4vc+NIwwwLt37/hxeH8lIRc+weE9CRziTwgZ+A2PC7dgkfpGlguhQQFypQMQ7yPahbjCEOZQIM4EYiNkiwi5EGssYzGYuFiGGkq9dAgC0DRHvZyC5n3q5OVRQDQAAOojKqlWPB/dAAAAAElFTkSuQmCC) !important;
       height: 20px !important;
       width: 20px !important;
   }
   
   /* clips */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/clips"] {
       display: none;
   }
   
   /* liked videos icon */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=LL"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKdJREFUeJxjYBgFhMDMjnL+9vb2/62tjc5UMbCtrW0KyMCGhoY6il0GNGw5yDCKDWxtbU8CGvISZhjQ4C+55bn6JBuUlpbGiuwqmGFEG4CsEcTv7OzciiyGhF+C5EDexutSdANxGPafaBeTaeByqhoIijCqGQjyLig5UdNA3N4lx0CC2Q/dQJCXcBnW0dFxBq9huAAojEAuAQU+KB+DDAJZhDcyRhYAAEDcPbd3sUY9AAAAAElFTkSuQmCC) !important;
       height: 20px !important;
       width: 20px !important;
   }
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=LL"]:hover .guide-icon.ytd-guide-entry-renderer, ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/playlist?list=LL"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAJFJREFUeJxjYBgFhMD///8l/kOAA7UMnAA1sJFil/39+3flfwQopcSwWCB+h2TYNyA2Itmgd+/e8QNdNe8/KvhGikvgAMrf8h87eAKVK8XrUiwGEgPeUdVAUERR24Wx1DTwGyjiqGYgKAXgNIxMFzqQauA3PIadxWsYLgAKI5BLgDjzPyQfH/8PyTV+ZBk4/AAAwhz1B8fVSG8AAAAASUVORK5CYII=) !important;
       height: 20px !important;
       width: 20px !important;
   }
   
   /* playlist icons */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="/playlist?list="] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEdJREFUeJxjYBgFVAXt7e3/ycH0M3Dwg9EwxAtaW9uTCCoixYsguqOj40xuea4+1QwE4pdEuZQY0NbWNmVmRzk/VQwbBbQFALwR1y4cnM8yAAAAAElFTkSuQmCC);
       height: 20px;
       width: 20px;
   }
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="/playlist?list="]:hover .guide-icon.ytd-guide-entry-renderer, ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href*="/playlist?list="] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD1JREFUeJxjYBgFVAX/yQT0M3Dwg9EwxAuADsskRhHRXoQyzwKxETUNfEeUS4kBf//+nQc0TIIqho0C2gIAaBNPMh5knQEAAAAASUVORK5CYII=);
       height: 20px;
       width: 20px;
   }
   
   /* browse channels */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/guide_builder"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAIZJREFUeJxjYBgFMDCzo5y/oaGhrqOj40xbW9sXEAaxQWIgOZIMa21tdG5vb78LxP9x4LsgNaQYhssgFEzQUJBXCLgMw6V4vQ8KH2waYfLY5EB6cBoICnRSDQTpwWkgKCaxGYQOkNWA9NDPQKp7meqRQvVkAwJUTdhohlIn6yF7n2qFw/AGAJRscqhLuHgXAAAAAElFTkSuQmCC);
       height: 20px;
       width: 20px;
   }
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/guide_builder"]:hover .guide-icon.ytd-guide-entry-renderer, ytd-guide-entry-renderer[active] #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/guide_builder"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAHdJREFUeJxjYBgFMPDu3Tv+////NwLxWSD+BsUgdiNIjiTDgJocgPjJf9wAJOdAimHEAvyGQr2Jz2UYLsXrfWiYYQAkeWygEZ+BZ8kw8Cw+A79hMwiLOmTwja4GUt3L1I0UqicbqCuol7DRDKVO1kPzPnUKh+ENAC1USA8dMiWwAAAAAElFTkSuQmCC);
       height: 20px;
       width: 20px;
   }
   
   /* yt premium */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/premium"] {
       display: none;
   }
   
   /* film */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/feed/storefront?bp=ogUCKAI%3D"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACjklEQVQ4EeWTzUuqQRSH370lhX0ohRJiZFDrvtXKiv5FFy0UAgtatojACIJoVRZlpShUVkbrovIXz4EZ7t3f3X1h3vk655nfOWcmyGazWlxc1OrqqjKZjLXl5WU/X1hY0MrKipaWlvwaPrlcztbcGB9sAiA4sOAW5+bmbBMDB8eROfaMOYg95qyzRguAodBtoHR+fl6bm5t/OaAIO+ydDb2D4o9N4FSwAGhjY8M2GKMCJ052QDd2gHw+b1C3bgpxXl9fN6dkMqnx8XGNjY1peHhYvb29CoVC6unpUX9/vyKRiEZGRswmlUr50D2Qk5gAnZqa0sHBgY6OjnRycqLLy0vd3d3p9vZWNzc3Nr64uNDZ2ZnZVSoVpdNpn1cfsisKCnDc3d3Vw8OD+LrdrvXu9/X1pefnZ+3t7Ql4LBazogBDnFWZxJKv0dFRXV9fa2trSy8vLx728/NjPNd3Oh0VCgU1Gg1LATAYFC0gXBRCHxgYsDBR12q1nCh9f3/7MYNms6nHx0dVq1UNDQ1ZygDCMoVUmhaNRi1fxWJRb29vHkLYhEpPe39/V6lU0v39vQYHB/09tByibG1tzSQD5NRyuWwKgfz5oZS1p6cn7ezs6Pz83BTCoBmQuMkfrwMglaWqr6+vxvr4+JDLnYNTlFqtpnq9bkDC9UXh4jKhpyicisJ2u63Pz0/H8D0qyTE2RMO9JHdAURlw/4ChlHxcXV1pe3vbwnIUlz/mqKXKALkRFAVfRFnIbjAzM6Pp6Wnt7+/r+PhYp6endicJH0cuOHeUA9njARweHmpyctKUUVSEBfxmZ2dtApxnx5NKJBLq6+uz58bTYxwOh20ej8fNbmJiwsKF4d693UNy8K/afwj8BRpqisFAXhQnAAAAAElFTkSuQmCC);
       height: 20px;
       width: 20px;
   }
   
   /* gaming */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/gaming"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACi0lEQVQ4EeWUu0qrURCFdxOECFbpbFLYKCIYjMb7JXc7X0SQ+AJ2thLiAwT0GVJapEinICpeg4pGEJGAKEnUdfgGJnD6050fJntm7zVr1uxLQjqd1srKihYXF7W0tKTV1VWLM5lM319eXtba2poYwS0sLKhQKGh+ft7myPG8ACELAPBJnJmZEYRzc3MWUxAMSfl83kZIwSKCQhh+AAiIAAIUZLNZA0BKIoVYx5wYbC6XM3JXyBioghFQBXKA3hokrLt6cBSEGDwxHWDgAgkE3jqKvEVP8GRU+TrqwYGhOIYfUAOISl5tcnJS4+PjpnZkZMTmKTg1NWXYRCKh6enp/h57HuJMIZVpg4UQgsrlsj4+PsR3eHioaDRq83t7e3p5edHZ2Zl2d3c1ODjY31MKotgIfc+GhobUbDaNiJ+fnx/z397edHx8rIeHB93d3enx8dGIj46ONDY2plQqZWKsZXqH3YIQ9Pn5aST1el0HBwfqdrsWX11d6fb2Vs/Pz9re3jaV19fXisVidhjsqbXsJ4zcgYEBfX19Wbv7+/va2dkxJTCirNFoaGtrSycnJxafnp4aIaLYLhMFqxv79/39rV6vp3a7rdfXV1PHz83Nje7v721EaavV0sXFheLxuJ0wHP2WeSVI5vSKxaIBIeb7/f01oz0M4qenJ9VqNW1sbCiZTPa3zFpGKpK5a640EomoVCrp/f3dSDudjrVI2+fn59rc3NTw8LBdHfL9ZRkhewfh+vr6Xy9gdnbWrkq1WjXSy8tLVSoVm0MV7UFEPtZvmQp+aR2EWp4gBzY6OmpKSJqYmLCLzTWDACHk4DtxgNADKvqfAQqZZ92r40OAAPcpyhwj+OBk/2r8Dwn/AGeOOZSHuaPrAAAAAElFTkSuQmCC);
       height: 20px;
       width: 20px;
   }
   
   /* live */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/channel/UC4R8DWoMoI7CAwX8_LjQHig"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACjklEQVQ4Ec2TP0v6URTGv1FzBArRZKg55JBCkGVmf63wBSSNhUtrUFME+hYk2poNtD1oDbLWliCwoT9DayiCPj8+B470Ahp+wvXcc+45z/Pcc+43WF5eVqFQUC6X08LCgnZ2dmy/urqqra0tbWxsaGVlxWw+n7dYNpsV56y1tTWznLEC/ihaX183YPaQ4C8tLRk4RcTIJba9vW3n5DigEwSbm5taXFy0BFSyJ+YEqEM1BdyEM24C8W+lQ0CYYQSM4t3dXbMkoAhgcnwBAii5tIQcB8MGSOYankSQYnySASAHlYB7T4lxjvVlgBSycSWwsvcCfAgzmYypIo46SB2IfK8JXAEB2OPxuGZmZkyZJ9JXJ6A1xFOplObn561Vv5UOpwxrOp1WvV7Xw8ODRkdHrSAUCmlvb0/7+/sKh8NGFASBms2marWaKUeUgwYAufTx8XG1223d3t7q6+tLZ2dnenx81M/Pj/i1Wi2Vy2Wzl5eXRhyJRIbXBTTwhwwLzL1eT9VqVf1+XycnJ+p0OgaGheTw8FDf3986PT3V8/OzpqamhjMwQBpO73BGRkbU7XZ1fn4+BBwMBnp/f9fLy4s+Pz91cHCgt7c3HR8fW2xyctKG5NMP2DBJpjYxMWHFd3d3en19VaVS0fX1tbXh4+NDjUZDR0dHenp60tXVle7v7xWNRg2QQZlC/zJ4Oslk0hIZytjYmA0gkUioVCrZUGKxmE2V1tzc3Oji4sIGBxD19g5B5i2isFgsam5uTtPT08YGGb1lcFgKyOPLmp2dtc+UmD8pA8ThbcFCMtcnRisgw2fPGZYzwPmu6T85xFh2ZXdAZ/nD9c8Rn5zfSvD9uWE5g8wAHeivbPBXQI7z/wP+A87yAxA1rz19AAAAAElFTkSuQmCC);
       height: 20px;
       width: 20px;
   }
   
   /* fashion and beauty */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ"] {
       display: none;
   }
   
   /* learning */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/channel/UCtFRv9O2AHqOZjjynzrv-xg"] {
       display: none;
   }
   
   /* sports */
   
   tp-yt-app-drawer #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer[href="/channel/UCEgdi0XIXXZ-qJOFPf4JSKw"] .guide-icon.ytd-guide-entry-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAC7klEQVQ4EW2TSyu9URTGdzIxdjcgddCh3Mv97hCKiW8gAxPfwQBlxBGDMyA+gomRDJTRGVA6yl0MFAZSDFyef79V63T8eWu391rvXs/+rWe/b+jq6lJvb6/6+vrU3d0tYtY9PT2W5x154oGBAcsxs6e/vz+9h32MMDg4mBaKxWK2yTczMxCkmJmitrY2W3vsYibY2dlpJztpe3u7hoaG1NLSYlQIcmhra2uaCtrh4eEfXbhogIoihBEdHR21mDUEZWVlamhosAPKy8uNjr0IZNqSFqQQUShIEtNSdna2ZmdndXJyopWVFW1sbCiVSml6elo5OTkm9mfLnEJ7ULLGq8rKSh0eHopncXFRVVVVKioq0tzcnOWSyaSgBcTJfA74hZAPPCwoKLDCz89PzczMqKmpyQqnpqYs//39bZ7+Seh+QMiorq62dj8+Pqx4Z2dHWVlZCiGIteexpba29jchZP7pNDY2an19XRDwfH192fz8/CwGz/v7uy4vL3V+fq6lpSXV1dXZjeM9cIHeOzo6rGUo3t7eRKs8CLs48dXVla6vr3V3d2eiZ2dnKi0tNUq3LPDVcxHMCL68vOj09FSRSESrq6t6fX3V4+Oj3TBUXAyt7u7uWq6wsNDI/K8JGOuE+fn5ur+/N+Hm5mYVFxdrbW1Nt7e3RsUBFRUVdiEcfnBwYDEaaUH880+GvwEP+URGRkZUUlKieDxuxA8PD1peXrZ37K+pqdH8/Hz6D8I62g7eu5sKwfb2tgli+sXFhRHiH54tLCxofHxcW1tbikajBoMYlCaId9wORLRJPDExoePjY93c3Jj53KqPp6cnHR0d2X4EvLsfhCT9F2TNx52bm6vNzU3t7+9rbGxMk5OT2tvbUyKRUF5entG4CDMgUAY3k9N44TEXxS+JV3jLIfX19TY43AWoyRzBkVHnBbHnsAJhYg4iRvj/Vn8JkmCTU7po5owgVN4BNZlrFzVCL/Qks1NxCC3Sged475SZNaz/AavpPaIP/0kIAAAAAElFTkSuQmCC);
       height: 20px;
       width: 20px;
   }
   
   /* other fixes */
   ytd-video-meta-block.ytd-rich-grid-media yt-formatted-string[ellipsis-truncate] a.yt-formatted-string, ytd-video-meta-block.ytd-rich-grid-media #metadata-line.ytd-video-meta-block span.ytd-video-meta-block {
       line-height:1.3em;
       font-size:11px
   }
   #video-title.ytd-rich-grid-media {
       line-height:1.3em
   }
   html:not([dark]) #guide-section-title.ytd-guide-section-renderer {
       color: #cc181e;
   }   
        
   .style-scope.ytd-guide-entry-renderer:before {content:none}
   #guide-section-title.ytd-guide-section-renderer {
       font-size: 11px !important;
       letter-spacing: 0.2px;
   }

   #sections.ytd-guide-renderer>.ytd-guide-renderer:last-child {
       display: none;
   }

   div#footer.style-scope.ytd-guide-renderer {
       display: none;
   }
   ytd-guide-section-renderer.ytd-guide-renderer:nth-of-type(3) #guide-section-title.ytd-guide-section-renderer:before {
     
   }
   ytd-guide-section-renderer.ytd-guide-renderer:nth-of-type(3) {
       border-bottom: 0px !important;
   }

   ytd-guide-section-renderer.ytd-guide-renderer:nth-of-type(3) #guide-section-title.ytd-guide-section-renderer {
      
       height: 13px;
   }

   tp-yt-paper-item.ytd-guide-entry-renderer:hover .title.ytd-guide-entry-renderer {
       color: #fff !important;
   }

   /* old Meh face for player error */

   yt-icon.yt-player-error-message-renderer {
      --iron-icon-fill-color: #ffe0;
      -ms-flex: var(--layout-flex-none_-_-ms-flex);
      -webkit-flex: var(--layout-flex-none_-_-webkit-flex);
      flex: var(--layout-flex-none_-_flex);
      height: 100px;
      width: 150px;
      background-size: 140px, 50px;
      background-repeat: no-repeat;
      background-image: url(https://s.ytimg.com/yts/img/meh7-vflGevej7.png);
      fill: transparent;
   }

   div#reason.style-scope.yt-player-error-message-renderer {
      font-size: 25px;
      text-shadow: 1px 1px 3px #7b7b7b;
   }

   #reason.yt-player-error-message-renderer::after {
      font-size: 25px;
      text-shadow: 1px 1px 3px #7b7b7b;
   }

   yt-playability-error-supported-renderers {
      display: block;
      background: linear-gradient(#383838, #141518)!important;
      -ms-flex: var(--layout-flex_-_-ms-flex)!important;
      -webkit-flex: var(--layout-flex_-_-webkit-flex)!important;
      flex: var(--layout-flex_-_flex)!important;
      -webkit-flex-basis: var(--layout-flex_-_-webkit-flex-basis)!important;
      flex-basis: var(--layout-flex_-_flex-basis)!important;
      -ms-flex-direction: var(--layout-vertical_-_-ms-flex-direction)!important;
      -webkit-flex-direction: var(--layout-vertical_-_-webkit-flex-direction)!important;
      flex-direction: var(--layout-vertical_-_flex-direction)!important;
   }

   * {
      text-transform: none;
   }
   ytd-search-filter-renderer.ytd-search-filter-group-renderer {
      padding-top: 0!important
   }

   ytd-search-filter-renderer.selected #dismiss-x.ytd-search-filter-renderer {
      padding-bottom: 5px!important;
   }

   html:not([dark]) ytd-search-filter-renderer yt-formatted-string.ytd-search-filter-renderer {
      color: #555!important;
   }

   ytd-search-filter-renderer yt-formatted-string.ytd-search-filter-renderer {
      font-size: 11px!important;
      height: 21px!important;
      font-weight: 400!important;
      width: auto;
   }

   ytd-search-filter-renderer yt-formatted-string.ytd-search-filter-renderer:hover {
      color: #fff!important;
   }

   #filter-group-name.ytd-search-filter-group-renderer {
      color: #555!important;
      padding: 0!important;
      border-bottom: none!important;
      font-size: 11px!important;
      font-weight: 500!important;
   }

   #filter-menu #button.ytd-toggle-button-renderer yt-icon {
      display: none
   }
   #button.ytd-toggle-button-renderer yt-icon.ytd-toggle-button-renderer+yt-formatted-string.ytd-toggle-button-renderer {
      border: 1px solid #3c3c3c;
      background: transparent!important;
      color:var(--yt-button-color, inherit);
      padding: 0 10px;
      border-radius: 2px;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
      padding-top: 2px!important;
      padding-bottom: 3px;
      font-size: 11px!important;
      margin-left: 0!important;
   }
   html:not([dark]) #button.ytd-toggle-button-renderer yt-icon.ytd-toggle-button-renderer+yt-formatted-string.ytd-toggle-button-renderer {
      border: 1px solid #d3d3d3!important;
      background: #f8f8f8!important;
      color: #333;
      padding: 0 10px;
      border-radius: 2px;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
      padding-top: 2px!important;
      padding-bottom: 3px;
      font-size: 11px!important;
      margin-left: 0!important;
   }
 
   #button.ytd-toggle-button-renderer yt-icon.ytd-toggle-button-renderer+yt-formatted-string.ytd-toggle-button-renderer:after {
      content: '';

      margin-left: 5px;
      border: 1px solid transparent;
      border-top-color: #333;
      border-width: 4px 4px 0;
      top: 9px;
      width: 0;
      height: 0;
      position: relative;
   }
   #button.ytd-toggle-button-renderer yt-icon.ytd-toggle-button-renderer+yt-formatted-string.ytd-toggle-button-renderer:hover {
      border-color: #333;
      background: #f0f0f0;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.10);
   }

   html:not([dark]) #button.ytd-toggle-button-renderer yt-icon.ytd-toggle-button-renderer+yt-formatted-string.ytd-toggle-button-renderer:hover {
      border-color: #c6c6c6;
      background: #f0f0f0;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.10);
   }

   yt-img-shadow.ytd-video-renderer {
      display: none
   }

   ytd-search-filter-group-renderer {
      all: unset!important;
      padding: 0 32px 0 0!important;
   }

   #filter-menu.ytd-search-sub-menu-renderer, ytd-item-section-renderer {
      border: none!important
   }

   iron-collapse {
      transition-duration: 0ms!important;
   }

   #country-code.ytd-topbar-logo-renderer {
      margin: 0 0 0 2px;
   }

   ytd-topbar-logo-renderer[is-logo-updated] #country-code.ytd-topbar-logo-renderer {
      margin: 0 0 0 2px;
   }

   ytd-thumbnail[class='style-scope ytd-video-renderer'], ytd-playlist-thumbnail[class='style-scope ytd-playlist-renderer'], ytd-thumbnail[class='style-scope ytd-radio-renderer'] {
      max-width: 250px !important;
      min-width: 100px !important;
   }

   ytd-video-renderer[use-prominent-thumbs] #channel-info.ytd-video-renderer {
      padding: 5px 0
   }

   ytd-horizontal-card-list-renderer.ytd-item-section-renderer:first-child {
      display: none
   }

   #metadata-line.ytd-video-meta-block {
      position: relative;
   }

   #description-text.ytd-video-renderer {
      position: relative;
      bottom: 0px
   }

   ytd-search[center-results] ytd-two-column-search-results-renderer.ytd-search {
      padding-right: 150px
   }

   #more.ytd-vertical-list-renderer, #all.ytd-vertical-list-renderer {
      padding-top: 5px
   }

   ytd-vertical-list-renderer {
      padding-bottom: 8px
   }

   ytd-two-column-search-results-renderer[guide-persistent-and-visible] #secondary.ytd-two-column-search-results-renderer {
      position: relative;
      left: 110px
   }

   ytd-thumbnail-overlay-playback-status-renderer {
      top: 0;
   }
   ytd-thumbnail-overlay-toggle-button-renderer {
       background: #f8f8f8;
       border-color: #c6c6c6;
       box-shadow: 0 1px 0 rgb(0 0 0 / 10%) !important;
       border-radius: 2px !important;
       position: absolute;
       top: calc(100% - 26px);
       width: 22px;
       height: 22px;
       margin: 2px;
   }
   ytd-thumbnail-overlay-toggle-button-renderer:hover {
       border-color: #d3d3d3 !important;
       background: #f0f0f0 !important;
   }
   ytd-thumbnail-overlay-toggle-button-renderer yt-icon {
       box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
       color: #7c7c7c !important;
       width: 20px;
       height: 20px;
   }
   ytd-thumbnail-overlay-toggle-button-renderer yt-icon:hover {
       color: #606060 !important;
   }
   ytd-thumbnail-overlay-toggle-button-renderer yt-icon:active {
       color: black !important;
   }
   ytd-thumbnail-overlay-time-status-renderer {
       margin: 2px;
       padding: 0 4px;
       font-size: 11px;
       background-color: #000;
       height: 14px;
       line-height: 14px;
       opacity: .75;
       border-radius: 0px;
   }

   /* old three-dot menu */

   tp-yt-paper-listbox tp-yt-paper-item yt-icon {
      display: none !important;
   }

   tp-yt-paper-item.ytd-menu-service-item-renderer {
      --paper-item-min-height: 24px;
      padding: 0 36px 0 16px;
      padding-top: 0px;
      padding-bottom: 0px;
   }

   tp-yt-paper-item.ytd-menu-service-item-renderer:hover {
      background: #444;
   }

   tp-yt-paper-item.ytd-menu-service-item-renderer:hover yt-formatted-string {
      color: white;
      opacity: 1 !important;
   }

   /* old three-dot icon */
   html[dark] yt-icon.ytd-menu-renderer {
      filter: invert(1);
   }
   
   yt-icon.ytd-menu-renderer {
      background: url(' data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAANCAYAAABsItTPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAcSURBVBhXY2RgYPgPxGDABKXBAIWDG9DHAAYGADC6Aw1aLZAXAAAAAElFTkSuQmCC') no-repeat center center;
      opacity: 0.5;
   }

   yt-icon.ytd-menu-renderer:hover {
       opacity: 0.75;
   }
   
   yt-icon.ytd-menu-renderer:active {
       opacity: 1;
   }
   
   yt-icon.ytd-menu-renderer svg {
       fill: transparent;
   }
   
   yt-icon-button.dropdown-trigger {
       height: 16px !important;
   }
   
   ytd-rich-grid-media:not([three-dot-rework]) ytd-menu-renderer.ytd-rich-grid-media {
       margin-top: 5px;
   }
   ytd-menu-renderer.ytd-video-primary-info-renderer {
       padding-bottom: 6px;
   }
  
   /* NEW COMMENTS */
   #label.ytd-pinned-comment-badge-renderer {
       color: #fff!important;
       }
   html:not([dark]) #label.ytd-pinned-comment-badge-renderer {
       color: var(--yt-spec-text-secondary)!important;
       }
   html:not([dark]) ytd-pinned-comment-badge-renderer {
       
       padding-right: 6px !important;
       padding-left: 2px !important;
       padding-top: 2px!important;
   }

   ytd-pinned-comment-badge-renderer {
       
       padding-right: 6px !important;
       padding-left: 2px !important;
       padding-top: 2px  !important;
   }

   ytd-author-comment-badge-renderer[creator] {
       background-color: #3f4c57;
       border-radius: 0px;
       padding-right: 6px!important;
       padding-left: 6px!important;
   }
   html:not([dark]) ytd-author-comment-badge-renderer[creator] {
       background-color: #dbe4eb;
       border-radius: 0px;
       padding-right: 6px!important;
       padding-left: 6px!important;
   }
   ytd-comments-header-renderer {
       padding-bottom: 20px;
       border-bottom: 1px solid #5a5a5a;
   }
   html:not([dark]) ytd-comments-header-renderer {
       padding-bottom: 20px;
       border-bottom: 1px solid #e2e2e2;
   }
   ytd-comments-header-renderer .count-text.ytd-comments-header-renderer {
       display: flex;
       font-size: 13px;
       letter-spacing: 0px;
       text-transform: uppercase !important;
   }
   html:not([dark]) ytd-comments-header-renderer .count-text.ytd-comments-header-renderer {
       display: flex;
       font-size: 13px;
       color: #555;
       letter-spacing: 0px;
       text-transform: uppercase !important;
   }
   ytd-comments-header-renderer .count-text.ytd-comments-header-renderer span:nth-of-type(1) {
       order: 2;
   }
   ytd-comments-header-renderer .count-text.ytd-comments-header-renderer span:nth-of-type(2) {
       order: 1;
       font-weight: 500;
   }
   ytd-comments-header-renderer .count-text.ytd-comments-header-renderer span:nth-of-type(2):after {
       content: "•";
       margin: 0 3px;
   }
   yt-sort-filter-sub-menu-renderer.ytd-comments-header-renderer #label-icon.yt-dropdown-menu,
   .ytd-comment-simplebox-renderer .underline.tp-yt-paper-input-container,
   div#reply-dialog.style-scope.ytd-comment-action-buttons-renderer .underline.tp-yt-paper-input-container,
   paper-ripple,
   yt-interaction {
       display: none !important;
   }
   tp-yt-paper-listbox.yt-dropdown-menu .iron-selected.yt-dropdown-menu {
   background-color: transparent!important;
   }
   
   
   #title.ytd-comments-header-renderer {
       margin-bottom: 10px;
     
   }
   #title.ytd-comments-header-renderer tp-yt-paper-listbox.yt-dropdown-menu,
   #title.ytd-comments-header-renderer tp-yt-paper-listbox.yt-dropdown-menu .iron-selected.yt-dropdown-menu {
       --paper-item-min-height: 24px;
    
   }
   #title.ytd-comments-header-renderer tp-yt-paper-listbox.yt-dropdown-menu .item.yt-dropdown-menu {
       font-size: 12px !important;
       letter-spacing: 0px;
   }
   #title.ytd-comments-header-renderer tp-yt-paper-menu-button[vertical-align=top] .dropdown-content.tp-yt-paper-menu-button {
       background-color:  var(--yt-button-color, inherit);
       border: 1px solid #3c3c3c;
       min-width: max-content;
       top: 0;
   }
   html:not([dark]) #title.ytd-comments-header-renderer tp-yt-paper-menu-button[vertical-align=top] .dropdown-content.tp-yt-paper-menu-button {
       border: 1px solid #d3d3d3;
       min-width: max-content;
       top: 0;
   
   }
   html:not([dark]) ytd-comments-header-renderer div#icon-label.style-scope.yt-dropdown-menu,
   html:not([dark]) ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button {
       color: #333;
       font-weight: 500 !important;
       font-size: 11px !important;
       text-transform: none !important;
       letter-spacing: 0px !important;
   }
   
   html:not([dark]) ytd-comments-header-renderer #label.yt-dropdown-menu,
   html:not([dark]) ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button {
       background-color: #f8f8f8!important ;
       height: 28px;
       border: solid 1px #d3d3d3!important;
       padding: 0 10px;
       border-radius: 2px;
       box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
   }
   html:not([dark]) ytd-comments-header-renderer #label.yt-dropdown-menu:hover,
   html:not([dark]) ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button:hover {
       border-color: #c6c6c6!important ;
       background: #f0f0f0!important ;
       box-shadow: 0 1px 0 rgb(0 0 0 / 10%) !important;
   }
   
   
   html:not([dark]) ytd-comments-header-renderer #label.yt-dropdown-menu:active,
   html:not([dark]) ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button:active {
       background-color: #e9e9e9 !important;
       box-shadow: inset 0 1px 0 #ddd !important;
   }
   ytd-comments-header-renderer #label.yt-dropdown-menu:after {
       content: "";
       margin-left: 5px;
       width: 0px; 
       height: 0; 
       border-left: 4px solid transparent;
       border-right: 4px solid transparent;
       border-top: 4px solid #8f8f8f;
   }
   html:not([dark]) ytd-comments-header-renderer #label.yt-dropdown-menu:after {
       content: "";
       margin-left: 5px;
   
       width: 0px; 
       height: 0; 
       border-left: 4px solid transparent;
       border-right: 4px solid transparent;
       border-top: 4px solid #333;
   }
   ytd-comments-header-renderer #label.yt-dropdown-menu,
   ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button {
       background-color: #1c1c1c;
       color: var(--yt-button-color, inherit);
       height: 30px;
       border: solid 1px #333;
       padding: 0 10px;
       border-radius: 2px;
       box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
   }
   ytd-comments-header-renderer #label.yt-dropdown-menu:hover,
   ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button:hover {
       border-color: #3c3c3c!important;
       color: var(--yt-button-color, inherit);
       box-shadow: 0 1px 0 rgb(0 0 0 / 10%) !important;
       background-color: #444;
   }
   ytd-comments-header-renderer #label.yt-dropdown-menu:active,
   ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button:active {
       background-color: #212121!important;
       box-shadow: inset 0 1px 0 #333 !important;
       color: #8F8F8F;
   }
   ytd-comments-header-renderer div#icon-label.style-scope.yt-dropdown-menu,
   ytd-button-renderer#cancel-button.style-scope tp-yt-paper-button#button {
       color: var(--yt-button-color, inherit);
       font-weight: 500 !important;
       border-color: #333!important;
       font-size: 11px !important;
       text-transform: none !important;
       letter-spacing: 0px !important;
   }
   html:not([dark]) ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button {
       background-color: #167ac6 !important;
       color: #fff !important;
       height: 28px !important;
       border: solid 1px #167ac6;
       padding: 0 10px !important;
       font-weight: 500 !important;
       font-size: 11px !important;
       text-transform: none !important;
       letter-spacing: 0 !important;
       border-radius: 2px !important;
       box-shadow: 0 1px 0 rgb(0 0 0 / 5%) !important;
   }
   ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button {
       background-color: var(--yt-spec-call-to-action);
       color: var(--yt-spec-text-primary-inverse);
       height: 28px !important;
       border: solid 1px var(--yt-spec-badge-chip-background);
       padding: 0 10px !important;
       font-weight: 500 !important;
       font-size: 11px !important;
       text-transform: none !important;
       letter-spacing: 0 !important;
       border-radius: 2px !important;
       box-shadow: 0 1px 0 rgb(0 0 0 / 5%) !important;
   }
   html:not([dark]) ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button:hover {
       background: #126db3 !important;
   }
   
   ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button:hover {
       background-color: var(--yt-spec-call-to-action);
       color: var(--yt-spec-text-primary-inverse);
   }
   html:not([dark]) ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button:active {
       background: #095b99 !important;
       box-shadow: inset 0 1px 0 rgb(0 0 0 / 50%) !important;
   }
   ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button:active {
       background-color: var(--yt-spec-call-to-action);
       color: var(--yt-spec-text-primary-inverse);
   }
   html:not([dark]) ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button[disabled] {
       border-color: #7fb7e0!important ;
       background: #7fb7e0 !important;
   }
   ytd-button-renderer#submit-button.style-scope tp-yt-paper-button#button[disabled] {
        background-color: var(--yt-spec-badge-chip-background)!important;
        color: var(--yt-spec-text-disabled)!important;
   }
   ytd-comment-simplebox-renderer #author-thumbnail.ytd-comment-simplebox-renderer,
   #author-thumbnail.ytd-commentbox,
   ytd-commentbox[is-backstage-comment] #author-thumbnail.ytd-commentbox,
   ytd-comment-simplebox-renderer img#img.style-scope.yt-img-shadow {
       height: min-content;
       width: 48px;
   }
   ytd-comment-action-buttons-renderer ytd-comment-reply-dialog-renderer.ytd-comment-action-buttons-renderer img#img.style-scope.yt-img-shadow,
   ytd-commentbox[is-reply] #author-thumbnail.ytd-commentbox {
       height: 32px !important;
       width: 32px !important;
   }
   html:not([dark]) #placeholder-area.ytd-comment-simplebox-renderer, html:not([dark]) 
   .ytd-comment-simplebox-renderer .input-content.tp-yt-paper-input-container,
   html:not([dark]) div#reply-dialog.style-scope.ytd-comment-action-buttons-renderer .input-content.tp-yt-paper-input-container {
       border: 1px solid #ddd;
       border-top: 1px solid #d5d5d5;
       color: #b8b8b8;
       cursor: pointer;
       min-height: 35px;
       border-radius: 0 2px 2px 2px;
       padding: 8px 10px 5px;
       width: 0;
       background-color:transparent!important;
   }
   #placeholder-area.ytd-comment-simplebox-renderer,
   .ytd-comment-simplebox-renderer .input-content.tp-yt-paper-input-container,
   div#reply-dialog.style-scope.ytd-comment-action-buttons-renderer .input-content.tp-yt-paper-input-container {
       border: 1px solid #5a5a5a;
       border-top: 1px solid #5a5a5a;
       color: var(--paper-input-container-input-color, var(--primary-text-color));
       cursor: pointer;
       min-height: 35px;
       border-radius: 0 2px 2px 2px;
       padding: 8px 10px 5px;
       width: 0;
       background-color:#1c1c1c;
      
   }
   html:not([dark]) #placeholder-area.ytd-comment-simplebox-renderer:focus, html:not([dark]) 
   .ytd-comment-simplebox-renderer .input-content.tp-yt-paper-input-container, 
   html:not([dark]) div#reply-dialog.style-scope.ytd-comment-action-buttons-renderer .input-content.tp-yt-paper-input-container {
       border: 1px solid #699dd2 ;
       border-top: 1px solid #699dd2 ;
       border-radius: 0 2px 2px 2px;
       
   }
   #placeholder-area.ytd-comment-simplebox-renderer:focus,
   .ytd-comment-simplebox-renderer .input-content.tp-yt-paper-input-container,
   div#reply-dialog.style-scope.ytd-comment-action-buttons-renderer .input-content.tp-yt-paper-input-container {
      
       border: 1px solid #5a5a5a ;
       border-top: 1px solid #5a5a5a ;
       border-radius: 0 2px 2px 2px;
   }
   #contenteditable-root.yt-formatted-string[aria-label].yt-formatted-string,
   #simplebox-placeholder.ytd-comment-simplebox-renderer {
       font-size: 13px !important;
       letter-spacing: 0px;
   }
   
   ytd-comments-header-renderer div#placeholder-area:before {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRF6urq1dXVAAAA////mznMegAAAAR0Uk5T//8A//4MuwsAAAAuSURBVHicDcMxDQBACATBc0D1elCBIoxQAib5nWT0IpR3Kraf1pgstmvXmCzOBx6TFq6sX+dfAAAAAElFTkSuQmCC);
       z-index: 1;
       float: left;
       margin-right: -11px;
       margin-left: -22px;
       margin-top: -9px;
       filter:invert(94.5%) grayscale(1) brightness(200%);
   }
   
   html:not([dark]) ytd-comments-header-renderer div#placeholder-area:before {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRF6urq1dXVAAAA////mznMegAAAAR0Uk5T//8A//4MuwsAAAAuSURBVHicDcMxDQBACATBc0D1elCBIoxQAib5nWT0IpR3Kraf1pgstmvXmCzOBx6TFq6sX+dfAAAAAElFTkSuQmCC);
       z-index: 1;
       float: left;
       margin-right: -11px;
       margin-left: -22px;
       margin-top: -9px;
       filter: none;
   }
   html[dark] ytd-comments-header-renderer div.input-wrapper.style-scope.tp-yt-paper-input-container:before,
   html[dark] #action-buttons.ytd-comment-renderer div.input-wrapper.style-scope.tp-yt-paper-input-container:before {

       filter: invert(89.5%) grayscale(1) brightness(100%);
   }
   ytd-comments-header-renderer div.input-wrapper.style-scope.tp-yt-paper-input-container:before,
   #action-buttons.ytd-comment-renderer div.input-wrapper.style-scope.tp-yt-paper-input-container:before {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRFaZzSaZ3SAAAA////cFz/SQAAAAR0Uk5To/8A/3/XCxEAAAAtSURBVHicDcMxDQBACATBM/E1qtBDiQ66Cyb5nWT0MtV3GrpOG2wOXdoNNof+L3wXXNQlZQ4AAAAASUVORK5CYII=);
       z-index: 1;
       position: absolute;
       width: 11px;
       height: 11px;
       top: 0%;
       right: 100%;
       filter: invert(0) grayscale(0) brightness(100%);
   }
   ytd-comments.style-scope div#contents.style-scope.ytd-item-section-renderer {
           margin-top: 36px !important;
   }
   ytd-comments.style-scope {
       border: 0;
       background: #fff;
       box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
       -moz-box-sizing: border-box;
       box-sizing: border-box;
       padding: 15px;
   }
   ytd-comments-header-renderer.style-scope.ytd-item-section-renderer {
       margin: 0 !important;
  }
   ytd-comment-thread-renderer tp-yt-paper-tooltip.ytd-toggle-button-renderer.ytd-toggle-button-renderer,
   ytd-comment-thread-renderer yt-interaction {
       display: none !important;
   }
   #author-thumbnail.ytd-comment-renderer yt-img-shadow.ytd-comment-renderer {
       margin-right: 10px !important;
       height: 48px !important;
       width: 48px !important;
   }
   ytd-comment-renderer:not([comment-style=backstage-comment])[is-reply] #author-thumbnail.ytd-comment-renderer yt-img-shadow.ytd-comment-renderer,
   ytd-comment-renderer[is-creator-reply] #author-thumbnail.ytd-comment-renderer yt-img-shadow.ytd-comment-renderer {
       height: 32px !important;
       width: 32px !important;
   }
   ytd-author-comment-badge-renderer:not([creator]) #icon.ytd-author-comment-badge-renderer,
   ytd-author-comment-badge-renderer[creator] #icon.ytd-author-comment-badge-renderer {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdQTFRFnJycmpqah4eHs7OziIiIz8/PyMjI5OTko6Oj8PDw/////f39jo6OcQxNSQAAAA10Uk5TVbSdubDh0eHD////wP+/OHAAAAA0SURBVHicY2AUFBRUFGAAkoKGgkBKRDQRRDmWCwKp9vSJIEpstQmIEgwTBFMHQRRIn6AAAOTgB5X8AsHIAAAAAElFTkSuQmCC);
       width: 12px!important;
       height: 9px!important;
       
   }
   ytd-author-comment-badge-renderer:not([creator]) #icon.ytd-author-comment-badge-renderer:hover,
   ytd-author-comment-badge-renderer[creator] #icon.ytd-author-comment-badge-renderer:hover {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFQ5DaYqPnS6LfhrXsrdb1xd33yNPjQI/O5ebn////9vb2pbjU4GAmaAAAAAx0Uk5Tbv79////+v/+///363aeKQAAADtJREFUeJxjYBQUFFQUYACRhoIMSkpKKkZKDEqKSmFFQErFtF0JSBXPUgdR6puLQJRSOVAVAxOQUFIAAAsGCYbgx0ruAAAAAElFTkSuQmCC);
       width: 12px!important;
       height: 9px!important;
   }
   .ytd-sponsor-comment-badge-renderer {
       padding-left: 2px;
       margin-right: -2px;
   }
   #header.ytd-comment-renderer,
   ytd-author-comment-badge-renderer {
       margin-top: -1px !important;
       margin-bottom: 1px !important;
   }
   #author-comment-badge.ytd-comment-renderer,
   ytd-author-comment-badge-renderer:not([creator]) #icon.ytd-author-comment-badge-renderer {
       padding-right: 0 !important;
   }
   html:not([dark]) #author-text.yt-simple-endpoint.ytd-comment-renderer,
   #channel-name.ytd-author-comment-badge-renderer {
       color: rgb(18, 142, 233) !important;
       margin-right: 0px !important;
       letter-spacing: 0px !important;
   }
   html:not([dark]) #author-text.yt-simple-endpoint.ytd-comment-renderer:hover,
   #channel-name.ytd-author-comment-badge-renderer:hover,
   #content-text.ytd-comment-renderer a.yt-simple-endpoint.yt-formatted-string:hover,
   #message.ytd-message-renderer a:hover {
       text-decoration: underline !important;
       text-decoration-color: rgb(18, 142, 233) !important;
   }
   
   #author-text.yt-simple-endpoint.ytd-comment-renderer:hover,
   
   #content-text.ytd-comment-renderer a.yt-simple-endpoint.yt-formatted-string:hover,
   #message.ytd-message-renderer a:hover {
       text-decoration: underline !important;
       text-decoration-color: #fff !important;
   }
   
   .published-time-text.ytd-comment-renderer a {
       color: rgb(118, 118, 118) !important;
       font-size: 11px !important;
       margin-left: 6px !important;
       letter-spacing: 0px !important;
   }
   .published-time-text.ytd-comment-renderer a:hover {
       text-decoration: underline !important;
       text-decoration-color: rgb(118, 118, 118) !important;
   }
   #content-text.ytd-comment-renderer,
   #expander.ytd-comment-replies-renderer #content.ytd-expander,
   #message.ytd-message-renderer {
       font-size: 13px !important;
       line-height: 1.3em !important;
       letter-spacing: 0px !important;
   }
   #content-text.ytd-comment-renderer a.yt-simple-endpoint.yt-formatted-string {
       color: rgb(18, 142, 233) !important;
   }
   div#toolbar.style-scope.ytd-comment-action-buttons-renderer {
       margin-top: 6px;
       margin-bottom: 10px;
       margin-left: 0px;
       height: 13px;
   }
   #vote-count-left.ytd-comment-action-buttons-renderer[hidden] + #like-button.ytd-comment-action-buttons-renderer {
       margin-left: -4px!important;
   }
   #toolbar.ytd-comment-action-buttons-renderer tp-yt-paper-button.ytd-button-renderer:after {
       content: "•";
       margin: 0 5px !important;
   }
   #toolbar.ytd-comment-action-buttons-renderer tp-yt-paper-button.ytd-button-renderer:hover {
       opacity: 1 !important;
       text-decoration: none !important;
   }
   #toolbar.ytd-comment-action-buttons-renderer tp-yt-paper-button.ytd-button-renderer {
       order: 1;
       text-transform: none !important;
       line-height: 1.3em !important;
       margin-left: -18px !important;
       padding-right: 0px !important;
       font-weight: normal !important;
       color: #848484 !important;
       opacity: 1 !important;
   }
   
   html:not([dark]) #toolbar.ytd-comment-action-buttons-renderer tp-yt-paper-button.ytd-button-renderer {
       order: 1;
       text-transform: none !important;
       line-height: 1.3em !important;
       margin-left: -18px !important;
       padding-right: 0px !important;
       font-weight: normal !important;
       color: #555 !important;
       opacity: .75 !important;
   }
   #vote-count-middle.ytd-comment-action-buttons-renderer {
       order: 2;
       color: #128ee9 !important;
       padding-right: 6px !important;
       font-size: 9pt !important;
   }
   html:not([dark]) #like-button.ytd-comment-action-buttons-renderer {
       order: 3;
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAAGRkZMzMzAAAACgoKGhoaEhISMTExMDAwAAAAAAAAGhoaAAAAIiIiHBwcHh4eLi4uERERAAAAKysrHBwcAwMDAAAAAAoKKSkpLS0tIiIidpjREQAAABt0Uk5TAHv/KE4oV/fzCAGABqeJn+BcG9eRSQkay+asp6oxLwAAAFBJREFUeJxVzkkSgCAQQ9EQURREnKf7H9Sxi+q/ytsFkAwL5CxZZlWOdSPwhmQQtfFW5595DyT+9S9FTJqD5qg4QXHWXBTd+t3YbIj74U7gArqRAmr4tybqAAAAAElFTkSuQmCC);
       width: 14px;
       height: 14px;
       opacity: .54;
       margin-right: 9px;
       cursor: pointer;
   }
    #like-button.ytd-comment-action-buttons-renderer {
       order: 3;
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAAGRkZMzMzAAAACgoKGhoaEhISMTExMDAwAAAAAAAAGhoaAAAAIiIiHBwcHh4eLi4uERERAAAAKysrHBwcAwMDAAAAAAoKKSkpLS0tIiIidpjREQAAABt0Uk5TAHv/KE4oV/fzCAGABqeJn+BcG9eRSQkay+asp6oxLwAAAFBJREFUeJxVzkkSgCAQQ9EQURREnKf7H9Sxi+q/ytsFkAwL5CxZZlWOdSPwhmQQtfFW5595DyT+9S9FTJqD5qg4QXHWXBTd+t3YbIj74U7gArqRAmr4tybqAAAAAElFTkSuQmCC);
       width: 14px;
       height: 14px;
       opacity: 1;
       margin-right: 9px;
       cursor: pointer;
       filter: brightness(2);
   }
   
   #like-button.ytd-comment-action-buttons-renderer:hover {
       opacity: 1;
       filter: brightness(3);
   }
   html:not([dark]) #like-button.ytd-comment-action-buttons-renderer:hover {
       opacity: .6;
   }
    #like-button.ytd-comment-action-buttons-renderer.style-default-active {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFpQTFRFAAAAIUB3QYTzBhgrFCtLQYPxQoX0BwcOFyxSP4DsPn7pAAAAAAAAH0B2IkR6K1egJEWBKFKYOXPVEzFaAAoKN2/OJUyLFCVHAAAAFBQUIkN7NGnDO3jcLFqlDo2PIwAAAB50Uk5TAHz+Kk78/yRX+PMGAXuAp4if314a15FLCRqBzOas5Dk6uwAAAFNJREFUeJxVzkkSgCAQQ9EWMYqgiPN4/2sqahfVf5W3CxGXqZxSukCZVBnUluEaBbQs6wF0Ls5nUMBf/5KFIDlIjoITCc6Si6BZvxub3v1xmovoBlQiBENPyrYVAAAAAElFTkSuQmCC);
       width: 14px;
       height: 14px;
       opacity: 1;
       filter: brightness(1);
   }
   html:not([dark]) #like-button.ytd-comment-action-buttons-renderer.style-default-active {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFpQTFRFAAAAIUB3QYTzBhgrFCtLQYPxQoX0BwcOFyxSP4DsPn7pAAAAAAAAH0B2IkR6K1egJEWBKFKYOXPVEzFaAAoKN2/OJUyLFCVHAAAAFBQUIkN7NGnDO3jcLFqlDo2PIwAAAB50Uk5TAHz+Kk78/yRX+PMGAXuAp4if314a15FLCRqBzOas5Dk6uwAAAFNJREFUeJxVzkkSgCAQQ9EWMYqgiPN4/2sqahfVf5W3CxGXqZxSukCZVBnUluEaBbQs6wF0Ls5nUMBf/5KFIDlIjoITCc6Si6BZvxub3v1xmovoBlQiBENPyrYVAAAAAElFTkSuQmCC);
       width: 14px;
       height: 14px;
       opacity: 1;
     
   }
    #dislike-button.ytd-comment-action-buttons-renderer {
       order: 4;
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAAIiIiMTExLS0tKSkpIiIiGhoaCgoKAAoKAAAAMzMzAwMDHBwcKysrAAAAERERHh4eLi4uAAAAHBwcAAAAGRkZAAAAMDAwEhISGhoaAAAA6t4PpwAAABt0Uk5TAKz35sungE4aCf9JkdcbXJ/gAYkGewjzVygoDkXByQAAAFNJREFUeJxVzEkOgCAQRNESBbScEMXp/gcVBzD9k07qbRpAocpKG1vjqVF8w31oKdhJ9oIDBUdJJzklufcV4Oc49IIvExV80rpR7cgdpP2FkyHvC2y7BYuVtnTFAAAAAElFTkSuQmCC);
       width: 14px;
       height: 14px;
       opacity: 1;
       cursor: pointer;
      filter: brightness(2);
      
   }
   html:not([dark]) #dislike-button.ytd-comment-action-buttons-renderer {
       order: 4;
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAAIiIiMTExLS0tKSkpIiIiGhoaCgoKAAoKAAAAMzMzAwMDHBwcKysrAAAAERERHh4eLi4uAAAAHBwcAAAAGRkZAAAAMDAwEhISGhoaAAAA6t4PpwAAABt0Uk5TAKz35sungE4aCf9JkdcbXJ/gAYkGewjzVygoDkXByQAAAFNJREFUeJxVzEkOgCAQRNESBbScEMXp/gcVBzD9k07qbRpAocpKG1vjqVF8w31oKdhJ9oIDBUdJJzklufcV4Oc49IIvExV80rpR7cgdpP2FkyHvC2y7BYuVtnTFAAAAAElFTkSuQmCC);
       width: 14px;
       height: 14px;
       opacity: .54;
       cursor: pointer;
     
   }
   html:not([dark]) #dislike-button.ytd-comment-action-buttons-renderer:hover {
       opacity: .6;
       
   }
   #dislike-button.ytd-comment-action-buttons-renderer:hover {
       opacity: 1;
     filter: brightness(3);
   }
   html:not([dark])  #dislike-button.ytd-comment-action-buttons-renderer.style-default-active {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFpQTFRFAAAALFqlP4DsO3jcNGnDK1egIkN7FCtLFBQUAAAAQoX0FCVHJUyLN2/OAAoKEzFaKFKYOXPVAAAAJEWBAAAAIkR6QYTzH0B2Pn7pFyxSBwcOQYPxBhgrIUB3PiVdqQAAAB50Uk5TAKz45syngU4aCf9LkdcaXp/fAYgGgP5781ck/Cp82XTnmAAAAFVJREFUeJxVzNkOgCAMRNERRbQuICLu//+bLgimN2ky56UAMpEXslQV3mpBITyHhhhbzo6xJ0bNaTiHKBNeAXa8h3T4moj8bKPcQmJFaqNd/cLhz7QvdZIF0DY8ddEAAAAASUVORK5CYII=);
       width: 14px;
       height: 14px;
       opacity: 1;
      
   }
   #dislike-button.ytd-comment-action-buttons-renderer.style-default-active {
       content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFpQTFRFAAAALFqlP4DsO3jcNGnDK1egIkN7FCtLFBQUAAAAQoX0FCVHJUyLN2/OAAoKEzFaKFKYOXPVAAAAJEWBAAAAIkR6QYTzH0B2Pn7pFyxSBwcOQYPxBhgrIUB3PiVdqQAAAB50Uk5TAKz45syngU4aCf9LkdcaXp/fAYgGgP5781ck/Cp82XTnmAAAAFVJREFUeJxVzNkOgCAMRNERRbQuICLu//+bLgimN2ky56UAMpEXslQV3mpBITyHhhhbzo6xJ0bNaTiHKBNeAXa8h3T4moj8bKPcQmJFaqNd/cLhz7QvdZIF0DY8ddEAAAAASUVORK5CYII=);
       width: 14px;
       height: 14px;
       opacity: 1;
       filter: brightness(1);
   }
   .ytd-comment-action-buttons-renderer:nth-of-type(2),
   #hearted-thumbnail.ytd-creator-heart-renderer {
       order: 5;
      
   }
   tp-yt-paper-button.ytd-expander .more-button.ytd-comment-renderer,
   .less-button.ytd-comment-renderer,
   ytd-comment-replies-renderer #button.ytd-button-renderer yt-icon.ytd-button-renderer + yt-formatted-string.ytd-button-renderer {
       letter-spacing: 0 !important;
       font-size: 13px !important;
       color: #2793e6 !important;
       text-transform: none !important;
   }
   html[lang="en"] tp-yt-paper-button.ytd-expander .more-button.ytd-comment-renderer,
   html[lang="en"] .less-button.ytd-comment-renderer,
   html[lang="en"] ytd-comment-replies-renderer #button.ytd-button-renderer yt-icon.ytd-button-renderer + yt-formatted-string.ytd-button-renderer span:nth-of-type(1):after {
       content: " all ";
   }
   ytd-comment-replies-renderer #less-replies.ytd-comment-replies-renderer,
   ytd-comment-replies-renderer #more-replies.ytd-comment-replies-renderer {
       margin-top: -5px !important;
       margin-left: -6px !important;
       letter-spacing: 0px !important;
       color: #2793e6 !important;
       font-size: 13px !important;
   }
   ytd-comment-replies-renderer #more-replies.ytd-comment-replies-renderer:hover {
       text-decoration: underline;
       text-decoration-color: #2793e6 !important;
   }
   
   ytd-comment-replies-renderer ytd-button-renderer[is-paper-button] yt-icon.ytd-button-renderer {
       order: 2;
       margin-left: 5px;
       margin-top: 2px;
   }
   ytd-comment-replies-renderer #more-replies.ytd-comment-replies-renderer yt-icon.ytd-button-renderer {
      fill: transparent;
      background: url(https://s.ytimg.com/yts/imgbin/www-comments-vflNbz94j.png) -152px -20px / auto no-repeat;
      opacity: 0.7;
      filter: invert(1)
  }
   ytd-comment-replies-renderer #less-replies.ytd-comment-replies-renderer yt-icon.ytd-button-renderer {
      fill: transparent;
      background: url(https://s.ytimg.com/yts/imgbin/www-comments-vflNbz94j.png) -152px -72px / auto no-repeat;
      opacity: 0.7;
      filter: invert(1)
   }
   html:not([dark]) ytd-comment-replies-renderer #more-replies.ytd-comment-replies-renderer yt-icon.ytd-button-renderer {
      fill: transparent;
      background: url(https://s.ytimg.com/yts/imgbin/www-comments-vflNbz94j.png) -152px -20px / auto no-repeat;
      opacity: 0.7;
      filter: invert(0)
  }
   html:not([dark]) ytd-comment-replies-renderer #less-replies.ytd-comment-replies-renderer yt-icon.ytd-button-renderer {
      fill: transparent;
      background: url(https://s.ytimg.com/yts/imgbin/www-comments-vflNbz94j.png) -152px -72px / auto no-repeat;
      opacity: 0.7;
      filter: invert(0)
   }
  
   #contents.ytd-comment-replies-renderer #body.ytd-comment-renderer {
       margin-bottom: -2px;
   }
   #body.ytd-comment-renderer:not(:hover) ytd-menu-renderer.ytd-comment-renderer:not([menu-active]).ytd-comment-renderer:not(:focus-within) {
       opacity: initial;
   }
   html:not([dark]) yt-icon.ytd-menu-renderer {
       opacity: 0.3;
   }
   tp-yt-paper-spinner.ytd-continuation-item-renderer {
       content: url(data:image/gif;base64,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);
       width: auto;
       height: auto;
       filter: invert(100%) contrast(75%);
   }
      html:not([dark]) tp-yt-paper-spinner.ytd-continuation-item-renderer {
       content: url(data:image/gif;base64,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);
       width: auto;
       height: auto;
        filter: none !important;
   }
   
   ytd-continuation-item-renderer.ytd-comment-replies-renderer {
       width:84px;
       padding-top:0;
       padding-bottom:0;
       height:0;
       margin:0
   }
   #button.ytd-continuation-item-renderer ytd-button-renderer.ytd-continuation-item-renderer yt-icon {
       display:none
   }
   #button.ytd-continuation-item-renderer #button.ytd-button-renderer yt-icon.ytd-button-renderer + yt-formatted-string.ytd-button-renderer {
       font-size:0!important
   }
   #button.ytd-continuation-item-renderer #button.ytd-button-renderer yt-icon.ytd-button-renderer + yt-formatted-string.ytd-button-renderer:after {
       content:"View more comments";
       font-size:13px!important;
       line-height:13px;
   }
   #button.ytd-continuation-item-renderer #button.ytd-button-renderer yt-icon.ytd-button-renderer + yt-formatted-string.ytd-button-renderer, ytd-comment-replies-renderer * > ytd-button-renderer yt-formatted-string.ytd-button-renderer:hover {
       text-decoration:none!important
   }
   #button.ytd-continuation-item-renderer #button.ytd-button-renderer yt-icon.ytd-button-renderer + yt-formatted-string.ytd-button-renderer:hover:after {
       text-decoration:underline!important
   }
   .more-button.ytd-comment-renderer, .less-button.ytd-comment-renderer {
       font-weight:400!important
   }

   ytd-comment-thread-renderer {
       padding-bottom: 5px;
   }

   #contents.ytd-comment-replies-renderer ytd-comment-renderer:last-of-type {
       padding-bottom: 11px;
   }

   #contents.ytd-comment-replies-renderer #button.ytd-continuation-item-renderer {
       margin-top: -11px;
   }

   #expander.ytd-comment-replies-renderer {
       margin-bottom: -4px;
   }
   ytd-comment-replies-renderer #less-replies.ytd-comment-replies-renderer,
   ytd-comment-replies-renderer #more-replies.ytd-comment-replies-renderer {
       margin-top: -6px !important;
       margin-left: -6px !important;
       letter-spacing: 0px !important;
       color: #2793e6 !important;
       font-size: 13px !important;
   }

  /* channel header */

   #wrapper.tp-yt-app-header-layout > [slot=header] {
       position: unset !important;
       transform: none !important;
       margin: 0;
   }
   #background.tp-yt-app-header, #backgroundRearLayer.tp-yt-app-header, #backgroundFrontLayer.tp-yt-app-header {
       transform: none !important;
   }
   #contentContainer.tp-yt-app-header-layout {
       display: none;
   }
   #contenteditable-root.yt-formatted-string{
    cursor:auto;
   }
   #placeholder-area.ytd-comment-simplebox-renderer:focus, .ytd-comment-simplebox-renderer .input-content.tp-yt-paper-input-container{
    cursor:default;
   }

  /* hitchhiker search */

.gsok_a {
 background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center!important;
 display:inline-block!important;
 height:11px!important;
 line-height:0!important;
 width:19px!important;
}
.gsok_a img {
 border:none!important;
 visibility:hidden!important;
}
.gsst_a {
 display:inline-block!important;
}
.gsst_a {
 cursor:pointer;
 padding:0 4px!important;
}
.gsst_a:hover {
 text-decoration:none!important
}
.gsst_b {
 font-size:16px!important;
 padding:0 2px!important;
 position:relative!important;
 user-select:none!important;
 white-space:nowrap!important
}
.gsst_e {
 vertical-align:middle!important;
 opacity:0.6!important;
}
.gsst_a:hover .gsst_e,
.gsst_a:focus .gsst_e {
 opacity:0.8!important;
}
.gsst_a:active .gsst_e {
 opacity:1!important;
}
.sbib_a {
 background:#fff!important;
 box-sizing:border-box!important;
}
.sbib_b {
 box-sizing:border-box!important;
 height:100%!important;
 overflow:hidden!important;
 padding:5px 9px 0!important
}
.sbib_c[dir=ltr] {
 float:right!important
}
.sbib_c[dir=rtl] {
 float:left!important
}
.sbib_d {
 box-sizing:border-box!important;
 height:100%!important;
 unicode-bidi:embed!important;
 white-space:nowrap!important
}
.sbib_d[dir=ltr] {
 float:left!important
}
.sbib_d[dir=rtl] {
 float:right!important
}
.sbib_a,
.sbib_c {
 vertical-align:top!important
}
.sbdd_a {
 z-index:989!important
}
.sbdd_a[dir=ltr] .fl,
.sbdd_a[dir=rtl] .fr {
 float:left
}
.sbdd_a[dir=ltr] .fr,
.sbdd_a[dir=rtl] .fl {
 float:right
}
.sbdd_b {
 background:#fff!important;
 border:1px solid #ccc!important;
 border-top-color:#d9d9d9!important;
 box-shadow:0 2px 4px rgba(0,0,0,0.2)!important;
 cursor:default!important
}
.sbdd_c {
 border:0!important;
 display:block!important;
 position:absolute!important;
 top:0!important;
 z-index:988!important
}
.sbpqs_a {
 color:#52188c!important
}
.sbdd_a[dir=ltr] .sbpqs_a {
 padding-right:8px!important
}
.sbdd_a[dir=rtl] .sbpqs_a {
 padding-left:8px!important
}
.sbdd_a[dir=ltr] .sbpqs_b {
 padding-right:3px!important
}
.sbdd_a[dir=rtl] .sbpqs_b {
 padding-left:3px!important
}
.sbpqs_c {
 color:#666!important;
 line-height:22px!important
}
.gspr_a {
 padding-right:1px!important
}
.sbsb_c[dir=ltr] .sbqs_a {
 float:right!important
}
.sbsb_c[dir=rtl] .sbqs_a {
 float:left!important
}
.sbqs_b {
 visibility:hidden!important
}
.sbsb_d .sbqs_b {
 visibility:visible!important
}
.sbsb_c[dir=ltr] .sbqs_b {
 padding-left:5px!important;
}
.sbsb_c[dir=rtl] .sbqs_b {
 padding-right:5px!important;
}
.sbqs_c {
 word-wrap:break-word!important
}
.sbsb_a {
 background:#fff!important
}
.sbsb_b {
 list-style-type:none!important;
 margin:0!important;
 padding:0!important
}
.sbsb_c {
 line-height:22px!important;
 overflow:hidden!important;
 padding:0 10px!important
}
.sbsb_d {
 background:#eee!important
}
.sbsb_e {
 height:1px!important;
 background-color:#e5e5e5!important
}
#sbsb_f {
 font-size:11px!important;
 color:#36c!important;
 text-decoration:none!important
}
#sbsb_f:hover {
 font-size:11px!important;
 color:#36c!important;
 text-decoration:underline!important
}
.sbsb_g {
 text-align:center!important;
 padding:8px 0 7px!important;
 position:relative!important
}
.sbsb_h {
 font-size:15px!important;
 height:28px!important;
 margin:0.2em!important
}
.sbsb_i {
 font-size:13px!important;
 color:#36c!important;
 text-decoration:none!important;
 line-height:100%!important
}
.sbsb_i:hover {
 text-decoration:underline!important
}
.sbsb_j {
 padding-top:1px 0 2px 0!important;
 font-size:11px!important
}
.sbdd_a[dir=ltr] .sbsb_j {
 padding-right:4px!important;
 text-align:right!important
}
.sbdd_a[dir=rtl] .sbsb_j {
 padding-left:4px!important;
 text-align:left!important
}
.gsfi {
 font-size:16px!important;
 height:100% !important
}
.sbib_b .gsfi {
 position:relative !important
}
.gsfs {
 font-size:16px!important
}
a.sbsb_i {
 font-size:12px!important;
 color:#03c
}
.sbdd_c {
 z-index:2000000006!important
}
.sbdd_a {
 z-index:2000000007!important
}
.sbsb_c,
.sbsb_c td {
 line-height:20px!important
}
.sbsb_c {
 padding:0 6px!important
}
.sbsb_d td {
 background:#eee!important
}
.sbsb_e {
 margin:2px 0!important
}
.sbib_a {
 background:transparent!important
}
.sbib_b {
 padding:2px 6px!important
}
.gsok_a {
 padding:0!important
}
.gsok_a img {
 display:block!important
}

.sbfl_a {
    display:none!important
}

.sbdd_a {
    top:38.5px!important
}
.sbdd_c {
    top:38.5px!important
}

.sbsb_a {
    padding-top:0px!important
}

.gstl_50.sbdd_a {
    width:auto;!important
    margin-top:-1px!important;
}

.sbdd_c {
    display:none!important
}
`);
}

// init functions
gen_setting_page();
patch_css();
gen_history();
gen_aspect_fix(); 
//delayed init functions

  var delayInMilliseconds = 2000; //1 second
setTimeout(function() {
restore_appbar_links();
}, delayInMilliseconds);


//Replace Icons


// ==UserScript==
// @name            7ktTube | Old Icons FIX
// @namespace       7ktremoveicons
// @version         1.0.0
// @author          7KT SWE
// @description     This addon replace all new icons with the old ones!
// @match           *://*.youtube.com/*
// @homepageURL     https://7kttube.tk
// @downloadURL	    https://7kttube.tk/install/7ktTubeIcons.user.js
// @supportURL      https://discord.gg/UQHSEsUW4S
// @contributionURL https://www.paypal.com/donate/?hosted_button_id=2EJR4DLTR4Y7Q
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAACnVBMVEUAAAD////////94+PX19f+8fH/////////+fn83Nz////////////////////////////////////////////////////////////829vS0tL////////////////////////////////////////////////y8vLp6en95+f////////////sKCgAAADpCQnqDg7pBgbqCwvsHh7sICDsIyPtKirsJibrGhr1kZHyaGjrGBjnAAD81tbrHBz3oqLsJSXxX1/qEBDp6enxZGSysrIVFRX2k5PxWVnqEhK0tLT1gYHtLCzqFBTybW3wUlLtMDDtMjLz8/PuOzvqFxcHBwf95eX0iIjxYGDvQEDpAQF/f3/wU1PuNTX+7e394+PuODgfHx///f3+9PT6xMT4qKilpaX1i4v82dnvR0f/+vr+8vLj5OT2nJzzcnLzcHDwS0vvRETrFRXx8fH7z8/5urrsk5N2dnbxVlbwT08iIiL83d380dH7ycmqqqr1jo70fHx0dHT7JSX6+vr39/f/9vb+8/P+6ur83Nz71NTR0dH5tLT3paX2mZn1iIj1hYXxXFwFBQXNzc33r6/3n5+JiYmFhYV6enrzeHhJSUkiPDzpDw8LDAz95+f7zc36vr68vLyUlJTzdXVra2vyamo0NDTrJib8ICD5Hh4dHR0RERHf39/Y2Nj7zs7Gxsb6v7+2trbvra2Xl5eQkJDybGxeXl5XV1dMTExHR0c7OzsdNjYuLi4SLS38KiopKSn9/Pzv+vr839+8yMj5wMDxuLi4uLj4qqruqqqgoKB8fHwGICDyFxfsFhbV4uL7y8vyx8f6wMCvvb3tt7e3t7eur6+Yr6+OpaXuoKA2U1NRUVE0UVEYMTETMDDyKSkMJye13jY6AAAALHRSTlMAavLy8vJi9PLy4vru2L6UhGs1JRAI5VEb8vLo3qyqfHpIRUA/Eg/y8vJTHBug3AoAAAhOSURBVGjevZqF39JAGIDt7u5uD7fBSoeIM1GwwADBDmzB7u7u7u7u7u7Ov8WLsaAUnD4/f+x27rvnu727947vlkOlTL6qRYvkzxWjQaU8eirVz/WH5C9StFq+ejniKVsiPzDQu8ma7hpNmnQAmZC/RFlj+6UKgTg2NTHSBmRG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
// @icon64          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACNFBMVEUAAAD////////4rKyYmJj////3pqb7zMz4trb////////////////////////819f5wMD////////////83d36xMT5urqOjo7/////////////+Pj+8vL96+v95+f95eX84+O6urr4r6+qqqr3qKj////////////////sKCgAAADsJCTsKSnrICDpCgrrHh7qERHsIiLpBQX+8PDrGxvrGBjqDg7pBwfrFRURERH/+fn82Nh7e3vtLS3809PwXFztLi7pAADs7e381tb7zs7uMzPqDAz96urvR0f82trtMDD+8/PwUVHwS0v95+f3o6P4qan3oKDyamr/+/v+7u7zbW3xV1fvQ0M5OTnqCgrmAADn5+f7yMj6wcH6vLz2mZn2kZHzdHRhYWFaWlruPj7uOzvuODguLi7+9/f/9fXx8fH95ub95eX84OD7y8vExMT7w8O6urr3nJz0gIDwVFT/NDQJCwv94uL83t7V1dX70NC+vr62trb4rq6ZmZn2lZWKiopqampoaGjyZGTxXFxPT0//QUHuQEDtFhbe3t73trb1s7Nzi4v1iYmIiIj0g4N5eXmjc3PzcnJCQkL/OTkpKSkdHR39///t///u7u7q6urf39/IyMj6vr7NpaWkpKSQkJCBgYHzd3ewcnJubm7xZWWiZGTxYWFXV1cAGRkYGBjd+fn19fXh4eGsrKzQl5fHlpatgoKkfHy0dnaqa2tiYmJdXV3/RkYjPDwXMzP/MDD+KSmHIHNsAAAAKHRSTlMAv/Dw8Ljw8PDj05JnMQbw8NxdR/Dw8PC5Q0Lw8PDw8PDw8PDw3V5JgcnJaAAABWxJREFUWMOl14dX00AcB3D33nvvcZdc1tE0EUQboQXBKqVIbQUBBVRERMC999577733+uf8XdKkDa/aoN/3SJMr9+nl7jKum5khg3r372Fl+theVsbO7PGX9O89aEg3JyOHIyeXODsv0d8zfKRdf0R68REHWIuyZYRVfzD6VwANNoEBrrIdu3ft2rXpIAArsgMDWP0JKEMeA3AAZc94AAaiDLkCwF4PwEAAemcoX8lBdqADzw80odtrjmw+sWa1meebkDvjAOieAdgM9eeha7BtQis47sRuLpn7yJ3ufwD2m334eh4oizjuCLpnA/c8Amvgfw+iRQx4wHG30Y0dtw5Aya0dTR6BtawPGXBl5dXkcJ7luLPwkRVI9eEmBlw6y3ZY5nPcfM8A68OtNxhw9SqchXfA3YcMgHhvgbsPvzjAg64Da9mIO8ClLgMrt0K1XRaw4gq3tckj4O7DmxZwAi6r3V0F9ls3A2si7eW4896BVB9+tYE3cBregVQf7k8CUfSS4256BlLzcHMSaGLteds1wLx2VyaBRawTDsLBeegLj8BpqP8dQa6/4F5cR6+2cj+umaWnswLrSis2bNx+9+OHC+9bq6vvnHr09NGpVXc+Pf18srr63YULdxcUbN/YXJSzLjNwanm4viEYIPjyt6NHt6i6qh/fcnnLcdnc6vqvo0d/SgomgWBjQ/GhSG5nYHGYUllXVZ9PkgRBYeHTYhYIgiRJPlXVZc0IrnIDO30GT7DnEBynZelAEdas6t4JXWxJAx4aAcUv2/HrhKR+S/bL9rFLoMUpoIhX+WC42E74GI/t8KQ4bB+7w8dbHWBPHPuXoFRadAUnowZLEcqTBJyhCeccoEbD/nAasCAdgAHbngnAYrkD1Go43pEGNKcDOQgVZAYOOUC7htX6SKT2JFSuaKtZdk7iPQChSge4qOF8RdMSMdZ8w9BkNnEwUSAWIEi6jmEkoEyX1eSMkcMOsFy02rQQgDxBwsQH883a6gzIo7S+URRgMDW1IRb0+wkj9FjUBp7EXYAi7NlZWB2Qy3YWVmEegNZAWXR9rczztLwwF1WcjGkmUL/OBg6HXIDgK4KdErqNbSUAlkYR5KFGLyIz0ZgIgtqYYwOV/k7AAoRyAmIhQrn5Qo4zuEYJgmyAvwJZYf1bYQNLsgDrKw/DbNhmtMP3dWIZsmr4Soq8AgsSWjNc8XQZjLKUYHN2Of0rILkBaDG/AQANfnsjb3QwQCNdBJaaLQBATMSyA74/A6Vlbav+B7Bzkf4zUMqSWy66gErvwIbG/CDPJ6+zitRM9AxsUzUfD4J7Jh4SPQPNxKhcX7qOnYLeUGoD5RmAihJa5Uwkv9KcmgeVbD5SAI7l2kBdJ0AqgBaEEgU2kJegRQDQCPShkmBAOXXdD9q1TkAe7OwrQzYQPVOL2LVQB9tIfRVsYzLG/g4HqHUDvGY9txzASpXB24/VVRoMRPxZ+l2ZhZYjuPIkiYTCCHJmO2wCEiurQpCOkNhhPVN3KjpJ3ZV7w3NBtAa2uGZfzTk2RuKzlpYnRl2kbR/h97VF6uT2wqpDcUK0+pqWgtYzkpzPngvt1oJjIMwOxceAfIlSKhKCCQmpqohlSjVMNEplicIxgchUlWTqg/qYF+FEByYXXcsNknwSWp/sjpzccx8TrAi8tacdi8KiK7nsWyqFAO1KiEqrYdnnLDxbZQq658C5GG1s4Zla+hY2GJpuv57wfwh7S5EkeFyIBr8HKs1xLb4jhxtK8jEvwPc6e0lgCZkxd6FI11WfBF0QaFxSCzNz9lyrdmr5P3Hy1FFDh/btO3rYmH79ZvSEzOrD0pOlX78xw4aN7tt36KhpUyalLf9/A5nj/LZRV7kLAAAAAElFTkSuQmCC
// @license         MIT
// @run-at          document-start
// ==/UserScript==

(function() {
  	'use strict'
    window['yt'] = window['yt'] || {};
    yt['config_'] = yt.config_ || {};
    yt.config_['EXPERIMENT_FLAGS'] = yt.config_.EXPERIMENT_FLAGS || {};

    var iv = setInterval(function() {
        yt.config_.EXPERIMENT_FLAGS.kevlar_updated_icons = false;
        yt.config_.EXPERIMENT_FLAGS.kevlar_system_icons = false;
        yt.config_.EXPERIMENT_FLAGS.kevlar_watch_color_update = false;
    }, 1);

    var to = setTimeout(function() {
        clearInterval(iv);
    }, 1000)
})();
document.getElementsByTagName("html")[0].removeAttribute("system-icons");