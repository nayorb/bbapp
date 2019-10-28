import React from 'react'
import images from '../assets/images/muscles/muscles'
import Layout from '../constants/Layout'

import { View, Text, ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const { width, height } = Layout.window

const Muscles = props => {
	const muscles = props.muscles
	return (
		<View
			style={{
				position: 'relative',
				width: Layout.window.width,
				height: Layout.window.width * 0.713,
				backgroundColor: 'fafafa',
			}}
		>
			<Image
				source={images.main}
				resizeMode='contain'
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
				}}
			/>
			{Object.keys(muscles).map((muscleTypeKey, index) => (
				<Image
					key={muscleTypeKey}
					source={images[muscleTypeKey]}
					resizeMode='contain'
					zIndex={index}
					style={{
						opacity: muscles[muscleTypeKey] * 0.2,
						position: 'absolute',
						width: '100%',
						height: '100%',
					}}
				/>
			))}
		</View>
	)
}

export default Muscles
