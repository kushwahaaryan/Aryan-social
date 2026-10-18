
import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, StatusBar
} from 'react-native';

export default function App() {
  const [tab, setTab] = useState('Home');
  const [liked, setLiked] = useState({});

  const posts = [
    { id: 1, name: 'aryan_official', emoji: '🌄',
      caption: 'Welcome to Aryan Social ❤️' },
    { id: 2, name: 'friend_001', emoji: '🏍️',
      caption: 'Life is beautiful ✨' },
    { id: 3, name: 'creator_007', emoji: '🌆',
      caption: 'Create memories, not excuses 🔥' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.logo}>Aryan Social</Text>
        <Text style={styles.headerIcons}>♡   ✉</Text>
      </View>

      <View style={styles.tabs}>
        {['Home', 'Reels', 'Profile'].map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => setTab(item)}>
            <Text style={[
              styles.tabText,
              tab === item && styles.activeTab
            ]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {tab === 'Home' ? (
        <ScrollView>
          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.stories}>
            {['Your story', 'Aryan', 'Friend 1',
              'Friend 2', 'Creator'].map((name, i) => (
              <View style={styles.story} key={name}>
                <View style={styles.storyCircle}>
                  <Text style={styles.storyEmoji}>
                    {i === 0 ? '＋' : '😊'}
                  </Text>
                </View>
                <Text style={styles.storyName}>{name}</Text>
              </View>
            ))}
          </ScrollView>

          {posts.map(post => (
            <View style={styles.post} key={post.id}>
              <Text style={styles.username}>
                👤  {post.name}
              </Text>
              <View style={styles.photo}>
                <Text style={styles.photoEmoji}>
                  {post.emoji}
                </Text>
                <Text style={styles.photoLabel}>
                  Aryan Social
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity
                  onPress={() => setLiked(old => ({
                    ...old,
                    [post.id]: !old[post.id]
                  }))}>
                  <Text style={styles.actionText}>
                    {liked[post.id] ? '❤️' : '♡'}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.actionText}>💬</Text>
                <Text style={styles.actionText}>➤</Text>
              </View>
              <Text style={styles.caption}>
                {liked[post.id] ? '❤️ Liked  ·  ' : ''}
                {post.caption}
              </Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.otherPage}>
          <Text style={styles.pageTitle}>
            {tab === 'Reels' ? '🎬 Reels' : '👤 Aryan Profile'}
          </Text>
          <Text style={styles.pageText}>
            {tab === 'Reels'
              ? 'Short videos coming soon!'
              : 'Welcome to your profile!'}
          </Text>
        </View>
      )}

      <View style={styles.bottom}>
        {[
          ['Home', '⌂'],
          ['Reels', '▶'],
          ['Create', '＋'],
          ['Profile', '☺']
        ].map(([name, symbol]) => (
          <TouchableOpacity
            key={name}
            style={styles.bottomItem}
            onPress={() =>
              setTab(name === 'Create' ? 'Profile' : name)
            }>
            <Text style={styles.bottomIcon}>{symbol}</Text>
            <Text style={styles.bottomLabel}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    padding: 16, paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: { fontSize: 25, fontWeight: 'bold', color: '#7028e4' },
  headerIcons: { fontSize: 24 },
  tabs: {
    flexDirection: 'row', justifyContent: 'space-around',
    padding: 12, borderBottomWidth: 1, borderColor: '#eee'
  },
  tabText: { color: '#777', fontSize: 15 },
  activeTab: { color: '#7028e4', fontWeight: 'bold' },
  stories: { paddingVertical: 14, maxHeight: 112 },
  story: { alignItems: 'center', marginHorizontal: 10 },
  storyCircle: {
    width: 58, height: 58, borderRadius: 29,
    backgroundColor: '#eee0ff', borderWidth: 2,
    borderColor: '#a56aff', alignItems: 'center',
    justifyContent: 'center'
  },
  storyEmoji: { fontSize: 27 },
  storyName: { fontSize: 11, marginTop: 5 },
  post: { marginBottom: 18 },
  username: {
    padding: 12, fontSize: 14, fontWeight: 'bold'
  },
  photo: {
    height: 250, backgroundColor: '#eee5ff',
    alignItems: 'center', justifyContent: 'center'
  },
  photoEmoji: { fontSize: 95 },
  photoLabel: {
    color: '#7028e4', fontSize: 17, fontWeight: 'bold'
  },
  actions: { flexDirection: 'row', padding: 10, gap: 18 },
  actionText: { fontSize: 27 },
  caption: { paddingHorizontal: 12, fontSize: 14 },
  otherPage: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  pageTitle: { fontSize: 24, fontWeight: 'bold' },
  pageText: { marginTop: 12, color: '#777' },
  bottom: {
    flexDirection: 'row', justifyContent: 'space-around',
    paddingVertical: 10, borderTopWidth: 1,
    borderColor: '#eee', backgroundColor: '#fff'
  },
  bottomItem: { alignItems: 'center' },
  bottomIcon: { fontSize: 24 },
  bottomLabel: { fontSize: 10, color: '#555' }
});
