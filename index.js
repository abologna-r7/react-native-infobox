import React, { Component, PropTypes } from 'react'
import { InfoBoxStyle } from 'style'
import Icon from 'react-native-vector-icons/Ionicons'

import {
  Text,
	TouchableWithoutFeedback,
  View
} from 'react-native'

export default class InfoBox extends Component {
	state = {
		hidden: this.props.hidden
	}

	static propTypes = {
		hidden: PropTypes.bool,
		onClose: PropTypes.func,
		timeout: PropTypes.number,
		containerStyle: PropTypes.object,
		iconName: PropTypes.string,
		iconColor: PropTypes.string,
		iconSize: PropTypes.number,
	}

	static defaultProps = {
		hidden: false,
		onClose: () => {},
		timeout: 0,
		containerStyle: {},
		iconName: 'ios-close',
		iconColor: '#FFFFFF',
		iconSize: 30,
	}

  constructor(props) {
    super(props)
  }

	componentDidMount() {
		if(this.props.timeout > 0) {
			setTimeout(() => {
				this.onClose()
			}, this.props.timeout*1000)
		}
	}

	onClose = () => {
		this.setState({hidden: true})
		this.props.onClose()
	}

  render() {
		if(!this.state.hidden) {
			return (
				<View style={[InfoBoxStyle.container, this.props.containerStyle]}>
					<TouchableWithoutFeedback onPress={this.onClose}>
						<Icon
							name={this.props.iconName}
							size={this.props.iconSize}
							color={this.props.iconColor}
							style={InfoBoxStyle.close}/>
						</TouchableWithoutFeedback>
						{this.props.children}
				</View>
			)
		}

		return null
  }
}
