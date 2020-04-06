import styled from '@emotion/styled'

export const Div = styled.div`
box-sizing: border-box;
//  @media (max-width: 800px)
//  {
//  article{
//      width: 100%;
//  }
//  aside{
//      width: 100%;
//  }
//  }
`
export const Body = styled(Div)`
font-family: Verdana;
color: #1C1C1C;
`
export const Head = styled(Body)`
background-color: #2d49a6;
padding: 15px;
text-align:center;
color: #FFF;
`
export const Section = styled(Div)`
overflow:auto;
`
export const Article = styled.article`
box-sizing: border-box;
width: 100%;
padding: 0 20px;
float:left;
text-align:center;
background-color: #836FFF;
`
export const Aside = styled.aside`
box-sizing: border-box;
background-color: #4169E1;
width: 100%;
text-align: center;
float: left;
`
export const Footer = styled(Div)`
	background-color: #2d49a6;
	text-align: center;
	padding: 10px;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 15px;
`;

export const Textarea = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Td = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
`;
export const Th = styled.th`
  border: 1px solid black;
  border-collapse: collapse;
`;
export const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
`;

export const Cab = styled.th`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: left;
  color: white;
  background-color: #264696;
`;

export const Select = styled.select`
width: 185px;
height: 34px;
overflow: hidden;
background: papayawhip;
border: 1px solid #ccc;
`;