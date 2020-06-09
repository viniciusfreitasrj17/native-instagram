import React from "react";
import {
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import options from "../../../assets/instagram-icons/options.png";
import like from "../../../assets/instagram-icons/like.png";
import comment from "../../../assets/instagram-icons/comment.png";
import send from "../../../assets/instagram-icons/send.png";
import save from "../../../assets/instagram-icons/save.png";

const Feed = () => {
  const posts = [
    {
      id: 0,
      author: "levir.dev",
      place: "Cinema do Shopping",
      pictureUrl:
        "https://politica.estadao.com.br/blogs/fausto-macedo/wp-content/uploads/sites/41/2019/10/joker.jpg",
      likes: 1272,
      description: "Saiu o filme do Coringa",
      hashTags: "#cinema #joker",
    },
    {
      id: 1,
      author: "levir.dev",
      place: "Cinema do Shopping",
      pictureUrl:
        "https://br.web.img3.acsta.net/pictures/19/09/17/19/29/5316438.jpg",
      likes: 915,
      description: "É Hoje, Aves de Rapina",
      hashTags: "#cinema #aves #rapina #arquelina",
    },
    {
      id: 2,
      author: "levir.dev",
      place: "Cinema do Shopping",
      pictureUrl:
        "https://br.web.img3.acsta.net/pictures/19/04/03/21/31/0977319.jpg",
      likes: 784,
      description: "Veja John Wick 3 Parabellum",
      hashTags: "#cinema #john #wick",
    },
    {
      id: 3,
      author: "levir.dev",
      place: "Cinema do Shopping",
      pictureUrl:
        "https://i.pinimg.com/736x/df/80/3c/df803c69d05cf5f0bc3e787fd719a076.jpg",
      likes: 1500,
      description: "Nos cinemas, Viuva Negra - O Filme",
      hashTags: "#cinema #viuvanegra #scarlett",
    },
  ];

  const renderItem = ({ item: post }) => {
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}> {post.author} </Text>
            <Text style={styles.place}> {post.place} </Text>
          </View>
          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image style={styles.pictureUrl} source={{ uri: post.pictureUrl }} />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>
            <View style={styles.rightActions}>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.likes}> {post.likes} likes</Text>
            <Text style={styles.hashTags}> {post.hashTags} </Text>
            <Text style={styles.description}> {post.description} </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  post: {
    marginVertical: 15,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  place: {
    fontSize: 12,
    color: "#666",
  },
  pictureUrl: {
    width: "100%",
    height: 400,
  },
  footer: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  action: {
    marginRight: 8,
  },
  leftActions: {
    flexDirection: "row",
  },
  likes: {
    fontWeight: "bold",
    fontSize: 12,
  },
  hashTags: {
    color: "#002d5e",
  },
  description: {
    color: "#000",
    lineHeight: 18,
  },
});

export default Feed;
