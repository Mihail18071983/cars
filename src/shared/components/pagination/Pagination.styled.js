import { styled } from "styled-components";

export const PaginatioContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const item = styled.li`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: transparent;
`;

export const link = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-size: 16px;
  line-height: 15px;
  color: #fff;
  cursor: pointer;
`;

export const prevLink = styled.a`
  @extend .link;

  &[aria-disabled="true"] {
    opacity: 0.2;
    cursor: default;
  }

  &::after {
    transform: translateY(-2px);
    content: url(../../../images/icons/arrow-left.svg);
  }
`;

export const nextLink = styled.a`
  @extend .link;

  &[aria-disabled="true"] {
    opacity: 0.2;
    cursor: default;
  }

  &::after {
    transform: translateY(-2px);
    content: url(../../../images/icons/arrow-right.svg);
  }
`;

export const active = styled(item)`
  @extend .item;
  background-color: #0000ff;
  color: #fff;
  border-color: #f2d2f2;
`;
