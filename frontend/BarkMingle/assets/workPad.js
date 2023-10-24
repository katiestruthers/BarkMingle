<TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Message", {profile: matchDetails})}> 
<View style={styles.card}>
  <View style={styles.left}>
    <Image style={styles.avatar} source={{uri: avatar}} />
    <View style={styles.text}>
      <Text style={styles.name}> {dogName} & Human Name</Text>
      <Text> Click to say hello!</Text>
    </View>
  </View>
</View>

<View>
  <TouchableOpacity style={styles.info} onPress={() => navigation.navigate("SwipedProfile", {profile: matchDetails})} >
    <FontAwesomeIcon icon={faCircleInfo} style={{color: "rgba(0, 0, 0, 0.9)",}} size={30} />
  </TouchableOpacity>
</View>
</TouchableOpacity>