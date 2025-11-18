import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Card = ( {logo, title, description}: {
    logo?: ReactElement;
    title: string;
    description: string;
} ) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="front">
            <h3 className="title"> {title} </h3>
          </div>
          <div className="back">
            <p className="description flex justify-center font-bold text-2xl mt-6">
                {description}
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 15rem;
    cursor: pointer;
  }

  .content {
    text-align: center;
    position: relative;
    transition: transform 0.6s ease-in-out;
    background-color: rgb(127, 204, 240);
    padding: 12em;
    transform-style: preserve-3d;
  }

  .card:hover .content {
    transform: rotateY(0.5turn);
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 2em;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  .title {
    margin-top: 100px;
    transform: translateZ(5rem);
    font-size: 2rem;
  }

  .subtitle {
    transform: translateZ(2rem);
  }

  .back {
    transform: rotateY(0.5turn);
    background-color: #009bff;
  }

  .description {
    transform: translateZ(3rem);
  }`;

export default Card;
