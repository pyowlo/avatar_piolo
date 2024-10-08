import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import getStyles from './styles';
import Avatar from './Avatar';

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeSwitch = () => {
    setDarkMode(!darkMode);
    console.log('Dark mode:', darkMode);
  };

  const styles = getStyles(darkMode); // Pass darkMode state to getStyles

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'left', marginTop: 20}}>
      <Avatar />
    </View>
      <View style={styles.header}>
        <Text style={styles.username}>Melvin I. Piolo Jr.</Text>
        <Text style={styles.status}>Joined 1 Month Ago</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Manage user</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Dark Mode </Text>
            <Switch
            value={darkMode}
            onValueChange={handleDarkModeSwitch}
            trackColor={{ true: '#333', false: '#ccc' }}
            thumbColor={darkMode ? '#fff' : '#007bff'}
            style={styles.switch}
          />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;