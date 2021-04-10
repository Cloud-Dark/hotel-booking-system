// https://stackoverflow.com/questions/35255645/how-to-set-default-font-family-in-react-native
import React from 'react';
import {
	Text,
	useColorScheme,
} from 'react-native';
// import {AllHtmlEntities} from 'html-entities';
import {decode} from 'html-entities';
import getThemedColors from '../../helpers/Theme';
import {boldFontFamily} from '../../constants/Colors';
export default props => {
	const tval = (typeof props.children === 'string' || props.children instanceof String) ? props.children : ''+props.children;
	const colors = getThemedColors(useColorScheme())
	// const entities = new AllHtmlEntities();
	return <Text {...props} style={[{fontFamily: boldFontFamily,color: colors.heavyText}, props.style]}>{decode(tval, {level: 'all'})}</Text>
} 