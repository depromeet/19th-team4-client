import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import { getWebUrl } from '@/utils/getWebUrl';

/**
 * 웹의 홈 화면(HomeHero)을 WebView 로 보여줍니다.
 */
export function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
      <WebView
        source={{ uri: getWebUrl('/') }}
        startInLoadingState
        renderLoading={() => (
          <View className="absolute inset-0 items-center justify-center bg-gray-50">
            <ActivityIndicator />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
