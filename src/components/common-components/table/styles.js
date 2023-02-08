import Pagination from '@mui/material/Pagination';
import styled, { keyframes } from 'styled-components';

const entranceTable = keyframes`
    0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const STable = styled.table`
  width: 100%;
  height: 250px;
  border-collapse: collapse;
  text-align: center;
  border-radius: 12px;
  box-shadow: 12px 12px rgba(15, 15, 15, 0.4);
  overflow: hidden;
  animation: ${entranceTable} 2s linear;
`;

export const STHead = styled.thead`
    position: sticky;
    z-index: 100;
    cursor: pointer;
`;

export const STHeadTR = styled.tr`
  background: linear-gradient(
    58deg,
    ${(props) => props.theme.colors.backgroundPrimary} 30%,
    ${(props) => props.theme.colors.backgroundSecondary} 55%
  );
`;

export const STH = styled.th`
  font-weight: normal;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  :not(:last-of-type) {
    border-right: 1px solid ${(props) => props.theme.colors.backgroundPrimary};
  }
  :first-of-type {
    width: 2%;
    white-space: nowrap;
  }
`;

export const STBody = styled.tbody``;

export const STBodyTR = styled.tr`
  background-color: ${(props) => props.theme.colors.text};
`;

export const STD = styled.td`
  padding: 3px;
  border: 1px solid ${(props) => props.theme.colors.backgroundPrimary};
  font-size: 14px;
`;
