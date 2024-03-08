import React  from "react";
import { Text,View,Image } from "react-native";
import {Card} from "react-native-paper";
import styled from "styled-components/native";
import CustomText from "../components/typography/text.component";
import {SvgXml} from "react-native-svg"
import star from "../../../assets/start";
import open from "../../../assets/open";
import UserSearch from '../components/UserSearch.components'
// const RestaurantCard = styled(Card)`
// background-color: ${(props) => props.theme.colors.bg.primary}
// `
// const RestaurantCardCover = styled(Card.Cover)`
// margin-bottom : 10px;
// padding:20px;
// `
// const Title = styled(CustomText)`
// font-family:${(props) => props.theme.fonts.body };
// font-size:${(props) => props.theme.fontSizes.body };
// padding-top:${(props)=> props.theme.space[3]};
// padding-left:${(props)=> props.theme.space[3]};
// padding-right:${(props)=> props.theme.space[3]};
// padding-bottom:${(props)=> props.theme.space[1]};
// color:${(props) => props.theme.colors.ui.primary}
// `
// const CardInnerSection = styled(View)`
//   display: flex;
//   flex-direction: row;
// `;
// const RatingContainer = styled(View)`
//   display: flex;
//   flex-direction: row;
//   margin-top: 20px;
//   flex-grow: 1;
// `;
// const RestaurantStatusContainer = styled(View)`
//   display: flex;
//   flex-direction: row;
//   flex-grow: 1;
//   justify-content: flex-end;
//   margin-top: 20px;
//   margin-right: 10px;
// `;

// const CustomImage = styled(Image)`
//   width: 15px;
//   height: 15px;
//   margin-left: 20px;
// `;


// const CardSection = styled(View)`
//   padding: 15px;
// `;
function RestaurantScreen (props){
// const {restaurant ={}} = props;
// const {
// photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
// rating=Array.from({length:5}),
// name = "some restaurant",
// isOpen = true,
// icon= "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",

// } = restaurant
return<>
<UserSearch/>
 </>
//     <RestaurantCard>
//         <RestaurantCardCover source={{uri:photos}}/>
//         <CardSection>

//         <Title variant="label" >{name}</Title>
//         <CardInnerSection>    
//         <RatingContainer>
//         {rating.map((singleRating) => {
//               return <SvgXml xml={star} width={20} height={20} />;
//             })}
//         </RatingContainer>

//         <RestaurantStatusContainer>
//         {/* {isOpen && <SvgXml xml={open} width={20} height={20} />} */}
//         <CustomImage source={{ uri: icon }} />

//         </RestaurantStatusContainer>
            
//              </CardInnerSection>
//         </CardSection>
//     </RestaurantCard>

}
export default RestaurantScreen;