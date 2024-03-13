import React from "react";
import { Text,View,Image } from "react-native";
import {Card} from "react-native-paper";
import styled from "styled-components/native";
import CustomText from "../typography/text.component";
// import CustomText from "../components/typography/text.component";
import {SvgXml} from "react-native-svg"
import star from "../../../../assets/start";
import open from "../../../../assets/open";
const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
margin-bottom:25px
`
const RestaurantCardCover = styled(Card.Cover)`
margin-bottom : 10px;
padding:12px;
`
const Title = styled(CustomText)``
// font-family:${(props) => props.theme.fonts.body };
// font-size:${(props) => props.theme.fontSizes.body };
// padding-top:${(props)=> props.theme.space[3]};
// padding-left:${(props)=> props.theme.space[3]};
// padding-right:${(props)=> props.theme.space[3]};
// padding-bottom:${(props)=> props.theme.space[1]};
// color:${(props) => props.theme.colors.ui.primary}
const CardInnerSection = styled(View)`
  display: flex;
  flex-direction: row;
`;
const RatingContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  flex-grow: 1;
`;
const RestaurantStatusContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 10px;
`;

const CustomImage = styled(Image)`
  width: 15px;
  height: 15px;
  margin-left: 20px;
`;


const CardSection = styled(View)`
  padding: 15px;
`;
function CustomRestaurantCard(props){
    const {restaurant ={}} = props;
    const {
    photos =[ "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
    rating=1,
    name = "some restaurant",
    isOpenNow = true,
    isClosedTemporarily = true,
     icon= "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
     
  } = restaurant;

  const ratingArray=  Array.from(new Array(Math.floor(rating)));
  // const ratingArray=  Array.from(rating);
    return<>
        <RestaurantCard>
            <RestaurantCardCover source={{uri: photos}}/>
            <CardSection>
    
            <Title variant="label" >{name}</Title>
            <CardInnerSection>    
            <RatingContainer>
    {ratingArray.map((singleRating, index) => (
      <Text key={index}>
        <SvgXml xml={star} width={20} height={20} />
        {singleRating}
      </Text>
    ))}
  </RatingContainer>
    
            <RestaurantStatusContainer>
              {isClosedTemporarily && 

                <Title variant="caption" style={{color:"red"}}> 
CLOSED TEMPORARILY
               </Title>
              }
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
       {icon &&     <CustomImage source={{ uri: icon}} />}
    
            </RestaurantStatusContainer>
                
                 </CardInnerSection>
            </CardSection>
        </RestaurantCard>
    </>
    

}
export default CustomRestaurantCard;