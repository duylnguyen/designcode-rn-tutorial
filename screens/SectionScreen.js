import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StatusBar, Linking, ScrollView } from "react-native";
// import { WebView } from "react-native-webview";
import Markdown from "react-native-markdown-package";

class SectionScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");
    // console.log(section.content);

    return (
      <ScrollView>
        <Container>
          <StatusBar hidden />
          <Cover>
            <Image source={section.image} />
            <Wrapper>
              <Logo source={section.logo} />
              <Subtitle>{section.subtitle}</Subtitle>
            </Wrapper>
            <Title>{section.title}</Title>
            <Caption>{section.caption}</Caption>
          </Cover>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{ position: "absolute", top: 20, right: 20 }}
          >
            <CloseView>
              <Ionicons
                name="ios-close"
                size={36}
                color="#4775f2"
                style={{ marginTop: -2 }}
              />
            </CloseView>
          </TouchableOpacity>
          <Content>
            {/* <WebView
              source={{ html: section.content }}
              scalesPageToFit={false}
              scrollEnabled={false}
              ref="webview"
              onNavigationStateChange={event => {
                console.log(event);

                if (event.url != "about:blank") {
                  this.refs.webview.stopLoading();
                  Linking.openURL(event.url);
                }
              }}
            /> */}
            <Markdown
              styles={markdownStyle}
              // pureCSS={htmlStyles}
              scalesPageToFit={false}
              scrollEnabled={false}
            >
              {section.content}
            </Markdown>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

export default SectionScreen;

// const htmlContent = `
//   <h2>This is a title</h2>
//   <p>This <strong>is</strong> a <a href="http://designcode.io">link</a></p>
//   <img src="https://tva1.sinaimg.cn/large/00831rSTgy1gcujnlr6aqj30yn0u0wh2.jpg" />
// `;

const markdownStyle = {
  text: {
    fontSize: 17
  },
  heading2: {
    fontSize: 30,
    color: "#b8bece"
  }
};

// const htmlStyles = `
//     * {
//       font-family: -apple-system, Roboto;
//       background: #f0f3f5;
//       margin: 0;
//       padding: 0;
//       font-size: 25px;
//       font-weight: normal;
//       line-height: 24px;
//     }

//     h2 {
//       font-size: 20px;
//       text-transform: uppercase;
//       color: #b8bece;
//       font-weight: 600;
//       margin-top: 50px;
//     }

//     img {
//       width: 100%;
//       border-radius: 10px;
//       margin-top: 20px;
//     }

//     pre {
//       padding: 20px;
//       background:212C4F;
//       overflown: hidden;
//       word-wrap: break-word;
//       border-radius: 10px;
//       margin-top: 20px;
//     }

//     code {
//       color: white;
//     }
// `;

const Content = styled.View`
  height: 1000px;
  padding: 20px;
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 10px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
