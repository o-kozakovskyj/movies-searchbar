import { Star, StarBorder } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import styled from 'styled-components';

const FavoriteCheckbox = styled(props => {
  return (
    <Checkbox
      icon={<StarBorder/>}
      checkedIcon={<Star htmlColor={"#FFFF00"} />}
      onClick={e => {
        e.stopPropagation();
        if (props.onClick) {
          props.onClick(e);
        }
      }}
      {...props}
    />
  );
})`
  &.Mui-checked {
    color:#FFFF00;

    &:hover {
      background-color: #FDDA0D;
    }
  }
`;
export default FavoriteCheckbox;
