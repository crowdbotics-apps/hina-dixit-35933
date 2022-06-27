import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_575}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1528660-fc1c-4b35-a1b6-3a666737ae8d"
          }}
          style={styles.ImageBackground_1_576}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae21e5fa-30ef-4c22-98a1-4346017936a0"
          }}
          style={styles.ImageBackground_1_577}
        />
      </View>
      <View style={styles.View_1_578}>
        <Text style={styles.Text_1_578}>
          Audio Book App UI DESIGN. 6 Scrrens .
        </Text>
      </View>
      <View style={styles.View_1_579}>
        <View style={styles.View_1_580}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9508a41-ec9b-44ed-93e8-d87c6d65ef60"
            }}
            style={styles.ImageBackground_I1_580_15_302}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bc96d93-c356-4882-b502-a9e2373d6546"
            }}
            style={styles.ImageBackground_I1_580_15_305}
          />
        </View>
        <View style={styles.View_1_581}>
          <Text style={styles.Text_1_581}>Ui_romania</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9a5bba5-c0bb-46ac-849b-5363c9f3ecb1"
        }}
        style={styles.ImageBackground_1_478}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e9ba6a6-eea4-4709-abe4-4e6859a3ed9e"
        }}
        style={styles.ImageBackground_1_473}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e99b85a-8a18-4740-a9e2-440261b961ed"
        }}
        style={styles.ImageBackground_1_474}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33ed2b56-8517-4a2d-8d43-0dce07ce8ff5"
        }}
        style={styles.ImageBackground_1_475}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d49c6b4-2a86-41cd-827b-47be8c159ff7"
        }}
        style={styles.ImageBackground_1_476}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48f88411-656d-4afd-aeef-31a93d4a1198"
        }}
        style={styles.ImageBackground_1_477}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 43, 127, 1)" },
  View_2: { height: hp("131%") },
  View_1_575: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%")
  },
  ImageBackground_1_576: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_577: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_1_578: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_1_578: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 80,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_1_579: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("110%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_1_580: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_580_15_302: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_580_15_305: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_1_581: {
    width: wp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_581: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_478: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("20%"),
    resizeMode: "cover"
  },
  ImageBackground_1_473: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("20%"),
    resizeMode: "cover"
  },
  ImageBackground_1_474: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("20%"),
    resizeMode: "cover"
  },
  ImageBackground_1_475: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("93%"),
    resizeMode: "cover"
  },
  ImageBackground_1_476: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("93%"),
    resizeMode: "cover"
  },
  ImageBackground_1_477: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("93%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
