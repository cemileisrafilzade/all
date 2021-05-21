import *as Font from 'expo-font';

import OpenSansBold from '../assets/fonts/OpenSans-Bold.ttf';
import OpenSansRegular from '../assets/fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from '../assets/fonts/OpenSans-SemiBold.ttf';

export const loadFonts =() => {
    return Font.loadAsync({
        OpenSansBold,
        OpenSansRegular,
        OpenSansSemiBold,
    });
};