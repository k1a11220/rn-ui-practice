import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PlusIconOutline from "../../assets/icons/Outline/PlusIconOutline";
import Banner from "../components/home/Banner";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "아이맥 27인치 2017 CTO 팝니다.",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "에어하키게임 팔아요 거의 새거입니다",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "훈민정음 가운(그레이)",
  },
  {
    id: "bd7acb2ea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "갤럭시 워치1",
  },
  {
    id: "3ac68afc5-c605-48d3-a4f8-fbd91aa97f63",
    title: "냉장고 팝니다",
  },
  {
    id: "58694a013f-123453da1-471f-bd96-145571e29d72",
    title: "포켓몬 띠부띠부실 팔아요",
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
  <TouchableOpacity onPress={() => {}} style={styles.item}>
    <Image
      style={styles.itemPic}
      source={{
        uri: "http://ccimg.hellomarket.com/images/2019/item/12/25/20/0705_4283668_1.jpg?size=s6",
      }}
    />

    <View style={styles.itemDetailCont}>
      <Text style={styles.productName}>아이맥 27인치 2017 CTO 팝니다.</Text>
      <View style={styles.itemDetailWrapper}>
        <Text style={styles.itemDetail}>수원시 장안구 율전동</Text>
        <Text style={styles.itemDetail}> · </Text>
        <Text style={styles.itemDetail}>53초 전</Text>
      </View>
      <Text style={styles.itemPrice}>210만원</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const renderItem = ({ item }: any) => <Item title={item.title} />;
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.container}
        ListHeaderComponent={Banner}
      ></FlatList>
      <TouchableOpacity
        activeOpacity={0.2}
        style={styles.touchableOpacityStyle}
      >
        <PlusIconOutline size={20} fillColor={"#ffffff"} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },

  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
    paddingBottom: 22,
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
  touchableOpacityStyle: {
    position: "absolute",
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FE7E36",
    alignItems: "center",
    justifyContent: "center",
    right: 16,
    bottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default HomeScreen;
