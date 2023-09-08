import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledThead,
  StyledHeadTr,
  StyledTh,
  StyledTbody,
  StyledBodyTr,
  StyledTd,
} from './TransactionHistory.Styled';

export const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <StyledTable>
      <StyledThead>
        <StyledHeadTr>
          <StyledTh>Type</StyledTh>
          <StyledTh>Amount</StyledTh>
          <StyledTh>Currency</StyledTh>
        </StyledHeadTr>
      </StyledThead>

      <StyledTbody>
        {items.map((item, idx) => (
          <StyledBodyTr $idx={idx} key={item.id}>
            <StyledTd>{item.type}</StyledTd>
            <StyledTd>{item.amount}</StyledTd>
            <StyledTd>{item.currency}</StyledTd>
          </StyledBodyTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
