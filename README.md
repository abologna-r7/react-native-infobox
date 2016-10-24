## react-native-infobox

An information box component for react-native. This is still very much a work
in progress and only handles the simplest of cases, ideas and
contributions are very welcome.

![Screenshot](https://github.com/abologna-r7/react-native-infobox/blob/master/info-example.png?raw=true)

![Screenshot](https://github.com/abologna-r7/react-native-infobox/blob/master/warning-example.png?raw=true)

![Screenshot](https://github.com/abologna-r7/react-native-infobox/blob/master/error-example.png?raw=true)

## Add it to your project
1. Run `npm install react-native-infobox --save`

## Dependencies
This project uses [React Native Vector Icons] (https://github.com/oblador/react-native-vector-icons) which uses Ionic fonts. Please follow the proper instructions from their project to use it in iOS or Android.

## Usage
```javascript
'use strict';

import React, {Component} from 'react'
import InfoBox from 'react-native-infobox'

class App extends Component {
	...

	render() {
		return (
			<InfoBox
				hidden={false}
				onClose={() => {}}
				timeout={5}>
				<Text style={{color: 'white'}}>Hello this is a help box.</Text>
			</InfoBox>
		)
	}
}
```

## Simple Usage
```javascript
'use strict';

import React, {Component} from 'react'
import InfoBox from 'react-native-infobox'

class App extends Component {
	...

	render() {
		return (
			<InfoBox>
				<Text style={{color: 'white'}}>Hello this is a help box.</Text>
			</InfoBox>
		)
	}
}
```

## Props
Component accepts several self-descriptive properties:

- **`hidden`** _(Bool)_ - if `true`, the info box will be hidden by default.
- **`onClose`** _(Function)_
- **`timeout`** _(Number)_ - set timeout in seconds to define when the infobox closes automatically.
- **`children`** _(React Component)_
- **`containerStyle`** _(Object)_ - applies style to the infobox container.
- **`iconName`** _(String)_ - Ionicon icon name for the close icon, [See ionicon font cheatsheet](https://cdn.rawgit.com/driftyco/ionicons/3.0/cheatsheet.html).
- **`iconColor`** _(String)_ - Close icon color.
- **`iconSize`** _(Number)_ - Close icon size.

---

**MIT Licensed**
