import React from "react";
import { View, StyleSheet } from "react-native";
import { useNetwork, useColor } from "@src/context";
import { Text } from "@app/blueprints";
import { Palette, scaledSize } from "@src/utils";
import { contents } from "@src/context";

export const OfflineBanner = () => {
  const { isConnected } = useNetwork();
  const { color } = useColor();
  const styles = offlineBannerStyles(color);

  if (!isConnected) return null;

  return (
    <View style={styles.banner}>
      <Text preset="h5" style={styles.bannerText}>
        {contents("offline.youAreOffline")}
      </Text>
    </View>
  );
};

export const offlineBannerStyles = ({
  backgroundColor,
  textColor,
}: Palette) => {
  const styles = StyleSheet.create({
    banner: {
      backgroundColor: backgroundColor,
      padding: scaledSize(10),
      alignItems: "center",
    },
    bannerText: {
      color: textColor,
      fontWeight: "bold",
      paddingVertical: scaledSize(15),
    },
  });

  return styles;
};
