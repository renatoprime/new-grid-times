import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>

      <DesktopHeader>
        <Side>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </Side>
        <Logo />
        <Side>
          <SubscribeWrapper>
            <Button>Subscribe</Button>
            <SubscriberLink href="">
              Already a subscriber?
            </SubscriberLink>
          </SubscribeWrapper>
        </Side>
      </DesktopHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopHeader = styled(MaxWidthWrapper)`
  display: none;
  align-items: baseline;
  margin-top: 16px;
  margin-bottom: 72px;
  color: var(--color-gray-900);

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const SubscribeWrapper = styled.div`
  width: max-content;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SubscriberLink = styled.a`
  text-decoration: underline;
  font-style: italic;
  font-size: ${14 / 16}rem;
`;

export default Header;
