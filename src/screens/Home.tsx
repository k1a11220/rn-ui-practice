import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "../components/home/Banner";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acb2ea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc5-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a013f-123453da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbe746a-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac61238afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "5869451a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }: any) => (
  <View style={styles.item}>
    <View style={styles.itemPic}></View>
    <View style={styles.itemDetailCont}>
      <Text style={styles.productName}>아이맥 27인치 2017 CTO 팝니다.</Text>
      <View style={styles.itemDetailWrapper}>
        <Text style={styles.itemDetail}>수원시 장안구 율전동</Text>
        <Text style={styles.itemDetail}> · </Text>
        <Text style={styles.itemDetail}>53초 전</Text>
      </View>
      <Text style={styles.itemPrice}>210만원</Text>
    </View>
  </View>
);

const HomeScreen = () => {
  const renderItem = ({ item }: any) => <Item title={item.title} />;
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
      ListHeaderComponent={Banner}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignSelf: "stretch",
  },

  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
    paddingBottom: 16,
  },

  itemPic: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: "#C1C1C1",
  },

  itemDetailCont: {
    justifyContent: "center",
    marginLeft: 16,
    flexShrink: 1,
  },

  itemDetailWrapper: {
    flexDirection: "row",
  },

  productName: {
    color: "#212124",
    fontSize: 16,
    fontWeight: "500",
  },

  title: {
    fontSize: 32,
  },

  itemDetail: {
    fontSize: 12,
    color: "#868B94",
    marginTop: 4,
  },

  itemPrice: {
    fontSize: 16,
    color: "#212124",
    fontWeight: "600",
    marginTop: 8,
  },
});

export default HomeScreen;
