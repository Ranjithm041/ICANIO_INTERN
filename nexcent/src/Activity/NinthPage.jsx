import * as React from 'react';

import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import image18 from '../Activity/Images/image18.png';
import image19 from '../Activity/Images/image19.png';
import image20 from '../Activity/Images/image20.png';
import Frame13 from '../Activity/Images/Frame13.png';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';


const NewCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 366px;
  width: 368px;

  @media (max-width: 768px) {
    height: 300px;
    width: 320px;
    margin-bottom:120px;
  }

  @media (max-width: 480px) {
    height: 280px;
    width: 280px;
  }
`;

const NewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  height: 306px !important;
  width: 350px !important;

  @media (max-width: 768px) {
    height: 280px !important;
    width: 300px !important;
  }

  @media (max-width: 480px) {
    height: 260px !important;
    width: 260px !important;
  }
`;

const NewCardContent = styled.div`
  text-align: center;
  background-color: #F5F7FA;
  border-radius: 8px;
  padding: 16px;
  height: 176px;
  width: 300px;
  margin-top: -50px;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 150px;
    width: 260px;
    margin-top: -40px;
  }

  @media (max-width: 480px) {
    height: 130px;
    width: 220px;
    margin-top: -30px;
    
  }
`;

function NinthPage() {
    

    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'40px'} marginBottom={'100px'} flexWrap="wrap">
      <NewCardContainer>
        <NewCard>
          <img src={image18} style={{width:'350px', height:'306px'}} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize={'20px'} marginBottom={'20px'} sx={{color:'#575555d5'}}>
              Creating Streamlined Safeguarding Processes with OneRen
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>

      <NewCardContainer>
        <NewCard>
          <img src={image19} style={{width:'350px', height:'306px'}} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize={'20px'} marginBottom={'20px'} sx={{color:'#575555d5'}}>
              Creating Streamlined Safeguarding Processes with OneRen
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>

      <NewCardContainer>
        <NewCard>
          <img src={image20} style={{width:'350px', height:'306px'}} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize={'20px'} marginBottom={'20px'} sx={{color:'#575555d5'}}>
              Creating Streamlined Safeguarding Processes with OneRen
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>
    </Box>




    );
}

export default NinthPage;
