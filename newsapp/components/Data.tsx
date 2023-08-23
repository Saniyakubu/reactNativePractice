import { useState, useEffect } from 'react';
import { Text, View } from './Themed';
import { FlatList, Pressable, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ContextData } from '../ContextApi/Context';
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from './Themed';
import { TextProps } from './Themed';
import { useRouter } from 'expo-router';
export default function FetchData(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const news = useContext(ContextData);
  const route: any = useRouter();

  function add(savedtitle: string) {
    console.log(savedtitle);
    if (news) {
      news.filter((item) => {
        const { title } = item;

        if (title === savedtitle) {
          route.push({ pathname: '/two', params: item });
        }
      });
    }
  }

  return (
    <View>
      <FlatList
        data={news}
        renderItem={(item) => {
          const {
            source,
            url,
            author,
            description,
            title,
            image,
            category,
            published_at,
          }: dataType = item.item;

          return (
            <View style={styles.box} className="">
              <View className="w-fit border-2 border-gray-800">
                {image && (
                  <View style={styles.imageBox} className="relative">
                    <Image
                      style={{
                        width: '100%',
                        height: 200,
                        objectFit: 'contain',
                      }}
                      source={{
                        uri: image ? image : undefined,
                      }}
                    />
                  </View>
                )}
                <Link href={url} asChild>
                  <Pressable className=" ">
                    {() => (
                      <View style={styles.textBody} className=" relative">
                        <Text
                          className=" absolute right-2  -top-8 mb-8"
                          onPress={() => add(title)}
                        >
                          <Ionicons
                            name="add-circle-sharp"
                            size={24}
                            color={color}
                          />
                        </Text>

                        <Text style={styles.newsSource}> Source: {source}</Text>
                        <Text style={styles.newsHeading}>{title}</Text>
                        <Text style={styles.desc}>{description}</Text>
                        <View style={styles.footer}>
                          {author && (
                            <Text style={styles.author}>Author: {author}</Text>
                          )}
                          {category && (
                            <Text style={styles.category}>
                              Category: {category}
                            </Text>
                          )}
                        </View>
                      </View>
                    )}
                  </Pressable>
                </Link>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    padding: 25,
  },
  div: {},
  wrapper: {
    width: '100%',
  },
  imageBox: {
    width: '100%',
  },
  textBody: {
    width: '100%',
    padding: 10,
  },
  newsSource: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  desc: {
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  author: {
    flexWrap: 'wrap',
    marginBottom: 2,
    fontSize: 15,
    fontWeight: 'bold',
  },
  category: {
    flexWrap: 'wrap',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
