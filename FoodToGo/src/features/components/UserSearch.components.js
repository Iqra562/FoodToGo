import React, { useContext } from 'react';
import { Text,View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../services/locations/location.context';
//  import styled from 'styled-components/native';


function UserSearch ({isFavoriteToggle =false}) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const {search} = useContext(LocationContext)
// const searchContainer = styled(View)`
// padding: "50px",
// backgroundColor:'white'
// `

const onChangeSearch = (query)=>setSearchQuery(query)
    return (  
      <View>


      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery} icon={isFavoriteToggle ?"heart":"heart-outline"}
        onSubmitEditing={()=>{
            // console.log(searchQuery);
            search(searchQuery)
        }}
        />
        {/* <Text>{searchQuery}</Text> */}
        </View>
        // </searchContainer>
        // </searchContainer>
    );
  
}
export default UserSearch;