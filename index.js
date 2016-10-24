import React, { Component, PropTypes } from 'react'
import { InfoBoxStyle } from '../styles'
import Icon from 'react-native-vector-icons/Ionicons'

import {
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
    type: PropTypes.string,
	}

	static defaultProps = {
		hidden: false,
		onClose: () => {},
		timeout: 0,
		containerStyle: {},
		iconName: 'ios-close',
		iconColor: '#FFFFFF',
		iconSize: 30,
    type: 'info',
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

  getType() {
    switch (this.props.type) {
      case 'error':
        return InfoBoxStyle.error
      case 'warning':
        return InfoBoxStyle.warning
      case 'info':
      default:
        return InfoBoxStyle.info


    }
  }

  render() {
		if(!this.state.hidden) {
			return (
				<View style={[InfoBoxStyle.container, this.getType(), this.props.containerStyle]}>
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
