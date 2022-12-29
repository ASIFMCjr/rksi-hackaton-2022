import styled from 'styled-components';

const PostView = styled.View`
padding: 10px;
width: 300px;
height: 80px;
border-color:'#989898';
border-width:1.5px;
border-radius: 17px;
color:'#999898';
`;
const PostTitle = styled.Text`
font-weight: 600;
font-size: 15px;
line-height: 20px;
color: #000000;
`;

const PostText = styled.Text`
font-weight: 600;
font-size: 12px;
line-height: 16px;
color: #999898;
`;


const PostTime = styled.Text`
font-weight: 600;
font-size: 12px;
line-height: 16px;
color: #999898;
`;


const PostDetails = styled.View`
justify-content: center;
align-items: center;
flex:1;

`;

export const Post = ({obj}) => {
    return (
    <PostView>
    <PostDetails>
      <PostTitle>{obj.name}</PostTitle>
      <PostText>{obj.discription}</PostText>
      <PostTime>{obj.time}</PostTime>
    </PostDetails>
  </PostView>
  );
}