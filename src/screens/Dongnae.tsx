import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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

const Item = ({ title }: any) => {
  return (
    <View>
      <View>
        <TouchableOpacity style={styles.label}>
          <Text>동네질문</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.name}>안산에 발바닥 티분 잘뺴는곳 없을까요</Text>
          <View style={styles.detailWrapper}>
            <View style={styles.detailWrapper}>
              <Text>까꿍</Text>
              <Text> · </Text>
              <Text>와동</Text>
            </View>
            <Text>9분 전</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.detailWrapper}>
        <Text>궁금해요</Text>
        <Text>답변하기</Text>
      </View>
    </View>
  );
};

const DongnaeScreen = () => {
  const renderItem = ({ item }: any) => <Item title={item.title} />;
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },

  label: {
    backgroundColor: "#F1F3F6",
  },

  name: {
    fontSize: 16,
  },

  detailWrapper: {
    flexDirection: "row",
  },
});

export default DongnaeScreen;
