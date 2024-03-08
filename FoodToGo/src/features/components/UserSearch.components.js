import React from 'react';
import { Text,View } from 'react-native';
import { Searchbar } from 'react-native-paper';
//  import styled from 'styled-components/native';


function UserSearch ({isFavoriteToggle =false}) {
    const [searchQuery, setSearchQuery] = React.useState('');
// const searchContainer = styled(View)`
// padding: "50px",
// backgroundColor:'white'
// `
    return (
      <View>


      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery} icon={isFavoriteToggle ?"heart":"heart-outline"}
        />
        <Text>{searchQuery}</Text>
        </View>
        // </searchContainer>
        // </searchContainer>
    );
  
}
export default UserSearch;