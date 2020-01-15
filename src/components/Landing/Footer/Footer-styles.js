import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  background: #292d38;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .footer-top {
    display: flex;
    flex-direction: column;
    margin: 2rem 0 4rem 0;

    .cta-message {
      margin-bottom: 1.6rem;

      h2 {
        color: #efefef;
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }

  .footer-bottom {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1.6rem;
    color: #efefef;

    .footer-content {
      width: 20rem;
    }
  }

  .footer-icons {
    display: flex;
    justify-content: space-between;

    .footer-icon {
      opacity: 0.3;

      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  .footer-tribute {
    text-align: center;
  }
`;
