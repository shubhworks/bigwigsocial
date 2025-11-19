import React from 'react';
import styled from 'styled-components';
import { ReactElement } from "react";

interface AboutHeroCardProps {
    logo: ReactElement;
    title: string;
    description: string;
}

const AboutHeroCard = ({ logo, title, description }: AboutHeroCardProps) => {
    return (
        <StyledWrapper>
            <div className="card cursor-pointer">
                <div className="content">
                    {/* Front Side - Clean Professional Design */}
                    <div className="front">
                        <div className="front-content">
                            <div className="logo-container">
                                {logo}
                            </div>
                            <h3 className="title">{title}</h3>
                            <div className="divider"></div>
                            <p className="preview-text">
                                Click to learn more about our {title.toLowerCase()} services...
                            </p>
                            <div className="hover-indicator">
                                <span>⟳</span>
                            </div>
                        </div>
                    </div>

                    {/* Back Side - Detailed Description */}
                    <div className="back">
                        <div className="back-content">
                            <div className="back-logo">
                                {logo}
                            </div>
                            <h4 className="back-title">{title}</h4>
                            <div className="back-divider"></div>
                            <p className="back-description">
                                {description}
                            </p>
                            <div className="back-indicator">
                                <span>⟳</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 100%;
    height: 320px;
    perspective: 1000px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 600ms cubic-bezier(0.4, 0.2, 0.2, 1);
    border-radius: 20px;
    position: relative;
  }

  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 20px;
    overflow: hidden;
    padding: 24px;
    box-sizing: border-box;
  }

  /* Front Side Styling */
  .front {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .front-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .logo-container {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 8px;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0;
    line-height: 1.2;
  }

  .divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
    border-radius: 2px;
    margin: 8px 0;
  }

  .preview-text {
    color: #718096;
    font-size: 0.9rem;
    line-height: 1.4;
    margin: 0;
  }

  .hover-indicator {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    background: var(--color-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  /* Back Side Styling */
  .back {
    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .back-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    color: white;
    height: 100%;
  }

  .back-logo {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    backdrop-filter: blur(10px);
  }

  .back-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: white;
  }

  .back-divider {
    width: 40px;
    height: 2px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 1px;
    margin: 4px 0;
  }

  .back-description {
    font-size: 0.85rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    overflow-y: auto;
    max-height: 120px;
    padding-right: 8px;
    
    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
    }
  }

  .back-indicator {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    backdrop-filter: blur(10px);
  }

  /* Hover Effects */
  .card:hover .content {
    transform: rotateY(180deg);
  }

  .card:hover .hover-indicator {
    opacity: 1;
    transform: scale(1.1);
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .card {
      height: 280px;
    }

    .front, .back {
      padding: 20px;
    }

    .logo-container {
      width: 60px;
      height: 60px;
    }

    .title {
      font-size: 1.25rem;
    }

    .back-title {
      font-size: 1.1rem;
    }

    .back-description {
      font-size: 0.8rem;
      max-height: 100px;
    }
  }

  @media (max-width: 480px) {
    .card {
      height: 260px;
    }

    .front, .back {
      padding: 16px;
    }
  }
`;

export default AboutHeroCard;