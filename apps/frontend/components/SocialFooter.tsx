import { Facebook } from '@/icons/Facebook';
import { Instagram } from '@/icons/Instagram';
import { Linkedin } from '@/icons/Linkedin';
import { Twitter } from '@/icons/Twitter';
import { Whatsapp } from '@/icons/Whatsapp';
import styled from 'styled-components';

const SocialFooter = () => {
    return (
        <StyledWrapper>
            <div className="card">

                <a href="https://www.facebook.com/share/1Gr11B81EE" target='_blank' className="socialContainer containerTwo">
                    <Facebook className='size-7' />
                </a>

                <a href="https://www.instagram.com/bigwig.social?igsh=cnpzZXk4YzZmeGZu" target='_blank' className="socialContainer containerOne">
                  <Instagram className='size-5'/>
                </a>

                <a href="https://www.linkedin.com/company/bigwig-social" target='_blank' className="socialContainer containerThree">
                    <Linkedin className='size-5' />
                </a>

                <a href="https://wa.me/919131249316" target='_blank' className="socialContainer containerFour">
                    <Whatsapp className='size-5' />
                </a>

                {/* <a href="https://wa.me/919109461901" rel="noopener noreferrer" target='_blank' className="socialContainer containerFour">
                    <Twitter className='size-5' />
                </a> */}

            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 25px;
    gap: 20px;
  }

  /* for all social containers*/
  .socialContainer {
    width: 52px;
    height: 52px;
    background-color: #1E2128FF;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .3s;
  }
  /* instagram*/
  .containerOne:hover {
    background-color: #d62976;
    transition-duration: .3s;
  }
  /* Facebook */
  .containerTwo:hover {
    background-color: blue;
    transition-duration: .3s;
  }
  /* linkedin*/
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: .3s;
  }
  /* whatsapp*/
  .containerFour:hover {
    background-color: lightgreen;
    color: black;
    transition-duration: .3s;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: .3s;
  }

  .socialSvg {
    width: 17px;
  }

  .socialSvg path {
    fill: rgb(255, 255, 255);
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }`;

export default SocialFooter;