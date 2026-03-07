import { View, useWindowDimensions, Platform } from "react-native";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function ResponsiveContainer({ children }: Props) {
    const { width } = useWindowDimensions();

    const isDesktop = Platform.OS === "web" && width >= 1024;
    const isWeb = Platform.OS === "web";

    return (
        <View
            style={{
                flex: 1,
                width: "100%",
                alignSelf: "center",
                maxWidth: isDesktop ? 600 : "100%",
                paddingHorizontal: isDesktop ? 32 : 16,
                paddingTop: isWeb ? 20 : 12,
            }}
        >
            {children}
        </View>
    );
}