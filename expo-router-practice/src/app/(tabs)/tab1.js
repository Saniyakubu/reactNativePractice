import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  FadeInLeft,
  FadeOutRight,
  BounceInUp,
} from "react-native-reanimated";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);
const SignUpScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: Platform.OS !== "web" && 1,
        paddingTop: Platform.OS === "android" ? 30 : 0,
        backgroundColor: "tomato",
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => Platform.OS !== "web" && Keyboard.dismiss()}
      >
        <View style={styles.container}>
          <View style={styles.container_childBox}>
            <View style={styles.header}>
              <View style={styles.header_text_box}>
                <Animated.Text
                  style={styles.header_text_h1}
                  entering={FadeInLeft.delay(200)
                    .duration(1000)
                    .springify()
                    .damping()}
                >
                  Create Account
                </Animated.Text>
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.content_textInput_box}>
                <View style={styles.inputs_wrapper}>
                  <TextInput
                    style={styles.content_textInput}
                    placeholder="Full Name"
                    placeholderTextColor={"#888"}
                  />
                </View>
                <View style={styles.inputs_wrapper}>
                  <TextInput
                    style={styles.content_textInput}
                    placeholder="Email"
                    placeholderTextColor={"#888"}
                    secureTextEntry={false}
                    keyboardType="default"
                  />
                </View>
                <View style={styles.inputs_wrapper}>
                  <TextInput
                    style={styles.content_textInput}
                    placeholder="Password"
                    placeholderTextColor={"#888"}
                    secureTextEntry={false}
                    keyboardType="default"
                  />
                </View>
                <View style={styles.inputs_wrapper}>
                  <TextInput
                    style={styles.content_textInput}
                    placeholder="Referral Code (optional)"
                    placeholderTextColor={"#888"}
                  />
                </View>
              </View>
              <View style={styles.btn_box}>
                <AnimatedTouchableOpacity
                  entering={FadeIn.duration(500).springify().damping()}
                  style={[
                    styles.btn,
                    {
                      backgroundColor: "transparent",
                      borderWidth: 2,
                      borderColor: "#2f8ddf",
                    },
                  ]}
                >
                  <Text style={[styles.btn_text]}>Create Account</Text>
                </AnimatedTouchableOpacity>

                <Animated.Text
                  entering={BounceInUp.delay(100)}
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    margin: 10,
                    color: "#2f8ddf",
                  }}
                >
                  ---------- OR ----------
                </Animated.Text>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: "transparent",
                      borderWidth: 2,
                      borderColor: "#2f8ddf",
                    },
                  ]}
                >
                  <Text style={[styles.btn_text, { color: "#2f8ddf" }]}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" && 30,
    backgroundColor: "tomato",
  },
  container_childBox: {
    flex: 1,
    width: "100%",
    maxWidth: 700,
    marginRight: "auto",
    marginLeft: "auto",
  },
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "tomato",
  },
  header_text_box: {
    paddingTop: 15,
    paddingLeft: 20,
    height: "70%",
    // borderWidth: 3,
    // borderColor: "black",
  },
  header_text_h1: {
    fontSize: 35,
    color: "white",
  },
  waves: {
    marginTop: "auto",
    height: "80%",
    marginBottom: "auto",
    width: "100%",
    backgroundColor: "tomato",
    // borderWidth: 3,
    // borderColor: "black",
  },
  content: {
    flex: 2,
    backgroundColor: "#ffff",
    padding: 5,
    // borderWidth: 3,
    // borderColor: "black",
  },
  content_textInput_box: {
    padding: 12,
    display: "flex",
    gap: 35,
  },
  content_textInput: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomWidth: 2,
    borderBottomColor: "tomato",
    color: "black",
    padding: 5,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "tomato",
    padding: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "90%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  btn_text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  btn_box: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputs_wrapper: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  inputs_icon: {
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  inputs_icon_color: {
    color: "#777",
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
});
