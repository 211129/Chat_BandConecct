import {StyleSheet, View, Text, Image} from 'react-native';

type ChatItemTypeProps = {
  profileImageUrl: string;
  name: string;
  message: string;
  datetime: string;
  unread?: number;
};

const ChatItem = ({
  profileImageUrl,
  name,
  message,
  datetime: time,
  unread,
}: ChatItemTypeProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: profileImageUrl}} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {message}
        </Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
        {unread && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{unread}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 8,
  },
  message: {
    color: '#808080',
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  time: {
    color: '#808080',
  },
  unreadBadge: {
    backgroundColor: '#1E68D7',
    borderRadius: 15,
    paddingHorizontal: 6,
    marginTop: 4,
  },
  unreadText: {
    color: '#ffffff',
  },
});

export default ChatItem;
