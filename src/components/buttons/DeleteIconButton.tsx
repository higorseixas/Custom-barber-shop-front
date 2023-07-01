import React from 'react';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styled from 'styled-components';

interface DeleteIconButtonProps {
  onClick: () => void;
}

  const StyledIconButton = styled(IconButton)`
    &:hover {
      color: rgba(243, 41, 6, 0.7);
    }
  `;

const DeleteIconButton: React.FC<DeleteIconButtonProps> = ({ onClick }) => {
  return (
    <StyledIconButton onClick={onClick}>
      <DeleteForeverIcon />
      </StyledIconButton>
  );
};

export default DeleteIconButton;
