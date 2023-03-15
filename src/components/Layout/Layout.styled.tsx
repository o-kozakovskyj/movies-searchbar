import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

export const AppContainer = styled(props => <Box component="div" {...props} />)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled(props => <Box component="header" {...props} />)`
  background-color: #fff;
  padding: 20px;
`;
export const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const MainSection = styled(props => (
  <Container component="main">
    <Grid container spacing={1} {...props} sx={{display: "flex", justifyContent: "center"}} />
  </Container>
))`
  margin-top: 0px;
`;

export const AsideSection = styled(props => <Grid item
  xs={2.2}
  component="aside"
  {...props}
/>
)`
  padding-left: 0 !important;

  @media (max-width: 780px) {
    display: none;
  }
`;

export const CenterSection = styled(props => <Grid item xs={9.6} {...props} />)`
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
`;
