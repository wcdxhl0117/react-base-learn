import styled from 'styled-components';

export const HomeWrapper = styled.div`
  .container{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #F9573F;
  }
  .container .wrap img{
      width: 100%;
      height: auto;
  }
  .rulePop{
    font-size: 0.28rem;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    color: #916414;
  }
  #content{
    width: 6.1rem;
    height: auto;
    margin: 0 auto;
    .topImg{
      width: 90%;
      height: auto;
      display: block;
      margin: 0 auto;
      img{
        width: 90%;
        height: auto;
        display: block;
        margin: 0 auto;
      }
    }
  }
  .btmImg{
    width: 100%;
    height: auto;
    margin-top: .4rem;
  }
  .btmWrap{
      position: fixed;
      bottom: 0;
      left: 0;
      font-size: 0.3rem;
      width: 100%;
      // height: 5.16rem;
      height: 2.36rem;
      background: #ffffff;
      border-top-left-radius: 0.20rem;
      border-top-right-radius: 0.20rem;
      padding-top: 0.10rem;
      .comBtn{
          margin: 0.30rem auto;
          height: 0.96rem;
          line-height: 1.00rem;
          width: 6.90rem;
          border: 0.02rem solid #999999;
          color: #999999;
          text-align: center;
          border-radius: 0.10rem;
          font-size: 0.34rem;
      }
      #toParent{
          height: 1.00rem;
          line-height: 1.00rem;
          background: #3BD512;
          color: #ffffff;
          border: none;
      }
      .topTitle{
        height: 0.76rem;
        line-height: 0.96rem;
        font-size: 0.30rem;
        color: #000;
        font-weight: 900;
        text-align: center;
      }
      .tip{
        width: 100%;
        height: 0.40rem;
        line-height: 0.40rem;
        text-align: center;
        font-size: 0.30rem;
        color: #999999;
      }
  }
  .minH{
      width: 0;
      height: 2.36rem;
      position: absolute;
      top: -1.60rem;
  }
  .maxH{
      width: 0;
      height: 5.16rem;
      position: absolute;
      top: -5.16rem;
  }
`;
