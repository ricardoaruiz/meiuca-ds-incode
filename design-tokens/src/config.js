const StyleDictionaryPackage = require('style-dictionary')

const registerConfig = (current, buildPath) => {
    return {
        "source": [current.source],
        "platforms": {
            "web/css": {
                "transformGroup": "css",
                "buildPath": buildPath.css,
                "files": [
                    {
                        "destination": `${current.filename}.css`,
                        "format": "css/variables",
                        "filter": "notIsObject"
                    }
                ]
            },
            "web/scss": {
                "transformGroup": "scss",
                "buildPath": buildPath.scss,
                "files": [
                    {
                        "destination": `${current.filename}.scss`,
                        "format": "scss/variables",
                        "filter": "notIsObject"
                    },
                    {
                        "destination": `mixins.scss`,
                        "format": "scss/mixins",
                        "filter": "isObject"
                    }
                ]
            }
        }
    }
}

const registerFilters = () => {
    StyleDictionaryPackage.registerFilter({
        name: 'isObject',
        matcher: function(token) {
          return typeof token.value === 'object';
        }
      })

    StyleDictionaryPackage.registerFilter({
        name: 'notIsObject',
        matcher: function(token) {
          return typeof token.value !== 'object';
        }
      })
}

function registerFormats() {
	StyleDictionaryPackage.registerFormat({
		name: 'scss/mixins',
		formatter: function (dictionary, config) {
			let output = ''
			dictionary.allProperties.map(prop => {
				if(prop.attributes.category == 'switch'){
					output += `
						@if $type == switch-${prop.attributes.type} {
							transition-duration: ${prop.value.velocity};
							transition-timing-function: ${prop.value.vibe};
						}
					`
				}
				if(prop.attributes.category == 'spin'){
					output += `
						@if $type == spin-${prop.attributes.type} {
							transition-duration: ${prop.value.velocity};
							transition-timing-function: ${prop.value.vibe};
							#{$trigger} {
								transform: rotate(${prop.value.rotation});
							}
						}
					`
				}
				if(prop.attributes.category == 'expand'){
					output += `
						@if $type == spin-${prop.attributes.type} {
							transition-duration: ${prop.value.velocity};
							transition-timing-function: ${prop.value.vibe};
							#{$trigger} {
								transform: scale(${prop.value.scale});
							}
						}
					`
				}
			});

			return`
                @mixin motion-token($type, $trigger){
                    ${output}
                }
			`
		}
	})
}

module.exports = { registerConfig, registerFilters, registerFormats }