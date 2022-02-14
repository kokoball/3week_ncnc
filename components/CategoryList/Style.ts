import styled from 'styled-components';
import { flexbox } from 'styles/commonStyle';

export const CategoryContainer = styled.div`
  width: 375px;
  margin: 0 auto;
  ${flexbox({ jc: 'start' })};
  flex-wrap: wrap;
  gap: 2px;
`;
