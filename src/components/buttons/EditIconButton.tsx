import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import styled from 'styled-components';

interface EditIconButtonProps {
  onClick: () => void;
}

const StyledIconButton = styled(IconButton)`
  &:hover {
    color: rgba(108, 99, 255, 0.7);
  }
`;

const EditIconButton: React.FC<EditIconButtonProps> = ({ onClick }) => {
  return (
    <StyledIconButton onClick={onClick}>
      <EditIcon />
    </StyledIconButton>
  );
};

export default EditIconButton;
