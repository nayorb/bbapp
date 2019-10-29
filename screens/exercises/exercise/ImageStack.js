import React, { useState, useEffect } from 'react'
import images from '../../../assets/images/muscles/muscles'
import Layout from '../../../constants/Layout'

import { View, Image, Animated } from 'react-native'
import Colors from '../../../constants/Colors'
import MuscleImage from './MuscleImage'

const { width, height } = Layout.window

const ImageStack = props => {
	const [mainImageOpacity] = useState(new Animated.Value(1))

	useEffect(() => {
		Animated.timing(mainImageOpacity, {
			toValue: props.selectedMuscleGroup ? 0.1 : 1,
			duration: 250,
		}).start()
	}, [props.selectedMuscleGroup])

	const muscles = props.muscles
	return (
		<View
			style={{
				position: 'relative',
				width: (width * (props.width || 100)) / 100,
				height: ((width * (props.width || 100)) / 100) * 0.713,
			}}
		>
			<Animated.Image
				source={images.main}
				resizeMode='contain'
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					opacity: mainImageOpacity,
				}}
			/>
			<MuscleImage
				source={images.main}
				isDefault={props.selectedMuscleGroup === null}
				value={5}
			/>
			{Object.keys(muscles).map(muscleTypeKey => (
				<MuscleImage
					muscleTypeKey={muscleTypeKey}
					key={muscleTypeKey}
					source={images[muscleTypeKey]}
					isSelected={muscleTypeKey === props.selectedMuscleGroup}
					isDefault={props.selectedMuscleGroup === null}
					value={muscles[muscleTypeKey]}
				/>
			))}
		</View>
	)
}

export default ImageStack
