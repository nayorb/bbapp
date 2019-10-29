import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'

export default ({ muscleTypeKey, source, isSelected, isDefault, value }) => {
	const [imageOpacity] = useState(new Animated.Value(1))

	useEffect(() => {
		const opacity = isDefault ? value * 0.2 : isSelected ? 1 : 0.1
		Animated.timing(imageOpacity, {
			toValue: opacity,
			duration: 250,
		}).start()
	}, [isSelected, isDefault])

	return (
		<Animated.Image
			key={muscleTypeKey}
			source={source}
			resizeMode='contain'
			style={{
				opacity: imageOpacity,
				position: 'absolute',
				width: '100%',
				height: '100%',
			}}
		/>
	)
}
